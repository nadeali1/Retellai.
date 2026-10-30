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
        ? Math.min(100, Math.max(0, (window.scrollY / scrollableHeight) * 100))
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
    <section className="px-[8px] pt-[60px] lg:mx-auto lg:w-[80%] lg:px-0 min-[1600px]:w-[60.4%]">
      <style>{`@keyframes hl-progress{from{width:100%}to{width:100%}}`}</style>

      {/* Header: text left, photo right */}
      <div className="grid grid-cols-1 gap-[10px] lg:grid-cols-2 lg:gap-0">
        <div className="flex flex-col gap-[40px]">
          <span className="text-[13px] font-medium text-[#3e6aef]">
            Highlights
          </span>

          <h2 className="text-[24px] font-light leading-[100%] tracking-[-0.01em] text-[#2d2d2d] lg:max-w-[10.5em] lg:text-[clamp(22px,2.7vw,60px)]">
            Human-standard AI voice agent, out of the box
          </h2>

          <p className="max-w-[34em] text-[16px] leading-[1.1] text-[#1a1a1a] lg:text-[14px]">
            Proprietary Voice AI Orchestration Delivering Human-Quality,
            Low-Latency Phone Conversations At Scale
          </p>
        </div>

        <div className="relative aspect-[1.155/1] w-full overflow-hidden rounded-[28px] lg:col-start-2 lg:row-start-1">
          <Image
            src='/images/HighImg.webp'
            alt='Highlight Image'
            fill
            sizes="(min-width:1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Rows */}
      <div className="mt-[24px]">
        {rows.map((row, i) => {
          const isActive = i === active;
          return (
            <div
              key={row.title}
              onClick={() => setActive(i)}
              className="relative cursor-pointer pb-[44px] pt-[30px] lg:pb-[3.8%] lg:pt-[2.4%]"
            >
              {/* progress line */}
              {/* {isActive ? (
                <span
                  key={`line-${active}`}
                  onAnimationEnd={() => setActive((a) => (a + 1) % rows.length)}
                  className="absolute left-0 top-0 h-px bg-[#e4e4ea]"
                  style={{ animation: "hl-progress 5s linear forwards" }}
                />
              ) : (
                <span className="absolute left-0 top-0 h-px w-[3.8%] bg-[#e4e4ea]" />
              )} */}

              <span
  className="absolute left-0 top-0 h-px bg-[#e4e4ea]"
  style={{ width: `${scrollProgress}%` }}
/>

              <div className="grid grid-cols-1 gap-[32px] lg:grid-cols-2 lg:gap-0">
                <h3 className="text-[26px] font-light leading-[1.1] tracking-[-0.01em] text-[#2d2d2d] lg:text-[clamp(18px,1.4vw,32px)]">
                  {row.title}
                </h3>

                <div className="flex flex-col gap-[23px] lg:flex-row lg:items-start lg:justify-between">
                  <p className="max-w-[16em] text-[16px] leading-[1.2] text-[#1a1a1a] lg:max-w-[19em] lg:text-[15px]">
                    {row.description}
                  </p>

                  {/* Orb box */}
                  <div className="flex aspect-square w-[120px] shrink-0 items-center justify-center rounded-[8px] bg-[#F5F5FA] lg:w-[20.7%]">
                    <span
                      className={`h-[22px] w-[22px] rounded-full bg-[#00122E] shadow-[0_0_0_2px_rgba(255,170,130,0.45)] transition-transform duration-75 ${
                        isActive ? "-translate-x-[26px]" : ""
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