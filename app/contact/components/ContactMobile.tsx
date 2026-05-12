"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { sendContactEmail } from "@/lib/emailService";

const ContactMobile = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
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
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

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
    setMessage("");

    const result = await sendContactEmail(formData);

    setLoading(false);

    if (result.success) {
      setMessage("✅ Email sent successfully! We'll be in touch soon.");
      setIsSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        subject: "",
        detail: "",
      });
      setTimeout(() => setMessage(""), 5000);
    } else {
      setMessage(`❌ Error: ${result.error}`);
      setIsSuccess(false);
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
              src="/contact/Rectangle_1.webp"
              alt="Get in Touch Illustration"
              width={280}
              height={280}
              className="w-full h-auto object-cover rounded-lg"
            />
            {/* Move shape inside bounds on mobile */}
            <div className="absolute -bottom-4 -right-2 pointer-events-none">
              <Image
                src="/contact/shape.webp"
                alt="decorative shape"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
          </div>

          {/* Form Section */}
          <div
            className="relative w-full bg-gray-900 bg-opacity-80 backdrop-blur rounded-lg p-4"
            style={{
              backgroundImage: isDarkMode
                ? "radial-gradient(circle at top right, rgba(255, 255, 255, 0.1) 0%, transparent 50%), url('/Home/Frame_161.svg')"
                : `url('/Contact/contact_light.svg')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            {/* Smaller decorative shape */}
            <div className="absolute -top-6 -right-4 pointer-events-none opacity-60">
              <Image
                src="/Geometric_Shape_Silver.webp"
                alt="decorative geometric shape"
                width={60}
                height={60}
                className=""
              />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">Get In Touch</h1>
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
              {message && (
                <div
                  className={`p-3 rounded text-sm text-center ${
                    isSuccess
                      ? "bg-green-500 bg-opacity-20 text-green-400"
                      : "bg-red-500 bg-opacity-20 text-red-400"
                  }`}
                >
                  {message}
                </div>
              )}
              <div className="pt-2 text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-5 py-2 text-xs sm:text-sm bg-teal-500 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-400 text-white rounded-full transition-all inline-flex items-center justify-center group relative z-20 pointer-events-auto"
                >
                  <span>{loading ? "Sending..." : "Submit"}</span>
                  <span className="ml-2 relative w-4 h-4 flex items-center justify-center">
                    <span className={`absolute inset-0 rounded-full transition-colors ${isDarkMode ? "bg-black" : "bg-white"}`} aria-hidden="true"></span>
                    <svg
                      className="relative w-2 h-2 z-10 transition-transform duration-300 group-hover:rotate-45"
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
        {/* Stack cards vertically */}
        <div className="flex flex-col gap-3">
          {/* Phone Card */}
          <Image
            src={isDarkMode ? "/Contact/phone_number_dark.svg" : "/Contact/phone_number_light.svg"}
            alt="Phone Contact"
            width={400}
            height={120}
            className="w-full h-auto object-cover rounded-lg"
          />

          {/* Email Card */}
          <Image
            src={isDarkMode ? "/Contact/email_dark.svg" : "/Contact/email_light.svg"}
            alt="Email Contact"
            width={400}
            height={120}
            className="w-full h-auto object-cover rounded-lg"
          />

          {/* Location Card */}
          <Image
            src={isDarkMode ? "/Contact/location_dark.svg" : "/Contact/location_light.svg"}
            alt="Location Contact"
            width={400}
            height={120}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactMobile;
