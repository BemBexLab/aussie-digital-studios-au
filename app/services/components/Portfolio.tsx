import React from "react";
import Image from "next/image";

const Portfolio = () => {
  return (
    <section className="my-20 py-10" style={{
        backgroundImage: 'url("/Home/CTA.svg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}>
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-xl font-medium text-[#4C8C74] mb-2">Our Portfolio</p>
        <h2 className="text-4xl md:text-4xl font-semibold text-white">
          Real Websites, Not Just Mockups
        </h2>

        {/* Cards slider */}
        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .portfolio-scroll {
            animation: scroll 30s linear infinite;
          }
        `}</style>
        <div className="overflow-hidden mt-10">
          <div className="flex flex-row portfolio-scroll gap-3">
            <Image
            className="w-[350px] h-[600px] flex-shrink-0 -translate-y-25"
            src="/services/web_01.svg"
            alt="Our Process"
            width={1200}
            height={1500}
            />
            <Image
            className="w-[350px] h-[600px] flex-shrink-0"
            src="/services/web_02.svg"
            alt="Our Process"
            width={1200}
            height={1500}
            />
            <Image
            className="w-[350px] h-[600px] flex-shrink-0 -translate-y-25"
            src="/services/web_02.svg"
            alt="Our Process"
            width={1200}
            height={1500}
            />
            <Image
            className="w-[350px] h-[600px] flex-shrink-0"
            src="/services/web_03.svg"
            alt="Our Process"
            width={1200}
            height={1500}
            />
            <Image
            className="w-[350px] h-[600px] flex-shrink-0 -translate-y-25"
            src="/services/web_04.svg"
            alt="Our Process"
            width={1200}
            height={1500}
            />
            <Image
            className="w-[350px] h-[600px] flex-shrink-0"
            src="/services/web_05.svg"
            alt="Our Process"
            width={1200}
            height={1500}
            />
            <Image
            className="w-[350px] h-[600px] flex-shrink-0 -translate-y-25"
            src="/services/web_06.svg"
            alt="Our Process"
            width={1200}
            height={1500}
            />
            <Image
            className="w-[350px] h-[600px] flex-shrink-0"
            src="/services/web_07.svg"
            alt="Our Process"
            width={1200}
            height={1500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
