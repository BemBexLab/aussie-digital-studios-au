import Link from "next/link";
import Image from "next/image";

const MOBILE_NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/packages", label: "Packages" },
  { href: "/contact", label: "Contact" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
];

const SOCIAL_LINKS = [
  { href: "https://www.facebook.com/", label: "Facebook" },
  { href: "https://www.instagram.com/", label: "Instagram" },
  { href: "https://www.tiktok.com/", label: "TikTok" },
];

export default function FooterMobile() {
  return (
    <div className="bg-[#151515] text-white md:hidden">
      <div className="px-4 py-8">
        <p className="mb-6 text-center text-sm font-semibold text-[#4C8C74]">
          Aussie Digital Studios
        </p>

        <div className="mb-8 grid grid-cols-2 gap-3">
          {MOBILE_NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-center text-xs font-extralight transition-colors hover:text-[#4C8C74]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mb-8 flex justify-center gap-4">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#274338] px-3 py-1.5 text-xs text-[#b9c8c1] transition-colors hover:border-[#4C8C74] hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-700 py-6">
        <div className="flex justify-center">
          <Image
            src="/Group_1.webp"
            alt="Aussie Digital Studios"
            width={280}
            height={170}
            className="h-auto w-[150px]"
            sizes="150px"
          />
        </div>

        <div className="px-6 pt-5 text-center text-xs font-extralight">
          <p className="mb-1">Copyright Â© 2025, Aussie Digital Studios.</p>
          <p>All Rights Reserved.</p>
          <a
            href="tel:+61468285539"
            className="mt-3 block transition-colors hover:text-[#4C8C74]"
          >
            (0468) 285-539
          </a>
          <a
            href="mailto:contact@aussiedigitalstudios.com.au"
            className="block transition-colors hover:text-[#4C8C74]"
          >
            contact@aussiedigitalstudios.com.au
          </a>
          <p className="mx-auto mt-1 max-w-[260px]">
            16A Fox Cl, Kariong NSW 2250, Australia.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 px-4 py-6">
        <Image
          src="/aussie_digital_stroke_light.webp"
          alt="Aussie Digital Studios"
          width={1300}
          height={190}
          className="mx-auto h-auto w-full max-w-[360px]"
          sizes="(max-width: 768px) 100vw, 360px"
        />
      </div>
    </div>
  );
}
