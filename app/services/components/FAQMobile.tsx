"use client";

import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

type FAQMobileProps = {
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

export default function FAQMobile({ service }: FAQMobileProps) {
  const faqs = service.faqData || defaultFAQs;
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className="mx-3 sm:mx-4"> {/* Compact mobile margin */}
      <div
        className={`${poppins.className} flex flex-col items-center justify-center px-3`}
      >
        <h2 className="text-2xl font-semibold text-center mb-6">
          Looking for answers?
        </h2>

        <div className="w-full">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div
                key={faq.question}
                className="w-full border-b border-slate-200 py-4" // Compact padding for mobile
              >
                <button
                  id={buttonId}
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left cursor-pointer gap-2"
                >
                  <h3 className="text-sm font-medium flex-1">{faq.question}</h3>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${
                      isOpen ? "rotate-180" : ""
                    } transition-transform duration-200 ease-in-out flex-shrink-0`}
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
                  className={`text-xs text-slate-500 transition-all duration-200 ease-in-out overflow-hidden ${
                    isOpen ? "opacity-100 max-h-32 mt-2" : "opacity-0 max-h-0"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="my-10"></div> {/* Compact bottom spacing for mobile */}
    </div>
  );
}
