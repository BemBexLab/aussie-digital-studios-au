import React from "react";
import Image from "next/image";

const MissionMobile = () => {
  return (
    <div className="sm:hidden flex flex-col items-center px-4 py-8 space-y-6 w-full overflow-x-hidden">
      {/* Images row — wrap and scale down */}
      <div className="flex flex-row flex-wrap justify-center gap-3 max-w-2xl">
        {/* Image 1 */}
        <div className="relative w-[90px] h-[90px]">
          <Image
            src="/About/Rectangle_44.png"
            alt="Mission Image 1"
            fill
            className="object-cover rounded-[12px]"
          />
        </div>

        {/* Image 2 */}
        <div className="relative w-[90px] h-[90px]">
          <Image
            src="/About/Rectangle_45.png"
            alt="Mission Image 2"
            fill
            className="object-cover rounded-[12px] drop-shadow-md"
          />
        </div>

        {/* Image 3 with geometric shape */}
        <div className="relative w-[90px] h-[90px]">
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
            className="absolute -bottom-2 -right-2 w-5 h-5 opacity-90 pointer-events-none"
          />
        </div>
      </div>

      {/* Text section — centered */}
      <div className="text-center max-w-sm">
        <h2 className="text-xl sm:text-2xl font-bold mb-3">Our Mission</h2>
        <p className="text-xs sm:text-sm text-[#AAAAAA] font-normal leading-relaxed" data-text-sm-light>
          We exist to create digital solutions that drive growth. By combining
          clean design with smart strategies, we help brands reach their full
          potential online. Every project is an opportunity to bring your
          vision to life and make your brand stronger, more impactful, and
          ready for the future.
        </p>
      </div>
    </div>
  );
};

export default MissionMobile;
