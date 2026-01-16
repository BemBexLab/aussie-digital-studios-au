import Image from "next/image";
import React from "react";

const CustomPlanMobile = () => {
  return (
    <section className="sm:hidden mx-3 my-6 flex justify-center">
      <div className="flex flex-col w-full">
        {/* Custom Plan Content */}
        <div
          className="flex flex-col rounded-lg px-4 py-6 w-full"
          style={{
            backgroundImage: "url('/Home/Custom_plans.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="font-semibold text-2xl text-white">Custom Plan</h2>
          <div className="w-full mt-3">
            <p className="text-xs text-[#4C8C74]">
              AussieDigitalStudios is a full-service digital studio built for
              modern, fast-growing brands. From strategy to standout design and
              digital execution, everything you need to build and grow your
              online presence lives here, powered by a creative, results-focused
              team.
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <a
              href="#"
              className="flex font-light text-xs items-center justify-center gap-1 bg-[#4C8C74] text-white py-2 px-3 rounded-full hover:bg-blue-300 transition-colors group w-full"
            >
              Book a consultation call to create your perfect plan
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="transition-transform duration-300 group-hover:rotate-[45deg]"
              >
                <circle cx="12" cy="12" r="10" fill="black" />
                <path
                  d="M9 12H15M15 12L12 9M15 12L12 15"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="rotate(-45 12 12)"
                />
              </svg>
            </a>
            <div className="flex flex-row justify-center items-center gap-1">
              <p className="text-xs text-[#4C8C74]">SMM Plans</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 12 12"
                fill="none"
              >
                <circle cx="5.89511" cy="5.89511" r="5.89511" fill="#4C8C74" />
              </svg>
            </div>
          </div>
        </div>

        {/* Image Below on Mobile */}
        <div className="mt-4 flex justify-center">
          <Image
            src="/Home/performance_marketing.webp"
            alt="Custom Plan Illustration"
            width={300}
            height={280}
            className="w-full h-auto max-w-xs"
          />
        </div>
      </div>
    </section>
  );
};

export default CustomPlanMobile;
