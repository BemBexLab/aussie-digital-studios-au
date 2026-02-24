"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type ProcessCardsMobileProps = {
  service: {
    processCardData?: Array<{
      image: string;
      heading: string;
      paragraph: string;
    }>;
  };
};

const ProcessCardsMobile = ({ service }: ProcessCardsMobileProps) => {
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

  return (
    <section>
      <div className="flex flex-col justify-center gap-4 mb-10 px-4">
        {service.processCardData?.map((item, index) => (
          <div key={index} className="flex flex-col items-start w-full">
            <div
              className="w-full h-[230px] relative my-4 flex flex-col items-start justify-start p-4"
              style={{
                backgroundImage: `url("${isDarkMode ? '/Home/mini_card_dark.svg' : '/Home/Frame_163_Light.svg'}")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <Image
                src={item.image}
                alt={`Process Step ${index + 1}`}
                width={80}
                height={80}
                className="object-contain"
              />
              <h2 className={`text-base ${isDarkMode ? 'text-yellow-500' : 'text-[#3A6EA5]'} mt-2`}>
                {item.heading}
              </h2>
              <p className={`text-sm ${isDarkMode ? 'text-white' : 'text-[#777777]'}`}>
                {item.paragraph}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessCardsMobile;
