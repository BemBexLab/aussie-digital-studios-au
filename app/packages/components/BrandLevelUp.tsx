import Image from "next/image";
import React from "react";

const BrandLevelUp = () => {
  return (
    <div
      className="flex flex-col bg-gradient-to-r mb-20 from-gray-800 via-gray-900 to-black text-white h-80 md:h-106 bg-cover bg-center"
      data-brandlevelup-bg
      style={{ backgroundImage: "url(/Home/CTA.svg)" }}
    >
      <div className="flex flex-row">
        {/* Text Part */}
        <div className="mt-20 mx-10 w-[600px] px-3 md:px-10 py-8 md:py-0">
          <h1 className="text-5xl sm:text-5xl font-semibold text-white">
            Ready to <span className="text-yellow-400">level up</span> your
            brand?
          </h1>
          <p className="mt-4 text-lg sm:text-xl">
            Let's create something modern, simple, and effective.
          </p>

          {/* Button */}
          <div className="flex flex-row mt-4">
            <button className="justify-center mt-4 px-3 w-[190px] h-[45px] text-sm bg-teal-500 text-white rounded-full hover:bg-blue-400 transition-all inline-flex items-center group flex flex-row">
              <span>Book a Strategy Call</span>
              <span className="ml-3 relative w-6 h-6 flex items-center justify-center">
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

        {/* Image Part */}
        <div
          className="flex justify-center items-center flex-1 h-[350px] w-[400px] mr-12 mt-10 rounded-lg"
          style={{
            backgroundImage: "url(/Home/Rectangle_1905.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Green Elipse */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="130"
            viewBox="0 0 201 204"
            fill="none"
            className="flex justify-center items-center"
          >
            <g filter="url(#filter0_dg_1087_1656)">
              <circle cx="100.442" cy="100.442" r="94.6417" fill="#4C8C74" />
            </g>
            <defs>
              <filter
                id="filter0_dg_1087_1656"
                x="-1.23978e-05"
                y="-0.000195503"
                width="200.883"
                height="203.083"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1087_1656"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1087_1656"
                  result="shape"
                />
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.029325515031814575 0.029325515031814575"
                  numOctaves="3"
                  seed="7793"
                />
                <feDisplacementMap
                  in="shape"
                  scale="11.600000381469727"
                  xChannelSelector="R"
                  yChannelSelector="G"
                  result="displacedImage"
                  width="100%"
                  height="100%"
                />
                <feMerge result="effect2_texture_1087_1656">
                  <feMergeNode in="displacedImage" />
                </feMerge>
              </filter>
            </defs>
            {/* Play button SVG */}
            <g transform="translate(77, 78.5)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="47"
                height="47"
                viewBox="0 0 47 47"
                fill="none"
              >
                <path
                  d="M39.8058 18.2417C43.9444 20.4923 43.9444 26.3184 39.8058 28.569L14.8168 42.1579C10.7944 44.3453 5.85132 41.4983 5.85132 36.9943L5.85132 9.81637C5.85132 5.31238 10.7944 2.4654 14.8168 4.65273L39.8058 18.2417Z"
                  stroke="white"
                  strokeWidth="2.92567"
                />
              </svg>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BrandLevelUp;
