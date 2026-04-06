"use client";

import { motion } from "motion/react";
import React from "react";

export type SocialAuditCtaData = {
  badgeText: string;
  title: string;
  highlightedTitle?: string;
  description: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction: {
    label: string;
    href: string;
  };
  trustItems?: string[];
};

type SocialAuditCtaProps = {
  data: SocialAuditCtaData;
};

const SocialAuditCta2 = ({ data }: SocialAuditCtaProps) => {
  return (
    <section
      className="hidden mt-8 py-10 text-center sm:flex sm:flex-col sm:items-center sm:justify-center"
      style={{
        backgroundImage: `url("/Home/CTA.svg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col justify-center items-center min-h-1/2 my-20 mb-8 px-4 text-center mx-auto">
        <motion.p
          className="text-xl font-medium text-[#4C8C74] mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {data.badgeText}
        </motion.p>
        <motion.h2
          className="text-4xl md:text-4xl font-semibold text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {data.title}
          <br />
          {data.highlightedTitle}
        </motion.h2>
        {/* <motion.div
                  className="mb-5"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  {service.strategicHeadingText}
        </motion.div> */}

        <div className="mt-3 mx-auto flex w-full justify-center px-4">
          <div className="w-full justify-center items-center rounded-3xl border border-white/10 bg-white/5 px-6 py-6 text-center shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:px-10 sm:py-8">
            <p className="mx-auto mt-4 max-w-6xl text-sm leading-7 text-[#AAAAAA] sm:text-base">
              {data.description}
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-5">
          <a
            className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/15"
            href={data.primaryAction.href}
          >
            {data.primaryAction.label}
          </a>
          <span
            aria-hidden="true"
            className="h-10 w-px bg-white/30 max-sm:h-px max-sm:w-full"
          />
          <a
            className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10"
            href={data.secondaryAction.href}
          >
            {data.secondaryAction.label}
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialAuditCta2;
