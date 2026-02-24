"use client";

import React, { useEffect, useState } from "react";

type CardsMobileProps = {
  service: {
    strategicCardData?: Array<{
      title: string;
      desc: string;
      svg: React.ReactNode;
    }>;
  };
};

const CardsMobile = ({ service }: CardsMobileProps) => {
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
    <div className="flex flex-col items-center justify-center w-full py-8 px-4">
      <h2 className="text-2xl text-center mb-6 font-semibold">Strategic Approach</h2>
      
      {/* Single column stack for mobile */}
      <div className="flex flex-col gap-4 w-full">
        {allCards.map((card, index) => (
          <div
            key={`${card.title}-${index}`}
            className="relative rounded-xl w-full border border-white/10 p-4 transition overflow-hidden"
            style={{
              backgroundImage: `url('${isDarkMode ? '/Services/dark_card_md.webp' : '/Services/light_card_md.webp'}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="flex flex-col">
              <div className="flex justify-center mb-3" key="svg-icon">
                {card.svg}
              </div>
              <div className="flex flex-col">
                <h3 className={`text-lg ${isDarkMode ? "text-yellow-500" : "text-[#3A6EA5]"} font-semibold`}>{card.title}</h3>
                <p className={`font-light text-sm mt-2 ${isDarkMode ? "text-white" : "text-[#777777]"}`}>{card.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsMobile;
