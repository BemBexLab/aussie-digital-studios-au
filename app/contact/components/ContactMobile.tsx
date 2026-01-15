import React from "react";
import Image from "next/image";

const ContactMobile = () => {
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
            className="relative w-full bg-gray-900 bg-opacity-80 backdrop-blur rounded-lg p-4 border border-gray-700"
            style={{
              backgroundImage:
                "radial-gradient(circle at top right, rgba(255, 255, 255, 0.1) 0%, transparent 50%), url('/Home/Frame_161.svg')",
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
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-full h-24 bg-[#1F1F1F] rounded-lg shadow-lg flex items-center justify-center">
              <div className="flex flex-row items-center gap-3 px-3 w-full">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 50 50"
                    fill="none"
                  >
                    {i === 1 && (
                      <path
                        d="M20.9113 11.0754L22.2634 13.4982C23.4836 15.6846 22.9938 18.5528 21.072 20.4746C21.072 20.4746 18.7409 22.8058 22.9674 27.0323C27.1939 31.2588 29.5251 28.9277 29.5251 28.9277C31.4469 27.0059 34.3151 26.5161 36.5015 27.7363L38.9243 29.0884C42.2258 30.9309 42.6158 35.561 39.7138 38.4629C37.97 40.2067 35.8338 41.5635 33.4724 41.6531C29.4971 41.8038 22.7461 40.7977 15.9741 34.0257C9.20202 27.2536 8.19595 20.5026 8.34666 16.5273C8.43618 14.1659 9.79301 12.0297 11.5368 10.2859C14.4387 7.38396 19.0688 7.77387 20.9113 11.0754Z"
                        stroke="#FFDD1A"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    )}
                    {i === 2 && (
                      <>
                        <path
                          d="M4.16602 25.0002C4.16602 17.1434 4.16602 13.215 6.60679 10.7743C9.04757 8.3335 12.9759 8.3335 20.8327 8.3335H29.166C37.0228 8.3335 40.9511 8.3335 43.3919 10.7743C45.8327 13.215 45.8327 17.1434 45.8327 25.0002C45.8327 32.8569 45.8327 36.7853 43.3919 39.2261C40.9511 41.6668 37.0228 41.6668 29.166 41.6668H20.8327C12.9759 41.6668 9.04757 41.6668 6.60679 39.2261C4.16602 36.7853 4.16602 32.8569 4.16602 25.0002Z"
                          stroke="#FFDD1A"
                          strokeWidth="2"
                        />
                        <path
                          d="M12.501 16.6666L16.9987 20.4147C20.825 23.6033 22.7382 25.1976 25.001 25.1976C27.2638 25.1976 29.177 23.6033 33.0033 20.4147L37.501 16.6666"
                          stroke="#FFDD1A"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </>
                    )}
                    {i === 3 && (
                      <>
                        <path
                          d="M8.33301 21.1316C8.33301 11.762 15.7949 4.16638 24.9997 4.16638C34.2044 4.16638 41.6663 11.762 41.6663 21.1316C41.6663 30.4278 36.3469 41.2756 28.0474 45.1548C26.1127 46.0591 23.8866 46.0591 21.9519 45.1548C13.6524 41.2756 8.33301 30.4278 8.33301 21.1316Z"
                          stroke="#FFDD1A"
                          strokeWidth="2"
                        />
                        <circle
                          cx="25"
                          cy="20.833"
                          r="6.25"
                          stroke="#FFDD1A"
                          strokeWidth="2"
                        />
                      </>
                    )}
                  </svg>
                </div>
                <div className="flex-grow">
                  <p className="text-white font-medium text-xs sm:text-sm truncate">
                    {i === 1 ? "+1 (555) 123-4567" : i === 2 ? "hello@yourbrand.com" : "123 Business St, City"}
                  </p>
                  <p className="text-[#AAAAAA] text-xs">
                    {i === 1 ? "Call Us" : i === 2 ? "Email Us" : "Visit Office"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactMobile;
