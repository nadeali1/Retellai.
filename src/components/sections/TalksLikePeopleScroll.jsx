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
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      const p = clamp(-rect.top / scrollable, 0, 1);

      const move = spread * (1 - p);
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
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(onResize);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="my-[70px]">
      <style>{css}</style>

      <section className="bts" ref={sectionRef}>
        <div className="bts__sticky">
          <div className="bts__wrap" ref={wrapRef}>
            <div className="bts__row" ref={rowRef}>
              <span className="bts__word" ref={leftRef}>
                Talks
              </span>

              <div className="relative flex shrink-0 flex-col items-center gap-5 md:gap-16">
                <div className="relative aspect-square w-[clamp(95px,22vw,282px)] min-w-[95px] max-w-[282px] overflow-hidden rounded-[8px]">
                  <Image
                    src="/images/TLP.webp"
                    alt="Talks Like People"
                    fill
                    sizes="(max-width: 768px) 95px, 282px"
                    className="object-cover object-center"
                  />
                </div>

                <span className="bts__word">
                  People
                </span>
              </div>

              <span className="bts__word" ref={rightRef}>
                Like
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
  padding: 0 clamp(20px, 8vw, 120px);
  box-sizing: border-box;
}
.bts__row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(16px, 4vw, 56px);
  width: max-content;
  max-width: 100%;
  margin: 0 auto;
}
.bts__word {
  font-family: "Instrument Serif", "Times New Roman", Georgia, serif;
  font-size: clamp(26px, 8vw, 160px);
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
