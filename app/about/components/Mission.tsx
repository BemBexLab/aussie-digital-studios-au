import React from "react";
import Image from "next/image";
import MissionMobile from "./MissionMobile";

const Mission = () => {
  return (
    <>
      <MissionMobile />
      {/* Desktop: unchanged (md and up) */}
      <div className="hidden md:flex flex-row justify-center items-center h-[500px] overflow-hidden">
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

          <div className="w-50 h-72 mr-6 -translate-y-10 transform drop-shadow-2xl">
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
              We exist to create digital solutions that drive growth. By combining
              clean design with smart strategies, we help brands reach their full
              potential online. Every project is an opportunity to bring your
              vision to life and make your brand stronger, more impactful, and
              ready for the future.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile: sm screens only */}
      <div className="hidden sm:flex flex-col items-center px-4 py-8 space-y-6">
        {/* Images row — wrap and scale down */}
        <div className="flex flex-row flex-wrap justify-center gap-3 mb-8 max-w-3xl">
          {/* Image 1 */}
          <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] mt-2">
            <Image
              src="/About/Rectangle_44.png"
              alt="Mission Image 1"
              fill
              className="object-cover rounded-[12px]"
            />
          </div>

          {/* Image 2 */}
          <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]">
            <Image
              src="/About/Rectangle_45.png"
              alt="Mission Image 2"
              fill
              className="object-cover rounded-[12px] drop-shadow-md"
            />
          </div>

          {/* Image 3 with geometric shape */}
          <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] mt-2">
            <Image
              src="/About/Rectangle_46.png"
              alt="Mission Image 3"
              fill
              className="object-cover rounded-[12px]"
            />
            {/* Geometric shape — kept inside bounds */}
            <Image
              src="/Geometric_Shape_Silver.png"
              alt="Geometric Shape"
              width={60}
              height={60}
              className="absolute -bottom-2 -right-2 w-6 h-6 opacity-90 pointer-events-none"
            />
          </div>
        </div>

        {/* Text section — centered */}
        <div className="text-center max-w-lg">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-[#AAAAAA] font-normal leading-relaxed">
            We exist to create digital solutions that drive growth. By combining
            clean design with smart strategies, we help brands reach their full
            potential online. Every project is an opportunity to bring your
            vision to life and make your brand stronger, more impactful, and
            ready for the future.
          </p>
        </div>
      </div>
    </>
  );
};

export default Mission;