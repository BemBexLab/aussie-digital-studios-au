"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "@/lib/motion";
import CardsMobile from "./CardsMobile";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

type CardsProps = {
  service: {
    strategicHeading?: React.ReactNode;
    strategicHeadingText?: React.ReactNode;
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
  const cardRows = Array.from({ length: Math.ceil(allCards.length / 4) }, (_, index) =>
    allCards.slice(index * 4, index * 4 + 4)
  );
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

  const getDesktopCardPosition = (rowCount: number, index: number) => {
    if (rowCount === 1) {
      return "lg:col-span-3 lg:col-start-5";
    }

    if (rowCount === 2) {
      return index === 0 ? "lg:col-span-3 lg:col-start-4" : "lg:col-span-3";
    }

    if (rowCount === 3) {
      return index === 0 ? "lg:col-span-3 lg:col-start-2" : "lg:col-span-3";
    }

    return "lg:col-span-3";
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
          className="text-4xl text-center text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {service.strategicHeading || "Our Strategic Services"}
        </motion.h2>
        <motion.div
          className="mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {service.strategicHeadingText}
        </motion.div>

        {/* Geometric Shape */}
        <div className="hidden md:block absolute top-0 right-0 translate-y-0 -translate-x-32 z-10 pointer-events-none">
          <Image
            src="/Geometric_Shape_Silver.webp"
            alt="Geometric Shape"
            width={120}
            height={80}
            className="opacity-80"
          />
        </div>

        {/* Cards Container */}
        <div className="w-full max-w-7xl px-4">
          {cardRows.map((rowCards, rowIndex) => (
            <div
              key={`row-${rowIndex}`}
              className={`grid grid-cols-1 gap-4 max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-12 ${rowIndex < cardRows.length - 1 ? "mb-4" : ""}`}
            >
              {rowCards.map((card, index) => {
                const cardIndex = rowIndex * 4 + index;
                const cardKey = `${card.title}-${cardIndex}`;
                const isExpanded = expandedCards[cardKey];
                const { textNode, buttonNode } = splitDesc(card.desc);
                const descText = card.descText?.trim();
                const fullText = descText || extractText(textNode) || extractText(card.desc);
                const { text: previewText, truncated } = truncateWords(fullText, WORD_LIMIT);
                const hasPreviewText = previewText.trim().length > 0;

                return (
                  <motion.div
                    key={cardKey}
                    className={`group relative rounded-2xl border border-white/10 p-6 pb-28 transition overflow-hidden flex flex-col sm:col-span-1 ${getDesktopCardPosition(rowCards.length, index)} ${isExpanded ? "min-h-[300px] h-auto" : "h-[300px]"}`}
                    style={{
                      backgroundImage: `url('${isDarkMode ? "/Services/dark_card_md.webp" : "/Services/light_card_md.webp"}')`,
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
                            className={`absolute bottom-6 left-6 z-10 flex items-center gap-1 text-xs font-semibold ${isDarkMode ? "text-yellow-400" : "text-[#3A6EA5]"}`}
                          >
                            <span>Read More</span>
                            <AiOutlineArrowDown />
                          </button>
                        )}
                        {isExpanded && truncated && (
                          <button
                            type="button"
                            onClick={() => toggleExpand(cardKey)}
                            className={`absolute bottom-6 left-6 z-10 flex items-center gap-1 text-xs font-semibold ${isDarkMode ? "text-yellow-400" : "text-[#3A6EA5]"}`}
                          >
                            <span>Read Less</span>
                            <AiOutlineArrowUp />
                          </button>
                        )}
                        {buttonNode}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
