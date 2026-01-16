"use client";

import { TextField } from "@mui/material";
import React, { useState } from "react";

const ContactUsMobile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
          <p className="text-xs sm:text-sm text-[#AAAAAA]">
            Ready to bring your business idea to life? Let our experts work for
            you and create a custom website that echoes your brand and engages your audience.
          </p>
        </div>

        {/* Contact Form */}
        <div
          className="w-full px-4 py-6 rounded-lg"
          style={{
            backgroundImage: 'url("/Home/Frame_161.svg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
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
              sx={{
                "& .MuiInput-input": {
                  color: "white",
                  fontSize: "0.875rem",
                },
                "& .MuiInput-underline:before": {
                  borderBottomColor: "rgba(255,255,255,0.3)",
                },
                "& .MuiInput-underline:hover:before": {
                  borderBottomColor: "rgba(255,255,255,0.5)",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "white",
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "rgba(255,255,255,0.7)",
                  opacity: 1,
                },
                "& .MuiFormLabel-root": {
                  color: "rgba(255,255,255,0.7)",
                  paddingLeft: "8px",
                  fontSize: "0.875rem",
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "white",
                },
              }}
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
              sx={{
                "& .MuiInput-input": {
                  color: "white",
                  fontSize: "0.875rem",
                },
                "& .MuiInput-underline:before": {
                  borderBottomColor: "rgba(255,255,255,0.3)",
                },
                "& .MuiInput-underline:hover:before": {
                  borderBottomColor: "rgba(255,255,255,0.5)",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "white",
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "rgba(255,255,255,0.7)",
                  opacity: 1,
                },
                "& .MuiFormLabel-root": {
                  color: "rgba(255,255,255,0.7)",
                  paddingLeft: "8px",
                  fontSize: "0.875rem",
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "white",
                },
              }}
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
              sx={{
                "& .MuiInput-input": {
                  color: "white",
                  fontSize: "0.875rem",
                },
                "& .MuiInput-underline:before": {
                  borderBottomColor: "rgba(255,255,255,0.3)",
                },
                "& .MuiInput-underline:hover:before": {
                  borderBottomColor: "rgba(255,255,255,0.5)",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "white",
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "rgba(255,255,255,0.7)",
                  opacity: 1,
                },
                "& .MuiFormLabel-root": {
                  color: "rgba(255,255,255,0.7)",
                  paddingLeft: "8px",
                  fontSize: "0.875rem",
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "white",
                },
              }}
            />

            <TextField
              id="phone"
              label="Phone Number"
              type="number"
              variant="standard"
              fullWidth
              name="phone"
              onChange={handleChange}
              value={formData.phone}
              sx={{
                "& .MuiInput-input": {
                  color: "white",
                  fontSize: "0.875rem",
                },
                "& .MuiInput-underline:before": {
                  borderBottomColor: "rgba(255,255,255,0.3)",
                },
                "& .MuiInput-underline:hover:before": {
                  borderBottomColor: "rgba(255,255,255,0.5)",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "white",
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "rgba(255,255,255,0.7)",
                  opacity: 1,
                },
                "& .MuiFormLabel-root": {
                  color: "rgba(255,255,255,0.7)",
                  paddingLeft: "8px",
                  fontSize: "0.875rem",
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "white",
                },
              }}
            />

            {/* Details Field */}
            <TextField
              id="details"
              label="Details"
              multiline
              rows={3}
              variant="standard"
              fullWidth
              name="details"
              onChange={handleChange}
              value={formData.details}
              sx={{
                "& .MuiInput-input": {
                  color: "white",
                  fontSize: "0.875rem",
                },
                "& .MuiInput-underline:before": {
                  borderBottomColor: "rgba(255,255,255,0.3)",
                },
                "& .MuiInput-underline:hover:before": {
                  borderBottomColor: "rgba(255,255,255,0.5)",
                },
                "& .MuiInput-underline:after": {
                  borderBottomColor: "white",
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "rgba(255,255,255,0.7)",
                  opacity: 1,
                },
                "& .MuiFormLabel-root": {
                  color: "rgba(255,255,255,0.7)",
                  paddingLeft: "8px",
                  fontSize: "0.875rem",
                },
                "& .MuiFormLabel-root.Mui-focused": {
                  color: "white",
                },
              }}
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 px-3 w-full h-[44px] text-xs sm:text-sm bg-teal-500 text-white rounded-full hover:bg-blue-400 transition-all inline-flex items-center justify-center group gap-2"
            >
              <span className="text-sm font-light">Submit</span>
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
