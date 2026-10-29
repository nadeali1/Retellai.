"use client"

import { useEffect, useRef } from "react";



const BREAKPOINT = 1024; // animation starts at 1024px, never below it

// How far (px) each card starts below the first card
const OFFSETS = [0, 88, 198, 308];

const CARDS = [
  {
    title: "Voice Call",
    text: "Deliver natural, human-like phone conversations at scale.",
    icon: (
      <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true">
        <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" />
        <path d="M14 3.2a7 7 0 0 1 6.8 6.8h-1.8A5.2 5.2 0 0 0 14 5zM14 6.8a3.4 3.4 0 0 1 3.2 3.2h-1.8A1.6 1.6 0 0 0 14 8.6z" />
      </svg>
    ),
  },
  {
    title: "Chat",
    text: "Deploy AI-powered conversations across web and in-app chat experiences.",
    icon: (
      <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true">
        <path d="M12 3C6.5 3 2 6.6 2 11c0 2.3 1.2 4.4 3.2 5.8L4.5 21l4.3-2.2c1 .3 2.1.4 3.2.4 5.5 0 10-3.6 10-8S17.5 3 12 3z" />
        <circle cx="8" cy="11" r="1.3" fill="#fff" />
        <circle cx="12" cy="11" r="1.3" fill="#fff" />
        <circle cx="16" cy="11" r="1.3" fill="#fff" />
      </svg>
    ),
  },
  {
    title: "SMS",
    text: "Engage customers through reliable, compliant text messaging workflows.",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
        <path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-7l-5 4v-4H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
        <rect x="6" y="8" width="9" height="1.6" rx=".8" fill="#fff" />
        <rect x="6" y="11.4" width="6" height="1.6" rx=".8" fill="#fff" />
      </svg>
    ),
  },
  {
    title: "API",
    text: "Build and orchestrate custom communication experiences through a flexible API.",
    icon: (
      <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true">
        <path
          d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z"
          fill="currentColor"
        />
        <path
          d="M10 8l-4 4 4 4M14 8l4 4-4 4"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const clamp = (n, min, max) => Math.min(Math.max(n, min), max);

export default function OmniChannelCards() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    let ticking = false;

    const resetCards = () => {
      cardRefs.current.forEach((el) => {
        if (el) el.style.transform = "";
      });
    };

    const update = () => {
      ticking = false;
      const section = sectionRef.current;
      if (!section) return;

      // Below 1024px: no animation, cards sit in a normal grid
      if (window.innerWidth < BREAKPOINT) {
        resetCards();
        return;
      }

      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      // 0 -> section just reached the top (pinned), 1 -> cards fully aligned
      const progress = clamp(-rect.top / scrollable, 0, 1);

      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        // card 1 stays fixed; others travel from their offset up to 0
        const y = OFFSETS[i] * (1 - progress);
        el.style.transform = `translate3d(0, ${y}px, 0)`;
      });
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
    <>
      <style>{css}</style>

      <section className="omni" ref={sectionRef}>
        <div className="omni__sticky">
          <div className="omni__head">
            <span className="omni__eyebrow">Integrations</span>
            <h2 className="omni__title">
              True omni-channel
              <br />
              communication.
            </h2>
          </div>

          <div className="omni__grid">
            {CARDS.map((card, i) => (
              <article
                key={card.title}
                className="omni__card"
                ref={(el) => (cardRefs.current[i] = el)}
                // initial staircase position (>=1024px) before JS runs
                style={{ "--start": `${OFFSETS[i]}px` }}
              >
                <header className="omni__cardTop">
                  <h3>{card.title}</h3>
                  <span className="omni__icon">{card.icon}</span>
                </header>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const css = `
.omni {
  --ink: #0b1b33;
  --card: #f4f4f8;
  // font-family: Inter, "Helvetica Neue", Arial, sans-serif;
  color: #1c1c28;
  background: #fff;
  padding: 48px 16px 64px;
}

.omni__head { text-align: center; margin-bottom: 56px; }
.omni__eyebrow { font-size: 13px; font-weight: 600; color: #3f6df2; }
.omni__title {
  margin: 28px 0 0;
  font-size: 34px;
  line-height: 1.15;
  font-weight: 400;
  letter-spacing: -0.02em;
}

/* ---------- below 1024px : plain 2 x 2 grid, no motion ---------- */
.omni__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
  max-width: 760px;
  margin: 0 auto;
}

/* ---------- phones : one card per row ---------- */
@media (max-width: 639px) {
  .omni__grid { grid-template-columns: minmax(0, 1fr); }
  .omni__card { min-height: 240px; }
  .omni__title { font-size: 28px; }
  .omni__head { margin-bottom: 32px; }
}

.omni__card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 330px;
  padding: 16px;
  background: var(--card);
  border-radius: 6px;
}
.omni__cardTop {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.omni__cardTop h3 { margin: 0; font-size: 18px; font-weight: 400; }
.omni__icon {
  display: grid;
  place-items: center;
  width: 85px;
  height: 85px;
  margin: -8px -8px 0 0;
  border-radius: 50%;
  background: #fff;
  color: var(--ink);
}
.omni__card p {
  margin: 0;
  max-width: 260px;
  font-size: 16px;
  line-height: 1.25;
}

/* ---------- 1024px and up : staircase + scroll-driven alignment ---------- */
@media (min-width: 1024px) {
  /* Extra height = the distance the user scrolls while cards are moving */
  .omni {
    height: 220vh;
    padding: 0;
  }
  .omni__sticky {
    position: sticky;
    top: 0;
    min-height: 100vh;
    padding: 48px 16px 0;
    overflow: hidden;
  }
  .omni__grid {
    grid-template-columns: repeat(4, 284px);
    gap: 8px;
    max-width: none;
    justify-content: center;
    align-items: start;
  }
  .omni__card {
    min-height: 330px;
    will-change: transform;
    /* initial staircase; JS then animates translateY back to 0 on scroll */
    transform: translate3d(0, var(--start, 0px), 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .omni__card { will-change: auto; }
}
`;
