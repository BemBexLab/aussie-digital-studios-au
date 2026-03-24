"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const AboutUs = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const theme = localStorage.getItem("ads_theme");
    setIsDarkMode(theme !== "light");

    const handleThemeChange = () => {
      const theme = localStorage.getItem("ads_theme");
      setIsDarkMode(theme !== "light");
    };

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("storage", handleThemeChange);

    // Intersection Observer for animation trigger
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // Only observe once, then stop
          intersectionObserver.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (componentRef.current) {
      intersectionObserver.observe(componentRef.current);
    }

    return () => {
      observer.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("storage", handleThemeChange);
    };
  }, []);

  const fullText =
    "Built for Australian businesses tired of investing in websites that look good but fail to deliver results.\nWe combine web design, development, SEO, digital marketing, and branding into one cohesive strategy, aligned with your business goals from day one.";
  const highlightText = "tired of investing in websites that look good but fail to deliver results.";

  const renderAnimatedText = () => {
    const elements: React.ReactNode[] = [];
    const highlightStart = fullText.indexOf(highlightText);
    const highlightEnd = highlightStart + highlightText.length;

    let charIndex = 0;
    const lines = fullText.split("\n");

    lines.forEach((line, lineIdx) => {
      const words = line.split(" ");

      words.forEach((word, wordIdx) => {
        const wordStart = charIndex;
        const wordEnd = charIndex + word.length;

        // Check if entire word or any part of it is in highlight section
        const isInHighlight =
          !(wordEnd <= highlightStart || wordStart >= highlightEnd);

        const wordChars: React.ReactNode[] = [];

        word.split("").forEach((char, charIdx) => {
          wordChars.push(
            <span
              key={`${lineIdx}-${wordIdx}-${charIdx}`}
              className={`${
                isInView
                  ? isInHighlight
                    ? "animate-colorShiftYellow"
                    : "animate-colorShift"
                  : ""
              }`}
              style={{
                color: "#989998",
                animationDelay: isInView ? `${charIndex * 0.05}s` : "0s",
              }}
            >
              {char}
            </span>
          );
          charIndex++;
        });

        // Wrap word in a span with whitespace-nowrap to prevent breaking
        elements.push(
          <span
            key={`word-${lineIdx}-${wordIdx}`}
            className="inline-block whitespace-nowrap"
          >
            {wordChars}
          </span>
        );

        // Add space after word (but not after last word in the line)
        if (wordIdx < words.length - 1) {
          elements.push(<span key={`space-${lineIdx}-${wordIdx}`}> </span>);
          charIndex++; // Account for space in char count
        }
      });

      // Add a line break between lines (but not after last line)
      if (lineIdx < lines.length - 1) {
        elements.push(<br key={`br-${lineIdx}`} />);
        charIndex++; // Account for newline in char count
      }
    });

    return elements;
  };
  return (
    <div
      ref={componentRef}
      className="mb-0 pb-0 w-full flex justify-center mt-5 mb-25 overflow-hidden"
    >
      <style>{`
        @keyframes colorShift {
          0% {
            color: #989998;
          }
          100% {
            color: ${isDarkMode ? 'white' : 'black'};
          }
        }

        @keyframes colorShiftYellow {
          0% {
            color: #989998;
          }
          100% {
            color: #FBBF24;
          }
        }

        .animate-colorShift {
          animation: colorShift 0.6s ease-out forwards;
        }

        .animate-colorShiftYellow {
          animation: colorShiftYellow 0.6s ease-out forwards;
        }
      `}</style>

      {/* Desktop layout (md and above) */}
      <section className="hidden md:block">
        <div className="max-w-7xl px-3 mt-25">
          <div className="flex flex-col md:flex-row gap-0">
            {/* Left label */}
            <div className="md:w-1/4">
              <p className="text-xl font-medium text-emerald-500 whitespace-nowrap">
                About Us
              </p>
            </div>

            {/* Right content */}
            <div className="md:w-3/4">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold leading-snug">
                {renderAnimatedText()}
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile layout (below md) */}
      <section className="md:hidden">
        <div className="max-w-7xl px-3 mt-25">
          <div className="flex flex-col gap-4">
            {/* Label */}
            <div>
              <p className="text-sm font-medium text-emerald-500">
                About Us
              </p>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold leading-snug">
                {renderAnimatedText()}
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
