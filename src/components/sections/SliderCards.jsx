"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const cards = [
  {
    title: "Compliance & Security",
    description:
      "Fully compliant with HIPAA, SOC2 Type II, GDPR and ISO 27001. We ensure your voice agents meet the highest global standards for data privacy and security.",
    image: "/images/s1.svg",
  },
  {
    title: "SSO",
    description:
      "Seamless single sign-on with enterprise identity providers for secure, centralized access control.",
    image: "/images/s2.svg",
  },
  {
    title: "Personal Info Redacting",
    description:
      "User-defined controls to selectively redact sensitive personal data in calls and transcripts.",
    image: "/images/s3.svg",
  },
  {
    title: "Custom Role Based Access Control",
    description:
      "Configurable roles with module-level control access across teams.",
    image: "/images/s4.svg",
  },
  {
    title: "Scalability to Millions of Calls",
    description:
      "Battle-tested infrastructure built to handle millions of calls reliably at scale.",
    image: "/images/s5.svg",
  },
  {
    title: "Unmatched implementation services",
    description:
      "Professional FDE-led implementation to ensure a smooth and secure deployment.",
    image: "/images/s6.svg",
  },
  {
    title: "Enterprise On-prem",
    description:
      "Deploy Retell within your own infrastructure to meet strict security and data residency requirements.",
    image: "/images/S7.svg",
  },
];

export default function SlideCards() {
  const scrollerRef = useRef(null);
  const cardRefs = useRef([]);
  const [active, setActive] = useState(0);
  const total = cards.length;

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => {
      const pad = parseFloat(getComputedStyle(el).paddingLeft) || 0;
      const left = el.scrollLeft + pad;
      let nearest = 0;
      let min = Infinity;

      cardRefs.current.forEach((c, i) => {
        if (!c) return;
        const d = Math.abs(c.offsetLeft - left);

        if (d < min) {
          min = d;
          nearest = i;
        }
      });

      setActive(nearest);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (i) => {
    const next = Math.max(0, Math.min(total - 1, i));

    cardRefs.current[next]?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };

  const container = "lg:mx-auto lg:w-[80%] min-[1600px]:w-[58.4%]";

  return (
    <section className="px-[var(--compliance-space-8)] pt-[var(--compliance-space-60)]">
      <div className={`flex flex-col gap-[var(--compliance-space-40)] ${container}`}>
        <span className="text-[var(--compliance-font-13)] font-medium !text-[var(--compliance-blue)]">
        
        
          Compliance and Security
        </span>

        <div className="grid grid-cols-1 gap-[var(--compliance-space-40)] lg:grid-cols-[minmax(0,59fr)_minmax(0,41fr)] lg:items-end lg:gap-0">
          <h2 className="text-[length:var(--compliance-font-24)] font-light leading-[100%] tracking-[-0.01em] text-[var(--compliance-heading)] lg:max-w-[9em] lg:text-[clamp(22px,2.6vw,60px)]">
            Enterprise-Grade Security and Reliability
          </h2>

          <p className="text-[length:var(--compliance-font-18)] leading-[1.2] text-[var(--compliance-text)] lg:max-w-[25em] lg:text-[clamp(13px,0.85vw,16px)] lg:leading-[1.05]">
            From data protection and compliance to uptime and system resilience,
            Retell delivers the enterprise-grade security and reliability
            required to run voice AI at production scale.
          </p>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="
          mt-[var(--compliance-space-48)] flex gap-[var(--compliance-space-8)] overflow-x-auto snap-x snap-mandatory
          [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
          lg:mt-[var(--compliance-space-70)] lg:-mx-[var(--compliance-space-8)] lg:ps-[10%] lg:pe-[10%] lg:scroll-ps-[10%]
          min-[1600px]:ps-[20.5%] min-[1600px]:pe-[20.5%] min-[1600px]:scroll-ps-[20.5%]
        "
      >
        {cards.map((c, i) => (
          <article
            key={c.title}
            ref={(el) => (cardRefs.current[i] = el)}
            className="
              flex w-[75vw] max-w-[300px] shrink-0 snap-start flex-col justify-between
              rounded-[var(--compliance-card-radius)] bg-[var(--compliance-card-bg)] p-[var(--compliance-space-8)]
              md:max-w-[420px]
              lg:h-[clamp(240px,15.6vw,330px)] lg:w-[34vw] lg:max-w-[700px] lg:flex-row lg:p-[var(--compliance-space-8)]
            "
          >
            <div className="flex flex-1 flex-col justify-between gap-[var(--compliance-space-40)] p-[var(--compliance-space-8)] lg:gap-0 lg:pr-[var(--compliance-space-16)]">
              <h3 className="text-[length:var(--compliance-font-28)] font-light leading-[1.1] tracking-[-0.01em] text-[var(--compliance-heading)] lg:max-w-[8em] lg:text-[clamp(18px,1.4vw,32px)]">
                {c.title}
              </h3>

              <p className="text-[length:var(--compliance-font-16)] leading-[1.2] text-[var(--compliance-text)] lg:max-w-[22em] lg:text-[clamp(10px,0.7vw,13px)]">
                {c.description}
              </p>
            </div>

            <div className="relative h-[var(--compliance-image-height)] w-full overflow-hidden rounded-[var(--compliance-card-radius)] bg-[url('/images/SC.webp')] bg-cover bg-top bg-no-repeat lg:aspect-[256/275] lg:h-full lg:w-auto lg:shrink-0">
              <Image
                src={c.image}
                alt={c.title}
                width={100}
                height={100}
                sizes="100px"
                className="absolute left-1/2 top-1/2 h-[var(--compliance-image-size)] w-[var(--compliance-image-size)] -translate-x-1/2 -translate-y-1/2 object-contain"
              />
            </div>
          </article>
        ))}
      </div>

      <div
        className={`mt-[var(--compliance-space-40)] flex items-center gap-[var(--compliance-space-16)] pb-[var(--compliance-space-40)] ${container}`}
      >
        <div className="flex gap-[var(--compliance-space-8)]">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => goTo(active - 1)}
            disabled={active === 0}
            className="flex h-[var(--compliance-button-size)] w-[var(--compliance-button-size)] items-center justify-center rounded-[var(--compliance-button-radius)] bg-[var(--compliance-dark)] text-white disabled:bg-[var(--compliance-disabled)]"
          >
            ‹
          </button>

          <button
            type="button"
            aria-label="Next"
            onClick={() => goTo(active + 1)}
            disabled={active === total - 1}
            className="flex h-[var(--compliance-button-size)] w-[var(--compliance-button-size)] items-center justify-center rounded-[var(--compliance-button-radius)] bg-[var(--compliance-dark)] text-white disabled:bg-[var(--compliance-disabled)]"
          >
            ›
          </button>
        </div>

        <span className="flex items-center gap-[var(--compliance-space-8)] text-[var(--compliance-font-12)] text-[var(--compliance-dark)]">
          {active + 1} <span>—</span> {total}
        </span>

        <div className="relative ml-[var(--compliance-space-8)] h-px flex-1 bg-[var(--compliance-progress-bg)]">
          <span
            className="absolute left-0 top-0 h-px bg-[var(--compliance-progress)] transition-[width] duration-300"
            style={{ width: `${((active + 1) / total) * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
}