"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import ContactMobile from "./ContactMobile";

const Contact = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("ads_theme");
    setIsDarkMode(theme !== "light");

    const handleThemeChange = () => {
      const nextTheme = localStorage.getItem("ads_theme");
      setIsDarkMode(nextTheme !== "light");
    };

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("storage", handleThemeChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("storage", handleThemeChange);
    };
  }, []);

  return (
    <>
      <ContactMobile />

      <section className="relative hidden w-full overflow-x-hidden px-4 py-12 md:block md:px-6 lg:mt-20 lg:px-8 lg:py-16">
        <div className="relative mx-auto max-w-6xl">
          <div className="flex flex-col items-stretch gap-8 lg:min-h-[384px] lg:flex-row lg:gap-12">
            <div className="relative mx-auto w-full max-w-[32rem] lg:mx-0 lg:max-w-none lg:flex-1">
              <Image
                src="/contact/Rectangle_1.webp"
                alt="Get in Touch Illustration"
                width={900}
                height={900}
                className="h-[320px] w-full rounded-xl object-cover md:h-[360px] lg:h-full"
              />
              <div className="pointer-events-none absolute -left-6 top-1/2 hidden -translate-y-1/2 lg:block xl:-left-15">
                <Image
                  src="/contact/shape.webp"
                  alt="decorative shape"
                  width={196}
                  height={196}
                  className="h-auto w-auto object-contain"
                />
              </div>
            </div>

            <div
              className="relative w-full rounded-2xl bg-gray-900 bg-cover bg-center p-6 backdrop-blur md:p-7 lg:h-full lg:flex-1 lg:p-8"
              style={{
                backgroundImage: isDarkMode
                  ? "radial-gradient(circle at top right, rgba(255, 255, 255, 0.2) 0%, transparent 30%), url('/Home/Frame_161.svg')"
                  : "url('/Contact/contact_light.svg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="pointer-events-none absolute -right-8 -top-8 opacity-70 lg:-right-24 lg:-top-24 lg:opacity-100">
                <Image
                  src="/Geometric_Shape_Silver.webp"
                  alt="decorative geometric shape"
                  width={160}
                  height={160}
                  className="h-20 w-20 opacity-90 lg:h-40 lg:w-40"
                />
              </div>

              <motion.h1
                className="mb-8 text-center text-3xl font-bold text-white md:text-4xl lg:mb-12 lg:text-left lg:text-5xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
              >
                Get In Touch
              </motion.h1>

              <motion.form
                className="space-y-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="border-b border-gray-500 bg-transparent pb-3 text-white placeholder-gray-500 focus:border-teal-400 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="border-b border-gray-500 bg-transparent pb-3 text-white placeholder-gray-500 focus:border-teal-400 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
                  <input
                    type="email"
                    placeholder="Email"
                    className="border-b border-gray-500 bg-transparent pb-3 text-white placeholder-gray-500 focus:border-teal-400 focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="border-b border-gray-500 bg-transparent pb-3 text-white placeholder-gray-500 focus:border-teal-400 focus:outline-none"
                  />
                </div>

                <select className="w-full cursor-pointer appearance-none border-b border-gray-500 bg-transparent pb-3 text-gray-500 placeholder-gray-500 focus:border-teal-400 focus:outline-none">
                  <option value="">Select services</option>
                  <option value="Logo">Logo</option>
                  <option value="Ecommerce">Ecommerce</option>
                  <option value="Web Design">Web Design</option>
                  <option value="SMM">SMM</option>
                  <option value="Video Animation">Video Animation</option>
                  <option value="SEO">SEO</option>
                  <option value="Maintainance">Maintainance</option>
                  <option value="Branding">Branding</option>
                </select>

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border-b border-gray-500 bg-transparent pb-3 text-white placeholder-gray-500 focus:border-teal-400 focus:outline-none"
                />

                <textarea
                  placeholder="Details"
                  rows={5}
                  className="w-full resize-none border-b border-gray-500 bg-transparent pb-3 text-white placeholder-gray-500 focus:border-teal-400 focus:outline-none"
                ></textarea>

                <div className="pt-2 md:pt-4">
                  <button className="group inline-flex w-full items-center justify-center rounded-full bg-teal-500 px-5 py-3 text-sm text-white transition-all hover:bg-blue-400 md:w-auto md:px-4 md:py-2">
                    <span>Submit</span>
                    <span className="relative ml-2 flex h-6 w-6 items-center justify-center">
                      <span
                        className={`absolute inset-0 rounded-full transition-colors ${
                          isDarkMode ? "bg-black" : "bg-white"
                        }`}
                        aria-hidden="true"
                      ></span>
                      <svg
                        className="relative z-10 h-3 w-3 transition-transform duration-300 group-hover:rotate-45"
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
              </motion.form>
            </div>
          </div>

          <div className="mx-auto mt-12 px-4 sm:px-6 lg:mt-16">
            <div className="flex flex-wrap justify-center gap-4 md:gap-5 lg:flex-nowrap lg:items-center lg:gap-6">
              <Image
                src={
                  isDarkMode
                    ? "/Contact/phone_number_dark.svg"
                    : "/Contact/phone_number_light.svg"
                }
                alt="Contact Card 1"
                width={900}
                height={900}
                className="h-auto w-full max-w-[300px] rounded-xl object-cover"
              />

              <Image
                src={
                  isDarkMode ? "/Contact/email_dark.svg" : "/Contact/email_light.svg"
                }
                alt="Contact Card 2"
                width={900}
                height={900}
                className="h-auto w-full max-w-[300px] rounded-xl object-cover"
              />

              <Image
                src={
                  isDarkMode
                    ? "/Contact/location_dark.svg"
                    : "/Contact/location_light.svg"
                }
                alt="Contact Card 3"
                width={900}
                height={900}
                className="h-auto w-full max-w-[300px] rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
