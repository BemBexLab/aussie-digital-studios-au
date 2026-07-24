"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import { motion } from "@/lib/motion";
import ContactUsSm from "./ContactUsSm";
import { sendContactEmail } from "@/lib/emailService";
import { useThemeMode } from "@/lib/useThemeMode";

const fieldClassName =
  "w-full border-b bg-transparent pb-3 text-sm transition-colors focus:outline-none";

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

  const inputClasses = `${fieldClassName} ${
    isDarkMode
      ? "border-white/30 text-white placeholder:text-white/70 focus:border-white"
      : "border-black text-black placeholder:text-black/70 focus:border-black"
  }`;

  const labelClasses = `${
    isDarkMode ? "text-white/70" : "text-black"
  } px-2 text-sm`;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
      source: "Home ContactUs form",
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
            Let&apos;s Talk
          </motion.p>
          <motion.h2
            className="mt-2 text-center text-3xl font-semibold leading-tight text-white md:text-4xl xl:text-[2.5rem]"
            initial={{ opacity: 0, y: 10 }}
            animate={
              isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
            }
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            If the site is not bringing in the work it should, or you&apos;re
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
            actually delivers? We&apos;d love to hear what you&apos;re working on.
          </motion.p>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-start xl:gap-10">
          <Image
            src={isDarkMode ? "/Home/dark_tel.svg" : "/Home/Light_tel.svg"}
            alt="Contact Us Image"
            width={1190}
            height={1190}
            className="h-auto w-full max-w-[360px] object-contain md:max-w-[420px] xl:h-[365px] xl:max-w-[450px]"
          />

          <div
            className="w-full max-w-[760px] rounded-2xl px-5 py-5 sm:px-6 md:px-7 md:py-4 xl:h-[310px] xl:max-w-[700px]"
            style={{
              backgroundImage: `url('${isDarkMode ? "/Home/contactus_dark.svg" : "/Home/Frame_163_Light.svg"}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            suppressHydrationWarning
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" suppressHydrationWarning>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2" suppressHydrationWarning>
                <label className="block">
                  <span className={labelClasses}>First Name</span>
                  <input
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  />
                </label>

                <label className="block">
                  <span className={labelClasses}>Last Name</span>
                  <input
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  />
                </label>

                <label className="block">
                  <span className={labelClasses}>Email</span>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  />
                </label>

                <label className="block">
                  <span className={labelClasses}>Phone Number</span>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  />
                </label>
              </div>

              <label className="block">
                <span className={labelClasses}>Details</span>
                <textarea
                  name="detail"
                  rows={3}
                  value={formData.detail}
                  onChange={handleChange}
                  required
                  className={`${inputClasses} resize-none`}
                />
              </label>

              <div className="mt-2 flex flex-row justify-start">
                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex h-[40px] w-full items-center justify-center gap-1 rounded-full bg-teal-500 text-sm text-white transition-all hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-50 sm:w-[128px]"
                >
                  <span className="ml-2 text-sm font-light md:text-base">
                    {loading ? "Sending..." : "Submit"}
                  </span>
                  <span className="ml-2 relative flex h-7 w-7 items-center justify-center">
                    <span
                      className="absolute inset-0 rounded-full bg-black"
                      aria-hidden="true"
                    ></span>
                    <svg
                      className="button-arrow-svg relative z-10 h-4 w-4 transition-transform duration-300 group-hover:rotate-45"
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
