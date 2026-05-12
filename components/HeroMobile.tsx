import React from "react";

type HeroMobileProps = {
  H: string;
};

const HeroMobile = ({ H }: HeroMobileProps) => {
  return (
    <div
      className="md:hidden w-full h-[45vh] sm:h-[55vh] flex items-center justify-center relative overflow-hidden"
      data-hero-bg-about
      style={{
        backgroundImage: "url('/about/About Hero BG.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content Wrapper */}
      <div className="flex flex-col items-center justify-end w-full relative z-10 px-4 pb-6">
        {/* ThemeToggle: Positioned top-right on mobile */}
        {/* <div className="self-end mb-3 absolute top-3 right-4 -translate-y-15">
          <ThemeToggle />
        </div> */}

        {/* Heading - Responsive text sizes */}
        <h2 className="text-3xl sm:text-4xl font-medium text-white text-center leading-tight uppercase">
          {H}
        </h2>
      </div>
    </div>
  );
};

export default HeroMobile;
