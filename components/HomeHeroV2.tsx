"use client";

import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { motion } from "@/lib/motion";
import { useReducedMotion } from "motion/react";

const HomeHeroV2 = () => {
  const shouldReduceMotion = useReducedMotion();
  const [parallaxY, setParallaxY] = React.useState(0);

  React.useEffect(() => {
    if (typeof window === "undefined" || shouldReduceMotion) {
      return;
    }

    let frameId = 0;

    const updateParallax = () => {
      const scrollY = window.scrollY;
      setParallaxY(Math.min(scrollY * 0.18, 120));
      frameId = 0;
    };

    const handleScroll = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [shouldReduceMotion]);

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#0d0f0f] text-white">
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        animate={{ y: shouldReduceMotion ? 0 : parallaxY }}
        transition={{ type: "spring", stiffness: 45, damping: 22, mass: 1.1 }}
        style={{
          backgroundImage: "url('/Home/image 17.webp')",
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,11,0.78)_0%,rgba(10,12,12,0.58)_36%,rgba(14,13,11,0.44)_100%)] md:bg-[linear-gradient(90deg,rgba(11,12,12,0.82)_0%,rgba(11,13,13,0.56)_42%,rgba(17,14,10,0.38)_100%)]" />
      <div className="absolute left-[-12%] top-[10%] h-[260px] w-[260px] rounded-full bg-[#1c3b31]/20 blur-3xl sm:left-[2%] sm:h-[320px] sm:w-[320px] lg:left-[10%] lg:h-[520px] lg:w-[520px]" />
      <div className="absolute bottom-[-10%] left-[6%] h-[220px] w-[220px] rounded-full bg-[#0f1817]/80 blur-3xl sm:bottom-[-14%] sm:left-[20%] sm:h-[280px] sm:w-[280px] lg:bottom-[-18%] lg:left-[28%] lg:h-[380px] lg:w-[380px]" />

      <div className="relative z-10 flex min-h-screen items-center px-5 py-14 sm:px-8 sm:py-16 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-[92vw] sm:max-w-[560px] lg:max-w-[640px]">
          <p className="mb-3 text-[1.7rem] font-semibold leading-none tracking-[-0.03em] sm:mb-4 sm:text-[2rem] lg:mb-5 lg:text-[2.75rem]">
            Modern
          </p>

          <h1 className="text-[3.6rem] font-semibold uppercase leading-[0.88] tracking-[-0.065em] text-white sm:text-[4.8rem] md:text-[5.9rem] lg:text-[8rem] xl:text-[9rem]">
            <span className="block">Digital</span>
            <span className="block">Design</span>
          </h1>

          <p className="mt-2 text-[1.55rem] font-semibold leading-[1.06] tracking-[-0.04em] text-white sm:mt-3 sm:text-[2rem] md:text-[2.35rem] lg:text-[3.15rem]">
            that helps your brand grow.
          </p>

          <p className="mt-6 max-w-[20rem] text-[0.82rem] uppercase leading-[1.7] tracking-[0.03em] text-[#b3b3b3] sm:mt-8 sm:max-w-[25rem] sm:text-[0.95rem] md:max-w-[29rem] md:text-[1.03rem] lg:mt-10 lg:max-w-[32.5rem] lg:text-[1.2rem]">
            Clean visuals, smart strategy and creative work that makes an
            impact.
          </p>

          <a
            href="tel:0468285539"
            className="mt-7 inline-flex w-fit items-center gap-3 rounded-full bg-[#56b09b] px-4 py-2.5 text-[0.92rem] font-medium text-white transition-transform duration-200 hover:scale-[1.02] sm:mt-8 sm:gap-4 sm:px-5 sm:py-3 sm:text-base lg:mt-10 lg:px-7 lg:py-3.5 lg:text-[1.05rem]"
          >
            <span>(0468) 285-539</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0c0f0f] text-[0.95rem] text-white sm:h-10 sm:w-10 sm:text-base lg:h-12 lg:w-12 lg:text-[1.1rem]">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M14.3761 2.05373C14.3761 2.05373 16.6352 2.2591 19.5104 5.13432C22.3857 8.00955 22.591 10.2687 22.591 10.2687" stroke="white" stroke-width="1.5403" stroke-linecap="round"/>
  <path d="M14.5887 5.68436C14.5887 5.68436 15.6052 5.9748 17.13 7.49962C18.6549 9.02443 18.9453 10.041 18.9453 10.041" stroke="white" stroke-width="1.5403" stroke-linecap="round"/>
  <path d="M10.3073 5.459L10.9737 6.65317C11.5752 7.73085 11.3337 9.14458 10.3865 10.0918C10.3865 10.0918 9.23747 11.2408 11.3207 13.3241C13.4039 15.4073 14.553 14.2583 14.553 14.2583C15.5002 13.3111 16.914 13.0696 17.9916 13.6711L19.1858 14.3375C20.8131 15.2457 21.0053 17.5278 19.5749 18.9582C18.7154 19.8177 17.6625 20.4865 16.4986 20.5306C14.5392 20.6049 11.2116 20.109 7.87372 16.7711C4.53582 13.4332 4.03993 10.1056 4.11421 8.14622C4.15834 6.98228 4.82711 5.92937 5.6866 5.06988C7.11697 3.63951 9.3991 3.83169 10.3073 5.459Z" stroke="white" stroke-width="1.5403" stroke-linecap="round"/>
</svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroV2;
