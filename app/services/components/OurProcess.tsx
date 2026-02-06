"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Divider from "./Divider";
import ProcessCards from "./ProcessCards";

type OurProcessProps = {
  service: {
    processCardData?: Array<{
      image: string;
      heading: string;
      paragraph: string;
    }>;
  };
};

const OurProcess = ({ service }: OurProcessProps) => {
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
    <section className="w-full flex justify-center">
      <div className="flex flex-col mt-30 justify-center max-w-7xl w-full px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xl font-medium text-[#4C8C74] mb-2">Our Process</p>
          <h2 className="text-4xl md:text-4xl font-semibold text-white">
            Our Proven 3-Step Process to Grow Your<br /> Brand with Web
            Design and Development
          </h2>
        </div>

        {/* Divider */}
        <Divider />

        <ProcessCards service={service} />
      </div>
    </section>
  );
};

export default OurProcess;