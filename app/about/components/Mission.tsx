"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import MissionMobile from "./MissionMobile";

const Mission = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isContentInView, setIsContentInView] = useState(false);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsContentInView(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <div className="sm:hidden">
        <MissionMobile />
      </div>
      {/* Desktop: unchanged (md and up), responsive below 1250px */}
      <div className="hidden md:flex flex-wrap justify-center items-center min-h-[500px] lg:h-[500px] overflow-hidden gap-6">
        <div className="flex flex-wrap w-full lg:flex-nowrap justify-center items-center">
          <div className="w-full lg:w-auto flex gap-6 justify-center flex-wrap lg:flex-nowrap">
            <div className="w-50 h-72">
              <Image
                src="/About/Rectangle_44.webp"
                alt="Mission Image"
                width={288}
                height={288}
                className="w-full h-full object-cover rounded-[18px]"
              />
            </div>

            <div className="w-50 h-72 lg:-translate-y-10 transform drop-shadow-2xl">
              <Image
                src="/About/Rectangle_45.webp"
                alt="Mission Image"
                width={288}
                height={288}
                className="w-full h-full object-cover rounded-[18px]"
              />
            </div>

            <div className="relative w-50 h-72 overflow-visible">
              <Image
                src="/About/Rectangle_46.webp"
                alt="Mission Image"
                width={288}
                height={288}
                className="w-full h-full object-cover rounded-[18px]"
              />
            </div>
          </div>

          <div className="hidden lg:block w-15"></div>

          <div ref={contentRef} className="flex flex-col w-full lg:w-120 lg:h-72 justify-center px-4 sm:px-6 md:px-10">
            <motion.h2
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6 }}
            >
              Our Mission
            </motion.h2>
            <motion.p
              className="text-[#AAAAAA] font-normal"
              data-text-sm-light
              initial={{ opacity: 0, y: 8 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              We exist to create digital solutions that drive growth. By combining
              clean design with smart strategies, we help brands reach their full
              potential online. Every project is an opportunity to bring your
              vision to life and make your brand stronger, more impactful, and
              ready for the future.
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;