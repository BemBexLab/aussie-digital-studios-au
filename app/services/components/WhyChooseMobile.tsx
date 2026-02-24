import React from "react";
import Image from "next/image";
import Divider from "./Divider";

const WhyChooseMobile = () => {
  return (
    <section className="sm:hidden mt-12">
      <div className="flex flex-col justify-center px-4 gap-4">
        <Image
          className="w-full h-[250px] object-cover rounded-lg"
          src="/Services/Rectangle_52.webp"
          alt="Why Choose Us"
          width={600}
          height={300}
        />
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-white">
            Why Choose Aussie Digital Studios
          </h2>
          <p className="text-xs text-[#AAAAAA] mt-3 leading-relaxed" data-text-sm-light>
            At AussieDigitalStudios, we deliver more than just websites. We
            create complete digital experiences built around strategy, design
            and performance. Our team manages everything from user experience
            planning and custom design to development, optimisation and ongoing
            support. The process is clear, collaborative and focused on
            outcomes, with no unnecessary complexity. We blend
            creativity with smart digital thinking to build websites that do
            more than look good. Every project is designed to support growth,
            improve engagement and strengthen your brand. Your business doesn't
            just need an online presence. It needs a digital foundation that
            works, and that's exactly what we build.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMobile;
