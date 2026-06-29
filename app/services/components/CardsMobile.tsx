"use client";

import React, { useEffect, useState } from "react";

type CardsMobileProps = {
  service: {
    strategicCardData?: Array<{
      title: string;
      desc: React.ReactNode;
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
    <div className="flex w-full flex-col items-center justify-center px-4 py-8">
      <h2 className="mb-6 text-center text-2xl font-semibold">
        Strategic Approach
      </h2>
      
      {/* Single column stack for mobile */}
      <div className="flex w-full flex-col gap-4">
        {allCards.map((card, index) => (
          <div
            key={`${card.title}-${index}`}
            className="relative w-full overflow-hidden rounded-xl border border-white/10 p-4 transition sm:p-5"
            style={{
              backgroundImage: `url('${isDarkMode ? '/Services/dark_card_md.webp' : '/Services/light_card_md.webp'}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="flex flex-col gap-3">
              <div className="mb-1 flex justify-center" key="svg-icon">
                {card.svg}
              </div>
              <div className="flex flex-col">
                <h3
                  className={`text-lg font-semibold leading-snug ${
                    isDarkMode ? "text-yellow-500" : "text-[#3A6EA5]"
                  }`}
                >
                  {card.title}
                </h3>
                <div
                  className={`mt-2 text-sm leading-6 ${
                    isDarkMode ? "text-white" : "text-[#777777]"
                  }`}
                >
                  {card.desc}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsMobile;
