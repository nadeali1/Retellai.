"use client";

import { useState } from "react";
import Newsletter from "../sections/Newsletter";

const ASSETS = {
  bgDesktop: "/images/footer.webp",
  bgMobile: "/images/footer.webp",
  trialArt: "/images/footer/start-free-trial.png",
  aiClaude: "/images/claude.svg",
  aiChatgpt: "/images/chatgpt.svg",
  aiPerplexity: "/images/perplexcity.svg",
  badgeSoc2: "/images/soc.svg",
  badgeHipaa: "/images/hipaa.svg",
  badgeGdpr: "/images/gdpr.svg",
  badgeIso: "/images/iso.svg",
  logoBig: "/images/logo.svg",
};

const display = "font-display font-light tracking-[-0.04em]";

const PRODUCTS = [
  {
    title: "Build",
    links: [
      "Call Transfer",
      "Book Appointments",
      "Knowledge Base",
      "Navigate IVR",
    ],
  },
  {
    title: "Deploy",
    links: ["Batch Call", "Branded Call ID", "Verified Phone Numbers"],
  },
  { title: "Monitor", links: ["Post Call Analysis", "AI Quality Assurance"] },
];

const SOLUTIONS = [
  {
    title: "Industries",
    gapAfterFirst: true,
    links: [
      "Overview",
      "Healthcare",
      "Financial Services",
      "Insurance",
      "Logistics",
      "Retail & Consumer Goods",
      "Travel & Hospitality",
      "Debt Collection",
    ],
  },
  {
    title: "Use Cases",
    gapAfterFirst: true,
    links: [
      "Overview",
      "AI Receptionist",
      "Lead Qualification",
      "AI Dispatch Service",
      "AI Auto Dialer",
      "AI Answering Service",
      "AI IVR",
      "AI Appointment Setter",
      "AI Telemarketing",
    ],
  },
];

const RESOURCES = [
  {
    title: "Product & Support",
    links: [
      { label: "Documentation", external: true },
      { label: "Model Benchmark", external: true },
      "Pricing",
      "Changelog",
      "Blog",
      "Customer Stories",
      "Events",
      "Area Code",
      "Glossary",
      "Learn",
      "Retell University",
      "Status Page",
      "AI Instructions",
    ],
  },
  {
    title: "Compare Products",
    gapAfterFirst: true,
    links: [
      "Competitors Overview",
      "VS Bland",
      "VS Vapi",
      "VS Synthflow",
      "VS Thoughtly",
      "VS Decagon",
      "VS Sierra",
    ],
  },
  {
    title: "Partners",
    links: [
      "Solution Partner Program",
      "Solution Partner Directory",
      "App Partner Directory",
      { label: "Creator Partners", external: true },
    ],
  },
];

const COMPANY = [
  { title: "Company", links: ["About Us", "Careers", "Newsroom"] },
  {
    title: "Social Media",
    links: ["LinkedIn", "X", "Youtube", "Community", "Discord"],
  },
];

const LEGAL = [
  "Trust Center",
  "Privacy Policy",
  "HIPAA",
  "Terms Of Service",
  "Add Retell AI as a preferred source on Google",
];

const DottedChevron = ({ open }) => (
  <svg
    viewBox="0 0 16 10"
    className={`h-2.5 w-4 shrink-0 text-[#1a1d2e] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeDasharray="0.1 3.6"
    aria-hidden="true"
  >
    <path d="M1 1.5 8 8.5 15 1.5" />
  </svg>
);

const ExternalArrow = () => (
  <svg
    viewBox="0 0 8 8"
    className="ml-2 inline-block h-[7px] w-[7px] align-super"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    aria-hidden="true"
  >
    <path d="M1 7 7 1M2.5 1H7v4.5" />
  </svg>
);

const DottedArrow = () => (
  <svg
    viewBox="0 0 12 14"
    className="h-[19px] w-5 text-[#1a1d2e]"
    fill="currentColor"
    aria-hidden="true"
  >
    {[
      [2, 2],
      [6, 4.5],
      [10, 7],
      [6, 9.5],
      [2, 12],
    ].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="0.9" />
    ))}
  </svg>
);

function LinkGroup({ title, links, gapAfterFirst }) {
  return (
    <div className="min-w-0">
      <h4 className="mb-5 text-[13px] font-semibold leading-none text-[#3d63f0]">
        {title}
      </h4>
      <ul>
        {links.map((l, i) => {
          const item = typeof l === "string" ? { label: l } : l;
          return (
            <li
              key={item.label + i}
              className={gapAfterFirst && i === 0 ? "mb-3" : ""}
            >
              <a
                href="#"
                className="block py-[3px] text-[14px] leading-[18px] tracking-[-0.01em] text-[#6b7285] transition-colors hover:text-[#0b1230]"
              >
                {item.label}
                {item.external && <ExternalArrow />}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Row({
  label,
  groups,
  open,
  onToggle,
  className = "",
  cols = "md:grid-cols-2 xl:grid-cols-3",
}) {
  return (
    <section
      className={`border-b border-[#e3e5ee] md:grid md:grid-cols-[1fr_2fr] md:border-b-0 md:border-t md:py-8 xl:grid-cols-[1fr_3fr] ${className}`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-5 text-left md:pointer-events-none md:items-start md:py-0"
      >
        <span
          className={`${display} text-[30px] leading-none text-[#2b2e3b] md:text-[32px]`}
        >
          {label}
        </span>
        <span className="md:hidden">
          <DottedChevron open={open} />
        </span>
      </button>

      <div
        className={`${open ? "grid" : "hidden"} grid-cols-2 gap-x-6 gap-y-10 pb-8 pt-1 md:grid md:pb-0 md:pt-1 ${cols}`}
      >
        {groups.map((g) => (
          <LinkGroup key={g.title} {...g} />
        ))}
      </div>
    </section>
  );
}

export default function Footer() {
  const [open, setOpen] = useState({
    product: false,
    solutions: false,
    resources: false,
  });
  const toggle = (k) => setOpen((s) => ({ ...s, [k]: !s[k] }));

  return (
    <footer className="relative isolate w-full overflow-hidden rounded-t-[28px] bg-[#050b2e] font-sans text-white md:rounded-t-[32px]">
      <picture className="pointer-events-none absolute inset-0 -z-10">
        <source media="(max-width: 767px)" srcSet={ASSETS.bgMobile} />
        <img
          src={ASSETS.bgDesktop}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </picture>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(60%_40%_at_55%_35%,#b03a82_0%,#7a2d7d_35%,transparent_70%),linear-gradient(180deg,#1b5fb8_0%,#0b1b5c_45%,#030a2a_80%,#0a2f8a_100%)]"
      />

      <div className="flex flex-col gap-12 px-4 pb-7 pt-12 sm:px-4 lg:min-h-[700px] lg:justify-between lg:pt-10">
        <h2
          className={`${display} text-[52px] leading-[0.88] text-white sm:text-[96px] lg:text-[128px]`}
        >
          Built
          <br />
          to scale,
        </h2>

        <div className="flex flex-col-reverse gap-16 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="w-full xl:max-w-[1120px]">
            <p className="mb-7 max-w-[240px] text-[14px] font-semibold leading-[20px] text-white">
              Subscribe to our newsletter for our product updates.
            </p>
            <Newsletter />
          </div>

          <h2
            className={`${display} self-end text-right text-[52px] leading-[0.88] text-white sm:text-[96px] lg:text-[124px]`}
          >
            human by
            <br />
            design
          </h2>
        </div>
      </div>

      <div className="mx-2 rounded-[28px] bg-white p-3 text-[#0b1230]">
        <div className="grid grid-cols-1 gap-x-10 lg:grid-cols-[minmax(0,1fr)_376px] lg:gap-x-14">
          <div className="mb-6 flex h-[376px] flex-col justify-between rounded-2xl bg-[#F5F5FA] p-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mb-0 lg:min-h-0">
            <h3 className={`${display} text-[30px] leading-none text-[#2b2e3b]`}>Start Free Trial</h3>

            <div className="my-4 flex min-h-[120px] flex-1 items-center justify-center">
              <img src={ASSETS.trialArt} alt="" className="max-h-full max-w-full object-contain" />
            </div>

            <div>
              <p className="max-w-[240px] text-[13px] font-medium leading-5 text-[#0b1230]">
                See what makes Retell’s AI voice platform unique from how it works to what it can do for your team.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <a href="#" className="rounded-lg bg-[#050b24] px-4 py-3 text-[13px] font-bold leading-none text-white transition-opacity hover:opacity-90">
                  Try For Free
                </a>
                <a href="#" className="rounded-lg bg-[#3f68f5] px-4 py-3 text-[13px] font-bold leading-none text-white transition-opacity hover:opacity-90">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>

          <Row
            label="Products"
            groups={PRODUCTS}
            open={open.product}
            onToggle={() => toggle("product")}
            className="lg:col-start-1 lg:row-start-1 md:!border-t-0 md:pt-4"
            cols="md:grid-cols-2 xl:grid-cols-3"
          />
          <Row
            label="Solutions"
            groups={SOLUTIONS}
            open={open.solutions}
            onToggle={() => toggle("solutions")}
            className="lg:col-start-1 lg:row-start-2"
            cols="md:grid-cols-3"
          />
          <Row
            label="Resources"
            groups={RESOURCES}
            open={open.resources}
            onToggle={() => toggle("resources")}
            className="lg:col-start-1 lg:row-start-3"
            cols="md:grid-cols-2 xl:grid-cols-3"
          />
         

          <section className="pt-8 md:grid md:grid-cols-[1fr_2fr] md:border-t md:border-[#e3e5ee] md:py-8 lg:col-start-1 lg:row-start-4 xl:grid-cols-[1fr_3fr]">
            <h3 className={`${display} text-[30px] leading-none text-[#2b2e3b] md:text-[18px] lg:text-[24px]`}>Request an AI Summary</h3>
            <div className="mt-4 md:mt-1">
              <p className="max-w-[270px] text-[14px] leading-[17px] text-[#6b7285]">
                Learn more about how Retell is improving customer experience at leading enterprises.
              </p>
              <div className="mt-4 flex items-center gap-4">
                <a href="#" aria-label="Summarize with Claude"><img src={ASSETS.aiClaude} alt="" className="h-6 w-6" /></a>
                <a href="#" aria-label="Summarize with ChatGPT"><img src={ASSETS.aiChatgpt} alt="" className="h-6 w-6" /></a>
                <a href="#" aria-label="Summarize with Perplexity"><img src={ASSETS.aiPerplexity} alt="" className="h-6 w-6" /></a>
              </div>
            </div>
          </section> 

          <div className="mt-8 grid grid-cols-2 gap-x-6 lg:col-start-2 lg:row-start-3 lg:mt-0 lg:self-start lg:border-t lg:border-[#e3e5ee] lg:pt-8">
            {COMPANY.map((g) => (
              <LinkGroup key={g.title} {...g} />
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 py-8 lg:col-start-2 lg:row-start-4 lg:justify-end lg:border-t lg:border-[#e3e5ee] lg:py-0">
            <img src={ASSETS.badgeSoc2} alt="AICPA SOC 2" className="h-14 w-14 object-contain" />
            <img src={ASSETS.badgeHipaa} alt="HIPAA compliant" className="h-14 w-14 object-contain" />
            <img src={ASSETS.badgeGdpr} alt="GDPR compliant" className="h-14 w-14 object-contain" />
            <img src={ASSETS.badgeIso} alt="ISO/IEC 27001:2022 certified" className="h-14 w-14 object-contain" />
          </div>

           <div className="grid grid-cols-2 gap-x-6 border-t border-[#e3e5ee] pb-3 pt-8 md:grid-cols-[1fr_2fr] md:pb-4 lg:col-start-1 lg:row-start-5 xl:grid-cols-[1fr_3fr]">
            <p className="text-[13px] font-semibold leading-5 text-[#667182]">© 2026 Retell AI</p>
            <ul className="flex flex-col gap-1 text-[13px] font-semibold leading-[16px] text-[#667182] md:flex-row md:flex-wrap md:gap-x-5 md:gap-y-2">
              {LEGAL.map((l) => (
                <li key={l}>
                  <a href="#" className="transition-colors hover:text-[#0b1230]">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div> 
        </div>
      </div>

      <div className="px-4 pb-9 pt-16 sm:px-4 lg:pt-20 hover:invert">
        <img
          src={ASSETS.logoBig}
          alt="Retellai footer logo"
          className="block h-[77px] lg:h-[108px]  w-auto lg:min-w-[480px] max-w-none brightness-0 invert" />
      </div>
    </footer>
  );
}
