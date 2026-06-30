"use client";

import React, { useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { sendContactEmail } from "@/lib/emailService";
import { useThemeMode } from "@/lib/useThemeMode";

const ContactMobile = () => {
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
      icon: <FiPhone className="h-7 w-7 text-[#f2d300]" />,
      label: "(0468) 285-539",
      value: "+61 468 285 539",
      href: "tel:+61468285539",
    },
    {
      icon: <FiMail className="h-7 w-7 text-[#f2d300]" />,
      label: "contact@aussiedigitalstudios.com.au",
      value: "contact@aussiedigitalstudios.com.au",
      href: "mailto:contact@aussiedigitalstudios.com.au",
    },
    {
      icon: <FiMapPin className="h-7 w-7 text-[#f2d300]" />,
      label: "16A Fox Cl, Kariong NSW 2250, Australia",
      value: "16A Fox Cl, Kariong NSW 2250, Australia",
      href: "",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const result = await sendContactEmail({
      ...formData,
      source: "ContactMobile form",
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
    <div className="relative mt-12 w-full overflow-x-hidden px-4 py-8 md:hidden">
      {/* Main Content */}
      <div className="relative w-full">
        {/* Stacked layout */}
        <div className="flex flex-col gap-6">
          {/* Image Section */}
          <div className="relative w-full">
            <Image
              src="/Contact/Rectangle_1.webp"
              alt="Get in Touch Illustration"
              width={900}
              height={900}
              className="h-[260px] w-full rounded-xl object-cover"
            />
            <div className="pointer-events-none absolute -bottom-4 -right-2">
              <Image
                src="/Contact/61da23ef-4d09-41be-a65c-a0692caccb38 1.webp"
                alt="decorative shape"
                width={140}
                height={140}
                className="h-auto w-24 object-contain"
              />
            </div>
          </div>

          {/* Form Section */}
          <div
            className="relative w-full rounded-2xl bg-gray-900 p-5 backdrop-blur"
            style={{
              backgroundImage: isDarkMode
                ? "radial-gradient(circle at top right, rgba(255, 255, 255, 0.2) 0%, transparent 30%), url('/Home/Frame_161.svg')"
                : "url('/Contact/contact_light.svg')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <div className="pointer-events-none absolute -right-3 -top-3 opacity-70">
              <Image
                src="/Geometric_Shape_Silver.webp"
                alt="decorative geometric shape"
                width={90}
                height={90}
                className="h-16 w-16 opacity-90"
              />
            </div>
            <h1 className="mb-6 text-center text-2xl font-bold text-white">
              Get In Touch
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full bg-transparent border-b border-gray-500 text-white text-sm placeholder-gray-500 pb-2 focus:outline-none focus:border-teal-400"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full bg-transparent border-b border-gray-500 text-white text-sm placeholder-gray-500 pb-2 focus:outline-none focus:border-teal-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full bg-transparent border-b border-gray-500 text-white text-sm placeholder-gray-500 pb-2 focus:outline-none focus:border-teal-400"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full bg-transparent border-b border-gray-500 text-white text-sm placeholder-gray-500 pb-2 focus:outline-none focus:border-teal-400"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                className="w-full bg-transparent border-b border-gray-500 text-gray-500 text-sm placeholder-gray-500 pb-2 focus:outline-none focus:border-teal-400 appearance-none cursor-pointer"
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
                className="w-full bg-transparent border-b border-gray-500 text-white text-sm placeholder-gray-500 pb-2 focus:outline-none focus:border-teal-400"
              />
              <textarea
                name="detail"
                placeholder="Details"
                rows={3}
                value={formData.detail}
                onChange={handleInputChange}
                required
                className="w-full bg-transparent border-b border-gray-500 text-white text-sm placeholder-gray-500 pb-2 focus:outline-none focus:border-teal-400 resize-none"
              ></textarea>
              <div className="pt-2 text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative z-20 inline-flex items-center justify-center rounded-full bg-teal-500 px-5 py-3 text-sm text-white transition-all hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-50"
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
            </form>
          </div>
        </div>
      </div>

      {/* Contact Cards Section */}
      <div className="mt-10">
        <div className="flex flex-col gap-3">
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
              className="flex min-h-[128px] flex-col items-center justify-center rounded-[18px] border border-white/5 bg-[#221f1f] px-5 py-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.22)] transition-all duration-300"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center">
                {card.icon}
              </div>
              <p className="text-[15px] font-light leading-relaxed text-[#f1f1f1]">
                {card.label}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactMobile;
