"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { GoArrowDown } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { motion } from "@/lib/motion";
import {
  PORTFOLIO_MAIN_CATEGORIES,
  PORTFOLIO_WEBSITE_SUBCATEGORIES,
  type PortfolioMainCategory,
  type PortfolioProjectPost,
  type PortfolioWebsiteSubcategory,
} from "@/lib/portfolioProjects";

const FIGMA_CARD_HEIGHT = 500;
const FIGMA_VISIBLE_HEIGHT = Math.floor(FIGMA_CARD_HEIGHT / 2) + 100;
const HIDDEN_CARD_TAGS = new Set(["web development", "figma design"]);
const WEBSITE_FILTER_ALL = "ALL";
const FLEXIBLE_CARD_CATEGORIES: PortfolioMainCategory[] = [
  "LOGO DESIGN",
  "BRANDING",
  "ILLUSTRATION",
  "PRINT",
];

const normalizeCategory = (value?: string) => value?.trim().toLowerCase() || "";
const decodeHtmlEntities = (value: string) =>
  value
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&");

const cleanUrl = (url: string): string => {
  if (!url) return "";

  return String(url)
    .replace(/\\[a-z]/gi, "")
    .replace(/[\x00-\x1F\x7F-\x9F]/g, "")
    .replace(/\s+/g, "")
    .trim();
};

const isValidUrl = (url: string): boolean => {
  if (!url) return false;

  const cleaned = cleanUrl(url);
  if (!cleaned) return false;

  if (cleaned.startsWith("http://") || cleaned.startsWith("https://")) {
    return true;
  }

  return cleaned.startsWith("/");
};

const normalizeSrc = (src?: string): string => {
  if (!src) return "/Home/Rectangle_33.webp";

  const cleanedSrc = cleanUrl(src);

  if (!cleanedSrc || !isValidUrl(cleanedSrc)) {
    return "/Home/Rectangle_33.webp";
  }

  if (cleanedSrc.startsWith("//")) return `https:${cleanedSrc}`;

  if (cleanedSrc.startsWith("http://")) {
    return cleanedSrc.replace("http://", "https://");
  }

  return cleanedSrc;
};

type PortfolioWallProps = {
  initialPosts?: PortfolioProjectPost[];
};

type WebsiteFilter = PortfolioWebsiteSubcategory | typeof WEBSITE_FILTER_ALL;

export default function PortfolioWall({
  initialPosts = [],
}: PortfolioWallProps) {
  const hasInitialPosts = initialPosts.length > 0;
  const [posts, setPosts] = useState<PortfolioProjectPost[]>(initialPosts);
  const [selectedCategory, setSelectedCategory] =
    useState<PortfolioMainCategory>("WEB DEVELOPMENT");
  const [selectedWebsiteSubcategory, setSelectedWebsiteSubcategory] =
    useState<WebsiteFilter>(WEBSITE_FILTER_ALL);
  const [hoveredFigmaCard, setHoveredFigmaCard] = useState<string | null>(null);
  const [scrollOffsets, setScrollOffsets] = useState<Record<string, number>>(
    {},
  );
  const imgRefs = useRef<Record<string, HTMLImageElement | null>>({});
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState<PortfolioProjectPost | null>(
    null,
  );
  const [itemsToShow, setItemsToShow] = useState(6);
  const [loading, setLoading] = useState(!hasInitialPosts);
  const [fetchTimedOut, setFetchTimedOut] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [dataReady, setDataReady] = useState(hasInitialPosts);
  const [isInView, setIsInView] = useState(false);
  const [isMobileInView, setIsMobileInView] = useState(false);
  const desktopHeadingRef = useRef<HTMLDivElement>(null);
  const mobileHeadingRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const isOnPortfolioPage = pathname === "/portfolio";
  const isCompactCategory = ["logo design", "branding", "illustration"].includes(
    selectedCategory.toLowerCase(),
  );

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const categoryMatch = post.acf.catogary.some(
        (category) => category === selectedCategory,
      );

      if (!categoryMatch) {
        return false;
      }

      if (selectedCategory === "WEB DEVELOPMENT") {
        if (selectedWebsiteSubcategory === WEBSITE_FILTER_ALL) {
          return true;
        }

        return post.acf.subcategory === selectedWebsiteSubcategory;
      }

      return true;
    });
  }, [posts, selectedCategory, selectedWebsiteSubcategory]);

  const currentPosts = useMemo(
    () => filteredPosts.slice(0, itemsToShow),
    [filteredPosts, itemsToShow],
  );

  const fetchPosts = useCallback(async (timeoutMs = 15000) => {
    if (hasInitialPosts) {
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
          ? new URL("/api/portfolio-projects", window.location.origin).toString()
          : "/api/portfolio-projects";

      const response = await fetch(postsUrl, {
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(
          `Server responded with ${response.status} ${response.statusText}`,
        );
      }

      const data = (await response.json()) as PortfolioProjectPost[];
      const normalizedPosts = data.filter(
        (post) => post.id && post.acf?.project_image?.url,
      );

      setPosts(normalizedPosts);
      setDataReady(true);
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        setFetchTimedOut(true);
      } else {
        console.error("Error fetching portfolio projects", error);
        setFetchError(
          error instanceof Error
            ? error.message
            : "An unexpected error occurred while fetching projects.",
        );
      }
    } finally {
      clearTimeout(timeoutId);
      setLoading(false);
    }
  }, [hasInitialPosts, initialPosts]);

  useEffect(() => {
    if (hasInitialPosts) {
      setPosts(initialPosts);
      setDataReady(true);
      setLoading(false);
      setFetchTimedOut(false);
      setFetchError(null);
      return;
    }

    fetchPosts();
  }, [fetchPosts, hasInitialPosts, initialPosts]);

  useEffect(() => {
    if (selectedCategory !== "WEB DEVELOPMENT") {
      setSelectedWebsiteSubcategory(WEBSITE_FILTER_ALL);
    }
  }, [selectedCategory]);

  useEffect(() => {
    const desktopObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          desktopObserver.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
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
      { threshold: 0.2 },
    );

    if (mobileHeadingRef.current) {
      mobileObserver.observe(mobileHeadingRef.current);
    }

    return () => {
      mobileObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModalOpen(false);
        setModalProject(null);
      }
    };

    if (modalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  const handleImageLoad = (
    postId: string,
    visibleHeight = FIGMA_CARD_HEIGHT,
  ) => {
    const img = imgRefs.current[postId];

    if (!img) {
      return;
    }

    setTimeout(() => {
      const displayedHeight = img.offsetHeight;
      const maxScroll = Math.max(displayedHeight - visibleHeight, 0);
      setScrollOffsets((prev) => ({ ...prev, [postId]: maxScroll }));
    }, 10);
  };

  const openProjectModal = (post: PortfolioProjectPost) => {
    setModalProject(post);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalProject(null);
  };

  const handleLoadMore = () => {
    if (isOnPortfolioPage) {
      setItemsToShow((value) => value + 6);
      return;
    }

    router.push("/portfolio");
  };

  const handleNavigateOrOpen = (post: PortfolioProjectPost) => {
    if (post.href_url) {
      window.open(post.href_url, "_blank", "noopener,noreferrer");
      return;
    }

    openProjectModal(post);
  };

  const shouldRenderContent = dataReady && !loading;

  const showWebsiteFilters = selectedCategory === "WEB DEVELOPMENT";

  const renderEmptyState = (mobile = false) => (
    <div
      className={`flex flex-col items-center justify-center text-center ${
        mobile ? "py-12" : "py-24"
      }`}
    >
      <p className={`text-white ${mobile ? "mb-3 text-sm" : "mb-4"}`}>
        {posts.length === 0
          ? "No portfolio projects are available right now."
          : "No projects match the current filter."}
      </p>
      {fetchError && (
        <button
          onClick={() => fetchPosts()}
          className={`rounded-full border border-white/20 bg-white/8 text-white backdrop-blur-md transition-shadow duration-150 hover:bg-white/12 ${
            mobile ? "px-3 py-1.5 text-sm" : "px-4 py-2"
          }`}
        >
          Retry
        </button>
      )}
    </div>
  );

  const renderErrorState = (mobile = false) => (
    <div
      className={`flex flex-col items-center justify-center text-center ${
        mobile ? "py-12" : "py-24"
      }`}
    >
      <p className={`text-white ${mobile ? "mb-3 text-sm" : "mb-4"}`}>
        {fetchError || "Unable to load portfolio projects right now."}
      </p>
      <button
        onClick={() => fetchPosts()}
        className={`rounded-full border border-white/20 bg-white/8 text-white backdrop-blur-md transition-shadow duration-150 hover:bg-white/12 ${
          mobile ? "px-3 py-1.5 text-sm" : "px-4 py-2"
        }`}
      >
        Retry
      </button>
    </div>
  );

  const renderTimeoutState = (mobile = false) => (
    <div
      className={`flex flex-col items-center justify-center text-center ${
        mobile ? "py-12" : "py-24"
      }`}
    >
      <p className={`text-white ${mobile ? "mb-3 text-sm" : "mb-4"}`}>
        Session timed out - please retry.
      </p>
      <button
        onClick={() => fetchPosts()}
        className={`rounded-full border border-white/20 bg-white/8 text-white backdrop-blur-md transition-shadow duration-150 hover:bg-white/12 ${
          mobile ? "px-3 py-1.5 text-sm" : "px-4 py-2"
        }`}
      >
        Retry
      </button>
    </div>
  );

  const renderLoadingState = (mobile = false) => (
    <div className={`${mobile ? "py-12" : "py-24"} flex items-center justify-center`}>
      <svg
        className={`animate-spin text-white ${mobile ? "h-10 w-10" : "h-12 w-12"}`}
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
  );

  const visibleTagLabels = (post: PortfolioProjectPost) => {
    const labels: string[] = post.acf.catogary.filter(
      (label) => !HIDDEN_CARD_TAGS.has(normalizeCategory(label)),
    );

    if (post.acf.subcategory) {
      labels.push(post.acf.subcategory);
    }

    return Array.from(new Set(labels));
  };

  const isFigmaCard = (post: PortfolioProjectPost) => {
    return (
      selectedCategory === "FIGMA DESIGN" ||
      post.acf.catogary.includes("PRINT")
    );
  };

  return (
    <>
      <section
        className={`relative my-20 mt-20 hidden px-4 md:block md:px-6 lg:px-8 ${
          isCompactCategory ? "pb-16" : ""
        }`}
      >
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

        <div className="mb-8 flex flex-wrap justify-center gap-2.5 md:gap-3">
          {PORTFOLIO_MAIN_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`cursor-pointer rounded-[8px] border px-3 py-2 text-xs transition sm:px-4 sm:text-sm ${
                selectedCategory === category
                  ? "border-yellow-400 text-yellow-400 bg-yellow-400/10"
                  : "text-gray-400 border-gray-600 hover:border-yellow-400 hover:text-yellow-400"
              }`}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        {showWebsiteFilters && (
          <div className="mb-8 flex flex-wrap justify-center gap-2.5 md:gap-3">
            {[WEBSITE_FILTER_ALL, ...PORTFOLIO_WEBSITE_SUBCATEGORIES].map(
              (subcategory) => (
                <button
                  key={subcategory}
                  onClick={() =>
                    setSelectedWebsiteSubcategory(subcategory as WebsiteFilter)
                  }
                  className={`cursor-pointer rounded-[8px] border px-3 py-2 text-xs transition sm:px-4 sm:text-sm ${
                    selectedWebsiteSubcategory === subcategory
                      ? "border-yellow-400 text-yellow-400 bg-yellow-400/10"
                      : "text-gray-400 border-gray-600 hover:border-yellow-400 hover:text-yellow-400"
                  }`}
                  aria-pressed={selectedWebsiteSubcategory === subcategory}
                >
                  {subcategory}
                </button>
              ),
            )}
          </div>
        )}

        <div className="mx-auto flex max-w-5xl justify-center">
          {loading ? (
            renderLoadingState()
          ) : fetchTimedOut ? (
            renderTimeoutState()
          ) : fetchError ? (
            renderErrorState()
          ) : currentPosts.length === 0 ? (
            renderEmptyState()
          ) : (
            <div
              className={`grid w-full grid-cols-1 justify-items-center gap-8 lg:grid-cols-2 lg:gap-0 ${
                isCompactCategory ? "mb-8" : ""
              }`}
            >
              {currentPosts.map((post) => {
                const image = post.acf.project_image.url || "/Home/Rectangle_33.webp";
                const title = decodeHtmlEntities(
                  post.title.rendered || post.alt || post.slug,
                );
                const safeImageSrc = normalizeSrc(image);
                const categoryLabels = visibleTagLabels(post);
                const primaryCategoryLabel = post.acf.catogary[0] || "";
                const figma = isFigmaCard(post);
                const compactCategories = [
                  "logo design",
                  "branding",
                  "illustration",
                ];
                const isCompact = post.acf.catogary
                  .map((category) => category.toLowerCase())
                  .some((category) => compactCategories.includes(category));
                const isFlexible =
                  figma ||
                  FLEXIBLE_CARD_CATEGORIES.some(
                    (category) => post.acf.catogary.includes(category),
                  );

                return (
                  <div
                    key={post.id}
                    className={
                      isCompact
                        ? "group relative w-full max-w-[410px]"
                        : figma
                          ? "group relative w-full max-w-[470px]"
                          : isFlexible
                            ? "group relative w-full max-w-[470px]"
                            : "group relative w-full max-w-[500px]"
                    }
                    role="link"
                    tabIndex={0}
                    onClick={() => handleNavigateOrOpen(post)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        handleNavigateOrOpen(post);
                      }
                    }}
                  >
                    <div className="flex h-full flex-col overflow-hidden rounded-lg p-3 shadow-lg transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 md:p-4">
                      <div
                        className={
                          figma
                            ? "overflow-hidden rounded-md"
                            : isCompact
                              ? "overflow-hidden rounded-md h-[280px] md:h-[320px] lg:h-[350px]"
                              : isFlexible
                                ? "overflow-hidden rounded-md"
                                : "overflow-hidden rounded-md h-[300px] md:h-[330px] lg:h-[350px]"
                        }
                        style={figma ? { height: `${FIGMA_VISIBLE_HEIGHT}px` } : undefined}
                      >
                        {figma ? (
                          <img
                            ref={(element) => {
                              if (element) imgRefs.current[post.id] = element;
                            }}
                            src={safeImageSrc}
                            alt={post.alt || title}
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
                            onError={(event) => {
                              const target = event.currentTarget;
                              if (
                                target.src.indexOf("/Home/Rectangle_33.webp") ===
                                -1
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
                            alt={post.alt || title}
                            className={
                              isFlexible
                                ? "h-auto w-full object-contain transition-transform duration-500 ease-out will-change-transform group-hover:scale-105"
                                : "h-full w-full object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-105"
                            }
                            onError={(event) => {
                              const target = event.currentTarget;
                              if (
                                target.src.indexOf("/Home/Rectangle_33.webp") ===
                                -1
                              ) {
                                target.src = "/Home/Rectangle_33.webp";
                              }
                            }}
                          />
                        )}
                      </div>

                      <div className="mt-2 flex-1 flex flex-col justify-start overflow-hidden">
                        {primaryCategoryLabel.toLowerCase() !== "print" && (
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
                          {categoryLabels.map((label) => (
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

      {modalOpen && modalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute top-2 right-2 text-white bg-black/40 rounded-full p-2"
            >
              <IoClose size={20} />
            </button>
            <img
              src={normalizeSrc(modalProject.acf.project_image.url)}
              alt={modalProject.alt || modalProject.title.rendered}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            {modalProject.title.rendered && (
              <h3 className="mt-2 text-white text-center">
                {modalProject.title.rendered}
              </h3>
            )}
          </div>
        </div>
      )}

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
          {PORTFOLIO_MAIN_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`cursor-pointer rounded-[8px] border px-3 py-2 text-xs transition sm:px-4 sm:text-sm ${
                selectedCategory === category
                  ? "border-yellow-400 text-yellow-400 bg-yellow-400/10"
                  : "text-gray-400 border-gray-600 hover:border-yellow-400 hover:text-yellow-400"
              }`}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        {showWebsiteFilters && (
          <div className="mb-6 flex flex-wrap justify-center gap-2 pb-2">
            {[WEBSITE_FILTER_ALL, ...PORTFOLIO_WEBSITE_SUBCATEGORIES].map(
              (subcategory) => (
                <button
                  key={subcategory}
                  onClick={() =>
                    setSelectedWebsiteSubcategory(subcategory as WebsiteFilter)
                  }
                  className={`cursor-pointer rounded-[8px] border px-3 py-2 text-xs transition sm:px-4 sm:text-sm ${
                    selectedWebsiteSubcategory === subcategory
                      ? "border-yellow-400 text-yellow-400 bg-yellow-400/10"
                      : "text-gray-400 border-gray-600 hover:border-yellow-400 hover:text-yellow-400"
                  }`}
                  aria-pressed={selectedWebsiteSubcategory === subcategory}
                >
                  {subcategory}
                </button>
              ),
            )}
          </div>
        )}

        <div className="w-full">
          {loading ? (
            renderLoadingState(true)
          ) : fetchTimedOut ? (
            renderTimeoutState(true)
          ) : fetchError ? (
            renderErrorState(true)
          ) : currentPosts.length === 0 ? (
            renderEmptyState(true)
          ) : (
            <div className="space-y-4 sm:space-y-5">
              {currentPosts.map((post) => {
                const image = post.acf.project_image.url || "/Home/Rectangle_33.webp";
                const title = decodeHtmlEntities(
                  post.title.rendered || post.alt || post.slug,
                );
                const safeImageSrc = normalizeSrc(image);
                const categoryLabels = visibleTagLabels(post);
                const primaryCategoryLabel = post.acf.catogary[0] || "";
                const figma = isFigmaCard(post);
                const isCompact = ["logo design", "branding", "illustration"].includes(
                  primaryCategoryLabel.toLowerCase(),
                );
                const mobileCardHeight = figma
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
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        handleNavigateOrOpen(post);
                      }
                    }}
                  >
                    <div className="rounded-lg p-3 overflow-hidden shadow-lg transition-transform duration-300 flex flex-col">
                      <div
                        className="w-full overflow-hidden rounded-lg"
                        style={{ height: `${mobileCardHeight}px` }}
                      >
                        <img
                          src={safeImageSrc}
                          alt={post.alt || title}
                          className={`rounded-lg transition-transform duration-500 ease-out will-change-transform group-active:scale-105 ${
                            figma
                              ? "h-auto w-full object-contain"
                              : "h-full w-full object-cover"
                          }`}
                          onError={(event) => {
                            const target = event.currentTarget;
                            if (
                              target.src.indexOf("/Home/Rectangle_33.webp") ===
                              -1
                            ) {
                              target.src = "/Home/Rectangle_33.webp";
                            }
                          }}
                        />
                      </div>

                      <div className="mt-2 flex-1 flex flex-col justify-start overflow-hidden">
                        {primaryCategoryLabel.toLowerCase() !== "print" && (
                          <h3 className="mt-2 line-clamp-2 text-base font-semibold text-[#3A6EA5] sm:text-lg">
                            {title}
                          </h3>
                        )}
                        <div className="flex gap-2 flex-wrap mt-1">
                          {categoryLabels.map((label) => (
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
