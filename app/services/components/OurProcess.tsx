"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Divider from "./Divider";
import ProcessCards from "./ProcessCards";

type OurProcessProps = {
  service: {
    processEyebrow?: string,
    processHeading?: React.ReactNode,
    processPara?: React.ReactNode,
    processCardData?: Array<{
      image: string;
      heading: string;
      paragraph: React.ReactNode;
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
        <div className="text-center">
          <motion.p
            className="text-xl font-medium text-[#4C8C74] mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {service.processEyebrow || "Our Process"} 
          </motion.p>
          <motion.h2
            className="text-4xl md:text-4xl font-semibold text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {service.processHeading}
          </motion.h2>
          <p className="text-xl text-[#AAAAAA] mt-3">{service.processPara}</p>
        </div>

        {/* Divider */}
        <Divider />

        <ProcessCards service={service} />
      </div>
    </section>
  );
};

export default OurProcess;
