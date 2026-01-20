import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="mb-0 pb-0 w-full flex justify-center mt-5 mb-25 overflow-hidden">
      {/* Desktop layout (md and above) */}
      <section className="hidden md:block">
        <div className="max-w-7xl px-3 mt-25">
          <div className="flex flex-col md:flex-row gap-0">
            {/* Left label */}
            <div className="md:w-1/4">
              <p className="text-xl font-medium text-emerald-500 whitespace-nowrap">
                About Us
              </p>
            </div>

            {/* Right content */}
            <div className="md:w-3/4">
              <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-[#989998] leading-snug">
                AussieDigitalStudios creates modern websites, strong branding
                and clear digital strategy. We keep things simple, creative and
                focused on real results.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile layout (below md) */}
      <section className="md:hidden">
        <div className="max-w-7xl px-3 mt-25">
          <div className="flex flex-col gap-4">
            {/* Label */}
            <div>
              <p className="text-sm font-medium text-emerald-500">
                About Us
              </p>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#989998] leading-snug">
                AussieDigitalStudios creates modern websites, strong branding
                and clear digital strategy. We keep things simple, creative and
                focused on real results.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
