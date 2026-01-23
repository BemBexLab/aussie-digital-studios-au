"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
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
        className="hidden sm:flex flex-col items-center justify-center w-full relative"
        style={{
          backgroundImage: `url("${isDarkMode ? "/Home/CTA.svg" : "/Home/Frame_169_Light.svg"}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          minHeight: "auto",
        }}
      >
        <h2 className="text-4xl text-center mb-10 pt-10">Strategic Approach</h2>
        {/* Geometric Shape - Only show on md and up (optional but recommended to avoid clutter on mobile) */}
        <div className="hidden md:block absolute top-0 right-0 translate-y-[px] -translate-x-32 z-10 pointer-events-none">
          <Image
            src="/Geometric_Shape_Silver.png"
            alt="Geometric Shape"
            width={120}
            height={80}
            className="opacity-80"
          />
        </div>
        {/* Responsive Grid */}
        <div className="flex flex-wrap justify-center gap-3 w-full px-4 xl:w-fit xl:px-0 pb-10">
          {/* First 4 cards */}
          {allCards.slice(0, 4).map((card, index) => (
            <div
              key={`${card.title}-${index}`}
              className="group relative rounded-2xl w-full max-w-[280px] xl:max-w-none border border-white/10 p-6 transition overflow-hidden flex-shrink-0"
              style={{
                backgroundImage: `url('${isDarkMode ? '/Services/dark_card_md.webp' : '/Services/light_card_md.webp'}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backdropFilter: "blur(10px)",
                width: "calc((100% - 12px) / 2)",
              }}
            >
              <div className="flex flex-col">
                <div key="svg-icon">{card.svg}</div>
                <div className="mt-4 flex flex-col">
                  <h2
                    className={`text-xl ${isDarkMode ? "text-yellow-500" : "text-[#3A6EA5]"}`}
                  >
                    {card.title}
                  </h2>
                  <p
                    className={`font-light ${isDarkMode ? "text-white" : "text-[#777777]"}`}
                  >
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 w-full px-4 xl:w-fit xl:px-0 pb-10">
          {/* Remaining cards */}
          {allCards.slice(4).map((card, index) => (
            <div
              key={`${card.title}-${index + 4}`}
              className="group relative rounded-2xl w-full max-w-[280px] xl:max-w-none border border-white/10 p-6 transition overflow-hidden flex-shrink-0"
              style={{
                backgroundImage: `url('${isDarkMode ? '/Services/dark_card_md.webp' : '/Services/light_card_md.webp'}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backdropFilter: "blur(10px)",
                width: "calc((100% - 8px) / 3)",
              }}
            >
              <div className="flex flex-col">
                <div key="svg-icon">{card.svg}</div>
                <div className="mt-4 flex flex-col">
                  <h2
                    className={`text-xl ${isDarkMode ? "text-yellow-500" : "text-[#3A6EA5]"}`}
                  >
                    {card.title}
                  </h2>
                  <p
                    className={`font-light ${isDarkMode ? "text-white" : "text-[#777777]"}`}
                  >
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
