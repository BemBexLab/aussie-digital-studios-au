"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const CustomPlanMobile = () => {
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
    <section className="sm:hidden my-10 justify-center">
      <div className="flex flex-col h-full w-full px-4">
        {/* Custom Plan Content */}
        <div
          className="flex flex-col rounded-xl px-6 py-8 w-full"
          style={isDarkMode ? {
            backgroundImage: `url('/Home/Custom_plans.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          } : {
            backgroundColor: "#f9f1f1",
          }}
        >
          <h2 className="font-semibold text-2xl text-white">Custom Plan</h2>
          <div className="w-full mt-3">
            <p className="text-xs text-[#4C8C74]">
              AussieDigitalStudios is a full-service digital studio built for
              modern, fast-growing brands. From strategy to standout design and
              digital execution, everything you need to build and grow your
              online presence lives here, powered by a creative, results-focused
              team.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="#"
              className="flex font-light text-xs items-center justify-center gap-1 bg-[#4C8C74] text-white py-2 px-3 rounded-full hover:bg-blue-300 transition-colors group w-full"
            >
              Book a consultation call to create your perfect plan
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="transition-transform duration-300 group-hover:rotate-[45deg]"
              >
                <circle cx="12" cy="12" r="10" fill="black" />
                <path
                  d="M9 12H15M15 12L12 9M15 12L12 15"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="rotate(-45 12 12)"
                />
              </svg>
            </a>
            <div className="flex flex-row justify-center items-center gap-1">
              <p className="text-xs text-[#4C8C74]">SMM Plans</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 12 12"
                fill="none"
              >
                <circle cx="5.89511" cy="5.89511" r="5.89511" fill="#4C8C74" />
              </svg>
            </div>
          </div>
        </div>

        {/* Image Below on Mobile */}
        <div className="mt-4 flex justify-center">
          <Image
            src="/Home/performance_marketing.webp"
            alt="Custom Plan Illustration"
            width={300}
            height={280}
            className="w-full h-auto max-w-xs"
          />
        </div>
      </div>
    </section>
  );
};

export default CustomPlanMobile;
