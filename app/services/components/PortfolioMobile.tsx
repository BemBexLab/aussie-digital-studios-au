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
  { id: "1", src: "/services/web_01.svg", translateY: "-translate-y-12" },
  { id: "2", src: "/services/web_02.svg", translateY: "" },
  { id: "3", src: "/services/web_02.svg", translateY: "-translate-y-12" },
  { id: "4", src: "/services/web_03.svg", translateY: "" },
  { id: "5", src: "/services/web_04.svg", translateY: "-translate-y-12" },
  { id: "6", src: "/services/web_05.svg", translateY: "" },
  { id: "7", src: "/services/web_06.svg", translateY: "-translate-y-12" },
  { id: "8", src: "/services/web_07.svg", translateY: "" },
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
    <section className="sm:hidden my-10 py-3" style={{
        backgroundImage: `url('${isDarkMode ? '/home/CTA.svg' : '/home/Frame_167_Light.svg'}')`,
        backgroundColor: "transparent",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}>
      {/* Heading */}
      <div className="text-center mb-8 px-4">
        <p className="text-sm font-medium text-[#4C8C74] mb-2">Our Portfolio</p>
        <h2 className="text-xl font-semibold text-white leading-tight">
          Real Websites, Not Just Mockups
        </h2>

        {/* Cards slider */}
        <style>{`
          @keyframes scroll-mobile {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .portfolio-scroll-mobile {
            animation: scroll-mobile 25s linear infinite;
          }
          .portfolio-image-mobile {
            cursor: pointer;
            transition: transform 0.3s ease;
          }
          .portfolio-image-mobile:hover {
            transform: scale(1.05);
          }
          .portfolio-image-mobile.selected {
            transform: scale(1.15);
          }
        `}</style>
        <div className="overflow-hidden mt-10">
          <div className="flex flex-row gap-2 portfolio-scroll-mobile">
            {images.map((image) => (
              <Image
                key={image.id}
                className={`w-[200px] h-[350px] flex-shrink-0 portfolio-image-mobile ${image.translateY} ${
                  clickedImageId === image.id ? "selected" : ""
                }`}
                src={image.src}
                alt="Our Process"
                width={600}
                height={900}
                onClick={() => setClickedImageId(image.id === clickedImageId ? null : image.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioMobile;
