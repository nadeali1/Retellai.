"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const clamp = (n, min, max) => Math.min(Math.max(n, min), max);

export default function TalksLikePeopleScroll() {
  const sectionRef = useRef(null);
  const wrapRef = useRef(null);
  const rowRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    let spread = 0;
    let ticking = false;

    const measure = () => {
      const wrap = wrapRef.current;
      const row = rowRef.current;
      if (!wrap || !row) return;

      const style = getComputedStyle(wrap);
      const inner =
        wrap.clientWidth -
        parseFloat(style.paddingLeft) -
        parseFloat(style.paddingRight);

      spread = Math.max(0, (inner - row.offsetWidth) / 2);
    };

    const render = () => {
      ticking = false;

      const section = sectionRef.current;
      if (!section || !leftRef.current || !rightRef.current) return;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      const center = rect.top + rect.height / 2;
      const p = clamp((vh * 0.85 - center) / (vh * 0.5), 0, 1);

      const move = spread * p;

      leftRef.current.style.transform = `translate3d(${-move}px,0,0)`;
      rightRef.current.style.transform = `translate3d(${move}px,0,0)`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(render);
      }
    };

    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    render();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    // fonts can change text width after load
    if (document.fonts?.ready) document.fonts.ready.then(onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const word =
    "whitespace-nowrap font-[family-name:Instrument_Serif,Times_New_Roman,Georgia,serif] text-[clamp(26px,8vw,160px)] font-light tracking-[-0.04em] text-[var(--talks-text-color)] will-change-transform";

  return (
    <div className="my-[var(--talks-outer-margin)]">
      <section
        ref={sectionRef}
        className="flex items-center overflow-hidden bg-[var(--talks-background)] py-16 md:py-24"
      >
        <div
          ref={wrapRef}
          className="box-border w-full px-[clamp(20px,8vw,120px)]"
        >
          <div
            ref={rowRef}
            className="mx-auto flex w-max max-w-full items-center justify-center gap-[clamp(16px,4vw,56px)]"
          >
            <span ref={leftRef} className={word}>
              Talks
            </span>

            <div className="relative flex shrink-0 flex-col items-center gap-5 md:gap-16">
              <div className="relative aspect-square w-[clamp(95px,22vw,282px)] min-w-[var(--talks-image-min-width)] max-w-[var(--talks-image-max-width)] overflow-hidden rounded-[var(--talks-image-radius)]">
                <Image
                  src="/images/TLP.webp"
                  alt="Talks Like People"
                  fill
                  sizes="(max-width: 768px) 95px, 282px"
                  className="object-cover object-center"
                />
              </div>

              <span className={word}>People</span>
            </div>

            <span ref={rightRef} className={word}>
              Like
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}