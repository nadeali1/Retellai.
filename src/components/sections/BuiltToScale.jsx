"use client"

import { useEffect, useRef } from "react";

/**
 * "Built  (dotted ring)  to Scale."
 *
 * Works on desktop AND mobile (no breakpoint lock).
 * - The section pins to the screen while you scroll.
 * - "Built" slides in from the LEFT edge, "to Scale." slides in from the
 *   RIGHT edge, both moving toward the centre ring.
 * - The dotted ring rotates one full 360 degrees, in sync with that movement.
 * - Scrolling back up plays everything in reverse.
 */

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
      const scrollable = section.offsetHeight - window.innerHeight;
      const p = clamp(-rect.top / scrollable, 0, 1);

      const move = spread * (1 - p);
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
    // fonts can change text width after load
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(onResize);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="my-[200px]">
      <style>{css}</style>

      <section className="bts" ref={sectionRef}>
        <div className="bts__sticky">
          <div className="bts__wrap" ref={wrapRef}>
            <div className="bts__row" ref={rowRef}>
              <span className="bts__word" ref={leftRef}>
                Built
              </span>

              <svg
                className="bts__ring"
                ref={ringRef}
                viewBox="0 0 100 100"
                aria-hidden="true"
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

              <span className="bts__word" ref={rightRef}>
                to Scale.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const css = `
.bts {
  height: 200vh;               /* scroll distance for the animation */
  background: #fff;
}
.bts__sticky {
  position: sticky;
  top: 0;
  height: 100vh;
  height: 100dvh;              /* correct height on mobile browsers */
  display: flex;
  align-items: center;
  overflow: hidden;
}
.bts__wrap {
  width: 100%;
  padding: 0 clamp(16px, 8vw, 120px);
  box-sizing: border-box;
}
.bts__row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(12px, 4vw, 56px);
  width: max-content;
  max-width: 100%;
  margin: 0 auto;
}
.bts__word {
  // font-family: "Instrument Serif", "Times New Roman", Georgia, serif;
  font-size: clamp(26px, 2vw, 54px);
  font-weight: 300;
  letter-spacing: -0.04em;
  color: #2b2b33;
  white-space: nowrap;
  will-change: transform;
}
.bts__ring {
  flex: none;
  width: clamp(64px, 11vw, 120px);
  height: clamp(64px, 11vw, 120px);
  will-change: transform;
}

@media (prefers-reduced-motion: reduce) {
  .bts { height: auto; }
  .bts__sticky { position: static; height: auto; padding: 64px 0; }
}
`;
