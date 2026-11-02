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
    <section className="w-full bg-[var(--cta-section-bg)] p-2 md:p-3">
      <div
        ref={bannerRef}
       className="relative mx-auto flex min-h-[var(--cta-banner-min-height)] w-full items-center justify-center overflow-hidden rounded-[var(--cta-banner-radius)] bg-[image:var(--cta-banner-gradient)] md:h-[var(--cta-banner-height-md)]"
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
          className="relative z-10 w-[var(--cta-card-width)] max-w-[var(--cta-card-max-width)] will-change-transform"
        >
          <div className="flex flex-col rounded-[var(--cta-card-radius)] bg-[var(--cta-card-bg)] p-[var(--cta-card-padding)] shadow-sm md:min-h-[var(--cta-card-min-height-md)] md:justify-between">
        
            <div className="md:flex md:items-start md:justify-between md:gap-4">
              <h2 className="max-w-[var(--cta-heading-max-width)] text-[length:var(--cta-heading-font)] font-normal leading-[var(--cta-heading-line-height)] tracking-tight text-[var(--cta-heading-color)] md:text-[length:var(--cta-heading-font-md)]">
                Revolutionize your call operation with Retell
              </h2>

              <div className="mt-[var(--cta-profile-margin-top)] h-[var(--cta-profile-size)] w-[var(--cta-profile-size)] shrink-0 overflow-hidden rounded-[var(--cta-profile-radius)] bg-[image:var(--cta-profile-gradient)] md:mt-0 md:h-[var(--cta-profile-size-md)] md:w-[var(--cta-profile-size-md)] md:rounded-[var(--cta-profile-radius-md)]">
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
              <p className="max-w-[var(--cta-description-max-width)] text-[length:var(--cta-description-font)] leading-[var(--cta-description-line-height)] text-[var(--cta-description-color)] md:max-w-[var(--cta-description-max-width-md)] md:text-[length:var(--cta-description-font-md)] md:leading-[var(--cta-description-line-height-md)]">
                Start building smarter conversations today.
              </p>

              <div className="mt-[var(--cta-buttons-margin-top)] flex flex-col items-start gap-2 md:mt-[var(--cta-buttons-margin-top-md)] md:flex-row md:gap-1">
                <a
                  href="#"
                 className="rounded-[var(--cta-button-radius)] bg-[var(--cta-primary-button-bg)] px-4 py-2.5 text-[length:var(--cta-button-font)] font-semibold text-[var(--cta-button-text)] transition hover:opacity-90"
                >
                  Try For Free
                </a>
                <a
                  href="#"
                 className="rounded-[var(--cta-button-radius)] bg-[var(--cta-secondary-button-bg)] px-4 py-2.5 text-[length:var(--cta-button-font)] font-semibold text-[var(--cta-button-text)] transition hover:opacity-90"
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
