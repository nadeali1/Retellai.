
"use client";

import { useEffect, useRef } from "react";

const DOTS = 8;
const clamp = (n, min, max) => Math.min(Math.max(n, min), max);

export default function BuiltToScale() {
  const sectionRef = useRef(null);
  const wrapRef = useRef(null);
  const rowRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const ringRef = useRef(null);

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
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      const center = rect.top + rect.height / 2;
      const p = clamp((vh * 0.85 - center) / (vh * 0.5), 0, 1);

      const move = spread * p;
      leftRef.current.style.transform = `translate3d(${-move}px,0,0)`;
      rightRef.current.style.transform = `translate3d(${move}px,0,0)`;
      ringRef.current.style.transform = `rotate(${p * 360}deg)`;
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
    if (document.fonts?.ready) document.fonts.ready.then(onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const word =
    "whitespace-nowrap text-[clamp(26px,2vw,54px)] font-light tracking-[-0.04em] text-[#2b2b33] will-change-transform";

  return (
    <div className="my-[200px]">
      <section
        ref={sectionRef}
        className="flex items-center overflow-hidden bg-white py-24"
      >
        <div
          ref={wrapRef}
          className="box-border w-full px-[clamp(16px,8vw,120px)]"
        >
          <div
            ref={rowRef}
            className="mx-auto flex w-max max-w-full items-center justify-center gap-[clamp(12px,4vw,56px)]"
          >
            <span ref={leftRef} className={word}>
              Built
            </span>

            <svg
              ref={ringRef}
              viewBox="0 0 100 100"
              aria-hidden="true"
              className="h-[clamp(64px,11vw,120px)] w-[clamp(64px,11vw,120px)] flex-none will-change-transform"
            >
              {Array.from({ length: DOTS }).map((_, i) => {
                const a = (i / DOTS) * Math.PI * 2 - Math.PI / 2;
                return (
                  <circle
                    key={i}
                    cx={50 + 38 * Math.cos(a)}
                    cy={50 + 38 * Math.sin(a)}
                    r="8"
                    fill="#2b2b33"
                  />
                );
              })}
            </svg>

            <span ref={rightRef} className={word}>
              to Scale.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}