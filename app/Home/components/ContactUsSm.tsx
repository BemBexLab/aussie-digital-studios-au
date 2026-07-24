"use client";

import Image from "next/image";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { sendContactEmail } from "@/lib/emailService";
import { useThemeMode } from "@/lib/useThemeMode";

const ContactUsSm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    subject: "",
    detail: "",
  });
  const { isDarkMode } = useThemeMode();
  const [loading, setLoading] = useState(false);

  const inputClasses = `w-full border-b bg-transparent pb-2 text-sm focus:outline-none ${
    isDarkMode
      ? "border-white/30 text-white placeholder:text-white/70 focus:border-white"
      : "border-black text-black placeholder:text-black/70 focus:border-black"
  }`;

  const labelClasses = `${
    isDarkMode ? "text-white/70" : "text-black"
  } mb-1 block px-2 text-sm`;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const result = await sendContactEmail({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      service: formData.service || "General Inquiry",
      subject: formData.subject || "Contact Form Submission",
      detail: formData.detail,
      source: "Home ContactUsSm form",
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
    <section className="sm:hidden my-8 px-4">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-3">
          <p className="text-xs sm:text-sm text-[#4C8C74] font-semibold">Let&apos;s Talk</p>
          <h2 className="font-semibold text-white text-xl sm:text-2xl uppercase leading-tight">
            If the site is not bringing in the work it should, or you&apos;re starting from scratch and want to do it right the first time, get in touch.
          </h2>
          <p className="text-xs sm:text-sm text-[#AAAAAA]" data-text-sm-light>
            Ready to bring your business idea to life? Let our experts work for
            you and create a custom website that echoes your brand and engages your audience.
          </p>
        </div>

        <div className="w-full h-[200px] sm:h-[250px] rounded-lg">
          <Image
            src={isDarkMode ? "/Home/dark_tel.svg" : "/Home/Light_tel.svg"}
            alt="Contact Us Image"
            width={500}
            height={500}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

        <div
          className="w-full px-4 py-6 rounded-lg relative"
          style={{
            backgroundImage: `url('${isDarkMode ? "/Home/contactus_dark.svg" : "/Home/Frame_163_Light.svg"}')`,
            backgroundColor: "transparent",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col space-y-4">
            <label className="block">
              <span className={labelClasses}>First Name</span>
              <input
                name="firstName"
                type="text"
                onChange={handleChange}
                value={formData.firstName}
                required
                className={inputClasses}
              />
            </label>

            <label className="block">
              <span className={labelClasses}>Last Name</span>
              <input
                name="lastName"
                type="text"
                onChange={handleChange}
                value={formData.lastName}
                required
                className={inputClasses}
              />
            </label>

            <label className="block">
              <span className={labelClasses}>Email</span>
              <input
                name="email"
                type="email"
                onChange={handleChange}
                value={formData.email}
                required
                className={inputClasses}
              />
            </label>

            <label className="block">
              <span className={labelClasses}>Phone Number</span>
              <input
                name="phone"
                type="tel"
                onChange={handleChange}
                value={formData.phone}
                required
                className={inputClasses}
              />
            </label>

            <label className="block">
              <span className={labelClasses}>Details</span>
              <textarea
                name="detail"
                rows={3}
                onChange={handleChange}
                value={formData.detail}
                required
                className={`${inputClasses} resize-none`}
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 px-3 w-full h-[44px] text-xs sm:text-sm bg-teal-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full hover:bg-blue-400 transition-all inline-flex items-center justify-center group gap-2 relative z-20 pointer-events-auto"
            >
              <span className="font-light">{loading ? "Sending..." : "Submit"}</span>
              <span className="relative w-5 h-5 flex items-center justify-center flex-shrink-0">
                <span
                  className={`absolute inset-0 rounded-full transition-colors ${isDarkMode ? "bg-black" : "bg-white"}`}
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

export default ContactUsSm;
