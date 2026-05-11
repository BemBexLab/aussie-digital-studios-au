"use client";

import ThemeToggle from "@/components/ThemeToggle";
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
        className="min-[1250px]:hidden w-full relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 hero-bg-section"
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

        {/* Video overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover mix-blend-overlay opacity-10 smoke-video"
            aria-label="Video overlay"
          >
            <source src="/Clouds.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Responsive text and image layout */}
        <div className="relative z-20 space-y-4 sm:space-y-6 md:space-y-8 mt-12 sm:mt-16 md:mt-20 w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl">
          <br className="hidden sm:block" />
          <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold block">
            We help
          </span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight block leading-tight"
          >
            Australian businesses
          </motion.span>
          <span className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium block">
            build websites that actually bring in work.
          </span>
          <p className="text-[#808c87] text-sm sm:text-base md:text-lg mt-4 sm:mt-6 md:mt-8">
            Complete Digital Solutions for Australian Businesses Strategy,
            Design, Development, and Growth
          </p>
          <motion.img
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            src="/Home/Frame_557.webp"
            alt="Geometric_Shape"
            className="z-30 w-full sm:w-[400px] md:w-[550px] h-auto mt-4 sm:mt-6 md:mt-8 mx-auto object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
