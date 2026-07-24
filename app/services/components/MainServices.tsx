import Link from "next/link";

type ServiceItem = {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
};

const SERVICES: ServiceItem[] = [
  {
    title: "Web Design & Development",
    description:
      "We create stunning, user-friendly websites that are optimized for performance and conversions.",
    href: "/services/web-design-development",
    icon: (
      <svg fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 9V5H4V9H20ZM20 11H4V19H20V11ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM5 12H8V17H5V12ZM5 6H7V8H5V6ZM9 6H11V8H9V6Z" />
      </svg>
    ),
  },
  {
    title: "Search Engine Optimization",
    description:
      "We help your website rank higher in search engine results, driving more organic traffic.",
    href: "/services/search-engine-optimization",
    icon: (
      <svg fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z" />
      </svg>
    ),
  },
  {
    title: "Performance Marketing",
    description:
      "We drive targeted traffic and conversions through strategic digital advertising campaigns.",
    href: "/services/performance-marketing",
    icon: (
      <svg fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 9.2h3V19H5zM10.6 5h2.9v14h-2.9zm5.6 8H19v6h-2.8z" />
      </svg>
    ),
  },
  {
    title: "Logo Design & Branding",
    description:
      "We create memorable logos and brand identities that represent your business values.",
    href: "/services/logo-design-branding",
    icon: (
      <svg fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z" />
      </svg>
    ),
  },
  {
    title: "Social Media Marketing & Management",
    description:
      "We manage your social media presence to engage with your audience and grow your brand.",
    href: "/services/social-media-marketing-management",
    icon: (
      <svg fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.3-1.54c-.2-.24-.58-.27-.85-.07-.27.2-.3.58-.1.85l1.48 1.76c.2.24.58.27.85.07L16.6 9.5c.27-.2.3-.58.1-.85-.27-.2-.61-.17-.85.05z" />
      </svg>
    ),
  },
  {
    title: "Content Marketing",
    description:
      "We create valuable content that attracts and retains customers for long-term growth.",
    href: "/services/content-marketing",
    icon: (
      <svg fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm0-4H8V8h8v2z" />
      </svg>
    ),
  },
];

function ServiceCard({ title, description, href, icon }: ServiceItem) {
  return (
    <Link
      href={href}
      prefetch={false}
      className="group relative block h-[280px] rounded-[24px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4C8C74] sm:h-[300px] lg:h-[320px]"
    >
      <div className="absolute inset-x-[9%] top-[-4%] h-[90%] rounded-[24px] bg-[#4c4e56] transition-transform duration-300 group-hover:-rotate-[6deg]" />
      <div className="absolute inset-x-[14%] top-[-8%] h-[80%] rounded-[24px] bg-[#686a71] transition-transform duration-300 group-hover:rotate-[6deg]" />

      <div className="relative flex h-full flex-col rounded-[22px] bg-[#2d2e30] p-6 text-white transition-transform duration-300 group-hover:-translate-y-2 sm:p-7">
        <div className="relative flex h-[72px] w-[72px] items-center justify-center overflow-hidden rounded-[16px] bg-[linear-gradient(135deg,#4C8C74_0%,#2d5a4a_100%)] shadow-[0_8px_24px_rgba(76,140,116,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 sm:h-20 sm:w-20">
          <div className="absolute inset-0 translate-x-[-120%] bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.12)_50%,transparent_70%)] transition-transform duration-500 group-hover:translate-x-[120%]" />
          <div className="relative h-8 w-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)] sm:h-10 sm:w-10">
            {icon}
          </div>
        </div>

        <h3 className="mt-6 text-lg font-bold leading-snug text-white sm:text-xl">
          {title}
        </h3>

        <p className="mt-4 line-clamp-4 text-sm leading-6 text-[#d1d5db] sm:text-[15px]">
          {description}
        </p>
      </div>
    </Link>
  );
}

export default function MainServices() {
  return (
    <section className="w-full px-4 py-10">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-8">
        {SERVICES.map((service) => (
          <ServiceCard key={service.href} {...service} />
        ))}
      </div>
    </section>
  );
}
