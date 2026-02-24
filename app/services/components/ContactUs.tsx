"use client";

import { Button, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import ContactUsMobile from "./ContactUsMobile";
import { sendContactEmail } from "@/lib/emailService";

const ContactUs = () => {
  const [isContentInView, setIsContentInView] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isClient, setIsClient] = useState(false);
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
    setIsClient(true);
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <ContactUsMobile />
      {isClient && (
      <section className="hidden sm:flex my-20 justify-center items-center w-full">
        <div className="flex flex-row justify-center max-w-7xl w-full mx-auto px-4">
        <div
          className="w-[550px] h-[390px] rounded-2xl"
        >
          <div className="flex flex-col">
            <motion.p
              className="text-xl text-[#4C8C74] font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Contact Us
            </motion.p>
            <motion.h2
              className="font-semibold text-white text-4xl mt-2 uppercase"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Looking For Best Design &<br></br> Development Agency In Uk?
            </motion.h2>
            <motion.p
              className="text-md text-[#AAAAAA] mt-5"
              data-text-sm-light
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Ready to bring your business idea to life? Let our experts work for
              you and create a<br></br> custom website that echoes your brand and
              engages your audience.
            </motion.p>
          </div>
        </div>

        {/* Contact Form */}
        <div
          className="w-[700px] h-[390px] px-7 py-7 ml-10 rounded-2xl relative"
          style={{
            backgroundImage: `url('${isDarkMode ? '/home/contactus_dark.svg' : '/home/Frame_163_Light.svg'}')`,
            backgroundColor: "transparent",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative z-10" suppressHydrationWarning>
            <div className="flex grid grid-cols-2 gap-4" suppressHydrationWarning>
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
              rows={4}
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
            <div className="flex flex-row mt-4">
              <button
                type="submit"
                disabled={loading}
                className="justify-center mt-4 px-3 w-[113px] h-[50px] text-sm bg-teal-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full hover:bg-blue-400 transition-all inline-flex items-center group flex flex-row gap-0 relative z-20 pointer-events-auto"
              >
                <span className="text-md font-light ml-2">
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
      )}
    </>
  );
};

export default ContactUs;
