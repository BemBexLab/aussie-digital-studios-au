"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type ProcessCardsSmProps = {
  service: {
    processCardData?: Array<{
      image: string;
      heading: string;
      paragraph: string;
    }>;
  };
};

const ProcessCardsSm = ({ service }: ProcessCardsSmProps) => {
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
      <div className="flex flex-row justify-center gap-5 mb-10">
        {service.processCardData?.map((item, index) => (
          <div key={index} className="flex flex-col items-start">
            <div
              className="w-[360px] h-[250px] relative my-8 flex flex-col items-start justify-start p-6"
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
                width={120}
                height={120}
                className="object-contain"
              />
              <h2 className={`text-lg ${isDarkMode ? 'text-yellow-500' : 'text-[#3A6EA5]'} mt-2`}>
                {item.heading}
              </h2>
              <p className={`text-md ${isDarkMode ? 'text-white' : 'text-[#777777]'} text-xs`}>
                {item.paragraph}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessCardsSm;
