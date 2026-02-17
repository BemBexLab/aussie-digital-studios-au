"use client";

import React from "react";
import { motion } from "motion/react";
import { Poppins } from "next/font/google";
import FAQMobile from "./FAQMobile";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

type FAQProps = {
  service: {
    faqData?: Array<{
      question: string;
      answer: string;
    }>;
  };
};

const defaultFAQs = [
  {
    question: "How to use this component?",
    answer:
      "Import the FAQ component and place it in your page. Click any question to expand or collapse the answer.",
  },
  {
    question: "Are there any other components available?",
    answer:
      "Yes — check the Components section of the repo or documentation for more reusable UI pieces.",
  },
  {
    question: "Are components responsive?",
    answer:
      "Yes, components are designed to be responsive across screen sizes.",
  },
  {
    question: "Can I customize the components?",
    answer:
      "Yes, pass props or override styles to adapt components to your design.",
  },
];

export default function FAQ({ service }: FAQProps) {
  const faqs = service.faqData || defaultFAQs;
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <>
      {/* Mobile View */}
      <div className="sm:hidden">
        <FAQMobile service={service} />
      </div>

      {/* Desktop View */}
      <div className="hidden sm:block">
    <div className="mx-4 sm:mx-8 md:mx-16"> {/* Responsive margin */}
      <div
        className={`${poppins.className} max-w-screen-2xl mx-auto mt-30 flex flex-col items-center justify-center px-4 sm:px-6 md:px-16 lg:px-32`}
      >
        <motion.h2
          className="text-3xl font-semibold text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Looking for answers?
        </motion.h2>

        <div className="w-full">
          {faqs.map((faq: { question: string; answer: string }, index: number) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <motion.div
                key={faq.question}
                className="w-full max-w-screen-xl mx-auto border-b border-slate-200 py-6 md:py-8" // Slightly less vertical padding on mobile
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <button
                  id={buttonId}
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left cursor-pointer"
                >
                  <h3 className="text-base font-medium">{faq.question}</h3>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${
                      isOpen ? "rotate-180" : ""
                    } transition-transform duration-200 ease-in-out`}
                  >
                    <path
                      d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                      stroke="#1D293D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`text-sm text-slate-500 transition-all duration-200 ease-in-out overflow-hidden ${
                    isOpen ? "opacity-100 max-h-40 mt-3" : "opacity-0 max-h-0"
                  }`}
                >
                  {faq.answer}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="my-20 md:my-40"></div> {/* Reduce bottom spacing on mobile */}
    </div>
      </div>
    </>
  );
}