"use client";

import React, { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";

type HeroProps = {
  H: string;
  B: string;
};

const Hero = ({ H, B }: HeroProps) => {
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
    <>
      <div
        className="hidden md:flex w-full h-[60vh] lg:h-[70vh] items-center justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat"
        data-hero-bg-about
        style={{
          backgroundImage: "url('/Hero_Section.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
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
        <div className="flex flex-col items-center justify-end w-full relative z-10 px-4 pb-6">
          {/* ThemeToggle: Stacked above text on small screens, top-right on medium+ */}
          <div className="self-end mb-3 md:mb-0 md:absolute md:top-3 md:right-4 lg:top-4 lg:right-6 -translate-y-15">
            <ThemeToggle />
          </div>

          {/* Heading from props */}
          <h2 className="text-6xl font-medium text-white text-center leading-tight">
            {H}
          </h2>
          {/* P from props as well */}
          <p className="text-center text-md mt-4 mx-30" style={{ color: descriptionColor }}>
            {B}
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
