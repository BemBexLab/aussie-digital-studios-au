import Image from "next/image";
import React from "react";

const LogoSlider = () => {
  const logos = [
    "/Home/trustpilot.png",
    "/Home/zoominfo.png",
    "/Home/clutch.png",
    "/Home/hashnode.png",
    "/Home/designrush.png",
    "/Home/s.png",
  ];

  return (
    <div className="">
      <div className="h-[123px] w-full flex items-center overflow-hidden">
        <div className="flex gap-8 animate-scroll">
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="w-[150px] h-16 flex items-center justify-center transition-transform duration-500 cursor-pointer hover:scale-80 flex-shrink-0 md:w-[150px] md:h-16 sm:w-[100px] sm:h-[50px]"
            >
              <Image
                width={150}
                height={50}
                src={logo}
                alt="logo"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
