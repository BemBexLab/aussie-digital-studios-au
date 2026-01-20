"use client";

import React, { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";

type HeroMobileProps = {
  H: string;
  B: string;
};

const HeroMobile = ({ H, B }: HeroMobileProps) => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    // Check if light mode is active
    const checkLightMode = () => {
      setIsLightMode(document.documentElement.classList.contains("light"));
    };
    
    checkLightMode();
    
    // Listen for theme changes
    const observer = new MutationObserver(checkLightMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    
    return () => observer.disconnect();
  }, []);

  const descriptionColor = isLightMode ? '#000000' : '#AAAAAA';

  return (
    <div
      className="md:hidden w-full h-[50vh] sm:h-[60vh] flex items-center justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat"
      data-hero-bg-about
      style={{
        backgroundImage: "url('/Hero_Section.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#1F1F1F",
      }}
    >
      {/* Clouds Video Overlay */}
      <video
        autoPlay
        muted
        loop
        playsInline
        controlsList="nodownload nofullscreen"
        disablePictureInPicture
        className="absolute inset-0 w-full h-full object-cover hero-video-overlay pointer-events-none"
        style={{
          mixBlendMode: "overlay",
          filter: "brightness(2) contrast(1.1)",
        }}
      >
        <source src="/Clouds.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Wrapper */}
      <div className="flex flex-col items-center justify-end w-full relative z-10 px-4 pb-4">
        {/* ThemeToggle */}
        <div className="self-end mb-3 absolute top-3 right-4 -translate-y-15">
          <ThemeToggle />
        </div>

        {/* Heading - Responsive text sizes */}
        <h2 className="text-3xl sm:text-4xl font-medium text-white text-center leading-tight">
          {H}
        </h2>
        {/* Description */}
        <p className="text-center text-xs sm:text-sm mt-2 mx-3" style={{ color: descriptionColor }}>
          {B}
        </p>
      </div>
    </div>
  );
};

export default HeroMobile;
