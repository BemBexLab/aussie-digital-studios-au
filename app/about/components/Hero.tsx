import React from "react";
import ThemeToggle from "@/components/ThemeToggle";

const Hero = () => {
  return (
    <div
      className="w-full h-[60vh] md:h-[70vh] flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/About/aboutherobg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Clouds Video Overlay */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          mixBlendMode: "overlay",
          filter: "brightness(2) contrast(1.1)",
        }}
      >
        <source src="/Clouds.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Wrapper */}
      <div className="flex flex-col items-center justify-end w-full relative z-10 px-4 pb-6">
        {/* ThemeToggle: Stacked above text on small screens, top-right on medium+ */}
        <div className="self-end mb-3 md:mb-0 md:absolute md:top-3 md:right-4 lg:top-4 lg:right-6">
          <ThemeToggle />
        </div>

        {/* ABOUT US text */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[120px] font-medium text-white whitespace-nowrap">
          ABOUT US
        </h2>
      </div>
    </div>
  );
};

export default Hero;