import Image from "next/image";

export default function PortfolioSection() {
  return (
    <section className="relative py-16 md:py-28">
      {/* Heading */}
      <div className="mb-12 md:mb-20 px-4 md:px-0">
        <div className="text-center mb-6 md:mb-8">
          <p className="text-base md:text-lg text-emerald-400 mb-2 font-semibold">
            Our Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Proven results, stunning Websites
          </h2>
        </div>

        {/* Buttons - wrap & stack on mobile */}
        <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
          {[
            "Logo",
            "E-Commerce",
            "Website Design",
            "SMM",
            "Video Animation",
            "SEO",
            "Maintenance",
            "Branding",
          ].map((label) => (
            <div
              key={label}
              className="text-gray-400 px-3 py-1.5 md:px-4 md:py-2 rounded-[8px] border border-gray-600 cursor-pointer text-xs md:text-sm hover:border-yellow-400 hover:text-yellow-400 transition"
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-[55px]">
        {/* Top Row (2 Cards) → Stack on mobile */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-14 mb-6">
          {/* Card 01 */}
          <div className="rounded-3xl w-full md:w-[460px] flex flex-col self-start">
            <div className="rounded-2xl overflow-hidden mb-4 md:mb-6">
              <img
                src="/Home/Rectangle_32.png"
                alt="Project"
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
            </div>
            <div className="flex flex-col flex-grow">
              <h3 className="text-[#3A6EA5] font-semibold mb-2">Project Name</h3>
              <p className="text-sm text-gray-400 mb-4 flex-grow">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Tag label="Web design" />
                <Tag label="Web development" />
                <Tag label="Support" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl w-full md:w-[670px] p-6 md:p-8 mt-0 md:mt-[55px] flex flex-col relative">
            <div className="relative mb-4 md:mb-6">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/Home/Rectangle_33.png"
                  alt="Project"
                  className="w-full h-[350px] md:h-[460px] object-cover"
                />
              </div>
              <Image
                src="/Geometric_Shape_Silver.png"
                alt="Geometric Shape"
                width={140}
                height={140}
                className="absolute -top-16 -right-16 md:-top-24 md:-right-24 w-32 h-32 md:w-40 md:h-40 z-20 pointer-events-none"
              />
            </div>
            <div className="flex flex-col flex-grow">
              <h3 className="text-[#3A6EA5] font-semibold mb-2">Project Name</h3>
              <p className="text-sm text-gray-400 mb-4 flex-grow">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Tag label="Web design" />
                <Tag label="Web development" />
                <Tag label="Support" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 03 — centered, full width on mobile */}
        <div className="rounded-3xl p-6 md:p-8 max-w-3xl mx-auto mb-6 md:mb-8">
          <div className="rounded-2xl overflow-hidden mb-4 md:mb-6">
            <img
              src="/Home/Rectangle_34.png"
              alt="Project"
              className="w-full h-auto"
            />
          </div>
          <h3 className="text-[#3A6EA5] font-semibold mb-2">Project Name</h3>
          <p className="text-sm text-gray-400 mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <div className="flex gap-2 flex-wrap">
            <Tag label="Web design" />
            <Tag label="Web development" />
            <Tag label="Support" />
          </div>
        </div>

        {/* Bottom Row (Cards 04 & 05) → Stack on mobile */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-14">
          {/* Card 04 */}
          <div className="rounded-3xl w-full md:w-[670px] flex flex-col self-start mt-0 md:mt-[150px]">
            <div className="rounded-2xl overflow-hidden mb-4 md:mb-6">
              <img
                src="/Home/Rectangle_32.png"
                alt="Project"
                className="w-full h-[350px] md:h-[460px] object-cover"
              />
            </div>
            <div className="flex flex-col flex-grow">
              <h3 className="text-[#3A6EA5] font-semibold mb-2">Project Name</h3>
              <p className="text-sm text-gray-400 mb-4 flex-grow">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Tag label="Web design" />
                <Tag label="Web development" />
                <Tag label="Support" />
              </div>
            </div>
          </div>

          {/* Card 05 */}
          <div className="rounded-3xl w-full md:w-[460px] p-6 md:p-8 flex flex-col self-start">
            <div className="rounded-2xl overflow-hidden mb-2">
              <img
                src="/Home/Rectangle_33.png"
                alt="Project"
                className="w-full h-[300px] md:h-[400px] object-cover"
              />
            </div>
            <div className="flex flex-col flex-grow">
              <h3 className="text-[#3A6EA5] font-semibold mt-2 md:mt-3 mb-2">Project Name</h3>
              <p className="text-sm text-gray-400 mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <div className="flex gap-2 flex-wrap">
                <Tag label="Web design" />
                <Tag label="Web development" />
                <Tag label="Support" />
              </div>
            </div>
          </div>
        </div>

        {/* Centered Load More Button */}
        <div className="flex justify-center mt-10 md:mt-12">
          <button className="px-6 py-2.5 md:px-8 md:py-3 text-base md:text-lg bg-teal-500 text-white rounded-full hover:bg-blue-400 transition-all inline-flex items-center group">
            <span>Load More</span>
            <span className="ml-2 md:ml-3 relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
              <span
                className="absolute inset-0 bg-black rounded-full"
                aria-hidden="true"
              ></span>
              <svg
                className="relative w-3.5 h-3.5 md:w-4 md:h-4 z-10 transition-transform duration-300 group-hover:rotate-45"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
              >
                <path
                  d="M7 17 L17 7"
                  stroke="#fff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M11 7 H17 V13"
                  stroke="#fff"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

type TagProps = {
  label: string;
};

function Tag({ label }: TagProps) {
  return (
    <span className="text-xs px-2.5 py-1 rounded-full border border-gray-700 text-gray-300 whitespace-nowrap">
      {label}
    </span>
  );
}