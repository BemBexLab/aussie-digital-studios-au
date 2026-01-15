import Image from "next/image";

const cardData = [
  {
    image: "/Home/Rectangle_33.webp",
    title: "Project Name",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    tags: ["Web design", "Web development", "Support"],
  },
  {
    image: "/Home/Rectangle_32.webp",
    title: "Project Name",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    tags: ["Web design", "Web development", "Support"],
  },
  {
    image: "/Home/Rectangle_34.webp",
    title: "Project Name",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    tags: ["Web design", "Web development", "Support"],
  },
  {
    image: "/Home/Rectangle_33.webp",
    title: "Project Name",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    tags: ["Web design", "Web development", "Support"],
  },
  {
    image: "/Home/Rectangle_33.webp",
    title: "Project Name",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    tags: ["Web design", "Web development", "Support"],
  },
  {
    image: "/Home/Rectangle_32.webp",
    title: "Project Name",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    tags: ["Web design", "Web development", "Support"],
  },
];

function Tag({ label }: { label: string }) {
  return (
    <span className="text-xs px-2 py-1 rounded-full border border-gray-700 text-gray-300 whitespace-nowrap">
      {label}
    </span>
  );
}

export default function PortfolioSectionMobile() {
  return (
    <section className="sm:hidden relative mt-20 my-12 px-4">
      {/* Heading */}
      <div className="text-center mb-8">
        <p className="text-base text-[#4C8C74] mb-2 font-semibold">
          Our Portfolio
        </p>
        <h2 className="text-2xl font-semibold text-white leading-tight">
          Proven results, stunning Websites
        </h2>

        {/* Buttons - scrollable horizontal for mobile */}
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2 no-scrollbar">
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
              className="text-gray-400 px-3 py-1 rounded-[8px] border border-gray-600 cursor-pointer text-xs hover:border-yellow-400 hover:text-yellow-400 transition flex-shrink-0"
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio Cards - Single Column */}
      <div className="space-y-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="w-full overflow-hidden relative rounded-lg"
          >
            <Image
              src={card.image}
              alt={card.title}
              className="w-full h-auto"
              width={500}
              height={350}
            />
            <div className="mt-4">
              <h2 className="text-[#3A6EA5] text-base font-semibold">
                {card.title}
              </h2>
              <p className="text-white text-xs mt-2 font-light line-clamp-2">
                {card.description}
              </p>
              <div className="flex gap-2 flex-wrap mt-3">
                {card.tags.map((tag, tagIndex) => (
                  <Tag key={tagIndex} label={tag} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
