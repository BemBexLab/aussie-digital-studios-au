"use client";

import React, { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

type HeroProps = {
  H: string;
  B: string;
};

const Hero = ({ H, B }: HeroProps) => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const checkLightMode = () => {
      setIsLightMode(document.documentElement.classList.contains("light"));
    };

    checkLightMode();

    const observer = new MutationObserver(checkLightMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const descriptionColor = isLightMode ? "#111111" : "#b0b5b2";

  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
      data-hero-bg-about
      style={{
        backgroundImage: "url('/Hero_Section.webp')",
        backgroundColor: "#1F1F1F",
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        controlsList="nodownload nofullscreen"
        disablePictureInPicture
        className="pointer-events-none absolute inset-0 h-full w-full object-cover hero-video-overlay"
        style={{
          mixBlendMode: "overlay",
          filter: "brightness(1.8) contrast(1.1)",
        }}
      >
        <source src="/Clouds.mp4" type="video/mp4" />
      </video>

      <div className="z-10 mx-auto flex min-h-[42svh] w-full max-w-6xl flex-col justify-center px-4 text-center sm:px-6 md:px-8 lg:min-h-[55vh] lg:px-10">
        {/* <div className="hidden self-end md:absolute md:right-4 md:top-4 md:block lg:right-6 lg:top-5">
          <ThemeToggle />
        </div> */}

        <h2 className="mx-auto max-w-5xl text-3xl font-medium leading-[1.05] text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          {H}
        </h2>
        <p
          className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed sm:text-base md:mt-5 md:text-lg"
          style={{ color: descriptionColor }}
        >
          {B}
        </p>
      </div>
    </section>
  );
};

export default Hero;
