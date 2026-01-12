import Image from "next/image";
export default function PortfolioSection() {
  return (
    <section className="relative">
      {/* Heading */}
      <div className="text-center mb-20">
        <p className="text-lg text-emerald-400 mb-2 font-semibold">
          Our Portfolio
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold text-white">
          Proven results,
          <br /> stunning Websites
        </h2>
      </div>

      <br />
      <br />
      <br />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-[55px]">
        {/* Top Row (2 Cards) */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-14 mb-6 items-stretch">
          {/* Card 01*/}
          <div className="rounded-3xl w-full lg:w-[460px] flex flex-col flex-none lg:self-start">
            {/* Image wrapper */}
            <div className="rounded-2xl overflow-visible mb-6 relative">
              <img
                src="/Home/Rectangle_32.png"
                alt="Project"
                className="w-full h-[400px] object-cover rounded-2xl relative z-10"
              />
              <Image
                src="/Geometric_Shape_Silver.png"
                alt="Geometric image"
                width={150}
                height={150}
                className="absolute bottom-[15px] right-0 translate-x-1/2 z-50 pointer-events-none"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow">
              <h3 className="text-[#3A6EA5] font-semibold mb-2">
                Project Name
              </h3>

              <p className="text-sm text-gray-400 mb-4 flex-grow">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              {/* Label */}
              <div className="flex gap-2 flex-wrap">
                <Tag label="Web design" />
                <Tag label="Web development" />
                <Tag label="Support" />
              </div>
            </div>
          </div>

          {/* Card 2 (same structure) */}
          <div className="rounded-3xl w-full lg:w-[670px] p-4 md:p-8 mt-0 lg:mt-[55px] flex flex-col flex-none">
            <div className="rounded-2xl overflow-hidden mb-6">
              <img
                src="/Home/Rectangle_33.png"
                alt="Project"
                className="w-full h-[460px] object-cover"
              />
            </div>

            <div className="flex flex-col flex-grow">
              <h3 className="text-[#3A6EA5] font-semibold mb-2">
                Project Name
              </h3>

              <p className="text-sm text-gray-400 mb-4 flex-grow">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              <div className="flex gap-2 flex-wrap">
                <Tag label="Web design" />
                <Tag label="Web development" />
                <Tag label="Support" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 03 */}
        <div className="rounded-3xl p-8 max-w-3xl mx-auto">
          <div className="rounded-2xl overflow-hidden mb-6">
            <img
              src="/Home/Rectangle_34.png"
              alt="Project"
              className="w-full h-auto"
            />
          </div>

          <h3 className="text-[#3A6EA5] font-semibold mb-2">Project Name</h3>

          <p className="text-sm text-gray-400 mb-4 max-w-2xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>

          <div className="flex gap-2 flex-wrap">
            <Tag label="Web design" />
            <Tag label="Web development" />
            <Tag label="Support" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-14 mt-30 items-stretch">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-14 mb-6 items-stretch w-full">
            {/* Card 04*/}
            <div className="rounded-3xl mt-0 lg:mt-[150px] w-full lg:w-[670px] flex flex-col flex-none lg:self-start">
              {/* Image wrapper */}
              <div className="rounded-2xl overflow-hidden mb-6">
                <img
                  src="/Home/Rectangle_32.png"
                  alt="Project"
                  className="w-full h-[460px] object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-[#3A6EA5] font-semibold mb-2">
                  Project Name
                </h3>

                <p className="text-sm text-gray-400 mb-4 flex-grow">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>

                {/* Label */}
                <div className="flex gap-2 flex-wrap">
                  <Tag label="Web design" />
                  <Tag label="Web development" />
                  <Tag label="Support" />
                </div>
              </div>
            </div>

            {/* Card 05 (same structure) */}
            <div className="rounded-3xl w-full lg:w-[460px] p-4 md:p-8 flex flex-col flex-none lg:self-start">
              <div className="rounded-2xl overflow-hidden mb-2">
                <img
                  src="/Home/Rectangle_33.png"
                  alt="Project"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              <div className="flex flex-col flex-grow">
                <h3 className="text-[#3A6EA5] font-semibold mt-3 mb-2">
                  Project Name
                </h3>

                <p className="text-sm text-gray-400 mb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>

                <div className="flex gap-2 flex-wrap">
                  <Tag label="Web design" />
                  <Tag label="Web development" />
                  <Tag label="Support" />
                </div>
              </div>
            </div>
          </div>
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
    <span className="text-xs px-3 py-1 rounded-full border border-gray-700 text-gray-300">
      {label}
    </span>
  );
}
