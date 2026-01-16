import React from "react";
import Image from "next/image";
import Divider from "./Divider";

type OurProcessProps = {
  service: {
    processCardData?: Array<{
      image: string;
    }>;
  };
};

const OurProcess = ({ service }: OurProcessProps) => {
  return (
    <section>
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
          {service.processCardData?.map((item, index) => (
            <div key={index} className="flex flex-col items-center"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
