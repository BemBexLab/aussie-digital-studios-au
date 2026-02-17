"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { FiCheckCircle } from "react-icons/fi";

type ServiceBodyProps = {
  service: {
    slug: string;
    title: string;
    heading: string;
    imageUrl: string;
    description: string;
    points: string[];
    footnote: string;
  } | {
    slug: string;
    title: string;
    imageUrl: string;
    description: string;
    points: string[];
    heading?: string;
    footnote?: string;
  };
};

const ServiceBody = ({ service }: ServiceBodyProps) => {
  return (
    <section>
      <div className="flex px-4 md:px-8 ">
        <div className="flex flex-col justify-center items-center gap-6 my-20 w-full max-w-7xl mx-auto md:flex-row">
          {/* Text Column */}
          <div className="w-full md:w-1/2 relative">
            <Image
              src="/Geometric_Shape_Silver.png"
              alt="Geometric Shape 01"
              width={100}
              height={100}
              className="absolute top-0 left-0 -translate-y-24 md:-translate-y-72 translate-x-1 md:translate-x-2 pointer-events-none w-16 h-16 md:w-auto md:h-auto"
            />
            <motion.h2
              className="text-2xl mt-5 md:text-3xl font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              {service.heading || service.title}
            </motion.h2>
            <motion.p
              className="whitespace-pre-line mt-4 text-[#AAAAAA] text-sm md:text-base"
              data-text-sm-light
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              {service.description}
            </motion.p>
            <motion.ul
              className="mt-4 text-[#AAAAAA] text-sm md:text-base"
              data-text-sm-light
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              {service.points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 md:gap-3 mb-2"
                >
                  <FiCheckCircle className="mt-0.5 text-[#4C8C74] flex-shrink-0 text-sm md:text-base" />
                  <span>{point}</span>
                </li>
              ))}
            </motion.ul>
            <motion.div
              className="mt-6 text-[#AAAAAA] text-sm md:text-base"
              data-text-sm-light
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              {service.footnote}
            </motion.div>
          </div>

          {/* Image Column */}
          <div className="w-full md:w-1/2 h-full">
            <Image
              src={service.imageUrl}
              alt={`${service.title} Image`}
              width={900}
              height={900}
              className="w-full max-w-2xl h-auto object-cover rounded-[18px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBody;
