"use client";

import { TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { sendContactEmail } from "@/lib/emailService";

const ContactUsMobile = () => {
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const textFieldSx = {
    "& .MuiInput-input": {
      color: isDarkMode ? "white" : "black",
      fontSize: "0.875rem",
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
      fontSize: "0.875rem",
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

  return (
    <section className="sm:hidden my-8 px-4">
      <div className="flex flex-col space-y-6">
        {/* Text Content */}
        <div className="flex flex-col space-y-3">
          <p className="text-xs sm:text-sm text-[#4C8C74] font-semibold">Contact Us</p>
          <h2 className="font-semibold text-white text-xl sm:text-2xl uppercase leading-tight">
            Looking For Best Design & Development Agency In Uk?
          </h2>
          <p className="text-xs sm:text-sm text-[#AAAAAA]" data-text-sm-light>
            Ready to bring your business idea to life? Let our experts work for
            you and create a custom website that echoes your brand and engages your audience.
          </p>
        </div>

        {/* Contact Form */}
        <div
          className="w-full px-4 py-6 rounded-lg relative"
          style={{
            backgroundImage: `url('${isDarkMode ? '/home/Frame_161.svg' : '/home/Frame_163_Light.svg'}')`,
            backgroundColor: "transparent",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4 relative z-10">
            {/* Single Column Fields */}
            <TextField
              id="firstName"
              label="First Name"
              type="text"
              variant="standard"
              fullWidth
              name="firstName"
              onChange={handleChange}
              value={formData.firstName}
              required
              sx={textFieldSx}
            />

            <TextField
              id="lastName"
              label="Last Name"
              type="text"
              variant="standard"
              fullWidth
              name="lastName"
              onChange={handleChange}
              value={formData.lastName}
              required
              sx={textFieldSx}
            />

            <TextField
              id="email"
              label="Email"
              type="email"
              variant="standard"
              fullWidth
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
              sx={textFieldSx}
            />

            <TextField
              id="phone"
              label="Phone Number"
              type="tel"
              variant="standard"
              fullWidth
              name="phone"
              onChange={handleChange}
              value={formData.phone}
              required
              sx={textFieldSx}
            />

            {/* Details Field */}
            <TextField
              id="detail"
              label="Details"
              multiline
              rows={3}
              variant="standard"
              fullWidth
              name="detail"
              onChange={handleChange}
              value={formData.detail}
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
                  className="absolute inset-0 bg-black rounded-full"
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
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsMobile;
