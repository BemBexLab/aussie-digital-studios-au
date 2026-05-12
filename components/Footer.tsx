"use client";

import React from "react";
import Image from "next/image";
import FooterMobile from "./FooterMobile";
import { useThemeMode } from "@/lib/useThemeMode";

const Footer = () => {
  const { isDarkMode } = useThemeMode();
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <FooterMobile />
      <div className="hidden md:block justify-center bg-[#151515] items-center">
        <div className="flex flex-col md:flex-row bg-[#151515] h-auto md:h-[250px] gap-6 md:gap-2 text-white mt-12 px-4 md:px-0">
          {/* Todo: make this div center horizontally */}
          <div className="flex flex-col md:flex-row mx-auto mt-5 gap-8 md:gap-[35px]">
            {/* Aussie Logo */}
            <div className="mx-auto md:mx-[50px] mt-5 md:mt-5">
              <Image
                src={isDarkMode ? "/Group_1.webp" : "/Aussie_Header_Logo_Light.webp"}
                alt="Logo"
                width={280}
                height={170}
                className="h-auto w-[200px] md:w-[280px]"
              />
            </div>

            <div className="grid grid-cols-2 md:flex md:flex-row gap-8 md:gap-[35px]">
              {/* First Column */}
              <div className="flex flex-col mt-0 md:mt-5 gap-2">
                <a
                  href="/"
                  className="text-sm font-extralight hover:text-[#4C8C74] transition-colors"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="text-sm font-extralight hover:text-[#4C8C74] transition-colors"
                >
                  About
                </a>
                <a
                  href="/services"
                  className="text-sm font-extralight hover:text-[#4C8C74] transition-colors"
                >
                  Services
                </a>
                <a
                  href="/portfolio"
                  className="text-sm font-extralight hover:text-[#4C8C74] transition-colors"
                >
                  Portfolio
                </a>
                {/* <a
                href="#"
                className="text-sm font-extralight hover:text-[#4C8C74] transition-colors"
              >
                Career
              </a> */}
              </div>

              {/* Second Column */}
              <div className="flex flex-col mt-0 md:mt-5 gap-2">
                <a
                  href="/packages"
                  className="text-sm font-extralight hover:text-[#4C8C74] transition-colors"
                >
                  Packages
                </a>
                <a
                  href="/contact"
                  className="text-sm font-extralight hover:text-[#4C8C74] transition-colors"
                >
                  Contact
                </a>
                <a
                  href="/terms"
                  className="text-sm font-extralight hover:text-[#4C8C74] transition-colors"
                >
                  Terms & Conditions
                </a>
                <a
                  href="/privacy"
                  className="text-sm font-extralight hover:text-[#4C8C74] transition-colors"
                >
                  Privacy Policy
                </a>
              </div>

              {/* Third Column - Social Media */}
              <div className="flex flex-row md:flex-col mt-0 md:mt-5 mx-[0] md:mx-[30] gap-2 col-span-2 md:col-span-1">
                {/* Facebook */}
                <div className="flex flex-row">
                  <div className="rounded-md bg-[#1E2B26] w-[28px] h-[28px] flex items-center justify-center mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                    >
                      <path
                        d="M13.9767 21.9048V13.3542H16.8613L17.2901 10.0063H13.9767V7.87387C13.9767 6.9078 14.2459 6.24637 15.6324 6.24637H17.3892V3.26158C16.5344 3.16997 15.6752 3.12574 14.8155 3.12908C12.2657 3.12908 10.5151 4.68564 10.5151 7.54316V10.0001H7.64926V13.3479H10.5214V21.9048H13.9767Z"
                        fill="#4C8C74"
                      />
                    </svg>
                  </div>
                  <a
                    href="https://www.facebook.com/" target="_blank" 
                    className="font-extralight hover:text-[#4C8C74] transition-colors"
                  >
                    Facebook
                  </a>
                </div>
                {/* Instagram */}
                <div className="flex flex-row">
                  <div className="rounded-md bg-[#1E2B26] w-[28px] h-[28px] flex items-center justify-center mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                    >
                      <path
                        d="M12.5182 7.69629C11.2388 7.69629 10.0117 8.20454 9.10705 9.10923C8.20236 10.0139 7.69411 11.2409 7.69411 12.5204C7.69411 13.7998 8.20236 15.0268 9.10705 15.9315C10.0117 16.8362 11.2388 17.3444 12.5182 17.3444C13.7976 17.3444 15.0246 16.8362 15.9293 15.9315C16.834 15.0268 17.3423 13.7998 17.3423 12.5204C17.3423 11.2409 16.834 10.0139 15.9293 9.10923C15.0246 8.20454 13.7976 7.69629 12.5182 7.69629ZM12.5182 15.6533C11.687 15.6533 10.8899 15.3231 10.3021 14.7354C9.71439 14.1476 9.3842 13.3505 9.3842 12.5193C9.3842 11.6881 9.71439 10.891 10.3021 10.3033C10.8899 9.71553 11.687 9.38534 12.5182 9.38534C13.3494 9.38534 14.1465 9.71553 14.7342 10.3033C15.322 10.891 15.6522 11.6881 15.6522 12.5193C15.6522 13.3505 15.322 14.1476 14.7342 14.7354C14.1465 15.3231 13.3494 15.6533 12.5182 15.6533Z"
                        fill="#4C8C74"
                      />
                      <path
                        d="M17.5332 8.64382C18.1543 8.64382 18.6578 8.1403 18.6578 7.51917C18.6578 6.89805 18.1543 6.39453 17.5332 6.39453C16.9121 6.39453 16.4086 6.89805 16.4086 7.51917C16.4086 8.1403 16.9121 8.64382 17.5332 8.64382Z"
                        fill="#4C8C74"
                      />
                      <path
                        d="M21.4214 6.37321C21.1799 5.74952 20.8108 5.18313 20.3378 4.7103C19.8648 4.23746 19.2983 3.8686 18.6745 3.62732C17.9446 3.35331 17.1734 3.20515 16.3939 3.18915C15.3893 3.14533 15.0711 3.13281 12.5234 3.13281C9.97573 3.13281 9.64918 3.13281 8.65286 3.18915C7.87395 3.20434 7.10335 3.35253 6.37436 3.62732C5.75042 3.86832 5.18375 4.23708 4.7107 4.70995C4.23765 5.18282 3.86867 5.74936 3.62743 6.37321C3.35337 7.10309 3.20555 7.8743 3.1903 8.65379C3.14544 9.65742 3.13188 9.97561 3.13188 12.5243C3.13188 15.072 3.13188 15.3964 3.1903 16.3948C3.20595 17.1752 3.35305 17.9451 3.62743 18.6765C3.86935 19.3001 4.23868 19.8664 4.71185 20.3392C5.18501 20.812 5.7516 21.1809 6.37541 21.4224C7.10302 21.7074 7.87393 21.8661 8.65495 21.8918C9.65962 21.9357 9.97781 21.9492 12.5255 21.9492C15.0731 21.9492 15.3997 21.9492 16.396 21.8918C17.1754 21.876 17.9465 21.7282 18.6766 21.4547C19.3002 21.2129 19.8666 20.8437 20.3395 20.3707C20.8125 19.8978 21.1817 19.3314 21.4235 18.7078C21.6979 17.9775 21.845 17.2076 21.8606 16.4272C21.9055 15.4236 21.9191 15.1054 21.9191 12.5567C21.9191 10.008 21.9191 9.68454 21.8606 8.68613C21.8485 7.89562 21.6999 7.11314 21.4214 6.37321ZM20.1507 16.3176C20.144 16.9189 20.0343 17.5145 19.8263 18.0787C19.6696 18.4844 19.4298 18.8528 19.1221 19.1602C18.8145 19.4676 18.446 19.7073 18.0402 19.8637C17.4823 20.0708 16.893 20.1805 16.2979 20.1882C15.3068 20.2341 15.0272 20.2456 12.4858 20.2456C9.94234 20.2456 9.68257 20.2456 8.67268 20.1882C8.07795 20.1809 7.48891 20.0711 6.93147 19.8637C6.52427 19.7083 6.15423 19.469 5.84531 19.1616C5.53639 18.8541 5.29545 18.4852 5.13809 18.0787C4.93303 17.5206 4.82335 16.932 4.81363 16.3375C4.76877 15.3464 4.75834 15.0668 4.75834 12.5254C4.75834 9.98292 4.75834 9.72314 4.81363 8.71222C4.82037 8.11132 4.93012 7.51602 5.13809 6.95222C5.45629 6.12908 6.10833 5.48121 6.93147 5.16614C7.48919 4.95972 8.07805 4.85 8.67268 4.84169C9.66483 4.79683 9.94339 4.78431 12.4858 4.78431C15.0283 4.78431 15.2891 4.78431 16.2979 4.84169C16.893 4.84885 17.4824 4.95861 18.0402 5.16614C18.446 5.32292 18.8145 5.5628 19.122 5.87038C19.4296 6.17797 19.6695 6.54646 19.8263 6.95222C20.0313 7.51032 20.141 8.09894 20.1507 8.69344C20.1956 9.68559 20.2071 9.96414 20.2071 12.5066C20.2071 15.048 20.2071 15.3213 20.1622 16.3187H20.1507V16.3176Z"
                        fill="#4C8C74"
                      />
                    </svg>
                  </div>
                  <a
                    href="https://www.instagram.com/" target="_blank" 
                    className="font-extralight hover:text-[#4C8C74] transition-colors"
                  >
                    Instagram
                  </a>
                </div>
                {/* Tiktok */}
                <div className="flex flex-row">
                  <div className="rounded-md bg-[#1E2B26] w-[28px] h-[28px] flex items-center justify-center mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="23"
                      viewBox="0 0 20 23"
                      fill="none"
                    >
                      <path
                        d="M19.9281 5.57097V9.53656C19.2352 9.46887 18.3349 9.31143 17.339 8.94651C16.0386 8.46976 15.0707 7.81789 14.4367 7.31318V15.3282L14.4205 15.3032C14.4308 15.4621 14.4367 15.624 14.4367 15.7873C14.4367 19.7677 11.199 23.0078 7.21835 23.0078C3.23774 23.0078 0 19.7677 0 15.7873C0 11.807 3.23774 8.5654 7.21835 8.5654C7.60817 8.5654 7.99065 8.59630 8.36429 8.65663V12.5648C8.00536 12.4368 7.61994 12.3677 7.21835 12.3677C5.33396 12.3677 3.79967 13.9009 3.79967 15.7873C3.79967 17.6738 5.33396 19.207 7.21835 19.207C9.10274 19.207 10.637 17.6723 10.637 15.7873C10.637 15.7167 10.6356 15.6461 10.6311 15.5755V0H14.5926C14.6073 0.335494 14.6206 0.673937 14.6353 1.00943C14.6618 1.67012 14.8971 2.30431 15.3075 2.82374C15.7886 3.4344 16.4991 4.14364 17.4964 4.71016C18.4305 5.23841 19.3073 5.46649 19.9281 5.57391V5.57097Z"
                        fill="#4C8C74"
                      />
                    </svg>
                  </div>
                  <a
                    href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer"
                    className="font-extralight hover:text-[#4C8C74] transition-colors"
                  >
                    Tiktok
                  </a>
                </div>
              </div>

              {/* Fourth Column - Copyright - Only on desktop, moved to bottom on mobile */}
              <div className="hidden md:flex flex-col mt-5 mx-2">
                <p className="text-sm font-extralight">
                  Copyright © 2025, Aussie Digital Studios.
                </p>
                <p className="text-sm font-extralight">All Rights Reserved.</p>
              </div>
            </div>
          </div>

          {/* Copyright for mobile - appears at bottom */}
          <div className="md:hidden flex flex-col items-center text-center py-6">
            <p className="text-sm font-extralight">
              Copyright © 2025, Aussie Digital Studios.
            </p>
            <p className="text-sm font-extralight">All Rights Reserved.</p>
          </div>
        </div>

        {/* Aussie Digital SVGs */}
        <div className="w-full flex justify-center items-center mx-auto px-4">
          {isClient && (
          <Image
            src="/aussie_digital_stroke_light.webp"
            alt="Aussie Digital Studios"
            width={1900}
            height={1900}
            className="mb-4 h-auto w-[1300px] max-w-full"
          />
          )}
        </div>
      </div>
    </>
  );
};

export default Footer;
