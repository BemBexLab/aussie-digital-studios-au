"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "@/lib/motion";
import HeroMobile from "@/components/HeroMobile";

type HeroProps = {
  H: string;
};

const Hero = ({ H }: HeroProps) => {
  const headingRef = useRef<HTMLDivElement | null>(null);
  const [isHeadingInView, setIsHeadingInView] = useState(false);
  const [shouldRenderVideo, setShouldRenderVideo] = useState(false);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeadingInView(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
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
      {/* Mobile View */}
      <div className="md:hidden">
        <HeroMobile H={H} shouldRenderVideo={shouldRenderVideo} />
      </div>

      {/* Desktop View */}
      <div
        className="relative hidden w-full overflow-hidden md:flex md:min-h-[50vh] md:items-end md:justify-center md:pt-24 lg:min-h-[60vh] lg:pt-32"
        data-hero-bg-about
      >
      <Image
        src="/About/About Hero BG.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Clouds Video Overlay */}
      {shouldRenderVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          controlsList="nodownload nofullscreen"
          disablePictureInPicture
          className="absolute inset-0 w-full h-full object-cover hero-video-overlay pointer-events-none"
          aria-hidden="true"
          style={{
            mixBlendMode: "overlay",
            filter: "brightness(2) contrast(1.1)",
          }}
        >
          <source src="/Clouds.mp4" type="video/mp4" />
        </video>
      ) : null}

      {/* Content Wrapper */}
      <div
        ref={headingRef}
        className="relative z-10 flex w-full flex-col items-center justify-end px-4 pb-8 lg:pb-10"
      >
        {/* ThemeToggle: Stacked above text on small screens, top-right on medium+ */}
        {/* <div className="self-end mb-3 md:mb-0 md:absolute md:top-3 md:right-4 lg:top-4 lg:right-6 translate-y-20">
          <ThemeToggle />
        </div> */}

        {/* Heading from props */}
        <motion.h2
          className="text-center text-6xl font-medium leading-tight text-white uppercase md:text-7xl lg:text-[120px]"
          initial={{ opacity: 0, y: 10 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
        >
          {H}
        </motion.h2>
      </div>
    </div>
    </>
  );
};

export default Hero;
