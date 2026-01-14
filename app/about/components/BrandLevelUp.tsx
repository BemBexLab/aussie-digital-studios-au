import React from "react";

const BrandLevelUp = () => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white h-screen bg-cover bg-center"
      data-about-brandlevelup-bg
      style={{ backgroundImage: "url('/About/aboutherobg.png')" }}
    >
      <div className="text-center px-4 md:px-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-white">
          Let's <span className="text-yellow-400" data-brandlevelup-work>Work</span> Together
        </h1>
        <p className="mt-4 md:mx-25 text-lg sm:text-xl">
          We’re ready to help your business grow online with smart design,
          strategy, and creative energy. Let’s talk about how we can take your
          brand to the next level.
        </p>
        <button className="mt-6 px-8 py-3 text-lg bg-teal-500 text-white rounded-full hover:bg-blue-400 transition-all inline-flex items-center group">
          <span>Contact Us</span>
          <span className="ml-3 relative w-10 h-10 flex items-center justify-center">
            <span
              className="absolute inset-0 bg-black rounded-full"
              aria-hidden="true"
            ></span>
            <svg
              className="relative w-4 h-4 z-10 transition-transform duration-300 group-hover:rotate-45"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              data-brandlevelup-arrow
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
  );
};

export default BrandLevelUp;
