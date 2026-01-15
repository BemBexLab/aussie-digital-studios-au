import Image from "next/image";
import React from "react";

const CustomPlan = () => {
  return (
    <section className="mx-13 my-10 flex justify-center">
      <div className="flex flex-row h-[300px] w-full">
        {/* Custom Plan Content */}
        <div
          className="flex flex-col rounded-xl px-8 py-10 w-full"
          style={{
            backgroundImage: "url('/Home/Custom_plans.webp')",
            backgroundSize: "fill",
            backgroundPosition: "center",
          }}
        >
          <h2 className="font-semibold text-4xl text-white">Custom Plan</h2>
          <div className="w-[620px] mt-4">
            <p className="text-sm text-[#4C8C74]">
              AussieDigitalStudios is a full-service digital studio built for
              modern, fast-growing brands. From strategy to standout design and
              digital execution, everything you need to build and grow your
              online presence lives here, powered by a creative, results-focused
              team.
            </p>
          </div>
          <div className="mt-15 flex flex-row">
            <a
              href="#"
              className="flex font-light text-sm items-center justify-center gap-1 bg-[#4C8C74] text-white py-2 px-3 rounded-full hover:bg-blue-300 transition-colors group w-fit mr-auto"
            >
              Book a consultation call to create your perfect plan
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
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
            <div className="flex flex-row justify-center my-2">
              <p className="text-[#4C8C74]">SMM Plans</p>
              <svg
                className="m-2"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <circle cx="5.89511" cy="5.89511" r="5.89511" fill="#4C8C74" />
              </svg>
            </div>
          </div>
        </div>

        {/* Image on right side */}
        <Image
          src="/Home/performance_marketing.webp"
          alt="Custom Plan Illustration"
          width={370}
          height={400}
          className="ml-5"
        />
      </div>
    </section>
  );
};

export default CustomPlan;
