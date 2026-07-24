"use client";

import React, { useState } from "react";
import { sendContactEmail } from "@/lib/emailService";
import { useThemeMode } from "@/lib/useThemeMode";

type ContactUsData = {
  heading?: React.ReactNode;
  body?: React.ReactNode;
};

type ContactUsMobileProps = {
  data?: ContactUsData;
};

const ContactUsMobile = ({ data }: ContactUsMobileProps) => {
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
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const inputClasses = `w-full bg-transparent border-b text-sm pb-2 focus:outline-none focus:border-teal-400 ${
    isDarkMode
      ? "border-gray-500 text-white placeholder:text-gray-500"
      : "border-black text-black placeholder:text-black/60"
  }`;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const result = await sendContactEmail({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      service: formData.service || "Service Inquiry",
      subject: formData.subject || "Contact Form Submission",
      detail: formData.detail,
    });

    setLoading(false);

    if (result.success) {
      setMessage("Email sent successfully! We'll be in touch soon.");
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
      setMessage(`Error: ${result.error}`);
      setIsSuccess(false);
    }
  };

  return (
    <section className="sm:hidden my-8 px-4">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-3">
          <p className="text-xs sm:text-sm text-[#4C8C74] font-semibold">Contact Us</p>
          <h2 className="font-semibold text-white text-xl sm:text-2xl uppercase leading-tight">
            {data?.heading || "Looking For Best Design & Development Agency In Uk?"}
          </h2>
          <span className="text-xs sm:text-sm text-[#AAAAAA]" data-text-sm-light>
            {data?.body || (
              <>
                Ready to bring your business idea to life? Let our experts work
                for you and create a custom website that echoes your brand and
                engages your audience.
              </>
            )}
          </span>
        </div>

        <div
          className="w-full px-4 py-6 rounded-lg relative"
          style={{
            backgroundImage: `url('${isDarkMode ? "/Home/Frame_161.svg" : "/Home/Frame_163_Light.svg"}')`,
            backgroundColor: "transparent",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4 relative z-10">
            <input
              name="firstName"
              placeholder="First Name"
              type="text"
              onChange={handleChange}
              value={formData.firstName}
              required
              className={inputClasses}
            />

            <input
              name="lastName"
              placeholder="Last Name"
              type="text"
              onChange={handleChange}
              value={formData.lastName}
              required
              className={inputClasses}
            />

            <input
              name="email"
              placeholder="Email"
              type="email"
              onChange={handleChange}
              value={formData.email}
              required
              className={inputClasses}
            />

            <input
              name="phone"
              placeholder="Phone Number"
              type="tel"
              onChange={handleChange}
              value={formData.phone}
              required
              className={inputClasses}
            />

            <textarea
              name="detail"
              placeholder="Details"
              rows={3}
              onChange={handleChange}
              value={formData.detail}
              required
              className={`${inputClasses} resize-none`}
            />

            {message && (
              <div
                className={`rounded p-3 text-center text-sm ${
                  isSuccess
                    ? "bg-green-500/20 text-green-400"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-4 px-3 w-full h-[44px] text-xs sm:text-sm bg-teal-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full hover:bg-blue-400 transition-all inline-flex items-center justify-center group gap-2 relative z-20 pointer-events-auto"
            >
              <span className="text-sm font-light">
                {loading ? "Sending..." : "Submit"}
              </span>
              <span className="relative w-5 h-5 flex items-center justify-center flex-shrink-0">
                <span
                  className={`absolute inset-0 rounded-full ${isDarkMode ? "bg-black" : "bg-white"}`}
                  aria-hidden="true"
                ></span>
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
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M11 7 H17 V13"
                    stroke={isDarkMode ? "#fff" : "#000"}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsMobile;
