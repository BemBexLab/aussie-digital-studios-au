"use client";

import Link from "next/link";
import React from "react";
import { motion } from "@/lib/motion";

const Hero = () => {
  const [shouldRenderVideo, setShouldRenderVideo] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      return;
    }

    const enableVideo = () => setShouldRenderVideo(true);

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(enableVideo, { timeout: 1200 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = setTimeout(enableVideo, 300);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {/* Desktop Hero (1250px and up) */}
      <section
        className="hidden min-[1250px]:block h-[695px] w-full relative overflow-hidden hero-bg-section"
        data-hero-bg
        style={{
          backgroundImage: "url('/Hero_Section.webp')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* Theme Toggle - top right, floating */}
        {/* <div className="absolute top-24 right-16 z-50">
          <ThemeToggle />
        </div> */}

        {/* Video Overlay */}
        {shouldRenderVideo ? (
          <div className="absolute inset-0 z-10 flex items-center justify-center p-4 pointer-events-none">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="w-full h-[300px] sm:h-[400px] min-[1250px]:w-full min-[1250px]:h-full object-cover mix-blend-overlay opacity-20 smoke-video"
              aria-hidden="true"
              style={{ position: "absolute", inset: 0, height: "695px" }}
            >
              <source src="/Clouds.mp4" type="video/mp4" />
            </video>
          </div>
        ) : null}

        {/* Top content: text + frame */}
        <div className="flex flex-row justify-center gap-10 h-1/2">
          <div className="uppercase w-[355px] h-1/5 mt-[250px] text-[#808c87] text-[20px] font-semibold text-xl text-left px-0 transform translate-x-18 -translate-y-20">
            Complete Digital Solutions for Australian Businesses Strategy,
            Design, Development, and Growth
          </div>
          <div className="w-[570px] h-full mt-[50px] block">
            <motion.img
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              src="/Home/Frame_557.webp"
              alt="Geometric_Shape"
              className="z-30 w-[570px] h-auto transform translate-x-38 -translate-y-5 -top-5 relative"
            />
          </div>
        </div>

        {/* Main headings */}
        <div className=" mx-auto z-20 justify-center max-w-7xl flex flex-col px-12 w-full mt-[30px]">
          <div className="justify-center items-center flex flex-col">
            <span className="text-white text-3xl font-semibold min-[1420px]:transform min-[1420px]:-translate-x-165">
              We help
            </span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-white uppercase min-[1000px]:text-[90px] min-[1280px]:text-[110px] min-[1450px]:text-[125px] leading-[0.95] font-semibold tracking-tight whitespace-nowrap"
            >
              Australian businesses
            </motion.span>
            <span className="text-white text-2xl font-medium min-[1420px]:transform min-[1420px]:-translate-x-90">
              build websites that actually bring in work.
            </span>
            <motion.div
              className="mt-8"
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 280, damping: 18 }}
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-white/20 bg-[#4C8C74]/35 px-8 py-3 text-sm font-light text-white shadow-[0_8px_30px_rgba(76,140,116,0.22)] backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-300 hover:border-white/35 hover:bg-[#5da888]/45 hover:shadow-[0_16px_40px_rgba(76,140,116,0.34)]"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-[-35%] w-1/3 -translate-x-full -skew-x-12 bg-white/25 blur-md transition-transform duration-700 ease-in-out group-hover:translate-x-[260%]"
                />
                <span className="relative z-10">Get In Touch</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Responsive Hero (smaller than 1250px) */}
      <section
        className="min-[1250px]:hidden relative flex min-h-[50svh] w-full items-center justify-center overflow-hidden px-4 py-20 text-center sm:px-6 sm:py-24 md:px-8 lg:px-10 hero-bg-section"
        data-hero-bg
        style={{
          backgroundImage: "url('/Hero_Section.webp')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Theme Toggle - top right on mobile */}
        {/* <div className="absolute right-4 sm:right-6 top-16 translate-y-10 sm:top-20 z-50">
          <ThemeToggle />
        </div> */}

        {/* Responsive text and image layout */}
        <div className="relative z-20 flex w-full max-w-[1180px] flex-col items-center justify-center gap-10 sm:gap-12 lg:gap-14">
          <div className="order-2 hidden w-full max-w-[min(92vw,620px)] sm:max-w-[min(84vw,700px)] lg:block lg:max-w-[620px]">
            <motion.img
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              src="/Home/Frame_557.webp"
              alt="Geometric_Shape"
              className="mx-auto h-auto w-full object-contain"
            />
          </div>

          <div className="order-1 flex w-full max-w-[22rem] flex-col items-center text-center sm:max-w-[30rem] md:max-w-[42rem] lg:max-w-[52rem]">
            <p className="mb-4 max-w-[18rem] text-sm font-semibold uppercase tracking-[0.18em] text-[#808c87] sm:mb-5 sm:max-w-[22rem] sm:text-base md:mb-6 md:max-w-[26rem] md:text-lg lg:max-w-[30rem]">
              Complete Digital Solutions for Australian Businesses Strategy,
              Design, Development, and Growth
            </p>

            <span className="block text-[clamp(1.375rem,3vw,2.5rem)] font-semibold text-white">
              We help
            </span>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="block text-[clamp(2.6rem,8vw,5.8rem)] font-extrabold uppercase leading-[0.92] tracking-tight text-white sm:whitespace-nowrap"
            >
              Australian businesses
            </motion.span>

            <span className="mt-3 block max-w-[19rem] text-base font-medium leading-relaxed text-white sm:mt-4 sm:max-w-[28rem] sm:text-lg md:max-w-[34rem] md:text-xl lg:text-2xl">
              build websites that actually bring in work.
            </span>

            <motion.div
              className="mt-6 sm:mt-8"
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 280, damping: 18 }}
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-white/20 bg-[#4C8C74]/35 px-6 py-3 text-sm font-light text-white shadow-[0_8px_30px_rgba(76,140,116,0.22)] backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-300 hover:border-white/35 hover:bg-[#5da888]/45 hover:shadow-[0_16px_40px_rgba(76,140,116,0.34)] sm:px-8"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-[-35%] w-1/3 -translate-x-full -skew-x-12 bg-white/25 blur-md transition-transform duration-700 ease-in-out group-hover:translate-x-[260%]"
                />
                <span className="relative z-10">Get In Touch</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
