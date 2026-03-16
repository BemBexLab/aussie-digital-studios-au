"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

type CustomPlanData = {
  heading?: React.ReactNode;
  body?: React.ReactNode;
};

type CustomPlanMobileProps = {
  data?: CustomPlanData;
};

const CustomPlanMobile = ({ data }: CustomPlanMobileProps) => {
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
    <section className="sm:hidden my-8 px-4">
      <div className="flex flex-col space-y-6">
        {/* Custom Plan Content */}
        <div
          className="flex flex-col rounded-lg px-4 py-6 w-full"
          style={isDarkMode ? {
            backgroundImage: `url('/Home/Custom_plans.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          } : {
            backgroundColor: "#f9f1f1",
          }}
        >
          <h2 className="font-semibold text-2xl sm:text-3xl text-white leading-tight">
            {data?.heading || "Custom Plan"}
          </h2>
          <div className="mt-3">
            {data?.body ? (
              <div className="text-xs sm:text-sm text-[#4C8C74] leading-relaxed">
                {data.body}
              </div>
            ) : (
              <p className="text-xs sm:text-sm text-[#4C8C74] leading-relaxed">
                AussieDigitalStudios is a full-service digital studio built for
                modern, fast-growing brands. From strategy to standout design and
                digital execution, everything you need to build and grow your
                online presence lives here, powered by a creative, results-focused
                team.
              </p>
            )}
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="#"
              className="flex font-light text-xs sm:text-sm items-center justify-center gap-2 bg-[#4C8C74] text-white py-2 px-3 rounded-full hover:bg-blue-300 transition-colors group w-full"
            >
              <span className="text-center">Book a consultation call</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="transition-transform duration-300 group-hover:rotate-[45deg] flex-shrink-0"
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
            <div className="flex flex-row justify-center items-center">
              <p className="text-[#4C8C74] text-xs sm:text-sm">SMM Plans</p>
              <svg
                className="ml-2"
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

        {/* Image */}
        <Image
          src="/Home/performance_marketing.webp"
          alt="Custom Plan Illustration"
          width={300}
          height={300}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </section>
  );
};

export default CustomPlanMobile;
