"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import WhyChooseUsMobile from "./WhyChooseUsMobile";
import { motion } from "motion/react";

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
  },
];

const WhyChooseUs = () => {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>(() => cardData.map(() => 0));

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
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Also listen to storage changes (for cross-tab updates)
    window.addEventListener("storage", handleThemeChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("storage", handleThemeChange);
    };
  }, []);

  // Trigger count animations when section comes into view
  useEffect(() => {
    const target = wrapperRef.current;
    if (!target) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          // start per-card counts
          cardData.forEach((card, idx) => {
            const match = String(card.value).match(/^(\d+)/);
            const target = match ? Number(match[1]) : 0;
            const duration = 1200; // ms
            const start = performance.now() + idx * 120; // stagger

            const step = (time: number) => {
              const elapsed = time - start;
              if (elapsed < 0) {
                requestAnimationFrame(step);
                return;
              }
              const progress = Math.min(1, elapsed / duration);
              const current = Math.round(progress * target);
              setCounts((prev) => {
                const next = [...prev];
                next[idx] = current;
                return next;
              });
              if (progress < 1) {
                requestAnimationFrame(step);
              }
            };

            requestAnimationFrame(step);
          });
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    obs.observe(target);

    return () => obs.disconnect();
  }, [hasAnimated]);

  return (
    <div ref={wrapperRef}>
      <WhyChooseUsMobile />
      <section
        className="hidden sm:flex w-full px-5 my-20 justify-center"
        style={{}}
      >
        <div className="flex flex-col lg:flex-row justify-center mx-auto gap-8 lg:gap-5 max-w-7xl w-full flex-wrap">
          {/* First column */}
          <div className="flex flex-col w-full lg:w-[45%]">
            <h2 className="text-[#4C8C74] text-xl mb-1">Why Choose Us?</h2>
            <h2 className="text-white text-3xl lg:text-4xl font-medium mb-5">
              Why Choose Aussie Digital Studio
            </h2>
            <p
              className="font-normal text-sm text-[#AAAAAA]"
              data-text-sm-light
            >
              We focus on modern, thoughtful design backed by clear strategy.
              Every project is planned with purpose, ensuring your digital
              presence not only looks great but performs well. We value clear
              communication, keeping the process simple and transparent from
              start to finish. Our work is built around real results, with
              usability and growth always in mind. Beyond launch, we provide
              ongoing support to help your brand continue to evolve and succeed.
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

          {/* Second column */}
          <div className="grid grid-cols-2 gap-6 w-full lg:w-[38%] max-w-[520px]">
            {/* Mapped Cards */}
            {cardData.map((card, index) => (
              <div
                key={index}
                className={
                  "\n  relative\n  h-[140px]\n  px-6\n  py-6\n  rounded-2xl\n  flex\n  flex-col\n  justify-between\n  bg-no-repeat\n  bg-cover\n  bg-center\n"
                }
                style={{
                  backgroundImage: isDarkMode
                    ? "url('/Home/mini_card_dark.svg')"
                    : "url('/Home/Frame_163_Light.svg')",
                }}
              >
                {/* Numeric value (animated) */}
                <h2 className="text-5xl lg:text-6xl font-regular text-white leading-none tracking-tight">
                  {(() => {
                    const match = String(card.value).match(/^(\d+)/);
                    const suffix = String(card.value).replace(/^\d+/, "");
                    const num = counts[index] ?? 0;
                    return `${num}${suffix}`;
                  })()}
                </h2>

                {/* Title with fade animation */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={hasAnimated ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="text-[#9CA3AF] text-sm lg:text-base"
                >
                  {card.title}
                </motion.p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
