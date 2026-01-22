"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import WhyChooseUsMobile from "./WhyChooseUsMobile";

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

const WhyChooseUs = () => {
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
    <>
      <WhyChooseUsMobile />
      <section className="hidden sm:flex w-full px-5 my-20 justify-center" style={{}}>
      <div className="flex flex-col max-[1250px]:flex-col flex-row justify-center mx-auto max-[1250px]:gap-8">
        {/* First column */}
        <div className="flex flex-col max-[1250px]:w-full mx-10 w-3/5">
          <h2 className="text-[#4C8C74] text-xl mb-1">Why Choose Us?</h2>
          <h2 className="text-white text-4xl font-medium mb-5">
            Why Choose Aussie Digital Studio
          </h2>
          <p className="font-normal text-sm text-[#AAAAAA]" data-text-sm-light>
            We focus on modern, thoughtful design backed by clear strategy.
            Every project is planned with purpose, ensuring your digital
            presence not only looks great but performs well. We value clear
            communication, keeping the process simple and transparent from start
            to finish. Our work is built around real results, with usability and
            growth always in mind. Beyond launch, we provide ongoing support to
            help your brand continue to evolve and succeed.
          </p>
          <div className="flex flex-row">
            <button
              onClick={() => router.push("/contact")}
              className="justify-center mt-4 px-3 w-[150px] h-[40px] text-sm bg-teal-500 text-white rounded-full hover:bg-blue-400 transition-all inline-flex items-center group flex flex-row"
            >
              <span>Get Started</span>
              <span className="ml-3 relative w-6 h-6 flex items-center justify-center">
                <span
                  className="absolute inset-0 bg-black rounded-full"
                  aria-hidden="true"
                ></span>
                <svg
                  className="relative w-4 h-4 z-10 transition-transform duration-300 group-hover:rotate-45 button-arrow-svg"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                >
                  <path
                    d="M7 17 L17 7"
                    stroke="#fff"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M11 7 H17 V13"
                    stroke="#fff"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Spacing div */}
        <div className="w-5 max-[1250px]:hidden"></div>

        {/* Second column */}
        <div className="grid grid-cols-2 max-[1250px]:grid-cols-2 w-[500px] max-[1250px]:w-full h-[220px] max-[1250px]:h-auto" style={{rowGap: '10px'}}>
            {/* Mapped Cards */}
            {cardData.map((card, index) => (
                <div key={index} className="w-[200px] h-[120px] px-7 py-2 rounded-2xl" style={isDarkMode ? {backgroundImage: "url('/Home/mini_card_dark.svg')", backgroundSize: "cover", backgroundPosition: "center"} : {backgroundImage: "url('/Home/Frame_163_Light.svg')", backgroundSize: "cover", backgroundPosition: "center"}}>
                    <h2 className="text-7xl">{card.value}</h2>
                    <p className="text-[#AAAAAA] text-sm mt-2 text-center">{card.title}</p>
                </div>
            ))}
        </div>
      </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
