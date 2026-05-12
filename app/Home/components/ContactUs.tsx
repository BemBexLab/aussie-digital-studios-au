"use client";

import { TextField } from "@mui/material";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import ContactUsSm from "./ContactUsSm";
import { sendContactEmail } from "@/lib/emailService";
import { useThemeMode } from "@/lib/useThemeMode";

const ContactUs = () => {
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
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const [isHeadingInView, setIsHeadingInView] = useState(false);

  React.useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeadingInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const textFieldSx = {
    "& .MuiInput-input": {
      color: isDarkMode ? "white" : "black",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: isDarkMode ? "rgba(255,255,255,0.3)" : "black",
    },
    "& .MuiInput-underline:hover:before": {
      borderBottomColor: isDarkMode ? "rgba(255,255,255,0.5)" : "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: isDarkMode ? "white" : "black",
    },
    "& .MuiInputBase-input::placeholder": {
      color: isDarkMode ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.7)",
      opacity: 1,
    },
    "& .MuiFormLabel-root": {
      color: isDarkMode ? "rgba(255,255,255,0.7)" : "black",
      paddingLeft: "8px",
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: isDarkMode ? "white" : "black",
    },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const result = await sendContactEmail({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      service: formData.service || "General Inquiry",
      subject: formData.subject || "Contact Form Submission",
      detail: formData.detail,
    });

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
    <>
      <ContactUsSm />
      <section className="mx-auto mt-20 hidden w-full max-w-[1320px] px-4 sm:block sm:px-6 lg:px-8">
        <div
          ref={headingRef}
          className="mx-auto flex max-w-[1240px] flex-col items-center justify-center text-center"
        >
          <motion.p
            className="text-lg font-semibold text-[#4C8C74] md:text-xl"
            initial={{ opacity: 0, y: 8 }}
            animate={
              isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }
            }
            transition={{ duration: 0.6 }}
          >
            Let's Talk
          </motion.p>
          <motion.h2
            className="mt-2 text-center text-3xl font-semibold leading-tight text-white md:text-4xl xl:text-[2.5rem]"
            initial={{ opacity: 0, y: 10 }}
            animate={
              isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
            }
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            If the site is not bringing in the work it should, or you're
            starting <br className="hidden xl:block" />
            from scratch and want to do it right the first time, get in touch.
          </motion.h2>
          <motion.p
            className="mt-5 max-w-[920px] text-sm leading-relaxed text-[#AAAAAA] md:text-base"
            data-text-sm-light
            initial={{ opacity: 0, y: 8 }}
            animate={
              isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }
            }
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Book a Free Strategy Call. No pitch. No pressure. Just a
            conversation about your business.
            <br className="hidden lg:block" />
            Looking for a web design and development agency in Australia that
            actually delivers? We'd love to hear what you're working on.
          </motion.p>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-start xl:gap-10">
          {/* Image */}
          <Image
            src={isDarkMode ? "/Home/dark_tel.svg" : "/Home/Light_tel.svg"}
            alt="Contact Us Image"
            width={1190}
            height={1190}
            className="h-auto w-full max-w-[360px] object-contain md:max-w-[420px] xl:h-[365px] xl:max-w-[450px]"
          />

        {/* Contact Form */}
        <div
          className="w-full max-w-[760px] rounded-2xl px-5 py-5 sm:px-6 md:px-7 md:py-4 xl:h-[310px] xl:max-w-[700px]"
          style={{
            backgroundImage: `url('${isDarkMode ? '/Home/contactus_dark.svg' : '/Home/Frame_163_Light.svg'}')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          suppressHydrationWarning
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4" suppressHydrationWarning>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2" suppressHydrationWarning>
              {/* First Name */}
              <TextField
                name="firstName"
                label="First Name"
                type="text"
                variant="standard"
                fullWidth
                value={formData.firstName}
                onChange={handleChange}
                required
                sx={textFieldSx}
              />

              {/* Last Name */}
              <TextField
                name="lastName"
                label="Last Name"
                type="text"
                variant="standard"
                fullWidth
                value={formData.lastName}
                onChange={handleChange}
                required
                sx={textFieldSx}
              />

              {/* Email */}
              <TextField
                name="email"
                label="Email"
                type="email"
                variant="standard"
                fullWidth
                value={formData.email}
                onChange={handleChange}
                required
                sx={textFieldSx}
              />

              {/* Phone */}
              <TextField
                name="phone"
                label="Phone Number"
                type="tel"
                variant="standard"
                fullWidth
                value={formData.phone}
                onChange={handleChange}
                required
                sx={textFieldSx}
              />
            </div>

            {/* Details Field */}
            <TextField
              name="detail"
              label="Details"
              multiline
              rows={3}
              variant="standard"
              fullWidth
              value={formData.detail}
              onChange={handleChange}
              required
              sx={textFieldSx}
            />

            {/* Message Alert */}
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

            {/* Submit Button */}
            <div className="mt-2 flex flex-row justify-start">
              <button
                type="submit"
                disabled={loading}
                className="group inline-flex h-[40px] w-full items-center justify-center gap-1 rounded-full bg-teal-500 text-sm text-white transition-all hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-50 sm:w-[128px]"
              >
                <span className="ml-2 text-sm font-light md:text-base">
                  {loading ? "Sending..." : "Submit"}
                </span>
                <span className="ml-2 relative w-7 h-7 flex items-center justify-center">
                  <span
                    className="absolute inset-0 bg-black rounded-full"
                    aria-hidden="true"
                  ></span>
                  <svg
                    className="relative w-4 h-4 z-10 transition-transform duration-300 group-hover:rotate-45 button-arrow-svg"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                  >
                    <path
                      d="M7 17 L17 7"
                      stroke="#fff"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path
                      d="M11 7 H17 V13"
                      stroke="#fff"
                      strokeWidth="1.8"
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
      </section>
    </>
  );
};

export default ContactUs;
