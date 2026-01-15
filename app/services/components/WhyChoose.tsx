import React from "react";
import Image from "next/image";
import Divider from "./Divider";

const WhyChoose = () => {
  return (
    <section className="mt-25">
      <div className="flex flex-row justify-center px-4 md:px-19 gap-8">
        <Image
          className="w-[900px] h-[400px]"
          src="/services/Rectangle_52.webp"
          alt="Why Choose Us"
          width={1200}
          height={1500}
        />
        <div className="flex flex-col mt-20 mx-5">
          <h2 className="text-4xl font-semibold">
            Why Choose Aussie Digital Studios
          </h2>
          <p className="text-sm text-[#AAAAAA] mt-4">
            At AussieDigitalStudios, we deliver more than just websites. We
            create complete digital experiences built around strategy, design
            and performance. Our team manages everything from user experience
            planning and custom design to development, optimisation and ongoing
            support. The process is clear, collaborative and focused on
            outcomes, with no unnecessary complexity.<br></br> We blend
            creativity with smart digital thinking to build websites that do
            more than look good. Every project is designed to support growth,
            improve engagement and strengthen your brand. Your business doesn’t
            just need an online presence. It needs a digital foundation that
            works, and that’s exactly what we build.
          </p>
        </div>
      </div>

      <div className="flex flex-col mt-30 justify-center">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-xl font-medium text-[#4C8C74] mb-2">Our Process</p>
          <h2 className="text-4xl md:text-4xl font-semibold text-white">
            Our Proven 3-Step Process to Grow Your<br></br> Brand with Web
            Design and Development
          </h2>
        </div>

        {/* Divider */}
        <Divider />

        <div className="flex flex-row justify-center gap-5 mb-10">
          <Image
            className="w-[400px] h-[400px]"
            src="/services/01.svg"
            alt="Our Process"
            width={1200}
            height={1500}
          />
          <Image
            className="w-[400px] h-[400px]"
            src="/services/02.svg"
            alt="Our Process"
            width={1200}
            height={1500}
          />
          <Image
            className="w-[400px] h-[400px]"
            src="/services/03.svg"
            alt="Our Process"
            width={1200}
            height={1500}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
