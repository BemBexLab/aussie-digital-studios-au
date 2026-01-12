import React from "react";
import Image from "next/image";

const Mission = () => {
  return (
    <div className="flex flex-row justify-center items-center h-[700px] overflow-hidden">
      <div className="flex">
        <div className="w-50 h-72 mr-6">
          <Image
            src="/About/Rectangle_44.png"
            alt="Mission Image"
            width={288}
            height={288}
            className="w-full h-full object-cover rounded-[18px]"
          />
        </div>

        <div className="w-50 h-72 mr-6 mb-25 -translate-y-10 transform drop-shadow-2xl">
          <Image
            src="/About/Rectangle_45.png"
            alt="Mission Image"
            width={288}
            height={288}
            className="w-full h-full object-cover rounded-[18px]"
          />
        </div>

        <div className="relative w-50 h-72 mr-6 overflow-visible">
          <Image
            src="/About/Rectangle_46.png"
            alt="Mission Image"
            width={288}
            height={288}
            className="w-full h-full object-cover rounded-[18px]"
          />
          <Image
            src="/Geometric_Shape_Silver.png"
            alt="Geometric Shape"
            width={220}
            height={220}
            className="absolute bottom-0 right-0 w-48 h-48 translate-x-24 translate-y-24 z-20 opacity-95 pointer-events-none drop-shadow-2xl"
          />
        </div>

        <div className="w-15"></div>

        <div className="flex flex-col w-120 h-72 justify-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-[#AAAAAA] font-normal">
            {" "}
            We exist to create digital solutions that drive growth. By combining
            clean design with smart strategies, we help brands reach their full
            potential online. Every project is an opportunity to bring your
            vision to life and make your brand stronger, more impactful, and
            ready for the future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
