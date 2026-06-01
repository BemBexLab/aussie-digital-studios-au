"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import WhyChooseUsMobile from "./WhyChooseUsMobile";
import { motion } from "@/lib/motion";
import { useThemeMode } from "@/lib/useThemeMode";

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
  const { isDarkMode } = useThemeMode();
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState<number[]>(() => cardData.map(() => 0));

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
      { threshold: 0.15 },
    );

    obs.observe(target);

    return () => obs.disconnect();
  }, [hasAnimated]);

  return (
    <div ref={wrapperRef}>
      <WhyChooseUsMobile />
      <section
        className="my-20 hidden w-full justify-center px-4 sm:flex sm:px-6 lg:px-8"
      >
        <div className="mx-auto flex w-full max-w-8xl flex-col gap-8 lg:flex-row lg:items-start lg:justify-center lg:gap-6">
          {/* First column */}
          <div className="flex w-full max-w-[44rem] flex-col lg:w-[46%] lg:max-w-none">
            <h2 className="mb-1 text-lg text-[#4C8C74] md:text-xl">
              Why Work With Us
            </h2>
            <h2 className="mb-5 text-3xl font-medium leading-tight text-white md:text-4xl lg:text-[2.5rem]">
              Honestly? Because we don't disappear after launch.
            </h2>
            <ul className="list-inside space-y-3 text-sm font-normal leading-relaxed text-[#AAAAAA] md:text-base">
              <li>A lot of agencies are great at winning the job and average at everything after. We've structured our whole business around the opposite. Your site goes live, and that's when we start paying attention to what's working, what is not, and what needs to change.</li>
              <li>We also don't outsource. Every person working on your project is part of our team. You will deal with the same people from the first call to the final handover, and beyond if you need ongoing support.</li>
              <li>We are not going to promise you page one of Google by next Tuesday. What we will do is build your website the right way, optimise it properly, and keep improving it over time. That's what actually works.</li>
              <li>We have done it for new businesses finding their feet, for established brands trying to break into new parts of the market, and for local Australian businesses that wanted to compete well beyond their postcode.</li>
            </ul>
            <div className="mt-2 flex flex-row">
              <button
                onClick={() => router.push("/contact")}
                className="group mt-4 inline-flex h-[42px] w-full max-w-[168px] items-center justify-center rounded-full bg-teal-500 px-4 text-sm text-white transition-all hover:bg-blue-400 sm:w-[150px]"
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
          <div className="grid w-full max-w-[640px] grid-cols-1 gap-4 sm:grid-cols-2 lg:w-[40%] lg:max-w-[520px]">
            {/* Mapped Cards */}
            {cardData.map((card, index) => (
              <div
                key={index}
                className={
                  "relative flex min-h-[138px] flex-col justify-between rounded-2xl bg-cover bg-center bg-no-repeat px-5 py-5 sm:min-h-[150px] sm:px-6 sm:py-6"
                }
                style={{
                  backgroundImage: isDarkMode
                    ? "url('/Home/mini_card_dark.svg')"
                    : "url('/Home/Frame_163_Light.svg')",
                }}
              >
                {/* Numeric value (animated) */}
                <h2 className="text-4xl leading-none tracking-tight text-white sm:text-5xl lg:text-6xl">
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
                  className="text-sm text-[#9CA3AF] sm:text-base"
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
