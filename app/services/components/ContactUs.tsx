"use client";

import { Button, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import ContactUsMobile from "./ContactUsMobile";

const ContactUs = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    details: "",
  });

  useEffect(() => {
    const theme = typeof window !== "undefined" ? localStorage.getItem("ads_theme") : null;
    setIsDarkMode(theme !== "light");

    const handleThemeChange = () => {
      const theme = typeof window !== "undefined" ? localStorage.getItem("ads_theme") : null;
      setIsDarkMode(theme !== "light");
    };

    const observer = new MutationObserver(handleThemeChange);
    const htmlElement = typeof document !== "undefined" ? document.documentElement : null;

    if (htmlElement) {
      observer.observe(htmlElement, { attributes: true, attributeFilter: ["class"] });
    }

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
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
      <section className="hidden sm:block my-20 justify-center items-center mx-20">
      <div className="flex flex-row mt-10">
        <div
          className="w-[550px] h-[390px] rounded-2xl"
        >
          <div className="flex flex-col">
            <p className="text-xl text-[#4C8C74] font-semibold">Contact Us</p>
            <h2 className="font-semibold text-white text-4xl mt-2 uppercase">
              Looking For Best Design &<br></br> Development Agency In Uk?
            </h2>
            <p className="text-md text-[#AAAAAA] mt-5">
              Ready to bring your business idea to life? Let our experts work for
              you and create a<br></br> custom website that echoes your brand and
              engages your audience.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div
          className="w-[700px] h-[390px] px-7 py-7 ml-10 rounded-2xl"
          style={{
            backgroundImage: `url('${isDarkMode ? '/Home/contactus_dark.svg' : '/Home/Frame_163_Light.svg'}')`,
            backgroundColor: "transparent",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="flex grid grid-cols-2 gap-4">
            {/* First Name */}
            <TextField
              id="standard-search"
              label="First Name"
              type="text"
              variant="standard"
              fullWidth
              sx={textFieldSx}
            />

            {/* Last Name */}
            <TextField
              id="standard-search"
              label="Last Name"
              type="text"
              variant="standard"
              fullWidth
              sx={textFieldSx}
            />

            {/* Email */}
            <TextField
              id="standard-search"
              label="Email"
              type="email"
              variant="standard"
              fullWidth
              sx={textFieldSx}
            />

            {/* Phone */}
            <TextField
              id="standard-search"
              label="Phone Number"
              type="number"
              variant="standard"
              fullWidth
              sx={textFieldSx}
            />
          </div>

          <br />
          {/* Details Field */}
          <TextField
            id="standard-multiline-static"
            label="Details"
            multiline
            rows={4}
            defaultValue=""
            variant="standard"
            fullWidth
            sx={textFieldSx}
          />

          <br />

          {/* Submit Button */}
          <div className="flex flex-row mt-4">
            <button className="justify-center mt-4 px-3 w-[113px] h-[50px] text-sm bg-teal-500 text-white rounded-full hover:bg-blue-400 transition-all inline-flex items-center group flex flex-row gap-0">
              <span className="text-md font-light ml-2">Submit</span>
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
        </div>
      </div>
      </section>
    </>
  );
};

export default ContactUs;
