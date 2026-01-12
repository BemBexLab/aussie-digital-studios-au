import React from "react";
import Image from "next/image";

const Cards = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full my-20 relative">
      <h2 className="text-4xl text-center mb-10">Strategic Approach</h2>
      {/* Geometric Shape - Positioned above and on top right of card 3 */}
      <div className="absolute top-0 right-0 translate-y-[15px] -translate-x-32 z-10 pointer-events-none">
        <Image
          src="/Geometric_Shape_Silver.png"
          alt="Geometric Shape"
          width={120}
          height={80}
          className="opacity-80"
        />
      </div>
      <div className="grid grid-cols-3 gap-3 w-fit">
        {/* Card # 01 */}
        <div
          className="group relative rounded-2xl w-[280px] border border-white/10 p-6 transition overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(circle at top right, rgba(255,255,255,0.3) 0%, transparent 50%), linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="flex flex-col">
            {/* SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M32.0685 8.44506L31.3995 9.18835V9.18835L32.0685 8.44506ZM40.3159 15.8678L39.647 16.6111V16.6111L40.3159 15.8678ZM45.1123 21.1543L44.1988 21.5612L44.1988 21.5612L45.1123 21.1543ZM6.60728 43.3925L7.31439 42.6854H7.31439L6.60728 43.3925ZM43.3924 43.3925L42.6853 42.6854V42.6854L43.3924 43.3925ZM29.1665 45.8333V44.8333H20.8332V45.8333V46.8333H29.1665V45.8333ZM4.1665 29.1666H5.1665V20.8333H4.1665H3.1665V29.1666H4.1665ZM45.8332 28.256H44.8332V29.1666H45.8332H46.8332V28.256H45.8332ZM32.0685 8.44506L31.3995 9.18835L39.647 16.6111L40.3159 15.8678L40.9849 15.1245L32.7374 7.70176L32.0685 8.44506ZM45.8332 28.256H46.8332C46.8332 24.6889 46.8534 22.6056 46.0258 20.7475L45.1123 21.1543L44.1988 21.5612C44.813 22.9401 44.8332 24.5122 44.8332 28.256H45.8332ZM40.3159 15.8678L39.647 16.6111C42.4297 19.1155 43.5847 20.1822 44.1988 21.5612L45.1123 21.1543L46.0258 20.7475C45.1983 18.8894 43.6363 17.5107 40.9849 15.1245L40.3159 15.8678ZM20.8952 4.16663V5.16663C24.148 5.16663 25.5158 5.18206 26.7441 5.65341L27.1024 4.71979L27.4607 3.78617C25.8059 3.15119 23.9966 3.16663 20.8952 3.16663V4.16663ZM32.0685 8.44506L32.7374 7.70176C30.4435 5.63727 29.1152 4.4211 27.4607 3.78617L27.1024 4.71979L26.7441 5.65341C27.9726 6.12481 28.994 7.02338 31.3995 9.18835L32.0685 8.44506ZM20.8332 45.8333V44.8333C16.8765 44.8333 14.0096 44.8312 11.8225 44.5371C9.66409 44.2469 8.31801 43.689 7.31439 42.6854L6.60728 43.3925L5.90017 44.0996C7.33733 45.5368 9.17582 46.1993 11.556 46.5193C13.9074 46.8354 16.9331 46.8333 20.8332 46.8333V45.8333ZM4.1665 29.1666H3.1665C3.1665 33.0667 3.16438 36.0924 3.48052 38.4438C3.80052 40.824 4.46302 42.6625 5.90017 44.0996L6.60728 43.3925L7.31439 42.6854C6.31077 41.6818 5.75287 40.3357 5.46268 38.1773C5.16863 35.9902 5.1665 33.1233 5.1665 29.1666H4.1665ZM29.1665 45.8333V46.8333C33.0666 46.8333 36.0923 46.8354 38.4437 46.5193C40.8239 46.1993 42.6623 45.5368 44.0995 44.0996L43.3924 43.3925L42.6853 42.6854C41.6817 43.689 40.3356 44.2469 38.1772 44.5371C35.99 44.8312 33.1231 44.8333 29.1665 44.8333V45.8333ZM45.8332 29.1666H44.8332C44.8332 33.1233 44.8311 35.9902 44.537 38.1773C44.2468 40.3357 43.6889 41.6818 42.6853 42.6854L43.3924 43.3925L44.0995 44.0996C45.5367 42.6625 46.1992 40.824 46.5192 38.4438C46.8353 36.0924 46.8332 33.0667 46.8332 29.1666H45.8332ZM4.1665 20.8333H5.1665C5.1665 16.8767 5.16863 14.0098 5.46268 11.8226C5.75287 9.66421 6.31077 8.31813 7.31439 7.31451L6.60728 6.6074L5.90017 5.9003C4.46302 7.33745 3.80052 9.17594 3.48052 11.5561C3.16438 13.9075 3.1665 16.9332 3.1665 20.8333H4.1665ZM20.8952 4.16663V3.16663C16.9744 3.16663 13.9335 3.16452 11.5721 3.48056C9.1827 3.80035 7.33811 4.46236 5.90017 5.9003L6.60728 6.6074L7.31439 7.31451C8.31723 6.31167 9.66756 5.75329 11.8374 5.46289C14.0353 5.16873 16.918 5.16663 20.8952 5.16663V4.16663Z"
                fill="#4C8C74"
              />
              <path
                d="M12.5 30.2084H29.1667"
                stroke="#4C8C74"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M12.5 37.5H23.9583"
                stroke="#4C8C74"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M27.0835 5.20837V10.4167C27.0835 15.3272 27.0835 17.7824 28.609 19.3079C30.1345 20.8334 32.5897 20.8334 37.5002 20.8334H45.8335"
                stroke="#4C8C74"
                strokeWidth="2"
              />
            </svg>
            <div className="mt-4 flex flex-col">
              <h2 className="text-xl text-yellow-500">Discovery & Planning</h2>
              <p className="font-light">
                Understand your vision, business goals, and target audience to
                create a clear project roadmap.
              </p>
            </div>
          </div>
        </div>
        {/* Card # 02 */}
        <div
          className="group relative rounded-2xl w-[280px] border border-white/10 p-6 transition overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(circle at top right, rgba(255,255,255,0.3) 0%, transparent 50%), linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="flex flex-col">
            {/* SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M25 18.75C21.5482 18.75 18.75 15.9518 18.75 12.5C18.75 9.04822 21.5482 6.25 25 6.25C28.4518 6.25 31.25 9.04822 31.25 12.5C31.25 15.9518 28.4518 18.75 25 18.75Z"
                stroke="#4C8C74"
                strokeWidth="2"
              />
              <path
                d="M11.4585 43.75C8.00672 43.75 5.2085 40.9518 5.2085 37.5C5.2085 34.0482 8.00672 31.25 11.4585 31.25C14.9103 31.25 17.7085 34.0482 17.7085 37.5C17.7085 40.9518 14.9103 43.75 11.4585 43.75Z"
                stroke="#4C8C74"
                strokeWidth="2"
              />
              <path
                d="M38.5415 43.75C35.0897 43.75 32.2915 40.9518 32.2915 37.5C32.2915 34.0482 35.0897 31.25 38.5415 31.25C41.9933 31.25 44.7915 34.0482 44.7915 37.5C44.7915 40.9518 41.9933 43.75 38.5415 43.75Z"
                stroke="#4C8C74"
                strokeWidth="2"
              />
              <path
                d="M41.6668 27.0834C41.6668 22.1055 39.4845 17.6373 36.0244 14.5834M8.3335 27.0834C8.3335 22.1055 10.5158 17.6373 13.976 14.5834M20.8335 43.225C22.1652 43.5678 23.5614 43.7501 25.0002 43.7501C26.4389 43.7501 27.8351 43.5678 29.1668 43.225"
                stroke="#4C8C74"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <div className="mt-4 flex flex-col">
              <h2 className="text-xl text-yellow-500">Agile Development</h2>
              <p className="font-light">
                Iteratively develop robust, scalable websites with regular
                testing and your feedback at every stage.
              </p>
            </div>
          </div>
        </div>
        {/* Card # 03 */}
        <div
          className="group relative rounded-2xl w-[280px] border border-white/10 p-6 transition overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(circle at top right, rgba(255,255,255,0.3) 0%, transparent 50%), linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="flex flex-col">
            {/* SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M28.125 32.2917C28.125 28.3633 28.125 26.3992 29.3454 25.1788C30.5658 23.9584 32.53 23.9584 36.4583 23.9584C40.3867 23.9584 42.3509 23.9584 43.5713 25.1788C44.7917 26.3992 44.7917 28.3633 44.7917 32.2917V36.4584C44.7917 40.3867 44.7917 42.3509 43.5713 43.5713C42.3509 44.7917 40.3867 44.7917 36.4583 44.7917C32.53 44.7917 30.5658 44.7917 29.3454 43.5713C28.125 42.3509 28.125 40.3867 28.125 36.4584V32.2917Z"
                stroke="#4C8C74"
                strokeWidth="2"
              />
              <path
                d="M4.16699 17.7084C4.16699 21.6367 4.16699 23.6009 5.38738 24.8213C6.60777 26.0417 8.57195 26.0417 12.5003 26.0417C16.4287 26.0417 18.3929 26.0417 19.6133 24.8213C20.8337 23.6009 20.8337 21.6367 20.8337 17.7084V13.5417C20.8337 9.61334 20.8337 7.64915 19.6133 6.42876C18.3929 5.20837 16.4287 5.20837 12.5003 5.20837C8.57195 5.20837 6.60777 5.20837 5.38738 6.42876C4.16699 7.64915 4.16699 9.61334 4.16699 13.5417V17.7084Z"
                stroke="#4C8C74"
                strokeWidth="2"
              />
              <path
                d="M28.125 11.4584C28.125 9.51695 28.125 8.54624 28.4422 7.78053C28.8651 6.75958 29.6762 5.94843 30.6972 5.52554C31.4629 5.20837 32.4336 5.20837 34.375 5.20837H38.5417C40.4831 5.20837 41.4538 5.20837 42.2195 5.52554C43.2405 5.94843 44.0516 6.75958 44.4745 7.78053C44.7917 8.54624 44.7917 9.51695 44.7917 11.4584C44.7917 13.3998 44.7917 14.3705 44.4745 15.1362C44.0516 16.1572 43.2405 16.9683 42.2195 17.3912C41.4538 17.7084 40.4831 17.7084 38.5417 17.7084H34.375C32.4336 17.7084 31.4629 17.7084 30.6972 17.3912C29.6762 16.9683 28.8651 16.1572 28.4422 15.1362C28.125 14.3705 28.125 13.3998 28.125 11.4584Z"
                stroke="#4C8C74"
                strokeWidth="2"
              />
              <path
                d="M4.16699 38.5416C4.16699 40.483 4.16699 41.4538 4.48416 42.2195C4.90705 43.2404 5.71819 44.0516 6.73914 44.4745C7.50486 44.7916 8.47557 44.7916 10.417 44.7916H14.5837C16.5251 44.7916 17.4958 44.7916 18.2615 44.4745C19.2825 44.0516 20.0936 43.2404 20.5165 42.2195C20.8337 41.4538 20.8337 40.483 20.8337 38.5416C20.8337 36.6002 20.8337 35.6295 20.5165 34.8638C20.0936 33.8428 19.2825 33.0317 18.2615 32.6088C17.4958 32.2916 16.5251 32.2916 14.5837 32.2916H10.417C8.47557 32.2916 7.50486 32.2916 6.73914 32.6088C5.71819 33.0317 4.90705 33.8428 4.48416 34.8638C4.16699 35.6295 4.16699 36.6002 4.16699 38.5416Z"
                stroke="#4C8C74"
                strokeWidth="2"
              />
            </svg>

            <div className="mt-4 flex flex-col">
              <h2 className="text-xl text-yellow-500">UI/UX Design</h2>
              <p className="font-light">
                Design modern, user-centric interfaces for an exceptional
                digital experience.
              </p>
            </div>
          </div>
        </div>
        {/* Card # 04 */}
        <div
          className="group relative rounded-2xl w-[280px] border border-white/10 p-6 transition overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(circle at top right, rgba(255,255,255,0.3) 0%, transparent 50%), linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="flex flex-col">
            {/* SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M4.1665 25C4.1665 15.179 4.1665 10.2686 7.21748 7.2176C10.2684 4.16663 15.1789 4.16663 24.9998 4.16663C34.8208 4.16663 39.7312 4.16663 42.7822 7.2176C45.8332 10.2686 45.8332 15.179 45.8332 25C45.8332 34.8209 45.8332 39.7314 42.7822 42.7823C39.7312 45.8333 34.8208 45.8333 24.9998 45.8333C15.1789 45.8333 10.2684 45.8333 7.21748 42.7823C4.1665 39.7314 4.1665 34.8209 4.1665 25Z"
                stroke="#4C8C74"
                strokeWidth="2"
              />
              <path
                d="M14.5835 29.1667L19.3604 24.3898C20.1739 23.5763 21.493 23.5763 22.3066 24.3898L25.6104 27.6936C26.4239 28.5072 27.743 28.5072 28.5566 27.6936L35.4168 20.8334M35.4168 20.8334V26.0417M35.4168 20.8334H30.2085"
                stroke="#4C8C74"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="mt-4 flex flex-col">
              <h2 className="text-xl text-yellow-500">QA & Launch</h2>
              <p className="font-light">
                Thoroughly test for responsiveness, performance, and security
                before seamless launch and handover.
              </p>
            </div>
          </div>
        </div>
        {/* Card # 05 */}
        <div
          className="group relative rounded-2xl w-[280px] border border-white/10 p-6 transition overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(circle at top right, rgba(255,255,255,0.3) 0%, transparent 50%), linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="flex flex-col">
            {/* SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M8.3335 16.6666C8.3335 10.7741 8.3335 7.82779 10.1641 5.99721C11.9947 4.16663 14.9409 4.16663 20.8335 4.16663H29.1668C35.0594 4.16663 38.0057 4.16663 39.8362 5.99721C41.6668 7.82779 41.6668 10.7741 41.6668 16.6666V33.3333C41.6668 39.2259 41.6668 42.1721 39.8362 44.0027C38.0057 45.8333 35.0594 45.8333 29.1668 45.8333H20.8335C14.9409 45.8333 11.9947 45.8333 10.1641 44.0027C8.3335 42.1721 8.3335 39.2259 8.3335 33.3333V16.6666Z"
                stroke="#4C8C74"
                strokeWidth="2"
              />
              <path
                d="M41.4539 33.3334H16.4539C14.5164 33.3334 13.5477 33.3334 12.7529 33.5463C10.5961 34.1243 8.91142 35.8089 8.3335 37.9658"
                stroke="#4C8C74"
                strokeWidth="2"
              />
              <path
                d="M16.6665 14.5834H33.3332"
                stroke="#4C8C74"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M16.6665 21.875H27.0832"
                stroke="#4C8C74"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M40.6248 39.5834H16.6665"
                stroke="#4C8C74"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <div className="mt-4 flex flex-col">
              <h2 className="text-xl text-yellow-500">Content Integration</h2>
              <p className="font-light">
                Incorporate compelling, SEO-optimized content and visuals that
                support your brand story.
              </p>
            </div>
          </div>
        </div>
        {/* Card # 06 */}
        <div
          className="group relative rounded-2xl w-[280px] border border-white/10 p-6 transition overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(circle at top right, rgba(255,255,255,0.3) 0%, transparent 50%), linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backdropFilter: "blur(10px)",
          }}
        >
          <div className="flex flex-col">
            {/* SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M25 8.33337L25 41.6667"
                stroke="#4C8C74"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M33.333 14.5834L33.333 35.4167"
                stroke="#4C8C74"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M16.667 14.5834L16.667 35.4167"
                stroke="#4C8C74"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M41.667 22.9166L41.667 27.0833"
                stroke="#4C8C74"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M8.33301 22.9166L8.33301 27.0833"
                stroke="#4C8C74"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <div className="mt-4 flex flex-col">
              <h2 className="text-xl text-yellow-500">
                Ongoing Support & Optimization
              </h2>
              <p className="font-light">
                Provide maintenance, updates, and performance enhancements to
                keep your site running at its best.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
