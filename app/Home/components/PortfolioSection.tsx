"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { GoArrowDown } from "react-icons/go";
import { IoClose } from "react-icons/io5";

// Category configuration
const MODAL_CATEGORIES = ["FIGMA DESIGN", "LOGO DESIGN", "BRANDING", "ILLUSTRATION", "PRINT"];

const ROUTE_CATEGORIES = [
  "WEB DEVELOPMENT",
  "SHOPIFY",
  "WORDPRESS",
];

const categories = [...ROUTE_CATEGORIES, ...MODAL_CATEGORIES];

const FIGMA_CARD_HEIGHT = 500;
const FIGMA_VISIBLE_HEIGHT = Math.floor(FIGMA_CARD_HEIGHT / 2) + 100;

interface Post {
  id: number;
  slug: string;
  title: { rendered: string };
  acf?: {
    project_image?: { url: string };
    project_url?: string;
    catogary?: string | string[];
  };
}

// Enhanced URL cleaning function
const cleanUrl = (url: string): string => {
  if (!url) return "";
  
  let cleaned = String(url);
  
  // Remove escaped backslash sequences (\\a, \\n, \\t, etc.)
  cleaned = cleaned.replace(/\\[a-z]/gi, '');
  
  // Remove all control characters (including \a, \n, \r, \t)
  cleaned = cleaned.replace(/[\x00-\x1F\x7F-\x9F]/g, '');
  
  // Remove all whitespace characters
  cleaned = cleaned.replace(/\s+/g, '');
  
  // Trim any remaining whitespace
  cleaned = cleaned.trim();
  
  return cleaned;
};

// Validate that a URL is safe to use
const isValidUrl = (url: string): boolean => {
  if (!url) return false;
  
  try {
    // Check for malformed characters
    if (/[\x00-\x1F\x7F-\x9F]/.test(url)) return false;
    if (/\\[a-z]/gi.test(url)) return false;
    
    // Check if it's a valid URL format
    const cleaned = cleanUrl(url);
    if (!cleaned) return false;
    
    // Must start with http, https, or /
    if (!cleaned.startsWith('http') && !cleaned.startsWith('/')) return false;
    
    return true;
  } catch {
    return false;
  }
};

// Normalize image src helper
const normalizeSrc = (src?: string): string => {
  if (!src) return "/Home/Rectangle_33.webp";
  
  const cleanedSrc = cleanUrl(src);
  
  if (!cleanedSrc || !isValidUrl(cleanedSrc)) {
    return "/Home/Rectangle_33.webp";
  }
  
  // Handle protocol-relative URLs
  if (cleanedSrc.startsWith("//")) return `https:${cleanedSrc}`;
  
  // Force HTTPS
  if (cleanedSrc.startsWith("http://")) return cleanedSrc.replace("http://", "https://");
  
  return cleanedSrc;
};

export default function PortfolioWall() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("WEB DEVELOPMENT");
  const [hoveredFigmaCard, setHoveredFigmaCard] = useState<number | null>(null);
  const [scrollOffsets, setScrollOffsets] = useState<Record<number, number>>({});
  const imgRefs = useRef<Record<number, HTMLImageElement | null>>({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState<Post | null>(null);
  const [itemsToShow, setItemsToShow] = useState(6);
  const [loading, setLoading] = useState(true);
  const [fetchTimedOut, setFetchTimedOut] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [dataReady, setDataReady] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  const filteredPosts = posts.filter((post) => {
    const cat = post.acf?.catogary;
    if (!cat) return false;
    if (Array.isArray(cat)) {
      return cat.some(
        (c) => c.toLowerCase() === selectedCategory.toLowerCase(),
      );
    }
    return cat.toLowerCase() === selectedCategory.toLowerCase();
  });

  // Fetch posts with proper validation
  const fetchPosts = async (timeoutMs = 15000) => {
    setLoading(true);
    setDataReady(false);
    setFetchTimedOut(false);
    setFetchError(null);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const ts = Date.now();
      const res = await fetch(`/api/posts?ts=${ts}`, {
        cache: "no-store",
        signal: controller.signal,
      });
      
      if (!res.ok) {
        setFetchError(`Server responded with ${res.status} ${res.statusText}`);
        setPosts([]);
        setLoading(false);
        return;
      }
      
      const data = await res.json();
      
      // Clean and validate all posts
      const projectPosts = data
        .filter((post: Post) => {
          // Must have required fields
          if (!post.slug || !post.acf?.project_image?.url) return false;
          
          // URL must be valid
          return isValidUrl(post.acf.project_image.url);
        })
        .map((post: Post) => {
          if (post.acf?.project_image?.url) {
            const cleanedUrl = cleanUrl(post.acf.project_image.url);
            
            return {
              ...post,
              acf: {
                ...post.acf,
                project_image: {
                  url: cleanedUrl,
                },
              },
            };
          }
          return post;
        })
        .filter(Boolean);
      
      // Wait a moment to ensure everything is cleaned
      await new Promise(resolve => setTimeout(resolve, 200));
      
      setPosts(projectPosts);
      setDataReady(true);
      
    } catch (err: any) {
      if (err && err.name === "AbortError") {
        setFetchTimedOut(true);
      } else {
        console.error("Error fetching posts", err);
        setFetchError("An unexpected error occurred while fetching projects.");
      }
    } finally {
      clearTimeout(timeoutId);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const isFigmaCard = (post: Post) => {
    const cat = post.acf?.catogary;
    const matches = (s?: string) =>
      !!s &&
      (s.toLowerCase() === "figma design" || s.toLowerCase() === "print");
    if (Array.isArray(cat)) {
      return cat.some((c) => matches(c));
    }
    return matches(cat as string | undefined);
  };

  const handleImageLoad = (
    postId: number,
    visibleHeight = FIGMA_CARD_HEIGHT,
  ) => {
    const img = imgRefs.current[postId];
    if (img) {
      setTimeout(() => {
        const displayedHeight = img.offsetHeight;
        const maxScroll = Math.max(displayedHeight - visibleHeight, 0);
        setScrollOffsets((prev) => ({ ...prev, [postId]: maxScroll }));
      }, 10);
    }
  };

  const handleCardClick = (post: Post) => {
    if (
      MODAL_CATEGORIES.some((cat) =>
        (Array.isArray(post.acf?.catogary)
          ? post.acf?.catogary
          : [post.acf?.catogary]
        )
          ?.map((c) => c?.toLowerCase())
          .includes(cat.toLowerCase()),
      )
    ) {
      setModalProject(post);
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalProject(null);
  };

  const router = useRouter();

  const handleNavigateOrOpen = (post: Post) => {
    const isModal = MODAL_CATEGORIES.some((cat) =>
      (Array.isArray(post.acf?.catogary)
        ? post.acf?.catogary
        : [post.acf?.catogary]
      )
        ?.map((c) => c?.toLowerCase())
        .includes(cat.toLowerCase()),
    );

    if (isModal) {
      handleCardClick(post);
      return;
    }

    // Show loading state and add delay before navigation
    setIsNavigating(true);
    
    setTimeout(() => {
      try {
        router.push(`/projects/${post.slug}`);
      } catch (e) {
        console.error("Navigation error", e);
        setIsNavigating(false);
      }
    }, 200);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (modalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  // Don't render content until data is ready and validated
  const shouldRenderContent = dataReady && !loading;

  return (
    <>
      {/* Navigation Loading Overlay */}
      {isNavigating && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <svg
            className="animate-spin h-12 w-12 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        </div>
      )}
      
      <section className="hidden md:block relative mt-25 my-20 max-[1250px]:px-4">
        {/* Heading */}
        <p className="text-[#4C8C74] text-center font-medium mb-3 text-sm sm:text-base">
          Our Portfolio
        </p>
        <h2 className="text-white text-center font-semibold text-3xl sm:text-4xl md:text-5xl leading-[1.3] mb-20 space-y-2">
          Proven Result,
          <br />
          Stunning websites
        </h2>

        {/* Category filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-[8px] border cursor-pointer text-sm transition ${
                selectedCategory === cat
                  ? "border-yellow-400 text-yellow-400 bg-yellow-400/10"
                  : "text-gray-400 border-gray-600 hover:border-yellow-400 hover:text-yellow-400"
              }`}
              aria-pressed={selectedCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main Container */}
        <div className="max-w-7xl mx-auto flex justify-center">
          {loading || !shouldRenderContent ? (
            <div className="py-24 flex items-center justify-center">
              <svg
                className="animate-spin h-12 w-12 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-label="Loading"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            </div>
          ) : fetchTimedOut ? (
            <div className="py-24 flex flex-col items-center justify-center text-center">
              <p className="text-white mb-4">
                Session timed out — please retry.
              </p>
              <button
                onClick={() => fetchPosts()}
                className="px-4 py-2 rounded-full text-white bg-white/8 backdrop-blur-md border border-white/20 hover:bg-white/12 transition-shadow duration-150 shadow-lg"
              >
                Retry
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 max-[1250px]:grid-cols-1 gap-20">
              {/* Portfolio Cards */}
              {filteredPosts
                .slice(0, itemsToShow)
                .map((post: Post) => {
                  const image = post.acf?.project_image?.url || "/Home/Rectangle_33.webp";
                  const title = post.title?.rendered || post.slug;
                  const safeImageSrc = normalizeSrc(image);
                  const cat = post.acf?.catogary;
                  const categoryLabel = Array.isArray(cat) ? cat[0] : cat || "";

                  const isFlexible =
                    isFigmaCard(post) ||
                    MODAL_CATEGORIES.some((cat) =>
                      (Array.isArray(post.acf?.catogary)
                        ? post.acf?.catogary
                        : [post.acf?.catogary]
                      )
                        ?.map((c) => c?.toLowerCase())
                        .includes(cat.toLowerCase()),
                    );
                  const isFigma = isFigmaCard(post);
                  const compactCategories = [
                    "logo design",
                    "branding",
                    "illustration",
                  ];
                  const isCompact = (
                    Array.isArray(post.acf?.catogary)
                      ? post.acf?.catogary
                      : [post.acf?.catogary]
                  )
                    ?.map((c) => c?.toLowerCase())
                    .some((c) => compactCategories.includes(c || ""));

                  return (
                    <div
                      key={post.id}
                      className={
                        isCompact
                          ? "w-[380px] h-[370px] relative group"
                          : isFigma
                            ? "w-[430px] relative group"
                            : isFlexible
                              ? "relative group"
                              : "w-[480px] h-[460px] relative group"
                      }
                      role="link"
                      tabIndex={0}
                      onClick={() => handleNavigateOrOpen(post)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleNavigateOrOpen(post);
                        }
                      }}
                    >
                      <div
                        className="rounded-xl p-4 overflow-hidden shadow-lg transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 flex flex-col"
                        style={{
                          borderRadius: "30px",
                          background: "transparent",
                        }}
                      >
                        <div
                          className={
                            isFigma
                              ? "overflow-hidden rounded-md"
                              : isCompact
                                ? "overflow-hidden rounded-md h-[270px]"
                                : isFlexible
                                  ? "overflow-hidden rounded-md"
                                  : "overflow-hidden rounded-md h-[350px]"
                          }
                          style={
                            isFigma
                              ? { height: `${FIGMA_VISIBLE_HEIGHT}px` }
                              : undefined
                          }
                        >
                          {isFigma ? (
                            <img
                              ref={(el) => {
                                if (el) imgRefs.current[post.id] = el;
                              }}
                              src={safeImageSrc}
                              alt={title}
                              onLoad={() =>
                                handleImageLoad(post.id, FIGMA_VISIBLE_HEIGHT)
                              }
                              className="w-full block will-change-transform rounded-3xl"
                              style={{
                                transform:
                                  hoveredFigmaCard === post.id
                                    ? `translateY(-${scrollOffsets[post.id] || 0}px)`
                                    : "translateY(0)",
                                transition: `transform ${Math.max(800, (scrollOffsets[post.id] || 0) * 2)}ms linear`,
                              }}
                              onError={(e) => {
                                const target = e.currentTarget as HTMLImageElement;
                                if (
                                  target &&
                                  target.src.indexOf("/Home/Rectangle_33.webp") === -1
                                ) {
                                  target.src = "/Home/Rectangle_33.webp";
                                }
                              }}
                              onMouseEnter={() => setHoveredFigmaCard(post.id)}
                              onMouseLeave={() => setHoveredFigmaCard(null)}
                            />
                          ) : (
                            <img
                              src={safeImageSrc}
                              alt={title}
                              className={
                                isFlexible
                                  ? "w-auto h-auto object-contain transform transition-transform duration-500 ease-out group-hover:scale-105 will-change-transform rounded-3xl"
                                  : "w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-105 will-change-transform rounded-3xl"
                              }
                              onError={(e) => {
                                const target = e.currentTarget as HTMLImageElement;
                                if (
                                  target &&
                                  target.src.indexOf("/Home/Rectangle_33.webp") === -1
                                ) {
                                  target.src = "/Home/Rectangle_33.webp";
                                }
                              }}
                            />
                          )}
                        </div>

                        <div className="mt-2 flex-1 flex flex-col justify-start overflow-hidden">
                          <h2
                            className="text-[#3A6EA5] text-lg font-semibold mt-2"
                            style={{
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                            }}
                          >
                            {title}
                          </h2>
                          <div className="flex gap-2 flex-wrap mt-1">
                            {categoryLabel && <Tag label={categoryLabel} />}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div>

        {/* Load more button */}
        {shouldRenderContent && filteredPosts.length > itemsToShow && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setItemsToShow((s) => s + 6)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white bg-white/8 backdrop-blur-md border border-white/20 hover:bg-white/12 transition-shadow duration-150 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DE2F04]"
            >
              Load more
              <GoArrowDown />
            </button>
          </div>
        )}
      </section>

      {/* Modal */}
      {modalOpen && modalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute top-2 right-2 text-white bg-black/40 rounded-full p-2"
            >
              <IoClose size={20} />
            </button>
            <img
              src={normalizeSrc(modalProject.acf?.project_image?.url)}
              alt={modalProject.title?.rendered || modalProject.slug}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            {modalProject.title?.rendered && (
              <h3 className="mt-2 text-white text-center">
                {modalProject.title.rendered}
              </h3>
            )}
          </div>
        </div>
      )}

      {/* Mobile section */}
      <section className="md:hidden block w-full relative mt-8 mb-10 px-4">
        <p className="text-[#4C8C74] text-center font-medium mb-2 text-sm">
          Our Portfolio
        </p>
        <h2 className="text-white text-center font-semibold text-2xl leading-tight mb-6">
          Proven Result,
          <br />
          Stunning websites
        </h2>

        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-[8px] border cursor-pointer text-sm transition whitespace-nowrap ${
                selectedCategory === cat
                  ? "border-yellow-400 text-yellow-400 bg-yellow-400/10"
                  : "text-gray-400 border-gray-600 hover:border-yellow-400 hover:text-yellow-400"
              }`}
              aria-pressed={selectedCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="w-full">
          {loading || !shouldRenderContent ? (
            <div className="py-12 flex items-center justify-center">
              <svg
                className="animate-spin h-10 w-10 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-label="Loading"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            </div>
          ) : fetchTimedOut ? (
            <div className="py-12 flex flex-col items-center justify-center text-center">
              <p className="text-white mb-3 text-sm">
                Session timed out — please retry.
              </p>
              <button
                onClick={() => fetchPosts()}
                className="px-3 py-1.5 rounded-full text-white text-sm bg-white/8 backdrop-blur-md border border-white/20 hover:bg-white/12 transition-shadow duration-150"
              >
                Retry
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredPosts.slice(0, itemsToShow).map((post: Post) => {
                const image = post.acf?.project_image?.url || "/Home/Rectangle_33.webp";
                const title = post.title?.rendered || post.slug;
                const safeImageSrc = normalizeSrc(image);
                const cat = post.acf?.catogary;
                const categoryLabel = Array.isArray(cat) ? cat[0] : cat || "";

                return (
                  <div
                    key={post.id}
                    className="w-full relative group cursor-pointer"
                    role="link"
                    tabIndex={0}
                    onClick={() => handleNavigateOrOpen(post)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleNavigateOrOpen(post);
                      }
                    }}
                  >
                    <div
                      className="rounded-lg p-3 overflow-hidden shadow-lg transition-transform duration-300 flex flex-col"
                      style={{
                        background: "transparent",
                      }}
                    >
                      <div className="overflow-hidden rounded-lg h-48 w-full">
                        <img
                          src={safeImageSrc}
                          alt={title}
                          className="w-full h-full object-cover transform transition-transform duration-500 ease-out group-active:scale-105 will-change-transform rounded-lg"
                          onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement;
                            if (
                              target &&
                              target.src.indexOf("/Home/Rectangle_33.webp") === -1
                            ) {
                              target.src = "/Home/Rectangle_33.webp";
                            }
                          }}
                        />
                      </div>

                      <div className="mt-2 flex-1 flex flex-col justify-start overflow-hidden">
                        <h3 className="text-[#3A6EA5] text-base font-semibold mt-2 line-clamp-2">
                          {title}
                        </h3>
                        <div className="flex gap-2 flex-wrap mt-1">
                          {categoryLabel && <Tag label={categoryLabel} />}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {shouldRenderContent && filteredPosts.length > itemsToShow && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setItemsToShow((s) => s + 6)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm bg-white/8 backdrop-blur-md border border-white/20 hover:bg-white/12 transition-shadow duration-150 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#DE2F04]"
            >
              Load more
              <GoArrowDown size={16} />
            </button>
          </div>
        )}
      </section>
    </>
  );
}

type TagProps = {
  label: string;
};

function Tag({ label }: TagProps) {
  return (
    <span className="text-xs px-3 py-1 rounded-full border border-gray-700 text-gray-300 whitespace-nowrap">
      {label}
    </span>
  );
}