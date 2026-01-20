"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ContactMobile from "./ContactMobile";
// import ContactUsSm from "./ContactUsSm";

const Contact = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("ads_theme");
    setIsDarkMode(theme !== "light");

    const handleThemeChange = () => {
      const theme = localStorage.getItem("ads_theme");
      setIsDarkMode(theme !== "light");
    };

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    window.addEventListener("storage", handleThemeChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("storage", handleThemeChange);
    };
  }, []);
  return (
    <>
      <ContactMobile />
      {/* <ContactUsSm /> */}
      <div className="hidden md:block relative w-full mt-20 py-16 px-4 sm:px-6 md:px-8 overflow-x-hidden">
      {/* Background placeholder — if you have a real bg image, add it conditionally */}
      {/* <div className="absolute inset-0 bg-cover bg-center"></div> */}

      {/* Main Content: Image + Form */}
      <div className="relative max-w-6xl mx-auto">
        {/* Desktop: side-by-side */}
        <div className="hidden md:flex flex-row gap-12 items-stretch min-h-[384px]">
          {/* Left Side - Image */}
          <div className="flex-1 relative">
            <Image
              src="/Contact/Rectangle_1.png"
              alt="Get in Touch Illustration"
              width={300}
              height={300}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute -left-15 top-1/2 -translate-y-1/2 pointer-events-none">
              <Image
                src="/Contact/shape.png"
                alt="decorative shape"
                width={196}
                height={196}
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Side - Form Card */}
          <div
            className="relative flex-1 h-full bg-gray-900 bg-opacity-80 backdrop-blur rounded-2xl p-8 bg-cover bg-center"
            style={{
              backgroundImage: isDarkMode
                ? "radial-gradient(circle at top right, rgba(255, 255, 255, 0.2) 0%, transparent 30%), url('/Home/Frame_161.svg')"
                : `url('/Contact/contact_light.svg')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute -top-24 -right-24 pointer-events-none">
              <Image
                src="/Geometric_Shape_Silver.png"
                alt="decorative geometric shape"
                width={160}
                height={160}
                className="opacity-90"
              />
            </div>
            <h1 className="text-5xl font-bold text-white mb-12">Get In Touch</h1>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="bg-transparent border-b border-gray-500 text-white placeholder-gray-500 pb-3 focus:outline-none focus:border-teal-400"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="bg-transparent border-b border-gray-500 text-white placeholder-gray-500 pb-3 focus:outline-none focus:border-teal-400"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-transparent border-b border-gray-500 text-white placeholder-gray-500 pb-3 focus:outline-none focus:border-teal-400"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="bg-transparent border-b border-gray-500 text-white placeholder-gray-500 pb-3 focus:outline-none focus:border-teal-400"
                />
              </div>
              <select className="w-full bg-transparent border-b border-gray-500 text-gray-500 placeholder-gray-500 pb-3 focus:outline-none focus:border-teal-400 appearance-none cursor-pointer">
                <option value="">Select services</option>
                <option value="web">Web Development</option>
                <option value="design">Design</option>
                <option value="consulting">Consulting</option>
              </select>
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-transparent border-b border-gray-500 text-white placeholder-gray-500 pb-3 focus:outline-none focus:border-teal-400"
              />
              <textarea
                placeholder="Details"
                rows={5}
                className="w-full bg-transparent border-b border-gray-500 text-white placeholder-gray-500 pb-3 focus:outline-none focus:border-teal-400 resize-none"
              ></textarea>
              <div className="pt-4">
                <button className="px-4 py-2 text-sm bg-teal-500 hover:bg-blue-400 text-white rounded-full transition-all inline-flex items-center group">
                  <span>Submit</span>
                  <span className="ml-2 relative w-6 h-6 flex items-center justify-center">
                    <span className={`absolute inset-0 rounded-full transition-colors ${isDarkMode ? "bg-black" : "bg-white"}`} aria-hidden="true"></span>
                    <svg
                      className="relative w-3 h-3 z-10 transition-transform duration-300 group-hover:rotate-45"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                    >
                      <path
                        d="M7 17 L17 7"
                        stroke={isDarkMode ? "#fff" : "#000"}
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                      <path
                        d="M11 7 H17 V13"
                        stroke={isDarkMode ? "#fff" : "#000"}
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Mobile: stacked layout */}
        <div className="md:hidden flex flex-col gap-8">
          {/* Image Section */}
          <div className="relative w-full max-w-md mx-auto">
            <Image
              src="/Contact/Rectangle_1.png"
              alt="Get in Touch Illustration"
              width={300}
              height={300}
              className="w-full h-auto object-cover rounded-xl"
            />
            {/* Move shape inside bounds on mobile */}
            <div className="absolute -bottom-6 -right-4 pointer-events-none">
              <Image
                src="/Contact/shape.png"
                alt="decorative shape"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          </div>

          {/* Form Section */}
          <div
            className="relative w-full max-w-lg mx-auto bg-gray-900 bg-opacity-80 backdrop-blur rounded-2xl p-6 border border-gray-700"
            style={{
              backgroundImage:
                "radial-gradient(circle at top right, rgba(255, 255, 255, 0.1) 0%, transparent 50%), url('/Home/Frame_161.svg')",
            }}
          >
            {/* Smaller decorative shape or hide if too big — optional */}
            <div className="absolute -top-8 -right-6 pointer-events-none opacity-70">
              <Image
                src="/Geometric_Shape_Silver.png"
                alt="decorative geometric shape"
                width={80}
                height={80}
                className=""
              />
            </div>
            <h1 className="text-3xl font-bold text-white mb-6 text-center">Get In Touch</h1>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="First Name"
                className="w-full bg-transparent border-b border-gray-500 text-white placeholder-gray-500 pb-3 focus:outline-none focus:border-teal-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full bg-transparent border-b border-gray-500 text-white placeholder-gray-500 pb-3 focus:outline-none focus:border-teal-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-gray-500 text-white placeholder-gray-500 pb-3 focus:outline-none focus:border-teal-400"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full bg-transparent border-b border-gray-500 text-white placeholder-gray-500 pb-3 focus:outline-none focus:border-teal-400"
              />
              <select className="w-full bg-transparent border-b border-gray-500 text-gray-500 placeholder-gray-500 pb-3 focus:outline-none focus:border-teal-400 appearance-none cursor-pointer">
                <option value="">Select services</option>
                <option value="web">Web Development</option>
                <option value="design">Design</option>
                <option value="consulting">Consulting</option>
              </select>
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-transparent border-b border-gray-500 text-white placeholder-gray-500 pb-3 focus:outline-none focus:border-teal-400"
              />
              <textarea
                placeholder="Details"
                rows={4}
                className="w-full bg-transparent border-b border-gray-500 text-white placeholder-gray-500 pb-3 focus:outline-none focus:border-teal-400 resize-none"
              ></textarea>
              <div className="pt-2 text-center">
                <button className="px-6 py-2.5 text-sm bg-teal-500 hover:bg-blue-400 text-white rounded-full transition-all inline-flex items-center justify-center group mx-auto">
                  <span>Submit</span>
                  <span className="ml-2 relative w-5 h-5 flex items-center justify-center">
                    <span className={`absolute inset-0 rounded-full transition-colors ${isDarkMode ? "bg-black" : "bg-white"}`} aria-hidden="true"></span>
                    <svg
                      className="relative w-2.5 h-2.5 z-10 transition-transform duration-300 group-hover:rotate-45"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                    >
                      <path
                        d="M7 17 L17 7"
                        stroke={isDarkMode ? "#fff" : "#000"}
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                      <path
                        d="M11 7 H17 V13"
                        stroke={isDarkMode ? "#fff" : "#000"}
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Contact Cards Section */}
      <div className="mt-16 mx-auto px-4 sm:px-6">
        {/* Desktop: 3 cards in row */}
        <div className="hidden md:flex flex-row justify-center items-center gap-6">
          {/* Card 1 */}
          <Image
            src={isDarkMode ? "/Contact/phone_number_dark.svg" : "/Contact/phone_number_light.svg"}
            alt="Contact Card 1"
            width={900}
            height={900}
            className="w-[300px] h-[150px] object-cover rounded-xl"
          />

          {/* Card 2 */}
          <Image
            src={isDarkMode ? "/Contact/email_dark.svg" : "/Contact/email_light.svg"}
            alt="Contact Card 2"
            width={900}
            height={900}
            className="w-[300px] h-[150px] object-cover rounded-xl"
          />

          {/* Card 3 */}
          <Image
            src={isDarkMode ? "/Contact/location_dark.svg" : "/Contact/location_light.svg"}
            alt="Contact Card 3"
            width={900}
            height={900}
            className="w-[300px] h-[150px] object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;