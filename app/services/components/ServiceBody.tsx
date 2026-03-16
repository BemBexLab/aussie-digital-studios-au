"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { FiCheckCircle } from "react-icons/fi";

type ServiceBodyItem = {
  title?: string;
  heading?: string;
  imageUrl: string;
  description: React.ReactNode;
  points?: string[];
};

type ServiceBodyProps = {
  data?: ServiceBodyItem[];
  footnote?: React.ReactNode;
};

const ServiceBody = ({ data = [], footnote }: ServiceBodyProps) => {
  if (data.length === 0) {
    return null;
  }

  return (
    <section>
      <div className="flex px-4 md:px-8 ">
        {/* <Image
          src="/Geometric_Shape_Silver.png"
          alt="Geometric Shape 01"
          width={100}
          height={100}
          className="absolute top-0 left-0 -translate-y-24 md:-translate-y-72 translate-x-1 md:translate-x-2 pointer-events-none w-16 h-16 md:w-auto md:h-auto z-55"
        /> */}
        <div className="w-full max-w-7xl mx-auto">
          {data.map((item, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div key={`${item.imageUrl}-${index}`} className="my-20 w-full">
                <div
                  className={`flex flex-col justify-center items-center gap-6 w-full md:flex-row ${
                    isReversed ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Text Column */}
                  <div className="w-full md:w-1/2 relative">
                    {item.heading || item.title ? (
                      <motion.h2
                        className="text-2xl mt-5 md:text-3xl font-medium"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.5 }}
                      >
                        {item.heading || item.title}
                      </motion.h2>
                    ) : null}
                    <motion.div
                      className="whitespace-pre-line mt-4 text-[#AAAAAA] text-sm md:text-base"
                      data-text-sm-light
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{
                        duration: 1.2,
                        delay: 0.2,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      {item.description}
                    </motion.div>
                    {item.points && item.points.length > 0 ? (
                      <motion.ul
                        className="mt-4 text-[#AAAAAA] text-sm md:text-base"
                        data-text-sm-light
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                          duration: 1.2,
                          delay: 0.4,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                      >
                        {item.points.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className="flex items-start gap-2 md:gap-3 mb-2"
                          >
                            <FiCheckCircle className="mt-0.5 text-[#4C8C74] flex-shrink-0 text-sm md:text-base" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </motion.ul>
                    ) : null}
                  </div>

                  {/* Image Column */}
                  <div className="w-full md:w-1/2 h-full">
                    <Image
                      src={item.imageUrl}
                      alt={(item.title || item.heading || "Service") + " Image"}
                      width={900}
                      height={900}
                      className="w-full max-w-2xl h-auto object-fit rounded-[18px]"
                    />
                  </div>
                </div>
                {/* {footnote && index === data.length - 1 ? (
                  <motion.div
                    className="mt-6 text-[#AAAAAA] text-sm md:text-base mb-10"
                    data-text-sm-light
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    {footnote}
                  </motion.div>
                ) : null} */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceBody;
