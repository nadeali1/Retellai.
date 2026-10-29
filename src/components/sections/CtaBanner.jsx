"use client";
/**
 * CTA banner - "Revolutionize your call operation with Retell"
 * Tailwind CSS + React.
 *
 * PUT YOUR IMAGES HERE:
 *   1) BG_MOBILE / BG_TABLET / BG_DESKTOP -> background photo for each
 *      screen size (phone < 768px, tablet 768-1023px, large 1024px+)
 *   2) PROFILE_IMAGE -> small square picture inside the card
 *
 *   import bgLarge from "./assets/bg-large.jpg";
 *   import profile from "./assets/silhouette.png";
 *   const BG_DESKTOP = bgLarge;
 *   const PROFILE_IMAGE = profile;
 *
 * Or use a URL / a file from /public, e.g. "/images/man-on-phone.jpg".
 * While a value is empty, a coloured placeholder is shown in its place.
 *
 * The centre card moves up and down slightly AS THE USER SCROLLS the page.
 * It only shifts a few pixels (MOVE = 24px each way), so it stays in the
 * middle of the banner and just feels alive. Scroll back and it goes back.
 */

import { useEffect, useRef } from "react";

// Background photo, one image per screen size.
// If you leave one empty, the next available image is used for that size.
const BG_MOBILE = "/images/ctaS.webp"; // phones   : below 768px
const BG_TABLET = "/images/ctaS.webp"; // tablets  : 768px to 1023px
const BG_DESKTOP = "/images/ctaL.webp"; // large   : 1024px and up

// Fallback chain so a missing image never leaves the banner empty
const MOBILE_SRC = BG_MOBILE || BG_TABLET || BG_DESKTOP;
const TABLET_SRC = BG_TABLET || BG_DESKTOP || BG_MOBILE;
const DESKTOP_SRC = BG_DESKTOP || BG_TABLET || BG_MOBILE;

const PROFILE_IMAGE = "/images/shadow.webp"; // <- your small card image

const MOVE = 24; // max px the card shifts up / down while scrolling

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
      // -1 when banner is just below the screen, 0 when centred, +1 when above
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
        {/* BACKGROUND IMAGE PLACE */}
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

        {/* CENTRE CARD (moves slightly up/down with page scroll) */}
        <div
          ref={cardRef}
          className="relative z-10 w-[calc(100%-48px)] max-w-[430px] will-change-transform"
        >
          <div className="flex flex-col rounded-md bg-[#f4f4f8] p-3 shadow-sm md:min-h-[393px] md:justify-between">
            {/* top: title + picture */}
            <div className="md:flex md:items-start md:justify-between md:gap-4">
              <h2 className="max-w-[200px] text-[22px] font-normal leading-[1.15] tracking-tight text-[#2b2b33] md:text-[24px]">
                Revolutionize your call operation with Retell
              </h2>

              {/* CARD IMAGE PLACE */}
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

            {/* bottom: text + buttons */}
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
