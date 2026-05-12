"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useThemeMode } from "@/lib/useThemeMode";

const AboutMobile = () => {
  const { isLightMode: isLight } = useThemeMode();

  return (
    <section className="md:hidden py-8 px-4">
      <div className="w-full">
        {/* Top Header Section */}
        <div className="flex flex-col gap-4 mb-8">
          {/* Left Column */}
          <div>
            <p className="text-[#4C8C74] text-base font-medium mb-2">
              About Us
            </p>
            <h2 className="text-white text-2xl sm:text-3xl font-semibold">
              Our Story
            </h2>
          </div>

          {/* Right Column */}
          <div>
            <p className="text-[#AAAAAA] text-sm leading-relaxed" data-text-sm-light>
              Aussie Digital Studios was born from a passion for design and a
              love for helping businesses grow online. Based in Australia, we
              blend modern design, digital strategy, and creative thinking to
              build unique experiences that help brands stand out. We understand
              that each business is different, which is why we take a tailored
              approach to every project. Our goal is simple: deliver results
              that make a real difference.
            </p>
          </div>
        </div>

        {/* Image + Stats Section - Stacked Vertically */}
        <div className="w-full space-y-6">
          {/* Main Image */}
          <div className="relative w-full">
            <Image
              src="/about/Rectangle_42.webp"
              alt="About Us Image"
              width={400}
              height={400}
              className="w-full h-[250px] rounded-lg shadow-lg object-cover"
            />
            {/* Decorative shape */}
            <img
              src="/Geometric_Shape_Silver.webp"
              alt="Decorative shape"
              className="absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3 w-16 pointer-events-none"
            />
          </div>

          {/* Stats Card */}
          <div
            className="w-full rounded-lg bg-[#212423] shadow-lg p-5"
            data-about-stat-card
            style={{
              backgroundImage: "url('/about/About_Section_img_02.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="space-y-4">
              {/* Stat 1 */}
              <div>
                <h3
                  className="text-2xl sm:text-3xl font-medium"
                  style={{ color: isLight ? "#417AB8" : "#FBBF24" }}
                >
                  569+
                </h3>
                <p className="text-white text-sm sm:text-base font-extralight mt-1">
                  Happy Customers
                </p>
                <hr className="border-t border-gray-600 mt-3 w-3/4" />
              </div>

              {/* Stat 2 */}
              <div>
                <h3
                  className="text-2xl sm:text-3xl font-medium"
                  style={{ color: isLight ? "#417AB8" : "#FBBF24" }}
                >
                  1,890+
                </h3>
                <p className="text-white text-sm sm:text-base font-extralight mt-1">
                  Issues Solved
                </p>
                <hr className="border-t border-gray-600 mt-3 w-3/4" />
              </div>

              {/* Stat 3 */}
              <div>
                <h3
                  className="text-2xl sm:text-3xl font-medium"
                  style={{ color: isLight ? "#417AB8" : "#FBBF24" }}
                >
                  250+
                </h3>
                <p className="text-white text-sm sm:text-base font-extralight mt-1">
                  Finished Projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMobile;
