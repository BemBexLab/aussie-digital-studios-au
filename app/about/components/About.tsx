"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import AboutMobile from "./AboutMobile";

const About = () => {
  const [isLight, setIsLight] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [isHeaderInView, setIsHeaderInView] = useState(false);
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const [isBodyInView, setIsBodyInView] = useState(false);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [counts, setCounts] = useState<number[]>([0, 0, 0]);
  const [hasCounted, setHasCounted] = useState(false);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      setIsLight(document.documentElement.classList.contains("light"));
    };

    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);
  React.useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  React.useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsBodyInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Count-up animation for stats when statsRef enters view
  React.useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!hasCounted) {
            startCounting();
            setHasCounted(true);
          }
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [hasCounted]);

  const startCounting = () => {
    const targets = [569, 1890, 250];
    const duration = 1600; // ms

    targets.forEach((target, idx) => {
      const start = performance.now();

      const step = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutQuad
        const eased = 1 - (1 - progress) * (1 - progress);
        const current = Math.round(target * eased);
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
  };

  return (
    <>
      <AboutMobile />
      <section className="hidden md:block py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 px-4 md:px-6 mb-12">
          {/* Left Column */}
          <div ref={headerRef} className="md:w-2/5">
            <motion.p
              className="text-[#4C8C74] text-base sm:text-lg font-medium mb-2"
              initial={{ opacity: 0, y: 8 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: 0.6 }}
            >
              About Us
            </motion.p>
            <motion.h2
              className="text-white text-3xl sm:text-4xl md:text-4xl font-semibold"
              initial={{ opacity: 0, y: 10 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              Our Story
            </motion.h2>
          </div>

          {/* Right Column */}
          <div ref={bodyRef} className="md:w-[650px]">
            <motion.p
              className="text-[#AAAAAA] text-base sm:text-sm leading-relaxed"
              data-text-sm-light
              initial={{ opacity: 0, y: 8 }}
              animate={isBodyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: 0.6, delay: 0.06 }}
            >
              Aussie Digital Studios was born from a passion for design and a
              love for helping businesses grow online. Based in Australia, we
              blend modern design, digital strategy, and creative thinking to
              build unique experiences that help brands stand out. We understand
              that each business is different, which is why we take a tailored
              approach to every project. Our goal is simple: deliver results
              that make a real difference.
            </motion.p>
          </div>
        </div>

        {/* Image + Stats Section */}
        <div className="px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              {/* Main Image — 3 columns */}
              <div className="lg:col-span-3 relative">
                <Image
                  src="/about/Rectangle_42.webp"
                  alt="About Us Image"
                  width={800}
                  height={900}
                  className="w-full h-[327px] max-h-[700px] rounded-lg shadow-lg object-cover"
                />
                {/* Decorative shape */}
                <img
                  src="/Geometric_Shape_Silver.webp"
                  alt="Decorative shape"
                  className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 w-26 sm:w-20 md:w-40 pointer-events-none"
                />
              </div>

              {/* Stats Card — 2 columns */}
              <div
                className="lg:col-span-2 w-full h-auto rounded-lg bg-[#212423] shadow-lg p-6"
                data-about-stat-card
                style={{
                  backgroundImage: "url('/About/About_Section_img_02.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="space-y-5">
                      {/* Stat 1 */}
                      <div ref={statsRef}>
                        <h3
                          className="text-3xl sm:text-4xl font-medium"
                          style={{ color: isLight ? "#417AB8" : "#FBBF24" }}
                        >
                          {counts[0].toLocaleString()}+
                        </h3>
                        <p className="text-white text-base sm:text-lg font-extralight mt-1">
                          Happy Customers
                        </p>
                        <hr className="border-t border-gray-600 mt-3 w-4/5" />
                      </div>

                      {/* Stat 2 */}
                      <div>
                        <h3
                          className="text-3xl sm:text-4xl font-medium"
                          style={{ color: isLight ? "#417AB8" : "#FBBF24" }}
                        >
                          {counts[1].toLocaleString()}+
                        </h3>
                        <p className="text-white text-base sm:text-lg font-extralight mt-1">
                          Issues Solved
                        </p>
                        <hr className="border-t border-gray-600 mt-3 w-4/5" />
                      </div>

                      {/* Stat 3 */}
                      <div>
                        <h3
                          className="text-3xl sm:text-4xl font-medium"
                          style={{ color: isLight ? "#417AB8" : "#FBBF24" }}
                        >
                          {counts[2].toLocaleString()}+
                        </h3>
                        <p className="text-white text-base sm:text-lg font-extralight mt-1">
                          Finished Projects
                        </p>
                      </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
