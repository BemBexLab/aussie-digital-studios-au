"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

type PortfolioMobileProps = {
  service: {
    portfolioData?: Array<{
      id: string;
      src: string;
      translateY: string;
    }>;
  };
};

const defaultPortfolioData = [
  { id: "1", src: "/Services/web_01.svg", translateY: "-translate-y-12" },
  { id: "2", src: "/Services/web_02.svg", translateY: "" },
  { id: "3", src: "/Services/web_02.svg", translateY: "-translate-y-12" },
  { id: "4", src: "/Services/web_03.svg", translateY: "" },
  { id: "5", src: "/Services/web_04.svg", translateY: "-translate-y-12" },
  { id: "6", src: "/Services/web_05.svg", translateY: "" },
  { id: "7", src: "/Services/web_06.svg", translateY: "-translate-y-12" },
  { id: "8", src: "/Services/web_07.svg", translateY: "" },
];

const PortfolioMobile = ({ service }: PortfolioMobileProps) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [clickedImageId, setClickedImageId] = useState<string | null>(null);

  useEffect(() => {
    const theme = localStorage.getItem("ads_theme");
    setIsDarkMode(theme !== "light");

    const handleThemeChange = () => {
      const theme = localStorage.getItem("ads_theme");
      setIsDarkMode(theme !== "light");
    };

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    window.addEventListener("storage", handleThemeChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("storage", handleThemeChange);
    };
  }, []);

  const images = service.portfolioData || defaultPortfolioData;

  return (
    <section
      className="my-10 py-6 sm:hidden"
      style={{
        backgroundImage: `url('${isDarkMode ? "/Home/CTA.svg" : "/Home/Frame_167_Light.svg"}')`,
        backgroundColor: "transparent",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Heading */}
      <div className="mb-8 text-center">
        <p className="mb-2 text-sm font-medium text-[#4C8C74]">Our Portfolio</p>
        <h2 className="text-xl font-semibold text-white leading-tight">
          Real Websites, Not Just Mockups
        </h2>

        <div className="mt-8 overflow-x-auto px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex snap-x snap-mandatory gap-3">
            {images.map((image) => (
              <button
                key={image.id}
                type="button"
                onClick={() =>
                  setClickedImageId(image.id === clickedImageId ? null : image.id)
                }
                className={`relative w-[78vw] max-w-[260px] shrink-0 snap-center overflow-hidden rounded-2xl border border-white/10 bg-black/10 text-left transition-transform duration-300 ${
                  clickedImageId === image.id ? "scale-[1.02]" : ""
                }`}
              >
                <Image
                  className="h-auto w-full"
                  src={image.src}
                  alt="Portfolio preview"
                  width={600}
                  height={900}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioMobile;
