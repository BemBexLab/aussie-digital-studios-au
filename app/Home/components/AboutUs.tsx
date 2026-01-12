import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="mb-0 pb-0 mx-10 overflow-hidden">
      <section className="w-full bg-[linear-gradient(90deg,#1b170f_0%,#0b1a16_45%,#070a0a_100%)]">
        <div className="max-w-7xl mx-auto px-3 mt-60">
          <div className="flex flex-col md:flex-row gap-0">
            {/* Left label */}
            <div className="md:w-1/4">
              <p className="text-sm font-medium text-emerald-500 whitespace-nowrap">
                About Us
              </p>
            </div>

            {/* Right content */}
            <div className="md:w-3/4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#464646] leading-snug">
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
