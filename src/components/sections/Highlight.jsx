"use client";

import { useState } from "react";
import Image from "next/image";

import { useEffect } from "react";

const rows = [
  {
    title: "Lowest Latency",
    description:
      "Independent benchmarks confirm Retell as the leader in responsiveness. With ~600ms latency, conversations stay smooth and fluent.",
    image: "/images/highlights.jpg", // put your photo here
  },
  {
    title: "Ultra Realistic Voice",
    description:
      "Built from real performance data and refined through human-guided training",
    image: "/images/highlights.jpg",
  },
  {
    title: "Turn taking",
    description:
      "Proprietary turn-taking model that knows when to stop and when to listen.",
    image: "/images/highlights.jpg",
  },
  // add the rest of your rows here
];

export default function Highlights() {
  const [active, setActive] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        scrollableHeight > 0
          ? Math.min(
              100,
              Math.max(0, (window.scrollY / scrollableHeight) * 100),
            )
          : 0;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section className="px-[var(--hl-section-padding-x)] pt-[var(--hl-section-padding-top)] lg:mx-auto lg:w-[var(--hl-section-width-lg)] lg:px-0 min-[1600px]:w-[var(--hl-section-width-xl)]">
      <style>{`@keyframes hl-progress{from{width:100%}to{width:100%}}`}</style>

      <div className="grid grid-cols-1 gap-[var(--hl-header-gap)] lg:grid-cols-2 lg:gap-0">
        <div className="flex flex-col gap-[var(--hl-header-column-gap)]">
          <span className="text-[length:var(--hl-label-font)] font-medium text-[var(--hl-label-color)]">
            Highlights
          </span>

          <h2 className="text-[length:var(--hl-heading-font)] font-light leading-[var(--hl-heading-line)] tracking-[var(--hl-heading-tracking)] text-[var(--hl-heading-color)] lg:max-w-[var(--hl-heading-width-lg)] lg:text-[length:var(--hl-heading-font-lg)]">
            Human-standard AI voice agent, out of the box
          </h2>

          <p className="max-w-[var(--hl-description-width)] text-[length:var(--hl-description-font)] leading-[var(--hl-description-line)] text-[var(--hl-description-color)] lg:text-[length:var(--hl-description-font-lg)]">
            Proprietary Voice AI Orchestration Delivering Human-Quality,
            Low-Latency Phone Conversations At Scale
          </p>
        </div>

        <div className="relative aspect-[var(--hl-image-aspect)] w-full overflow-hidden rounded-[var(--hl-image-radius)] lg:col-start-2 lg:row-start-1">
          <Image
            src="/images/HighImg.webp"
            alt="Highlight Image"
            fill
            sizes="(min-width:1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-[var(--hl-rows-margin-top)]">
        {rows.map((row, i) => {
          const isActive = i === active;
          return (
            <div
              key={row.title}
              onClick={() => setActive(i)}
              className="relative cursor-pointer pb-[var(--hl-row-padding-bottom)] pt-[var(--hl-row-padding-top)] lg:pb-[var(--hl-row-padding-bottom-lg)] lg:pt-[var(--hl-row-padding-top-lg)]"
            >
              <span
                className="absolute left-0 top-0 h-px bg-[var(--hl-divider-color)]"
                style={{ width: `${scrollProgress}%` }}
              />

              <div className="grid grid-cols-1 gap-[var(--hl-row-grid-gap)] lg:grid-cols-2 lg:gap-0">
                <h3 className="text-[length:var(--hl-row-heading-font)] font-light leading-[var(--hl-row-heading-line)] tracking-[var(--hl-row-heading-tracking)] text-[var(--hl-heading-color)] lg:text-[length:var(--hl-row-heading-font-lg)]">
                  {row.title}
                </h3>

                <div className="flex flex-col gap-[var(--hl-row-content-gap)] lg:flex-row lg:items-start lg:justify-between">
                  <p className="max-w-[var(--hl-row-description-width)] text-[length:var(--hl-row-description-font)] leading-[var(--hl-row-description-line)] text-[var(--hl-row-description-color)] lg:max-w-[var(--hl-row-description-width-lg)] lg:text-[length:var(--hl-row-description-font-lg)]">
                    {row.description}
                  </p>

                  <div className="flex aspect-square w-[var(--hl-icon-size)] shrink-0 items-center justify-center rounded-[var(--hl-icon-radius)] bg-[var(--hl-icon-bg)] lg:w-[var(--hl-icon-size-lg)]">
                    <span
                      className={`h-[var(--hl-icon-dot-size)] w-[var(--hl-icon-dot-size)] rounded-full bg-[var(--hl-icon-dot)] shadow-[var(--hl-icon-shadow)] transition-transform duration-[var(--hl-transition-duration)] ${
                        isActive
                          ? "-translate-x-[var(--hl-icon-dot-movement)]"
                          : ""
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
