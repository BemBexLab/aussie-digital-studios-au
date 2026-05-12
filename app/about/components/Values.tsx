"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import ValuesMobile from "./ValuesMobile";
import { useThemeMode } from "@/lib/useThemeMode";

const Values = () => {
  const { isLightMode: isLight } = useThemeMode();
  const mobileHeadingRef = useRef<HTMLDivElement | null>(null);
  const desktopHeadingRef = useRef<HTMLDivElement | null>(null);
  const [isMobileHeadingInView, setIsMobileHeadingInView] = useState(false);
  const [isDesktopHeadingInView, setIsDesktopHeadingInView] = useState(false);

  useEffect(() => {
    const el = mobileHeadingRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMobileHeadingInView(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = desktopHeadingRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsDesktopHeadingInView(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const backgroundImage = isLight
    ? "url(/About/Frame_163_Light.svg)"
    : "url(/About/values_card_dark.webp)";

  return (
    <>
      <div className="sm:hidden">
        <ValuesMobile />
      </div>
      <div className="mx-auto hidden w-full max-w-7xl flex-col px-4 py-16 sm:flex sm:px-6 md:flex-row md:items-start md:gap-8 md:px-8 lg:gap-10 lg:px-10 xl:gap-14">
      {/* Left Content */}
      <div className="flex w-full flex-col">
        {/* Responsive (sm to md): show cards and image below */}
        <div ref={mobileHeadingRef} className="px-2 md:hidden">
          <motion.p
            className="mb-4 mt-8 text-lg font-medium text-[#4C8C74] sm:mt-10"
            initial={{ opacity: 0, y: 8 }}
            animate={isMobileHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.6 }}
          >
            Our Values
          </motion.p>
          <motion.h2
            className="mb-5 text-3xl font-bold text-white sm:text-4xl"
            initial={{ opacity: 0, y: 10 }}
            animate={isMobileHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            Our Core Values
          </motion.h2>

          <div className="flex flex-col gap-4">
            {/* Card 1 */}
            <div
              className="group relative rounded-2xl w-full border border-white/10 p-6 transition overflow-hidden"
              data-values-card
              style={{
                backgroundImage: backgroundImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="flex flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 50 50" fill="none">
                  <path d="M10.3725 20.1773C6.23526 18.5224 4.16663 17.6949 4.16663 16.6667C4.16663 15.6385 6.23526 14.811 10.3725 13.1561L16.2235 10.8157C20.3608 9.16083 22.4294 8.33337 25 8.33337C27.5705 8.33337 29.6392 9.16083 33.7764 10.8157L39.6274 13.1561C43.7647 14.811 45.8333 15.6385 45.8333 16.6667C45.8333 17.6949 43.7647 18.5224 39.6274 20.1773L33.7764 22.5177C29.6392 24.1726 27.5705 25 25 25C22.4294 25 20.3608 24.1726 16.2235 22.5177L10.3725 20.1773Z" stroke="#4C8C74" strokeWidth="2" />
                  <path d="M45.8333 25C45.8333 25 43.7647 26.8557 39.6274 28.5106L33.7764 30.851C29.6392 32.5059 27.5705 33.3333 25 33.3333C22.4294 33.3333 20.3608 32.5059 16.2235 30.851L10.3725 28.5106C6.23526 26.8557 4.16663 25 4.16663 25" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                  <path d="M45.8333 33.3334C45.8333 33.3334 43.7647 35.1891 39.6274 36.844L33.7764 39.1843C29.6392 40.8393 27.5705 41.6667 25 41.6667C22.4294 41.6667 20.3608 40.8393 16.2235 39.1843L10.3725 36.844C6.23526 35.1891 4.16663 33.3334 4.16663 33.3334" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <div className="mt-4 flex flex-col">
                  <h2 className="text-xl" style={{ color: isLight ? "#417AB8" : "#FBBF24" }}>Creativity</h2>
                  <p className="font-light">We believe in innovative solutions that stand out.</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="group relative rounded-2xl w-full border border-white/10 p-6 transition overflow-hidden"
              data-values-card
              style={{
                backgroundImage: backgroundImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="flex flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 50 50" fill="none">
                  <circle cx="25" cy="12.5" r="8.33333" stroke="#4C8C74" strokeWidth="2" />
                  <path d="M37.5 18.75C40.9518 18.75 43.75 16.4182 43.75 13.5417C43.75 10.6652 40.9518 8.33337 37.5 8.33337" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12.5 18.75C9.04822 18.75 6.25 16.4182 6.25 13.5417C6.25 10.6652 9.04822 8.33337 12.5 8.33337" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                  <ellipse cx="25" cy="35.4167" rx="12.5" ry="8.33333" stroke="#4C8C74" strokeWidth="2" />
                  <path d="M41.6666 39.5833C45.3213 38.7818 47.9166 36.7522 47.9166 34.375C47.9166 31.9977 45.3213 29.9681 41.6666 29.1666" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                  <path d="M8.33337 39.5833C4.67869 38.7818 2.08337 36.7522 2.08337 34.375C2.08337 31.9977 4.67869 29.9681 8.33337 29.1666" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <div className="mt-4 flex flex-col">
                  <h2 className="text-xl" style={{ color: "#417AB8" }}>Reliability</h2>
                  <p className="font-light">We’re committed to delivering results you can count on.</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="group relative rounded-2xl w-full border border-white/10 p-6 transition overflow-hidden"
              data-values-card
              style={{
                backgroundImage: backgroundImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="flex flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 50 50" fill="none">
                  <path d="M4.16663 25C4.16663 15.179 4.16663 10.2686 7.2176 7.2176C10.2686 4.16663 15.179 4.16663 25 4.16663C34.8209 4.16663 39.7314 4.16663 42.7823 7.2176C45.8333 10.2686 45.8333 15.179 45.8333 25C45.8333 34.8209 45.8333 39.7314 42.7823 42.7823C39.7314 45.8333 34.8209 45.8333 25 45.8333C15.179 45.8333 10.2686 45.8333 7.2176 42.7823C4.16663 39.7314 4.16663 34.8209 4.16663 25Z" stroke="#4C8C74" strokeWidth="2" />
                  <path d="M14.5834 29.1667L19.3602 24.3898C20.1738 23.5763 21.4929 23.5763 22.3065 24.3898L25.6102 27.6936C26.4238 28.5072 27.7429 28.5072 28.5565 27.6936L35.4167 20.8334M35.4167 20.8334V26.0417M35.4167 20.8334H30.2084" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <div className="mt-4 flex flex-col">
                  <h2 className="text-xl" style={{ color: isLight ? "#417AB8" : "#FBBF24" }}>Australian-driven</h2>
                  <p className="font-light">We take pride in providing a local, personalised experience.</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div
              className="group relative rounded-2xl w-full border border-white/10 p-6 transition overflow-hidden"
              data-values-card
              style={{
                backgroundImage: backgroundImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="flex flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 50 50" fill="none">
                  <path d="M4.16663 25C4.16663 15.179 4.16663 10.2686 7.2176 7.2176C10.2686 4.16663 15.179 4.16663 25 4.16663C34.8209 4.16663 39.7314 4.16663 42.7823 7.2176C45.8333 10.2686 45.8333 15.179 45.8333 25C45.8333 34.8209 45.8333 39.7314 42.7823 42.7823C39.7314 45.8333 34.8209 45.8333 25 45.8333C15.179 45.8333 10.2686 45.8333 7.2176 42.7823C4.16663 39.7314 4.16663 34.8209 4.16663 25Z" stroke="#4C8C74" strokeWidth="2" />
                  <path d="M14.5834 37.5V18.75" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                  <path d="M25 37.5V12.5" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                  <path d="M35.4166 37.5V27.0834" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <div className="mt-4 flex flex-col">
                  <h2 className="text-xl" style={{ color: isLight ? "#417AB8" : "#FBBF24" }}>Long-term</h2>
                  <p className="font-light">Our goal is to build lasting relationships and help your brand grow.</p>
                </div>
              </div>
            </div>

            {/* Mobile-only image: centered */}
            <div className="mt-16 flex justify-center sm:mt-20">
              <Image 
                src="/About/Rectangle 43.webp"
                alt="Values Illustration"
                width={500}
                height={200}
                className="h-auto w-full max-w-md"
              />
            </div>
          </div>
        </div>

        {/* Desktop: original layout (unchanged for 1250px+, responsive below) */}
        <div ref={desktopHeadingRef} className="hidden w-full md:block">
          <motion.p
            className="mb-4 mt-8 text-lg font-medium text-[#4C8C74] lg:mt-12 xl:mt-16"
            initial={{ opacity: 0, y: 8 }}
            animate={isDesktopHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.6 }}
          >
            Our Values
          </motion.p>
          <motion.h2
            className="mb-5 text-4xl font-bold text-white lg:text-5xl"
            initial={{ opacity: 0, y: 10 }}
            animate={isDesktopHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            Our Core Values
          </motion.h2>

          {/* First Row */}
          <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-2" style={{ justifyContent: "flex-start" }}>

            {/* Card 1 */}
            <div className="group relative w-full rounded-2xl border border-white/10 p-6 transition overflow-hidden xl:max-w-[280px]" data-values-card style={{ backgroundImage: backgroundImage, backgroundSize: "cover", backgroundPosition: "center", backdropFilter: "blur(10px)" }}>
              {/* ... same as before ... */}
              <div className="flex flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 50 50" fill="none">
                  <path d="M10.3725 20.1773C6.23526 18.5224 4.16663 17.6949 4.16663 16.6667C4.16663 15.6385 6.23526 14.811 10.3725 13.1561L16.2235 10.8157C20.3608 9.16083 22.4294 8.33337 25 8.33337C27.5705 8.33337 29.6392 9.16083 33.7764 10.8157L39.6274 13.1561C43.7647 14.811 45.8333 15.6385 45.8333 16.6667C45.8333 17.6949 43.7647 18.5224 39.6274 20.1773L33.7764 22.5177C29.6392 24.1726 27.5705 25 25 25C22.4294 25 20.3608 24.1726 16.2235 22.5177L10.3725 20.1773Z" stroke="#4C8C74" strokeWidth="2" />
                  <path d="M45.8333 25C45.8333 25 43.7647 26.8557 39.6274 28.5106L33.7764 30.851C29.6392 32.5059 27.5705 33.3333 25 33.3333C22.4294 33.3333 20.3608 32.5059 16.2235 30.851L10.3725 28.5106C6.23526 26.8557 4.16663 25 4.16663 25" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                  <path d="M45.8333 33.3334C45.8333 33.3334 43.7647 35.1891 39.6274 36.844L33.7764 39.1843C29.6392 40.8393 27.5705 41.6667 25 41.6667C22.4294 41.6667 20.3608 40.8393 16.2235 39.1843L10.3725 36.844C6.23526 35.1891 4.16663 33.3334 4.16663 33.3334" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <div className="mt-4 flex flex-col">
                  <h2 className="text-xl" style={{ color: isLight ? "#417AB8" : "#FBBF24" }}>Creativity</h2>
                  <p className="font-light">We believe in innovative solutions that stand out.</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative w-full rounded-2xl border border-white/10 p-6 transition overflow-hidden xl:max-w-[280px]" data-values-card style={{ backgroundImage: backgroundImage, backgroundSize: "cover", backgroundPosition: "center", backdropFilter: "blur(10px)" }}>
              {/* ... same as before ... */}
              <div className="flex flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 50 50" fill="none">
                  <circle cx="25" cy="12.5" r="8.33333" stroke="#4C8C74" strokeWidth="2" />
                  <path d="M37.5 18.75C40.9518 18.75 43.75 16.4182 43.75 13.5417C43.75 10.6652 40.9518 8.33337 37.5 8.33337" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12.5 18.75C9.04822 18.75 6.25 16.4182 6.25 13.5417C6.25 10.6652 9.04822 8.33337 12.5 8.33337" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                  <ellipse cx="25" cy="35.4167" rx="12.5" ry="8.33333" stroke="#4C8C74" strokeWidth="2" />
                  <path d="M41.6666 39.5833C45.3213 38.7818 47.9166 36.7522 47.9166 34.375C47.9166 31.9977 45.3213 29.9681 41.6666 29.1666" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                  <path d="M8.33337 39.5833C4.67869 38.7818 2.08337 36.7522 2.08337 34.375C2.08337 31.9977 4.67869 29.9681 8.33337 29.1666" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <div className="mt-4 flex flex-col">
                  <h2 className="text-xl" style={{ color: isLight ? "#417AB8" : "#FBBF24" }}>Reliability</h2>
                  <p className="font-light">We’re committed to delivering results you can count on.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-2" style={{ justifyContent: "flex-start" }}>

            {/* Card 3 */}
            <div className="group relative w-full rounded-2xl border border-white/10 p-6 transition overflow-hidden xl:max-w-[300px]" data-values-card style={{ backgroundImage: backgroundImage, backgroundSize: "cover", backgroundPosition: "center", backdropFilter: "blur(10px)" }}>
              {/* ... same as before ... */}
              <div className="flex flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 50 50" fill="none">
                  <path d="M4.16663 25C4.16663 15.179 4.16663 10.2686 7.2176 7.2176C10.2686 4.16663 15.179 4.16663 25 4.16663C34.8209 4.16663 39.7314 4.16663 42.7823 7.2176C45.8333 10.2686 45.8333 15.179 45.8333 25C45.8333 34.8209 45.8333 39.7314 42.7823 42.7823C39.7314 45.8333 34.8209 45.8333 25 45.8333C15.179 45.8333 10.2686 45.8333 7.2176 42.7823C4.16663 39.7314 4.16663 34.8209 4.16663 25Z" stroke="#4C8C74" strokeWidth="2" />
                  <path d="M14.5834 29.1667L19.3602 24.3898C20.1738 23.5763 21.4929 23.5763 22.3065 24.3898L25.6102 27.6936C26.4238 28.5072 27.7429 28.5072 28.5565 27.6936L35.4167 20.8334M35.4167 20.8334V26.0417M35.4167 20.8334H30.2084" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <div className="mt-4 flex flex-col">
                  <h2 className="text-xl" style={{ color: isLight ? "#417AB8" : "#FBBF24" }}>Australian-driven</h2>
                  <p className="font-light">We take pride in providing a local, personalised experience.</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative w-full rounded-2xl border border-white/10 p-6 transition overflow-hidden xl:max-w-[300px]" data-values-card style={{ backgroundImage: backgroundImage, backgroundSize: "cover", backgroundPosition: "center", backdropFilter: "blur(10px)" }}>
              {/* ... same as before ... */}
              <div className="flex flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 50 50" fill="none">
                  <path d="M4.16663 25C4.16663 15.179 4.16663 10.2686 7.2176 7.2176C10.2686 4.16663 15.179 4.16663 25 4.16663C34.8209 4.16663 39.7314 4.16663 42.7823 7.2176C45.8333 10.2686 45.8333 15.179 45.8333 25C45.8333 34.8209 45.8333 39.7314 42.7823 42.7823C39.7314 45.8333 34.8209 45.8333 25 45.8333C15.179 45.8333 10.2686 45.8333 7.2176 42.7823C4.16663 39.7314 4.16663 34.8209 4.16663 25Z" stroke="#4C8C74" strokeWidth="2" />
                  <path d="M14.5834 37.5V18.75" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                  <path d="M25 37.5V12.5" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                  <path d="M35.4166 37.5V27.0834" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <div className="mt-4 flex flex-col">
                  <h2 className="text-xl" style={{ color: isLight ? "#417AB8" : "#FBBF24" }}>Long-term</h2>
                  <p className="font-light">Our goal is to build lasting relationships and help your brand grow.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop-only image (hidden on mobile) */}
      <Image 
        src="/About/Rectangle 43.webp"
        alt="Values Illustration"
        width={800}
        height={700}
        className="mt-16 hidden h-auto w-full max-w-[320px] flex-shrink-0 self-center md:block lg:mt-24 lg:max-w-[420px] xl:max-w-[500px]"
      />
    </div>
    </>
  );
};

export default Values;
