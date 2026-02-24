"use client";

"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import CustomPlanMobile from "./CustomPlanMobile";

const CustomPlan = () => {
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
    <>
      <CustomPlanMobile />
      <section className="hidden sm:flex w-full my-10 justify-center">
        <div className="flex flex-wrap xl:flex-row gap-6 xl:gap-0 h-auto xl:h-[300px] max-w-7xl w-full mx-auto px-4">
        {/* Custom Plan Content */}
        <div
          className="flex flex-col rounded-xl px-8 py-10 w-full xl:w-auto flex-1"
          style={isDarkMode ? {
            backgroundImage: `url('/home/Custom_plans.webp')`,
            backgroundSize: "fill",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          } : {
            backgroundColor: "#f9f1f1",
          }}
        >
          <h2 className="font-semibold text-4xl text-white">Custom Plan</h2>
          <div className="w-full xl:w-[620px] mt-4">
            <p className="text-sm text-[#4C8C74]">
              AussieDigitalStudios is a full-service digital studio built for
              modern, fast-growing brands. From strategy to standout design and
              digital execution, everything you need to build and grow your
              online presence lives here, powered by a creative, results-focused
              team.
            </p>
          </div>
          <div className="mt-15 flex flex-col xl:flex-row gap-4 xl:gap-0">
            <a
              href="/contact"
              className="flex font-light text-sm items-center justify-center gap-1 bg-[#4C8C74] text-white py-2 px-3 rounded-full hover:bg-blue-300 transition-colors group w-fit xl:mr-auto"
            >
              Book a consultation call to create your perfect plan
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
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
            <div className="flex flex-row justify-center xl:justify-start my-2">
              <p className="text-[#4C8C74]">SMM Plans</p>
              <svg
                className="m-2"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <circle cx="5.89511" cy="5.89511" r="5.89511" fill="#4C8C74" />
              </svg>
            </div>
          </div>
        </div>

        {/* Image on right side */}
        <Image
          src="/home/performance_marketing.webp"
          alt="Custom Plan Illustration"
          width={370}
          height={400}
          className="w-full xl:w-auto xl:ml-5 rounded-xl"
        />
        </div>
      </section>
    </>
  );
};

export default CustomPlan;
