"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import WhyChooseMobile from "./WhyChooseMobile";

type WhyChooseData = {
  image: string;
  heading: React.ReactNode;
  paragraphs: React.ReactNode[];
};

type WhyChooseProps = {
  data?: WhyChooseData;
};

const WhyChoose = ({ data }: WhyChooseProps) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isContentInView, setIsContentInView] = useState(false);

  if (!data) {
    return null;
  }

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
      <WhyChooseMobile data={data} />
      <section className="hidden sm:flex w-full justify-center py-16">
        <div className="flex flex-col lg:flex-row items-center max-w-7xl w-full mx-auto px-6 gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <Image
              className="w-full h-full rounded-2xl object-cover"
              src={data.image}
              alt="Why Choose Us"
              width={600}
              height={400}
            />
          </div>

          {/* Text Content Section */}
          <div ref={contentRef} className="w-full lg:w-1/2 flex flex-col">
            <motion.h2
              className="text-4xl lg:text-3xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 10 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6 }}
            >
              {data.heading}
            </motion.h2>
            <motion.div
              className="mt-6 space-y-4"
              initial={{ opacity: 0, y: 8 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              {data.paragraphs.map((text, index) => (
                <p
                  key={index}
                  className="text-base text-gray-300 leading-relaxed whitespace-pre-line"
                >
                  {text}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChoose;
