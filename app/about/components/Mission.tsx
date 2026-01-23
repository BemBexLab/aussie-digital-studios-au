import React from "react";
import Image from "next/image";
import MissionMobile from "./MissionMobile";

const Mission = () => {
  return (
    <>
      <div className="sm:hidden">
        <MissionMobile />
      </div>
      {/* Desktop: unchanged (md and up), responsive below 1250px */}
      <div className="hidden md:flex flex-wrap justify-center items-center min-h-[500px] lg:h-[500px] overflow-hidden gap-6">
        <div className="flex flex-wrap w-full lg:flex-nowrap justify-center items-center">
          <div className="w-full lg:w-auto flex gap-6 justify-center flex-wrap lg:flex-nowrap">
            <div className="w-50 h-72">
              <Image
                src="/About/Rectangle_44.png"
                alt="Mission Image"
                width={288}
                height={288}
                className="w-full h-full object-cover rounded-[18px]"
              />
            </div>

            <div className="w-50 h-72 lg:-translate-y-10 transform drop-shadow-2xl">
              <Image
                src="/About/Rectangle_45.png"
                alt="Mission Image"
                width={288}
                height={288}
                className="w-full h-full object-cover rounded-[18px]"
              />
            </div>

            <div className="relative w-50 h-72 overflow-visible">
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
                className="absolute bottom-0 right-0 w-48 h-48 lg:translate-x-24 lg:translate-y-24 z-20 opacity-95 pointer-events-none drop-shadow-2xl"
              />
            </div>
          </div>

          <div className="hidden lg:block w-15"></div>

          <div className="flex flex-col w-full lg:w-120 lg:h-72 justify-center px-4 sm:px-6 md:px-10">
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-[#AAAAAA] font-normal" data-text-sm-light>
              We exist to create digital solutions that drive growth. By combining
              clean design with smart strategies, we help brands reach their full
              potential online. Every project is an opportunity to bring your
              vision to life and make your brand stronger, more impactful, and
              ready for the future.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;