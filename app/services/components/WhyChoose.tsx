"use client";

import React, { useEffect, useRef, useState } from "react";
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
  const bodyClassName = "text-base text-gray-300 leading-relaxed whitespace-pre-line";

  const extractText = (node: React.ReactNode): string => {
    if (typeof node === "string" || typeof node === "number") {
      return String(node);
    }

    if (Array.isArray(node)) {
      return node.map(extractText).join("");
    }

    if (React.isValidElement(node)) {
      const element = node as React.ReactElement<{ children?: React.ReactNode }>;
      const children = React.Children.toArray(element.props?.children);
      return children.map(extractText).join("");
    }

    return "";
  };

  const isHeadingElement = (node: React.ReactNode) =>
    React.isValidElement(node) &&
    typeof node.type === "string" &&
    /^h[1-6]$/.test(node.type);

  const getTopLevelNodes = (nodes: React.ReactNode[]) =>
    nodes.flatMap((node) => {
      if (React.isValidElement(node) && node.type === React.Fragment) {
        const element = node as React.ReactElement<{ children?: React.ReactNode }>;
        return React.Children.toArray(element.props?.children).filter(
          (child) => !(typeof child === "string" && child.trim() === "")
        );
      }
      if (typeof node === "string" && node.trim() === "") {
        return [];
      }
      return [node];
    });

  const renderFullContent = (nodes: React.ReactNode[]) =>
    getTopLevelNodes(nodes).map((node, index) => {
      if (typeof node === "string" || typeof node === "number") {
        return (
          <p key={`full-${index}`} className={bodyClassName}>
            {node}
          </p>
        );
      }

      return <React.Fragment key={`full-${index}`}>{node}</React.Fragment>;
    });

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
              className="mt-6 max-h-[420px] space-y-4 overflow-y-auto pr-3 scrollbar-thin scrollbar-thumb-[#AAAAAA]/60 scrollbar-track-white/10 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#ffffff14] [&::-webkit-scrollbar-track]:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border [&::-webkit-scrollbar-thumb]:border-solid [&::-webkit-scrollbar-thumb]:border-[#ffffff33] [&::-webkit-scrollbar-thumb]:bg-[#AAAAAA99]"
              initial={{ opacity: 0, y: 8 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              {renderFullContent(data.paragraphs)}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChoose;
