"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import CardsMobile from "./CardsMobile";

type CardsProps = {
  service: {
    strategicHeading?: React.ReactNode;
    strategicCardData?: Array<{
      title: string;
      desc: React.ReactNode;
      descText?: string;
      svg: React.ReactNode;
    }>;
  };
};

const Cards = ({ service }: CardsProps) => {
  const allCards = service.strategicCardData || [];
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const WORD_LIMIT = 25;

  const extractText = (node: React.ReactNode): string => {
    if (typeof node === "string" || typeof node === "number") {
      return String(node);
    }

    if (Array.isArray(node)) {
      return node.map(extractText).join(" ");
    }

    if (React.isValidElement(node)) {
      if (node.type === "br") {
        return " ";
      }
      const element = node as React.ReactElement<{ children?: React.ReactNode }>;
      const children = React.Children.toArray(element.props?.children);
      return children.map(extractText).join(" ");
    }

    return "";
  };

  const truncateWords = (text: string, limit: number) => {
    const words = text.trim().split(/\s+/).filter(Boolean);
    if (words.length <= limit) {
      return { text, truncated: false };
    }
    return { text: words.slice(0, limit).join(" ") + "...", truncated: true };
  };

  const isButtonContainer = (node: React.ReactNode) => {
    if (!React.isValidElement(node)) {
      return false;
    }
    const element = node as React.ReactElement<{ className?: string }>;
    const className = element.props?.className;
    return (
      typeof className === "string" &&
      className.includes("absolute") &&
      className.includes("bottom-4")
    );
  };

  const splitDesc = (desc: React.ReactNode) => {
    if (React.isValidElement(desc)) {
      const element = desc as React.ReactElement<{ children?: React.ReactNode }>;
      const children = React.Children.toArray(element.props?.children);
      let buttonNode: React.ReactNode | null = null;
      const filtered = children.filter((child) => {
        if (isButtonContainer(child) && !buttonNode) {
          buttonNode = child;
          return false;
        }
        return true;
      });
      const cleaned = filtered.filter(
        (child) => !(typeof child === "string" && child.trim() === "")
      );
      return { textNode: <>{cleaned}</>, buttonNode };
    }

    if (Array.isArray(desc)) {
      const cleaned = desc.filter(
        (child) => !(typeof child === "string" && child.trim() === "")
      );
      return { textNode: <>{cleaned}</>, buttonNode: null };
    }

    return { textNode: desc, buttonNode: null };
  };

  const toggleExpand = (key: string) => {
    setExpandedCards((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    // Initial theme detection
    const theme = localStorage.getItem("ads_theme");
    setIsDarkMode(theme !== "light");

    // Listen for theme changes via document class mutations
    const handleThemeChange = () => {
      const theme = localStorage.getItem("ads_theme");
      setIsDarkMode(theme !== "light");
    };

    // Watch for class changes on document element
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Also listen to storage changes (for cross-tab updates)
    window.addEventListener("storage", handleThemeChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("storage", handleThemeChange);
    };
  }, []);

  return (
    <>
      {/* Mobile View */}
      <div className="sm:hidden">
        <CardsMobile service={service} />
      </div>

      {/* Desktop View */}
      <div
        className="hidden sm:flex flex-col items-center justify-center w-full relative py-16"
        style={{
          backgroundImage: `url("${isDarkMode ? "/Home/CTA.svg" : "/Home/Frame_169_Light.svg"}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Title */}
        <motion.h2
          className="text-4xl text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {service.strategicHeading || "Our Strategic Services"}
        </motion.h2>

        {/* Geometric Shape */}
        <div className="hidden md:block absolute top-0 right-0 translate-y-0 -translate-x-32 z-10 pointer-events-none">
          <Image
            src="/Geometric_Shape_Silver.png"
            alt="Geometric Shape"
            width={120}
            height={80}
            className="opacity-80"
          />
        </div>

        {/* Cards Container */}
        <div className="w-full max-w-7xl px-4">
          {/* First Row - 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {allCards.slice(0, 4).map((card, index) => {
              const cardKey = `${card.title}-${index}`;
              const isExpanded = expandedCards[cardKey];
              const { textNode, buttonNode } = splitDesc(card.desc);
              const descText = card.descText?.trim();
              const fullText = descText || extractText(textNode) || extractText(card.desc);
              const { text: previewText, truncated } = truncateWords(fullText, WORD_LIMIT);
              const hasPreviewText = previewText.trim().length > 0;
              return (
              <motion.div
                key={cardKey}
                className={`group relative rounded-2xl border border-white/10 p-6 pb-28 transition overflow-hidden flex flex-col ${isExpanded ? "min-h-[300px] h-auto" : "h-[300px]"}`}
                style={{
                  backgroundImage: `url('${isDarkMode ? '/Services/dark_card_md.webp' : '/Services/light_card_md.webp'}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backdropFilter: "blur(10px)",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">{card.svg}</div>
                  <div className="flex flex-col flex-1">
                    <h3
                      className={`text-xl mb-2 ${isDarkMode ? "text-yellow-500" : "text-[#3A6EA5]"}`}
                    >
                      {card.title}
                    </h3>
                    <div
                      className={`font-light text-sm ${isDarkMode ? "text-white" : "text-[#777777]"}`}
                    >
                      {isExpanded ? (
                        textNode
                      ) : (
                        <>
                          {descText ? (
                            <p>{previewText}</p>
                          ) : hasPreviewText ? (
                            <p>{previewText}</p>
                          ) : (
                            textNode
                          )}
                        </>
                      )}
                    </div>
                    {!isExpanded && truncated && (
                      <button
                        type="button"
                        onClick={() => toggleExpand(cardKey)}
                        className={`absolute bottom-6 left-6 z-10 text-xs font-semibold underline underline-offset-4 ${isDarkMode ? "text-yellow-400" : "text-[#3A6EA5]"}`}
                      >
                        See more
                      </button>
                    )}
                    {isExpanded && truncated && (
                      <button
                        type="button"
                        onClick={() => toggleExpand(cardKey)}
                        className={`absolute bottom-6 left-6 z-10 text-xs font-semibold underline underline-offset-4 ${isDarkMode ? "text-yellow-400" : "text-[#3A6EA5]"}`}
                      >
                        See less
                      </button>
                    )}
                    {buttonNode}
                  </div>
                </div>
              </motion.div>
            );
            })}
          </div>

          {/* Second Row - 3 Cards (Centered) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {allCards.slice(4).map((card, index) => {
              const cardKey = `${card.title}-${index + 4}`;
              const isExpanded = expandedCards[cardKey];
              const { textNode, buttonNode } = splitDesc(card.desc);
              const descText = card.descText?.trim();
              const fullText = descText || extractText(textNode) || extractText(card.desc);
              const { text: previewText, truncated } = truncateWords(fullText, WORD_LIMIT);
              const hasPreviewText = previewText.trim().length > 0;
              return (
              <motion.div
                key={cardKey}
                className={`group relative rounded-2xl border border-white/10 p-6 pb-28 transition overflow-hidden flex flex-col ${isExpanded ? "min-h-[300px] h-auto" : "h-[300px]"}`}
                style={{
                  backgroundImage: `url('${isDarkMode ? '/Services/dark_card_md.webp' : '/Services/light_card_md.webp'}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backdropFilter: "blur(10px)",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">{card.svg}</div>
                  <div className="flex flex-col flex-1">
                    <h3
                      className={`text-xl mb-2 ${isDarkMode ? "text-yellow-500" : "text-[#3A6EA5]"}`}
                    >
                      {card.title}
                    </h3>
                    <div
                      className={`font-light text-sm ${isDarkMode ? "text-white" : "text-[#777777]"}`}
                    >
                      {isExpanded ? (
                        textNode
                      ) : (
                        <>
                          {descText ? (
                            <p>{previewText}</p>
                          ) : hasPreviewText ? (
                            <p>{previewText}</p>
                          ) : (
                            textNode
                          )}
                        </>
                      )}
                    </div>
                    {!isExpanded && truncated && (
                      <button
                        type="button"
                        onClick={() => toggleExpand(cardKey)}
                        className={`absolute bottom-6 left-6 z-10 text-xs font-semibold underline underline-offset-4 ${isDarkMode ? "text-yellow-400" : "text-[#3A6EA5]"}`}
                      >
                        See more
                      </button>
                    )}
                    {isExpanded && truncated && (
                      <button
                        type="button"
                        onClick={() => toggleExpand(cardKey)}
                        className={`absolute bottom-6 left-6 z-10 text-xs font-semibold underline underline-offset-4 ${isDarkMode ? "text-yellow-400" : "text-[#3A6EA5]"}`}
                      >
                        See less
                      </button>
                    )}
                    {buttonNode}
                  </div>
                </div>
              </motion.div>
            );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;

