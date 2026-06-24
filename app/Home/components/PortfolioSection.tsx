"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { GoArrowDown } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { motion } from "@/lib/motion";
import type { ProjectPost } from "@/lib/projectPosts";

// Category configuration
const MODAL_CATEGORIES = [
  "FIGMA DESIGN",
  "LOGO DESIGN",
  "BRANDING",
  "ILLUSTRATION",
  "PRINT",
];

const ROUTE_CATEGORIES = [
  "WEB DEVELOPMENT",
  "SHOPIFY",
  "WORDPRESS",
  "MAGENTO",
  "LARAVEL",
  "REACT",
];

const categories = [...ROUTE_CATEGORIES, ...MODAL_CATEGORIES];

const FIGMA_CARD_HEIGHT = 500;
const FIGMA_VISIBLE_HEIGHT = Math.floor(FIGMA_CARD_HEIGHT / 2) + 100;
const WEB_DEVELOPMENT_MATCHERS = [
  "web development",
  "react",
  "magento",
  "laravel",
];

type Post = ProjectPost;

const normalizeCategory = (value?: string) => value?.trim().toLowerCase() || "";
const decodeHtmlEntities = (value: string) =>
  value
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&");

// Enhanced URL cleaning function
const cleanUrl = (url: string): string => {
  if (!url) return "";

  let cleaned = String(url);

  // Remove escaped backslash sequences (\\a, \\n, \\t, etc.)
  cleaned = cleaned.replace(/\\[a-z]/gi, "");

  // Remove all control characters (including \a, \n, \r, \t)
  cleaned = cleaned.replace(/[\x00-\x1F\x7F-\x9F]/g, "");

  // Remove all whitespace characters
  cleaned = cleaned.replace(/\s+/g, "");

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
    if (!cleaned.startsWith("http") && !cleaned.startsWith("/")) return false;

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
  if (cleanedSrc.startsWith("http://"))
    return cleanedSrc.replace("http://", "https://");

  return cleanedSrc;
};

type PortfolioWallProps = {
  initialPosts?: Post[];
};

export default function PortfolioWall({
  initialPosts = [],
}: PortfolioWallProps) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [selectedCategory, setSelectedCategory] = useState("WEB DEVELOPMENT");
  const [hoveredFigmaCard, setHoveredFigmaCard] = useState<number | null>(null);
  const [scrollOffsets, setScrollOffsets] = useState<Record<number, number>>(
    {},
  );
  const imgRefs = useRef<Record<number, HTMLImageElement | null>>({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState<Post | null>(null);
  const [itemsToShow, setItemsToShow] = useState(6);
  const [loading, setLoading] = useState(initialPosts.length === 0);
  const [fetchTimedOut, setFetchTimedOut] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [dataReady, setDataReady] = useState(initialPosts.length > 0);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isMobileInView, setIsMobileInView] = useState(false);
  const desktopHeadingRef = useRef<HTMLDivElement>(null);
  const mobileHeadingRef = useRef<HTMLDivElement>(null);
  const isCompactCategory = ["logo design", "branding", "illustration"].includes(
    selectedCategory.toLowerCase(),
  );

  const filteredPosts = posts.filter((post) => {
    const cat = post.acf?.catogary;
    if (!cat) return false;

    const selected = normalizeCategory(selectedCategory);
    const postCategories = (Array.isArray(cat) ? cat : [cat]).map((value) =>
      normalizeCategory(value),
    );

    if (selected === "web development") {
      return postCategories.some((value) =>
        WEB_DEVELOPMENT_MATCHERS.some((matcher) => value.includes(matcher)),
      );
    }

    return postCategories.some((value) => value === selected);
  });

  // Fetch posts with proper validation
  const fetchPosts = async (timeoutMs = 15000) => {
    if (initialPosts.length > 0) {
      setPosts(initialPosts);
      setDataReady(true);
      setLoading(false);
      setFetchTimedOut(false);
      setFetchError(null);
      return;
    }

    setLoading(true);
    setDataReady(false);
    setFetchTimedOut(false);
    setFetchError(null);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const postsUrl =
        typeof window !== "undefined"
          ? new URL("/api/posts", window.location.origin).toString()
          : "/api/posts";

      const res = await fetch(postsUrl, {
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
    if (initialPosts.length > 0) {
      setPosts(initialPosts);
      setDataReady(true);
      setLoading(false);
      setFetchTimedOut(false);
      setFetchError(null);
      return;
    }

    if (initialPosts.length === 0) {
      fetchPosts();
    }
  }, [initialPosts.length]);

  useEffect(() => {
    const desktopObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          desktopObserver.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      },
    );

    if (desktopHeadingRef.current) {
      desktopObserver.observe(desktopHeadingRef.current);
    }

    return () => {
      desktopObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const mobileObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMobileInView(true);
          mobileObserver.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      },
    );

    if (mobileHeadingRef.current) {
      mobileObserver.observe(mobileHeadingRef.current);
    }

    return () => {
      mobileObserver.disconnect();
    };
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
  const pathname = usePathname();
  const isOnPortfolioPage = pathname === "/portfolio";

  const handleLoadMore = () => {
    if (isOnPortfolioPage) {
      setItemsToShow((s) => s + 6);
    } else {
      router.push("/portfolio");
    }
  };

  const handleNavigateOrOpen = (post: Post) => {
    if (
      selectedCategory.toLowerCase() === "figma design" &&
      isFigmaCard(post)
    ) {
      return;
    }
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

    setIsNavigating(true);
    try {
      router.push(`/projects/${post.slug}`);
    } catch (e) {
      console.error("Navigation error", e);
      setIsNavigating(false);
    }
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

      <section
        className={`relative my-20 mt-20 hidden px-4 md:block md:px-6 lg:px-8 ${
          isCompactCategory ? "pb-16" : ""
        }`}
      >
        {/* Heading */}
        <div ref={desktopHeadingRef}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#4C8C74] text-center font-medium mb-3 text-sm sm:text-base"
          >
            Our Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-14 text-center text-3xl font-semibold leading-[1.2] text-white md:text-4xl lg:mb-20 lg:text-5xl"
          >
            Proven Result,
            <br />
            Stunning websites
          </motion.h2>
        </div>

        {/* Category filter buttons */}
        <div className="mb-8 flex flex-wrap justify-center gap-2.5 md:gap-3">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setSelectedCategory(cat)}
              className={`cursor-pointer rounded-[8px] border px-3 py-2 text-xs transition sm:px-4 sm:text-sm ${
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
        <div className="mx-auto flex max-w-5xl justify-center">
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
            <div
              className={`grid w-full grid-cols-1 justify-items-center gap-8 lg:grid-cols-2 lg:gap-0 ${
                isCompactCategory ? "mb-8" : ""
              }`}
            >
              {/* Portfolio Cards */}
              {filteredPosts.slice(0, itemsToShow).map((post: Post) => {
                const image =
                  post.acf?.project_image?.url || "/Home/Rectangle_33.webp";
                const title = decodeHtmlEntities(
                  post.title?.rendered || post.slug,
                );
                const safeImageSrc = normalizeSrc(image);
                const cat = post.acf?.catogary;
                const categoryLabels = Array.isArray(cat)
                  ? cat
                  : cat
                    ? [cat]
                    : [];
                const visibleCategoryLabels = categoryLabels.filter(
                  (label) => normalizeCategory(label) !== "web development",
                );
                const primaryCategoryLabel = categoryLabels[0] || "";

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
                        ? "group relative w-full max-w-[410px]"
                        : isFigma
                          ? "group relative w-full max-w-[470px]"
                          : isFlexible
                            ? "group relative w-full max-w-[470px]"
                            : "group relative w-full max-w-[500px]"
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
                      className="flex h-full flex-col overflow-hidden rounded-lg p-3 shadow-lg transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 md:p-4"
                      style={{
                        background: "transparent",
                      }}
                    >
                      <div
                        className={
                          isFigma
                            ? "overflow-hidden rounded-md"
                            : isCompact
                              ? "overflow-hidden rounded-md h-[280px] md:h-[320px] lg:h-[350px]"
                              : isFlexible
                                ? "overflow-hidden rounded-md"
                                : "overflow-hidden rounded-md h-[300px] md:h-[330px] lg:h-[350px]"
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
                            className="w-full block will-change-transform rounded-lg"
                            style={{
                              transform:
                                hoveredFigmaCard === post.id
                                  ? `translateY(-${scrollOffsets[post.id] || 0}px)`
                                  : "translateY(0)",
                              transition: `transform ${Math.max(800, (scrollOffsets[post.id] || 0) * 2)}ms linear`,
                            }}
                            onError={(e) => {
                              const target =
                                e.currentTarget as HTMLImageElement;
                              if (
                                target &&
                                target.src.indexOf(
                                  "/Home/Rectangle_33.webp",
                                ) === -1
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
                                ? "h-auto w-full object-contain transition-transform duration-500 ease-out will-change-transform group-hover:scale-105"
                                : "h-full w-full object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-105"
                            }
                            onError={(e) => {
                              const target =
                                e.currentTarget as HTMLImageElement;
                              if (
                                target &&
                                target.src.indexOf(
                                  "/Home/Rectangle_33.webp",
                                ) === -1
                              ) {
                                target.src = "/Home/Rectangle_33.webp";
                              }
                            }}
                          />
                        )}
                      </div>

                      <div className="mt-2 flex-1 flex flex-col justify-start overflow-hidden">
                        {primaryCategoryLabel?.toLowerCase() !== "print" && (
                          <h2
                            className="mt-2 text-base font-semibold text-[#3A6EA5] md:text-lg"
                            style={{
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                            }}
                          >
                            {title}
                          </h2>
                        )}
                        <div className="flex gap-2 flex-wrap mt-1">
                          {visibleCategoryLabels.map((label) => (
                            <Tag key={`${post.id}-${label}`} label={label} />
                          ))}
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
          <div
            className={`flex justify-center ${
              isCompactCategory ? "mt-[102px]" : "mt-8"
            }`}
          >
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white bg-white/8 backdrop-blur-md border border-white/20 hover:bg-white/12 transition-shadow duration-150 shadow-lg"
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
      <section className="relative mb-10 mt-8 block w-full px-4 md:hidden sm:px-5">
        <div ref={mobileHeadingRef}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isMobileInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#4C8C74] text-center font-medium mb-2 text-sm"
          >
            Our Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={isMobileInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6 text-center text-2xl font-semibold leading-tight text-white sm:text-3xl"
          >
            Proven Result,
            <br />
            Stunning websites
          </motion.h2>
        </div>

        <div className="mb-6 flex flex-wrap justify-center gap-2 pb-2">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setSelectedCategory(cat)}
              className={`cursor-pointer rounded-[8px] border px-3 py-2 text-xs transition sm:px-4 sm:text-sm ${
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
            <div className="space-y-4 sm:space-y-5">
              {filteredPosts.slice(0, itemsToShow).map((post: Post) => {
                const image =
                  post.acf?.project_image?.url || "/Home/Rectangle_33.webp";
                const title = decodeHtmlEntities(
                  post.title?.rendered || post.slug,
                );
                const safeImageSrc = normalizeSrc(image);
                const cat = post.acf?.catogary;
                const categoryLabels = Array.isArray(cat)
                  ? cat
                  : cat
                    ? [cat]
                    : [];
                const visibleCategoryLabels = categoryLabels.filter(
                  (label) => normalizeCategory(label) !== "web development",
                );
                const primaryCategoryLabel = categoryLabels[0] || "";
                const isFigma = isFigmaCard(post);
                const isCompact = ["logo design", "branding", "illustration"].includes(
                  primaryCategoryLabel.toLowerCase(),
                );
                const mobileCardHeight = isFigma
                  ? Math.min(FIGMA_VISIBLE_HEIGHT, 320)
                  : isCompact
                    ? 220
                    : 192;

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
                      <div
                        className="w-full overflow-hidden rounded-lg"
                        style={{ height: `${mobileCardHeight}px` }}
                      >
                        <img
                          src={safeImageSrc}
                          alt={title}
                          className={`rounded-lg transition-transform duration-500 ease-out will-change-transform group-active:scale-105 ${
                            isFigma
                              ? "h-auto w-full object-contain"
                              : "h-full w-full object-cover"
                          }`}
                          onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement;
                            if (
                              target &&
                              target.src.indexOf("/Home/Rectangle_33.webp") ===
                                -1
                            ) {
                              target.src = "/Home/Rectangle_33.webp";
                            }
                          }}
                        />
                      </div>

                      <div className="mt-2 flex-1 flex flex-col justify-start overflow-hidden">
                        <h3 className="mt-2 line-clamp-2 text-base font-semibold text-[#3A6EA5] sm:text-lg">
                          {title}
                        </h3>
                        <div className="flex gap-2 flex-wrap mt-1">
                          {visibleCategoryLabels.map((label) => (
                            <Tag key={`${post.id}-${label}`} label={label} />
                          ))}
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
              onClick={handleLoadMore}
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
