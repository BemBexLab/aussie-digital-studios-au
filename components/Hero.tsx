"use client";

import React from "react";
import { motion } from "motion/react";
import ThemeToggle from "@/components/ThemeToggle";
import HeroMobile from "./HeroMobile";

type HeroProps = {
  H: string;
};

const Hero = ({ H }: HeroProps) => {
  const headingRef = React.useRef<HTMLDivElement | null>(null);
  const [isHeadingInView, setIsHeadingInView] = React.useState(false);

  React.useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeadingInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <>
      {/* Mobile View */}
      <div className="md:hidden">
        <HeroMobile H={H} />
      </div>

      {/* Desktop View */}
      <div
        className="hidden md:flex w-full h-[60vh] lg:h-[70vh] items-center justify-center relative overflow-hidden"
        data-hero-bg-about
        style={{
          backgroundImage: "url('/About/About Hero BG.png')",
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
      <div ref={headingRef} className="flex flex-col items-center justify-end w-full relative z-10 px-4 pb-6">
        {/* ThemeToggle: Stacked above text on small screens, top-right on medium+ */}
        {/* <div className="self-end mb-3 md:mb-0 md:absolute md:top-3 md:right-4 lg:top-4 lg:right-6 -translate-y-10">
          <ThemeToggle />
        </div> */}

        {/* Heading from props */}
        <motion.h2
          className="text-6xl md:text-7xl lg:text-[120px] font-medium text-white text-center leading-tight uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.7 }}
        >
          {H}
        </motion.h2>
      </div>
    </div>
    </>
  );
};

export default Hero;
