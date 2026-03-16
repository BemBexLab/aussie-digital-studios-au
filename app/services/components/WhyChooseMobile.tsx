import React from "react";
import Image from "next/image";
import Divider from "./Divider";

type WhyChooseData = {
  image: string;
  heading: React.ReactNode;
  paragraphs: React.ReactNode[];
};

type WhyChooseMobileProps = {
  data?: WhyChooseData;
};

const WhyChooseMobile = ({ data }: WhyChooseMobileProps) => {
  if (!data) {
    return null;
  }

  return (
    <section className="sm:hidden mt-12">
      <div className="flex flex-col justify-center px-4 gap-4">
        <Image
          className="w-full h-[250px] object-cover rounded-lg"
          src={data.image}
          alt="Why Choose Us"
          width={600}
          height={300}
        />
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-white">
            {data.heading}
          </h2>
          <div className="text-xs text-[#AAAAAA] mt-3 leading-relaxed" data-text-sm-light>
            {data.paragraphs.map((text, index) => (
              <p key={index} className="whitespace-pre-line">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMobile;
