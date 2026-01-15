"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import ValuesMobile from "./ValuesMobile";

const Values = () => {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      setIsLight(document.documentElement.classList.contains("light"));
    };

    checkTheme();

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const backgroundImage = isLight
    ? "url(/About/Frame_163_Light.svg)"
    : "radial-gradient(circle at top right, rgba(255,255,255,0.3) 0%, transparent 50%), linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)";

  return (
    <>
      <ValuesMobile />
      <div className="hidden sm:flex flex-col my-30 md:flex-row md:mt-8 mx-4 sm:mx-6 md:mx-10">
      {/* Left Content */}
      <div className="flex flex-col w-full">
        {/* On mobile: no max-w, use px-4 for safe padding */}
        <div className="md:hidden px-4">
          <p className="text-[#4C8C74] my-20 text-lg font-medium mb-4">Our Values</p>
          <h2 className="text-white text-5xl mb-5 font-bold">Our Core Values</h2>

          <div className="flex flex-col gap-4">
            {/* Card 1 */}
            <div
              className="group relative rounded-2xl w-full border border-white/10 p-6 transition overflow-hidden"
              data-values-card
              style={{
                backgroundImage: backgroundImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="flex flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 50 50" fill="none">
                  <path d="M10.3725 20.1773C6.23526 18.5224 4.16663 17.6949 4.16663 16.6667C4.16663 15.6385 6.23526 14.811 10.3725 13.1561L16.2235 10.8157C20.3608 9.16083 22.4294 8.33337 25 8.33337C27.5705 8.33337 29.6392 9.16083 33.7764 10.8157L39.6274 13.1561C43.7647 14.811 45.8333 15.6385 45.8333 16.6667C45.8333 17.6949 43.7647 18.5224 39.6274 20.1773L33.7764 22.5177C29.6392 24.1726 27.5705 25 25 25C22.4294 25 20.3608 24.1726 16.2235 22.5177L10.3725 20.1773Z" stroke="#4C8C74" strokeWidth="2" />
                  <path d="M45.8333 25C45.8333 25 43.7647 26.8557 39.6274 28.5106L33.7764 30.851C29.6392 32.5059 27.5705 33.3333 25 33.3333C22.4294 33.3333 20.3608 32.5059 16.2235 30.851L10.3725 28.5106C6.23526 26.8557 4.16663 25 4.16663 25" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                  <path d="M45.8333 33.3334C45.8333 33.3334 43.7647 35.1891 39.6274 36.844L33.7764 39.1843C29.6392 40.8393 27.5705 41.6667 25 41.6667C22.4294 41.6667 20.3608 40.8393 16.2235 39.1843L10.3725 36.844C6.23526 35.1891 4.16663 33.3334 4.16663 33.3334" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <div className="mt-4 flex flex-col">
                  <h2 className="text-xl" style={{ color: isLight ? "#417AB8" : "#FBBF24" }}>Creativity</h2>
                  <p className="font-light">We believe in innovative solutions that stand out.</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="group relative rounded-2xl w-full border border-white/10 p-6 transition overflow-hidden"
              data-values-card
              style={{
                backgroundImage: backgroundImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="flex flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 50 50" fill="none">
                  <circle cx="25" cy="12.5" r="8.33333" stroke="#4C8C74" strokeWidth="2" />
                  <path d="M37.5 18.75C40.9518 18.75 43.75 16.4182 43.75 13.5417C43.75 10.6652 40.9518 8.33337 37.5 8.33337" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12.5 18.75C9.04822 18.75 6.25 16.4182 6.25 13.5417C6.25 10.6652 9.04822 8.33337 12.5 8.33337" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                  <ellipse cx="25" cy="35.4167" rx="12.5" ry="8.33333" stroke="#4C8C74" strokeWidth="2" />
                  <path d="M41.6666 39.5833C45.3213 38.7818 47.9166 36.7522 47.9166 34.375C47.9166 31.9977 45.3213 29.9681 41.6666 29.1666" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                  <path d="M8.33337 39.5833C4.67869 38.7818 2.08337 36.7522 2.08337 34.375C2.08337 31.9977 4.67869 29.9681 8.33337 29.1666" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <div className="mt-4 flex flex-col">
                  <h2 className="text-xl" style={{ color: "#417AB8" }}>Reliability</h2>
                  <p className="font-light">We’re committed to delivering results you can count on.</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="group relative rounded-2xl w-full border border-white/10 p-6 transition overflow-hidden"
              data-values-card
              style={{
                backgroundImage: backgroundImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="flex flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 50 50" fill="none">
                  <path d="M4.16663 25C4.16663 15.179 4.16663 10.2686 7.2176 7.2176C10.2686 4.16663 15.179 4.16663 25 4.16663C34.8209 4.16663 39.7314 4.16663 42.7823 7.2176C45.8333 10.2686 45.8333 15.179 45.8333 25C45.8333 34.8209 45.8333 39.7314 42.7823 42.7823C39.7314 45.8333 34.8209 45.8333 25 45.8333C15.179 45.8333 10.2686 45.8333 7.2176 42.7823C4.16663 39.7314 4.16663 34.8209 4.16663 25Z" stroke="#4C8C74" strokeWidth="2" />
                  <path d="M14.5834 29.1667L19.3602 24.3898C20.1738 23.5763 21.4929 23.5763 22.3065 24.3898L25.6102 27.6936C26.4238 28.5072 27.7429 28.5072 28.5565 27.6936L35.4167 20.8334M35.4167 20.8334V26.0417M35.4167 20.8334H30.2084" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <div className="mt-4 flex flex-col">
                  <h2 className="text-xl" style={{ color: isLight ? "#417AB8" : "#FBBF24" }}>Australian-driven</h2>
                  <p className="font-light">We take pride in providing a local, personalised experience.</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div
              className="group relative rounded-2xl w-full border border-white/10 p-6 transition overflow-hidden"
              data-values-card
              style={{
                backgroundImage: backgroundImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="flex flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 50 50" fill="none">
                  <path d="M4.16663 25C4.16663 15.179 4.16663 10.2686 7.2176 7.2176C10.2686 4.16663 15.179 4.16663 25 4.16663C34.8209 4.16663 39.7314 4.16663 42.7823 7.2176C45.8333 10.2686 45.8333 15.179 45.8333 25C45.8333 34.8209 45.8333 39.7314 42.7823 42.7823C39.7314 45.8333 34.8209 45.8333 25 45.8333C15.179 45.8333 10.2686 45.8333 7.2176 42.7823C4.16663 39.7314 4.16663 34.8209 4.16663 25Z" stroke="#4C8C74" strokeWidth="2" />
                  <path d="M14.5834 37.5V18.75" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                  <path d="M25 37.5V12.5" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                  <path d="M35.4166 37.5V27.0834" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <div className="mt-4 flex flex-col">
                  <h2 className="text-xl" style={{ color: isLight ? "#417AB8" : "#FBBF24" }}>Long-term</h2>
                  <p className="font-light">Our goal is to build lasting relationships and help your brand grow.</p>
                </div>
              </div>
            </div>

            {/* Mobile-only image: centered */}
            <div className="flex justify-center mt-8">
              <Image 
                src="/About/Rectangle 43.webp"
                alt="Values Illustration"
                width={500}
                height={200}
                className="w-full max-w-md h-auto" // responsive, no overflow
              />
            </div>
          </div>
        </div>

        {/* Desktop: original layout (unchanged) */}
        <div className="hidden md:block max-w-7xl mx-3">
          <p className="text-[#4C8C74] my-20 text-lg font-medium mb-4">Our Values</p>
          <h2 className="text-white text-5xl mb-5 font-bold">Our Core Values</h2>

          {/* First Row */}
          <div className="flex flex-col sm:flex-row mt-3 gap-3">

            {/* Card 1 */}
            <div className="group relative rounded-2xl w-full sm:w-[280px] border border-white/10 p-6 transition overflow-hidden" data-values-card style={{ backgroundImage: backgroundImage, backgroundSize: "cover", backgroundPosition: "center", backdropFilter: "blur(10px)" }}>
              {/* ... same as before ... */}
              <div className="flex flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 50 50" fill="none">
                  <path d="M10.3725 20.1773C6.23526 18.5224 4.16663 17.6949 4.16663 16.6667C4.16663 15.6385 6.23526 14.811 10.3725 13.1561L16.2235 10.8157C20.3608 9.16083 22.4294 8.33337 25 8.33337C27.5705 8.33337 29.6392 9.16083 33.7764 10.8157L39.6274 13.1561C43.7647 14.811 45.8333 15.6385 45.8333 16.6667C45.8333 17.6949 43.7647 18.5224 39.6274 20.1773L33.7764 22.5177C29.6392 24.1726 27.5705 25 25 25C22.4294 25 20.3608 24.1726 16.2235 22.5177L10.3725 20.1773Z" stroke="#4C8C74" strokeWidth="2" />
                  <path d="M45.8333 25C45.8333 25 43.7647 26.8557 39.6274 28.5106L33.7764 30.851C29.6392 32.5059 27.5705 33.3333 25 33.3333C22.4294 33.3333 20.3608 32.5059 16.2235 30.851L10.3725 28.5106C6.23526 26.8557 4.16663 25 4.16663 25" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                  <path d="M45.8333 33.3334C45.8333 33.3334 43.7647 35.1891 39.6274 36.844L33.7764 39.1843C29.6392 40.8393 27.5705 41.6667 25 41.6667C22.4294 41.6667 20.3608 40.8393 16.2235 39.1843L10.3725 36.844C6.23526 35.1891 4.16663 33.3334 4.16663 33.3334" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <div className="mt-4 flex flex-col">
                  <h2 className="text-xl" style={{ color: isLight ? "#417AB8" : "#FBBF24" }}>Creativity</h2>
                  <p className="font-light">We believe in innovative solutions that stand out.</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative rounded-2xl w-full sm:w-[280px] border border-white/10 p-6 transition overflow-hidden" data-values-card style={{ backgroundImage: backgroundImage, backgroundSize: "cover", backgroundPosition: "center", backdropFilter: "blur(10px)" }}>
              {/* ... same as before ... */}
              <div className="flex flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 50 50" fill="none">
                  <circle cx="25" cy="12.5" r="8.33333" stroke="#4C8C74" strokeWidth="2" />
                  <path d="M37.5 18.75C40.9518 18.75 43.75 16.4182 43.75 13.5417C43.75 10.6652 40.9518 8.33337 37.5 8.33337" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12.5 18.75C9.04822 18.75 6.25 16.4182 6.25 13.5417C6.25 10.6652 9.04822 8.33337 12.5 8.33337" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                  <ellipse cx="25" cy="35.4167" rx="12.5" ry="8.33333" stroke="#4C8C74" strokeWidth="2" />
                  <path d="M41.6666 39.5833C45.3213 38.7818 47.9166 36.7522 47.9166 34.375C47.9166 31.9977 45.3213 29.9681 41.6666 29.1666" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                  <path d="M8.33337 39.5833C4.67869 38.7818 2.08337 36.7522 2.08337 34.375C2.08337 31.9977 4.67869 29.9681 8.33337 29.1666" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <div className="mt-4 flex flex-col">
                  <h2 className="text-xl" style={{ color: isLight ? "#417AB8" : "#FBBF24" }}>Reliability</h2>
                  <p className="font-light">We’re committed to delivering results you can count on.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col sm:flex-row mt-3 gap-3">

            {/* Card 3 */}
            <div className="group relative rounded-2xl w-full sm:w-[300px] border border-white/10 p-6 transition overflow-hidden" data-values-card style={{ backgroundImage: backgroundImage, backgroundSize: "cover", backgroundPosition: "center", backdropFilter: "blur(10px)" }}>
              {/* ... same as before ... */}
              <div className="flex flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 50 50" fill="none">
                  <path d="M4.16663 25C4.16663 15.179 4.16663 10.2686 7.2176 7.2176C10.2686 4.16663 15.179 4.16663 25 4.16663C34.8209 4.16663 39.7314 4.16663 42.7823 7.2176C45.8333 10.2686 45.8333 15.179 45.8333 25C45.8333 34.8209 45.8333 39.7314 42.7823 42.7823C39.7314 45.8333 34.8209 45.8333 25 45.8333C15.179 45.8333 10.2686 45.8333 7.2176 42.7823C4.16663 39.7314 4.16663 34.8209 4.16663 25Z" stroke="#4C8C74" strokeWidth="2" />
                  <path d="M14.5834 29.1667L19.3602 24.3898C20.1738 23.5763 21.4929 23.5763 22.3065 24.3898L25.6102 27.6936C26.4238 28.5072 27.7429 28.5072 28.5565 27.6936L35.4167 20.8334M35.4167 20.8334V26.0417M35.4167 20.8334H30.2084" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <div className="mt-4 flex flex-col">
                  <h2 className="text-xl" style={{ color: isLight ? "#417AB8" : "#FBBF24" }}>Australian-driven</h2>
                  <p className="font-light">We take pride in providing a local, personalised experience.</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative rounded-2xl w-full sm:w-[300px] border border-white/10 p-6 transition overflow-hidden" data-values-card style={{ backgroundImage: backgroundImage, backgroundSize: "cover", backgroundPosition: "center", backdropFilter: "blur(10px)" }}>
              {/* ... same as before ... */}
              <div className="flex flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 50 50" fill="none">
                  <path d="M4.16663 25C4.16663 15.179 4.16663 10.2686 7.2176 7.2176C10.2686 4.16663 15.179 4.16663 25 4.16663C34.8209 4.16663 39.7314 4.16663 42.7823 7.2176C45.8333 10.2686 45.8333 15.179 45.8333 25C45.8333 34.8209 45.8333 39.7314 42.7823 42.7823C39.7314 45.8333 34.8209 45.8333 25 45.8333C15.179 45.8333 10.2686 45.8333 7.2176 42.7823C4.16663 39.7314 4.16663 34.8209 4.16663 25Z" stroke="#4C8C74" strokeWidth="2" />
                  <path d="M14.5834 37.5V18.75" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                  <path d="M25 37.5V12.5" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                  <path d="M35.4166 37.5V27.0834" stroke="#4C8C74" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <div className="mt-4 flex flex-col">
                  <h2 className="text-xl" style={{ color: isLight ? "#417AB8" : "#FBBF24" }}>Long-term</h2>
                  <p className="font-light">Our goal is to build lasting relationships and help your brand grow.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop-only image (hidden on mobile) */}
      <Image 
        src="/About/Rectangle 43.webp"
        alt="Values Illustration"
        width={800}
        height={700}
        className="ml-9 mt-8 md:block max-h-[600px] w-[500px] flex-shrink-0"
      />
    </div>
    </>
  );
};

export default Values;