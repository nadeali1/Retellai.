"use client";


import { useEffect, useRef } from "react";


const BG_MOBILE = "/images/ctaS.webp"; 
const BG_TABLET = "/images/ctaS.webp"; 
const BG_DESKTOP = "/images/ctaL.webp"; 

const MOBILE_SRC = BG_MOBILE || BG_TABLET || BG_DESKTOP;
const TABLET_SRC = BG_TABLET || BG_DESKTOP || BG_MOBILE;
const DESKTOP_SRC = BG_DESKTOP || BG_TABLET || BG_MOBILE;

const PROFILE_IMAGE = "/images/shadow.webp"; 

const MOVE = 24; 

const clamp = (n, min, max) => Math.min(Math.max(n, min), max);

export default function CtaBanner() {
  const bannerRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const banner = bannerRef.current;
      const card = cardRef.current;
      if (!banner || !card) return;

      const rect = banner.getBoundingClientRect();
      const vh = window.innerHeight;

      const progress = clamp(
        (vh / 2 - (rect.top + rect.height / 2)) / (vh / 2 + rect.height / 2),
        -1,
        1,
      );
      card.style.transform = `translate3d(0, ${progress * MOVE}px, 0)`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="w-full bg-white p-2 md:p-3">
      <div
        ref={bannerRef}
        className="relative mx-auto flex min-h-[480px] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-stone-700 to-stone-900 md:h-[680px]"
      >
        
        {MOBILE_SRC && (
          <picture>
            <source media="(min-width: 1024px)" srcSet={DESKTOP_SRC} />
            <source media="(min-width: 768px)" srcSet={TABLET_SRC} />
            <img
              src={MOBILE_SRC}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          </picture>
        )}

        
        <div
          ref={cardRef}
          className="relative z-10 w-[calc(100%-48px)] max-w-[430px] will-change-transform"
        >
          <div className="flex flex-col rounded-md bg-[#f4f4f8] p-3 shadow-sm md:min-h-[393px] md:justify-between">
        
            <div className="md:flex md:items-start md:justify-between md:gap-4">
              <h2 className="max-w-[200px] text-[22px] font-normal leading-[1.15] tracking-tight text-[#2b2b33] md:text-[24px]">
                Revolutionize your call operation with Retell
              </h2>

              <div className="mt-5 h-[64px] w-[64px] shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-pink-400 via-purple-500 to-blue-600 md:mt-0 md:h-[98px] md:w-[98px] md:rounded-lg">
                {PROFILE_IMAGE && (
                  <img
                    src={PROFILE_IMAGE}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
            </div>

            <div className="mt-4 md:mt-0">
              <p className="max-w-[200px] text-[15px] leading-snug text-[#1c1c28] md:max-w-[190px] md:text-[11px] md:leading-tight">
                Start building smarter conversations today.
              </p>

              <div className="mt-5 flex flex-col items-start gap-2 md:mt-3 md:flex-row md:gap-1">
                <a
                  href="#"
                  className="rounded-md bg-[#0b1b33] px-4 py-2.5 text-[13px] font-semibold text-white transition hover:opacity-90"
                >
                  Try For Free
                </a>
                <a
                  href="#"
                  className="rounded-md bg-[#3f6df2] px-4 py-2.5 text-[13px] font-semibold text-white transition hover:opacity-90"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
