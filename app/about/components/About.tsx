import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 px-4 md:px-6 mb-12">
          {/* Left Column */}
          <div className="md:w-1/2">
            <p className="text-[#4C8C74] text-base sm:text-lg font-medium mb-2">About Us</p>
            <h2 className="text-white text-3xl sm:text-4xl md:text-4xl font-bold">Our Story</h2>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2">
            <p className="text-[#AAAAAA] text-base sm:text-sm leading-relaxed">
              Aussie Digital Studios was born from a passion for design and a love for helping businesses grow online. Based in Australia, we blend modern design, digital strategy, and creative thinking to build unique experiences that help brands stand out. We understand that each business is different, which is why we take a tailored approach to every project. Our goal is simple: deliver results that make a real difference.
            </p>
          </div>
        </div>

        {/* Image + Stats Section */}
        <div className="px-4 md:px-6">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
      {/* Main Image — 3 columns */}
      <div className="lg:col-span-3 relative">
        <Image
          src="/About/Rectangle_42.png"
          alt="About Us Image"
          width={800}
          height={400}
          className="w-full h-auto max-h-[400px] rounded-lg shadow-lg object-cover"
        />
        {/* Decorative shape */}
        <img
          src="/Geometric_Shape_Silver.png"
          alt="Decorative shape"
          className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 w-16 sm:w-20 md:w-24 pointer-events-none"
        />
      </div>

      {/* Stats Card — 2 columns */}
      <div
        className="lg:col-span-2 w-full h-auto rounded-lg bg-[#212423] shadow-lg p-6"
        style={{
          backgroundImage: "url('/About/About_Section_img_02.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="space-y-5">
          {/* Stat 1 */}
          <div>
            <h3 className="text-3xl sm:text-4xl font-medium text-yellow-500">569+</h3>
            <p className="text-white text-base sm:text-lg font-extralight mt-1">Happy Customers</p>
            <hr className="border-t border-gray-600 mt-3 w-4/5" />
          </div>

          {/* Stat 2 */}
          <div>
            <h3 className="text-3xl sm:text-4xl font-medium text-yellow-500">1,890+</h3>
            <p className="text-white text-base sm:text-lg font-extralight mt-1">Issues Solved</p>
            <hr className="border-t border-gray-600 mt-3 w-4/5" />
          </div>

          {/* Stat 3 */}
          <div>
            <h3 className="text-3xl sm:text-4xl font-medium text-yellow-500">250+</h3>
            <p className="text-white text-base sm:text-lg font-extralight mt-1">Finished Projects</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default About;