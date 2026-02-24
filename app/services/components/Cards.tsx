"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import CardsMobile from "./CardsMobile";

type CardsProps = {
  service: {
    strategicCardData?: Array<{
      title: string;
      desc: string;
      svg: React.ReactNode;
    }>;
  };
};

const Cards = ({ service }: CardsProps) => {
  const allCards = service.strategicCardData || [];
  const [isDarkMode, setIsDarkMode] = useState(true);

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
          backgroundImage: `url("${isDarkMode ? "/home/CTA.svg" : "/home/Frame_169_Light.svg"}")`,
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
          Strategic Approach
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
            {allCards.slice(0, 4).map((card, index) => (
              <motion.div
                key={`${card.title}-${index}`}
                className="group relative rounded-2xl border border-white/10 p-6 transition overflow-hidden min-h-[220px] flex flex-col"
                style={{
                  backgroundImage: `url('${isDarkMode ? '/services/dark_card_md.webp' : '/services/light_card_md.webp'}')`,
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
                  <div className="flex flex-col flex-grow">
                    <h3
                      className={`text-xl mb-2 ${isDarkMode ? "text-yellow-500" : "text-[#3A6EA5]"}`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`font-light text-sm ${isDarkMode ? "text-white" : "text-[#777777]"}`}
                    >
                      {card.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second Row - 3 Cards (Centered) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {allCards.slice(4).map((card, index) => (
              <motion.div
                key={`${card.title}-${index + 4}`}
                className="group relative rounded-2xl border border-white/10 p-6 transition overflow-hidden min-h-[220px] flex flex-col"
                style={{
                  backgroundImage: `url('${isDarkMode ? '/services/dark_card_md.webp' : '/services/light_card_md.webp'}')`,
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
                  <div className="flex flex-col flex-grow">
                    <h3
                      className={`text-xl mb-2 ${isDarkMode ? "text-yellow-500" : "text-[#3A6EA5]"}`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`font-light text-sm ${isDarkMode ? "text-white" : "text-[#777777]"}`}
                    >
                      {card.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
