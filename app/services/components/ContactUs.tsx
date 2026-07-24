"use client";

import React, { useState } from "react";
import { motion } from "@/lib/motion";
import ContactUsMobile from "./ContactUsMobile";
import { sendContactEmail } from "@/lib/emailService";
import { useThemeMode } from "@/lib/useThemeMode";

type ContactUsData = {
  heading?: React.ReactNode;
  body?: React.ReactNode;
  buttonText?: string;
};

type ContactUsProps = {
  data?: ContactUsData;
};

const ContactUs = ({ data }: ContactUsProps) => {
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

  const inputClasses = `w-full border-b bg-transparent pb-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-400 ${
    isDarkMode ? "border-gray-500" : "border-black text-black placeholder:text-black/60"
  }`;

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <ContactUsMobile data={data} />
      <section className="hidden sm:flex my-20 justify-center items-center w-full">
        <div className="flex flex-row justify-center max-w-7xl w-full mx-auto px-4">
          <div className="w-[550px] h-[390px] rounded-2xl">
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
                {data?.heading || (
                  <>
                    Looking For Best Design &<br />
                    Development Agency In Uk?
                  </>
                )}
              </motion.h2>
              <motion.span
                className="text-md text-[#AAAAAA] mt-5"
                data-text-sm-light
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
              >
                {data?.body || (
                  <>
                    Ready to bring your business idea to life? Let our experts work
                    for you and create a custom website that echoes your brand and
                    engages your audience.
                  </>
                )}
              </motion.span>
            </div>
          </div>

          <div
            className="w-[700px] h-[390px] px-7 py-7 ml-10 rounded-2xl relative"
            style={{
              backgroundImage: `url('${isDarkMode ? "/Home/contactus_dark.svg" : "/Home/Frame_163_Light.svg"}')`,
              backgroundColor: "transparent",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-4" suppressHydrationWarning>
              <div className="grid grid-cols-2 gap-4" suppressHydrationWarning>
                <input
                  name="firstName"
                  placeholder="First Name"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
                <input
                  name="lastName"
                  placeholder="Last Name"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
                <input
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
                <input
                  name="phone"
                  placeholder="Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>

              <textarea
                name="detail"
                placeholder="Details"
                rows={4}
                value={formData.detail}
                onChange={handleChange}
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

              <div className="flex flex-row mt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="justify-center mt-4 px-3 w-auto h-[50px] text-sm bg-teal-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full hover:bg-blue-400 transition-all inline-flex items-center group flex flex-row gap-0 relative z-20 pointer-events-auto"
                >
                  <span className="text-md font-light ml-2">
                    {loading ? "Sending..." : data?.buttonText || "Submit"}
                  </span>
                  <span className="ml-2 relative w-7 h-7 flex items-center justify-center">
                    <span
                      className={`absolute inset-0 rounded-full ${isDarkMode ? "bg-black" : "bg-white"}`}
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
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
