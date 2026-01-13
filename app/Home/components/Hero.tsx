// components/Hero.tsx
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";

const Hero = () => {
  return (
    <div className="overflow-x-hidden md:min-h-[836px]">
      <section className="relative min-h-[calc(100vh+200px)] bg-black">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/Hero Section.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className="absolute inset-0 z-1 opacity-40">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/Clouds.mp4" type="video/mp4" />
          </video>
        </div>

        <div
          className="absolute inset-0 opacity-20 z-2"
          style={{
            backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "20px 20px",
          }}
        ></div>

        <div className="relative z-30 container mx-auto px-6 flex flex-col md:flex-row items-center justify-between h-full">
          <div className="w-full md:w-1/2 flex items-center justify-center mb-10 md:mb-0">
            <p className="text-white text-2xl opacity-50 font-semibold uppercase tracking-wider text-start max-w-lg px-4 leading-relaxed mt-[130px] md:mt-[250px]">
              CLEAN VISUALS, SMART STRATEGY AND CREATIVE WORK THAT MAKES AN
              IMPACT.
            </p>
          </div>

          <div className="relative w-full md:w-1/2 flex justify-end">
            {/* Keep image on mobile but adjust size/position to avoid overflow */}
            <div className="absolute right-0 top-1/2 -translate-y-[calc(40%-180px)] z-10 w-[120%] sm:w-[140%] md:w-[130%] max-w-none translate-x-0 sm:translate-x-1/8 md:translate-x-1/12">
              <Image
                src="/Home/Frame 557.png"
                alt="3D Abstract Design"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* ThemeToggle: bottom-[500px] on < md, top-right on md+ */}
        <div className="absolute right-4 z-40 bottom-[500px] md:bottom-auto md:top-30 md:right-20">
          <ThemeToggle />
        </div>

        <div className="absolute bottom-6 left-0 right-0 z-40 pointer-events-none flex justify-center md:bottom-10">
          <div className="relative pointer-events-auto inline-block text-center">
            <p className="absolute -top-7 text-white text-xl sm:text-2xl md:text-3xl font-bold font-medium left-1/2 -translate-x-1/2 md:left-2 md:-translate-x-0">
              Modern
            </p>
            <h1 className="text-white font-semibold font-black text-4xl sm:text-5xl md:text-[80px] lg:text-[120px] xl:text-[160px] leading-tight tracking-[-0.009em] whitespace-nowrap">
              DIGITAL DESIGN
            </h1>
            <p className="text-white px-4 sm:px-10 md:px-[290px] text-base sm:text-lg md:text-4xl font-bold mt-1">
              that helps your brand grow.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
