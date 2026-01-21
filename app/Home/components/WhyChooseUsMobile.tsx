"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const cardData = [
  {
    title: "Projects Completed",
    value: "5K",
  },
  {
    title: "Happy Customers",
    value: "3K",
  },
  {
    title: "Years of Experience",
    value: "10",
  },
  {
    title: "Awards Achievement",
    value: "20",
  }
];

const WhyChooseUsMobile = () => {
  const router = useRouter();
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
    <section className="sm:hidden my-12 px-4">
      <div className="flex flex-col space-y-6">
        {/* Text Content */}
        <div className="flex flex-col space-y-3">
          <h2 className="text-[#4C8C74] text-xs sm:text-sm font-medium">Why Choose Us?</h2>
          <h2 className="text-white text-2xl sm:text-3xl font-medium leading-tight">
            Why Choose Aussie Digital Studio
          </h2>
          <p className="font-normal text-xs sm:text-sm text-[#AAAAAA] leading-relaxed" data-text-sm-light>
            We focus on modern, thoughtful design backed by clear strategy.
            Every project is planned with purpose, ensuring your digital
            presence not only looks great but performs well. We value clear
            communication, keeping the process simple and transparent from start
            to finish. Our work is built around real results, with usability and
            growth always in mind. Beyond launch, we provide ongoing support to
            help your brand continue to evolve and succeed.
          </p>
          <button
            onClick={() => router.push("/contact")}
            className="justify-center mt-4 px-3 w-[140px] h-[36px] text-xs sm:text-sm bg-teal-500 text-white rounded-full hover:bg-blue-400 transition-all inline-flex items-center group"
          >
            <span>Get Started</span>
            <span className="ml-2 relative w-5 h-5 flex items-center justify-center">
              <span
                className={`absolute inset-0 rounded-full transition-colors ${isDarkMode ? "bg-black" : "bg-white"}`}
                aria-hidden="true"
              ></span>
              <svg
                className="relative w-3 h-3 z-10 transition-transform duration-300 group-hover:rotate-45"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
              >
                <path
                  d="M7 17 L17 7"
                  stroke={isDarkMode ? "#fff" : "#000"}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M11 7 H17 V13"
                  stroke={isDarkMode ? "#fff" : "#000"}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-5">
          {/* Mapped Cards */}
          {cardData.map((card, index) => (
            <div 
              key={index} 
              className="w-full h-auto px-4 sm:px-5 py-3 rounded-xl sm:rounded-2xl flex flex-col justify-center" 
              style={isDarkMode ? {backgroundImage: "url('/Home/mini_card_dark.svg')", backgroundSize: "cover", backgroundPosition: "center"} : {backgroundImage: "url('/Home/Frame_163_Light.svg')", backgroundSize: "cover", backgroundPosition: "center"}}
            >
              <h2 className="text-3xl sm:text-5xl font-bold">{card.value}</h2>
              <p className="text-[#AAAAAA] text-xs sm:text-sm mt-1">{card.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsMobile;
