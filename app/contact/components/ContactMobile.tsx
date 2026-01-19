import React, { useState, useEffect } from "react";
import Image from "next/image";

const ContactMobile = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

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
  return (
    <div className="sm:hidden relative w-full mt-12 py-8 px-4 overflow-x-hidden">
      {/* Main Content */}
      <div className="relative w-full">
        {/* Stacked layout */}
        <div className="flex flex-col gap-6">
          {/* Image Section */}
          <div className="relative w-full">
            <Image
              src="/Contact/Rectangle_1.png"
              alt="Get in Touch Illustration"
              width={280}
              height={280}
              className="w-full h-auto object-cover rounded-lg"
            />
            {/* Move shape inside bounds on mobile */}
            <div className="absolute -bottom-4 -right-2 pointer-events-none">
              <Image
                src="/Contact/shape.png"
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
                src="/Geometric_Shape_Silver.png"
                alt="decorative geometric shape"
                width={60}
                height={60}
                className=""
              />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">Get In Touch</h1>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full bg-transparent border-b border-gray-500 text-white text-sm placeholder-gray-500 pb-2 focus:outline-none focus:border-teal-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full bg-transparent border-b border-gray-500 text-white text-sm placeholder-gray-500 pb-2 focus:outline-none focus:border-teal-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-gray-500 text-white text-sm placeholder-gray-500 pb-2 focus:outline-none focus:border-teal-400"
              />
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full bg-transparent border-b border-gray-500 text-white text-sm placeholder-gray-500 pb-2 focus:outline-none focus:border-teal-400"
              />
              <select className="w-full bg-transparent border-b border-gray-500 text-gray-500 text-sm placeholder-gray-500 pb-2 focus:outline-none focus:border-teal-400 appearance-none cursor-pointer">
                <option value="">Select services</option>
                <option value="web">Web Development</option>
                <option value="design">Design</option>
                <option value="consulting">Consulting</option>
              </select>
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-transparent border-b border-gray-500 text-white text-sm placeholder-gray-500 pb-2 focus:outline-none focus:border-teal-400"
              />
              <textarea
                placeholder="Details"
                rows={3}
                className="w-full bg-transparent border-b border-gray-500 text-white text-sm placeholder-gray-500 pb-2 focus:outline-none focus:border-teal-400 resize-none"
              ></textarea>
              <div className="pt-2 text-center">
                <button className="px-5 py-2 text-xs sm:text-sm bg-teal-500 hover:bg-blue-400 text-white rounded-full transition-all inline-flex items-center justify-center group">
                  <span>Submit</span>
                  <span className="ml-2 relative w-4 h-4 flex items-center justify-center">
                    <span className="absolute inset-0 bg-black rounded-full" aria-hidden="true"></span>
                    <svg
                      className="relative w-2 h-2 z-10 transition-transform duration-300 group-hover:rotate-45"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                    >
                      <path
                        d="M7 17 L17 7"
                        stroke="#fff"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                      <path
                        d="M11 7 H17 V13"
                        stroke="#fff"
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
