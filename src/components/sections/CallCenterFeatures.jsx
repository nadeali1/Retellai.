'use client'

import { useRef, useState } from "react";


const TOP_CARDS = [
  {
    title: "Agentic Human Handoffs",
    text: "AI agents can brief human agents, answer follow-up questions, and confirm they’re ready to take over before connecting the customer.",
    // video: "",
    poster: "/images/callcenter1.png",
  },
  {
    title: "Outbound Campaigns at Scale",
    text: "Run outbound campaigns without stitching together another dialer. Upload your audience, schedule campaigns, control pacing and retries, handle voicemail, and let AI agents call at scale.",
    // video: "",
    poster: "/images/callcenter2.png",
  },
];

const BOTTOM_CARDS = [
  {
    title: "Navigate Complex Phone Systems",
    text: "Detect IVRs, understand menu options, press digits, enter extensions, and reach the right destination during a live call.",
    // video: "",
    poster: "/images/callcenter3.png",
  },
  {
    title: "Listen Live, Step In When Needed",
    text: "Step in whenever you need to. Monitor AI calls live, listen in, and take over the conversation instantly when a human touch is needed.",
    // video: "",
    poster: "/images/callcenter4.png",
  },
  {
    title: "CRM Context In, Call Outcomes Back",
    text: "Enrich conversations with existing customer data, then write call outcomes, captured information, and follow-ups back to your CRM.",
    // video: "",
    poster: "/images/callcenter5.png",
  },
];


function FeatureCard({ card, mediaHeight, className = "" }) {
  const videoRef = useRef(null);
  const [active, setActive] = useState(false);

  const start = () => {
    setActive(true);
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {}); // ignore autoplay-policy errors
  };

  const stop = () => {
    setActive(false);
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0; // back to first frame (shows the poster again)
  };

  return (
    <article
      tabIndex={0}
      onMouseEnter={start}
      onMouseLeave={stop}
      onFocus={start}
      onBlur={stop}
      className={`group flex flex-col overflow-hidden rounded-[14px] border outline-none transition-colors duration-500 ease-out cursor-pointer ${active ? "border-[#dfe6f5] bg-white" : "border-transparent bg-[#f5f5fa]"} ${className}`}
    >

      <div className={`relative w-full ${mediaHeight}`}>
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ease-out bg-[linear-gradient(180deg,#dcecfd_0%,#d9e0f8_45%,#d3d6f3_72%,#ffffff_100%)] ${active ? "opacity-100" : "opacity-0"}`}
        />

        <video
          ref={videoRef}
          // src={card.video}
          poster={card.poster}
          muted
          loop
          playsInline
          preload="metadata"
          className="relative z-10 h-full w-full object-contain"
        />
      </div>

      {/* ---------- text ---------- */}
      <div className="px-6 pb-8 pt-6 lg:px-8">
        <h3 className="text-[20px] font-normal leading-7 tracking-[-0.03em] text-[#0e1535] lg:text-[22px]">
          {card.title}
        </h3>
        <p className="mt-2 text-[16px] leading-[26px] tracking-[-0.02em] text-[#6b7280] lg:text-[17px]">
          {card.text}
        </p>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/*  3. SECTION                                                          */
/* ------------------------------------------------------------------ */
export default function CallCenterFeatures() {
  return (
    <section className="w-full bg-white py-16 font-sans antialiased lg:py-24">
      <div className="mx-auto w-full max-w-[1160px] px-4 sm:px-6 lg:px-0">
        {/* ---------- header ---------- */}
        <header className="grid grid-cols-1 gap-8 md:grid-cols-12 lg:gap-0">
          <div className="md:col-span-7">
            <p className="text-[15px] font-semibold tracking-[-0.01em] text-[#3f6ef5]">
              AI-native modern contact center
            </p>
            <h2 className="mt-6 max-w-[480px] text-[30px] font-light leading-[1.1] tracking-[-0.05em] text-[#1f2230] sm:text-[34px] lg:mt-12 lg:text-[40px] lg:leading-[40px]">
              Built for the Complexity of Real Call Centers
            </h2>
          </div>

          <p className="mt-2 max-w-[380px] text-[16px] leading-6 tracking-[-0.02em] text-[#1f2230] md:col-span-5 lg:mt-[56px] lg:text-[16px] lg:leading-5">
            Handle the workflows that make production call centers complex,
            from routing and transfers to outbound campaigns, human
            intervention, and CRM automation.
          </p>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-2 md:grid-cols-6 lg:mt-20">


          {TOP_CARDS.map((card) => (
            <FeatureCard
              key={card.title}
              card={card}
              className="md:col-span-3"
              mediaHeight="h-[300px] md:h-[360px] lg:h-[470px]"
            />
          ))}


          {BOTTOM_CARDS.map((card) => (
            <FeatureCard
              key={card.title}
              card={card}
              className="md:col-span-2"
              mediaHeight="h-[300px] md:h-[260px] lg:h-[390px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
