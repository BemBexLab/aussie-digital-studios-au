import ThemeToggle from "@/components/ThemeToggle";
import React from "react";

const Hero = () => {
  return (
    <>
      {/* Desktop Hero (md and up) */}
      <section
        className="hidden md:block h-[695px] w-full relative hero-bg-section"
        data-hero-bg
        style={{
          backgroundImage: "url('/Hero_Section.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Theme Toggle - top right, floating */}
        <div className="absolute top-24 right-16 z-50">
          <ThemeToggle />
        </div>

        {/* Video Overlay */}
        <div className="absolute inset-0 z-10 flex items-center justify-center p-4 pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[300px] sm:h-[400px] md:w-full md:h-full object-cover mix-blend-overlay opacity-20 smoke-video"
            aria-label="Video overlay"
            style={{ position: "absolute", inset: 0, height: "695px" }}
          >
            <source src="/Clouds.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Top content: text + frame */}
        <div className="flex flex-row justify-center gap-5 h-1/2">
          <div className="w-[350px] h-1/5 mt-[250px] text-[#808c87] text-xl text-left px-0">
            Clean visuals, smart strategy and creative work that makes an
            impact.
          </div>
          <div className="w-[700px] h-full mt-[50px] block">
            <img
              src="/Home/Frame_557.png"
              alt="Geometric_Shape"
              className="z-30 w-[700px] h-auto transform translate-x-20 -translate-y-10 -top-5 relative"
            />
          </div>
        </div>

        {/* Main headings */}
        <div className=" mx-auto z-20 justify-center flex flex-col px-12 w-full mt-[30px]">
          <div className="justify-center items-center flex flex-col">
            <span className="text-white text-3xl font-semibold mb-2 transform -translate-x-128">
              Modern
            </span>
            <span className="text-white text-[150px] leading-[0.95] font-extrabold tracking-tight mb-2 whitespace-nowrap">
              DIGITAL DESIGN
            </span>
            <span className="text-white text-2xl font-medium mt-2 transform -translate-x-105">
              that helps your brand grow.
            </span>
          </div>
        </div>
      </section>

      {/* Mobile Hero (smaller than md) */}
      <section
        className="md:hidden w-full relative h-[800px] flex flex-col items-center justify-center text-center px-6 hero-bg-section"
        data-hero-bg
        style={{
          backgroundImage: "url('/Hero_Section.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Theme Toggle - top right on mobile */}
        <div className="absolute right-6 bottom-160 top-auto z-50">
          <ThemeToggle />
        </div>

        {/* Video on mobile mode */}
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

        {/* Mobile-friendly text */}
        <div className="relative z-20 space-y-4 mt-16">
          <br />
          <br />
          <span className="text-white text-2xl font-semibold block">
            Modern
          </span>
          <span className="text-white text-4xl md:text-5xl font-extrabold tracking-tight block">
            DIGITAL DESIGN
          </span>
          <span className="text-white text-lg font-medium block max-w-xs mx-auto">
            that helps your brand grow.
          </span>
          <p className="text-[#808c87] text-base mt-6 max-w-xs mx-auto">
            Clean visuals, smart strategy and creative work that makes an
            impact.
          </p>
          <img
            src="/Home/Frame_557.png"
            alt="Geometric_Shape"
            className="z-30 w-[750px] h-auto mt-6 transform -translate-x-8 mx-auto"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
