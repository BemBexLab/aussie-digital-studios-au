import React from "react";

type HeroMobileProps = {
  H: string;
  shouldRenderVideo: boolean;
};

const HeroMobile = ({ H, shouldRenderVideo }: HeroMobileProps) => {
  return (
    <div
      className="relative flex h-[42vh] w-full items-center justify-center overflow-hidden md:hidden sm:h-[50vh]"
      data-hero-bg-about
      style={{
        backgroundImage: "url('/About/About Hero BG.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {shouldRenderVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          controlsList="nodownload nofullscreen"
          disablePictureInPicture
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
          style={{
            mixBlendMode: "overlay",
            filter: "brightness(1.3) contrast(1.1)",
          }}
        >
          <source src="/Clouds.mp4" type="video/mp4" />
        </video>
      ) : null}

      <div className="absolute inset-0 bg-black/10" aria-hidden="true" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex w-full flex-col items-center justify-end px-4 pb-6 sm:px-6 sm:pb-8">
        {/* ThemeToggle: Positioned top-right on mobile */}
        {/* <div className="self-end mb-3 absolute top-3 right-4 -translate-y-15">
          <ThemeToggle />
        </div> */}

        {/* Heading - Responsive text sizes */}
        <h2 className="text-center text-3xl font-medium leading-tight text-white uppercase min-[420px]:text-4xl sm:text-5xl">
          {H}
        </h2>
      </div>
    </div>
  );
};

export default HeroMobile;
