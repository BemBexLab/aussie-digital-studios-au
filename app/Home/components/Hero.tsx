"use client";

import React from "react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <>
      {/* Desktop Hero (1250px and up) */}
      <section
        className="hidden min-[1250px]:block h-[695px] w-full relative hero-bg-section"
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
        <div className="absolute inset-0 z-10 flex items-center justify-center p-4 pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="w-full h-[300px] sm:h-[400px] min-[1250px]:w-full min-[1250px]:h-full object-cover mix-blend-overlay opacity-20 smoke-video"
            aria-label="Video overlay"
            style={{ position: "absolute", inset: 0, height: "695px" }}
          >
            <source src="/Clouds.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Top content: text + frame */}
        <div className="flex flex-row justify-center gap-10 h-1/2">
          <div className="uppercase w-[355px] h-1/5 mt-[250px] text-[#808c87] text-[20px] font-semibold text-xl text-left px-0 transform translate-x-18 -translate-y-20">
            Complete Digital Solutions for Australian Businesses Strategy,
            Design, Development, and Growth
          </div>
          <div className="w-[700px] h-full mt-[50px] block">
            <motion.img
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              src="/Home/Frame_557.webp"
              alt="Geometric_Shape"
              className="z-30 w-[700px] h-auto transform translate-x-20 -translate-y-10 -top-5 relative"
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
          </div>
        </div>
      </section>

      {/* Responsive Hero (smaller than 1250px) */}
      <section
        className="min-[1250px]:hidden relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden px-4 py-20 text-center sm:px-6 sm:py-24 md:px-8 lg:px-10 hero-bg-section"
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
          <div className="order-2 w-full max-w-[min(92vw,620px)] sm:max-w-[min(84vw,700px)] lg:max-w-[620px]">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
