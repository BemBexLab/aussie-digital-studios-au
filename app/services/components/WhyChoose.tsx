"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import WhyChooseMobile from "./WhyChooseMobile";

const WhyChoose = () => {
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
      <WhyChooseMobile />
      <section className="hidden sm:flex w-full justify-center py-16">
        <div className="flex flex-col lg:flex-row items-center max-w-7xl w-full mx-auto px-6 gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <Image
              className="w-full h-auto rounded-2xl object-cover"
              src="/services/Rectangle_52.webp"
              alt="Why Choose Us"
              width={600}
              height={400}
            />
          </div>

          {/* Text Content Section */}
          <div ref={contentRef} className="w-full lg:w-1/2 flex flex-col">
            <motion.h2
              className="text-4xl lg:text-5xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 10 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6 }}
            >
              Why Choose Aussie Digital Studios
            </motion.h2>
            <motion.div
              className="mt-6 space-y-4"
              initial={{ opacity: 0, y: 8 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              <p className="text-base text-gray-300 leading-relaxed">
                At AussieDigitalStudios, we deliver more than just websites. We
                create complete digital experiences built around strategy, design
                and performance. Our team manages everything from user experience
                planning and custom design to development, optimisation and ongoing
                support. The process is clear, collaborative and focused on
                outcomes, with no unnecessary complexity.
              </p>
              <p className="text-base text-gray-300 leading-relaxed">
                We blend creativity with smart digital thinking to build websites that do
                more than look good. Every project is designed to support growth,
                improve engagement and strengthen your brand. Your business doesn't
                just need an online presence. It needs a digital foundation that
                works, and that's exactly what we build.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChoose;