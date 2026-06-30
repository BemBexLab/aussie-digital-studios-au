"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "@/lib/motion";
import PortfolioMobile from "./PortfolioMobile";

type PortfolioProps = {
  service: {
    portfolioData?: Array<{
      id: string;
      src: string;
      translateY: string;
    }>;
  };
};

const defaultPortfolioData = [
  { id: "1", src: "/Services/web_01.svg", translateY: "-translate-y-25" },
  { id: "2", src: "/Services/web_02.svg", translateY: "" },
  { id: "3", src: "/Services/web_02.svg", translateY: "-translate-y-25" },
  { id: "4", src: "/Services/web_03.svg", translateY: "" },
  { id: "5", src: "/Services/web_04.svg", translateY: "-translate-y-25" },
  { id: "6", src: "/Services/web_05.svg", translateY: "" },
  { id: "7", src: "/Services/web_06.svg", translateY: "-translate-y-25" },
  { id: "8", src: "/Services/web_07.svg", translateY: "" },
];

const Portfolio = ({ service }: PortfolioProps) => {
  const [clickedImageId, setClickedImageId] = useState<string | null>(null);
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
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    // Also listen to storage changes (for cross-tab updates)
    window.addEventListener("storage", handleThemeChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("storage", handleThemeChange);
    };
  }, []);

  const images = service.portfolioData || defaultPortfolioData;
  const marqueeImages = [...images, ...images];

  return (
    <>
      <PortfolioMobile service={service} />
      <section className="hidden overflow-x-hidden overflow-y-visible py-10 sm:block" style={{
        backgroundImage: `url("${isDarkMode ? '/Home/CTA.svg' : '/Home/Frame_167_Light.svg'}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}>
      {/* Heading */}
      <div className="text-center mt-10 mb-8 px-4">
        <motion.p
          className="text-xl font-medium text-[#4C8C74] mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Our Portfolio
        </motion.p>
        <motion.h2
          className="text-4xl md:text-4xl font-semibold text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Real Websites, Not Just Mockups
        </motion.h2>

        {/* Cards slider */}
        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .portfolio-scroll {
            animation: scroll 30s linear infinite;
          }
          .portfolio-image {
            cursor: pointer;
            transition: transform 0.3s ease;
          }
          .portfolio-image:hover {
            transform: scale(1.05);
          }
          .portfolio-image.selected {
            transform: scale(1.15);
          }
        `}</style>
        <div className="mt-10 flex h-[55vh] items-center overflow-x-hidden overflow-y-visible px-4 sm:px-6 lg:px-8">
          <div className="portfolio-scroll mt-[100px] flex w-max flex-row items-center gap-3 lg:gap-4">
            {marqueeImages.map((image, index) => (
              <Image
                key={`${image.id}-${index}`}
                className={`portfolio-image h-auto w-[220px] flex-shrink-0 sm:w-[240px] md:w-[280px] lg:w-[320px] xl:w-[360px] ${image.translateY} ${
                  clickedImageId === image.id ? "selected" : ""
                }`}
                src={image.src}
                alt="Portfolio preview"
                width={1200}
                height={1500}
                onClick={() => setClickedImageId(image.id === clickedImageId ? null : image.id)}
              />
            ))}
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Portfolio;
