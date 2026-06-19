"use client";

import React, { useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import { motion } from "@/lib/motion";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import ContactMobile from "./ContactMobile";
import { sendContactEmail } from "@/lib/emailService";
import { useThemeMode } from "@/lib/useThemeMode";

const Contact = () => {
  const { isDarkMode } = useThemeMode();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    subject: "",
    detail: "",
  });
  const [loading, setLoading] = useState(false);
  const contactCards = [
    {
      icon: <FiPhone className="h-8 w-8 text-[#f2d300]" />,
      label: "(0468) 285-539",
      value: "+61 468 285 539",
      href: "tel:+61468285539",
    },
    {
      icon: <FiMail className="h-8 w-8 text-[#f2d300]" />,
      label: "contact@aussiedigitalstudios.com.au",
      value: "contact@aussiedigitalstudios.com.au",
      href: "mailto:contact@aussiedigitalstudios.com.au",
    },
    {
      icon: <FiMapPin className="h-8 w-8 text-[#f2d300]" />,
      label: "16A Fox Cl, Kariong NSW 2250, Australia",
      value: "16A Fox Cl, Kariong NSW 2250, Australia",
      href: "",
    },
  ];

  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const result = await sendContactEmail({
      ...formData,
      source: "Contact page desktop form",
    });

    setLoading(false);

    if (result.success) {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        subject: "",
        detail: "",
      });

      await Swal.fire({
        icon: "success",
        title: "Message sent",
        text: "Your message was sent successfully. We'll be in touch soon.",
        confirmButtonColor: "#14b8a6",
        background: isDarkMode ? "#111827" : "#ffffff",
        color: isDarkMode ? "#ffffff" : "#111827",
      });
    } else {
      await Swal.fire({
        icon: "error",
        title: "Message failed",
        text: result.error || "Unable to send your message right now.",
        confirmButtonColor: "#ef4444",
        background: isDarkMode ? "#111827" : "#ffffff",
        color: isDarkMode ? "#ffffff" : "#111827",
      });
    }
  };

  return (
    <>
      <ContactMobile />

      <section className="relative hidden w-full overflow-x-hidden px-4 py-12 md:block md:px-6 lg:mt-20 lg:px-8 lg:py-16">
        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col items-stretch gap-8 lg:min-h-[384px] lg:flex-row lg:gap-12">
            <div className="relative mx-auto w-full max-w-[62rem] lg:mx-0 lg:max-w-none lg:flex-1">
              <Image
                src="/Contact/Rectangle_1.webp"
                alt="Get in Touch Illustration"
                width={900}
                height={900}
                className="h-[320px] w-full rounded-xl object-cover md:h-[360px] lg:h-full"
              />
              <div className="pointer-events-none absolute -left-46 top-1/2 hidden -translate-y-1/2 lg:block xl:-left-105">
                <Image
                  src="/Contact/61da23ef-4d09-41be-a65c-a0692caccb38 1.png"
                  alt="decorative shape"
                  width={596}
                  height={596}
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
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="border-b border-gray-500 bg-transparent pb-3 text-white placeholder-gray-500 focus:border-teal-400 focus:outline-none"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="border-b border-gray-500 bg-transparent pb-3 text-white placeholder-gray-500 focus:border-teal-400 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-b border-gray-500 bg-transparent pb-3 text-white placeholder-gray-500 focus:border-teal-400 focus:outline-none"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="border-b border-gray-500 bg-transparent pb-3 text-white placeholder-gray-500 focus:border-teal-400 focus:outline-none"
                  />
                </div>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full cursor-pointer appearance-none border-b border-gray-500 bg-transparent pb-3 text-gray-500 placeholder-gray-500 focus:border-teal-400 focus:outline-none"
                >
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
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full border-b border-gray-500 bg-transparent pb-3 text-white placeholder-gray-500 focus:border-teal-400 focus:outline-none"
                />

                <textarea
                  name="detail"
                  placeholder="Details"
                  rows={5}
                  value={formData.detail}
                  onChange={handleInputChange}
                  required
                  className="w-full resize-none border-b border-gray-500 bg-transparent pb-3 text-white placeholder-gray-500 focus:border-teal-400 focus:outline-none"
                />
                <div className="pt-2 md:pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="group inline-flex w-full items-center justify-center rounded-full bg-teal-500 px-5 py-3 text-sm text-white transition-all hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-50 md:w-auto md:px-4 md:py-2"
                  >
                    <span>{loading ? "Sending..." : "Submit"}</span>
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

          <div className="mx-auto mt-12 max-w-[84rem] px-4 sm:px-6 lg:mt-16">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3 xl:gap-6">
              {contactCards.map((card) => (
                <a
                  key={card.label}
                  href={card.href}
                  target={card.href.startsWith("https://") ? "_blank" : undefined}
                  rel={
                    card.href.startsWith("https://")
                      ? "noreferrer noopener"
                      : undefined
                  }
                  className="group flex min-h-[142px] flex-col items-center justify-center rounded-[18px] border border-white/5 bg-[#221f1f] px-6 py-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.22)] transition-all duration-300 hover:border-[#4C8C74]/25 hover:bg-[#262222]"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center">
                    {card.icon}
                  </div>
                  <p className="text-[17px] font-light text-[#f1f1f1]">
                    {card.label}
                  </p>
                  {/* <p className="mt-2 text-sm text-[#8d928f] transition-colors duration-300 group-hover:text-[#b8c2bc]">
                    {card.value}
                  </p> */}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
