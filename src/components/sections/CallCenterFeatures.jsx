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
    v.play().catch(() => {}); 
  };

  const stop = () => {
    setActive(false);
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0; 
  };

  return (
    <article
      tabIndex={0}
      onMouseEnter={start}
      onMouseLeave={stop}
      onFocus={start}
      onBlur={stop}
      className={`group flex flex-col overflow-hidden rounded-[var(--call-card-radius)] border outline-none transition-colors duration-500 ease-out cursor-pointer ${
  active
    ? "border-[var(--call-card-border-active)] bg-[var(--call-card-active-bg)]"
    : "border-[var(--call-card-border-transparent)] bg-[var(--call-card-bg)]"
} ${className}`}
    >

      <div className={`relative w-full ${mediaHeight}`}>
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ease-out bg-[image:var(--call-card-gradient)] ${
  active ? "opacity-100" : "opacity-0"
}`}
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

      
      <div className="px-6 pb-8 pt-6 lg:px-8">
        <h3 className="text-[length:var(--call-font-20)] font-normal leading-7 tracking-[var(--call-tracking-3)] text-[var(--call-heading-color)] lg:text-[length:var(--call-font-22)]">
          {card.title}
        </h3>
        <p className="mt-2 text-[length:var(--call-font-16)] leading-[var(--call-line-26)] tracking-[var(--call-tracking-2)] text-[var(--call-description-color)] lg:text-[length:var(--call-font-17)]">
          {card.text}
        </p>
      </div>
    </article>
  );
}

export default function CallCenterFeatures() {
  return (
   <section className="w-full bg-[var(--call-section-bg)] py-16 font-sans antialiased lg:py-24">
      <div className="mx-auto w-full max-w-[var(--call-container-width)] px-4 sm:px-6 lg:px-0">
        {/* ---------- header ---------- */}
        <header className="grid grid-cols-1 gap-8 md:grid-cols-12 lg:gap-0">
          <div className="md:col-span-7">
            <p className="text-[length:var(--call-font-15)] font-semibold tracking-[var(--call-tracking-1)] text-[var(--call-label-color)]">
              AI-native modern contact center
            </p>
            <h2 className="mt-6 max-w-[var(--call-header-width)] text-[length:var(--call-font-30)] font-light leading-[var(--call-line-heading)] tracking-[var(--call-tracking-5)] text-[var(--call-header-color)] sm:text-[length:var(--call-font-34)] lg:mt-12 lg:text-[length:var(--call-font-40)] lg:leading-[var(--call-line-40)]">
              Built for the Complexity of Real Call Centers
            </h2>
          </div>

          <p className="mt-2 max-w-[var(--call-description-width)] text-[length:var(--call-font-16)] leading-6 tracking-[var(--call-tracking-2)] text-[var(--call-header-color)] md:col-span-5 lg:mt-[var(--call-header-description-margin)] lg:text-[length:var(--call-font-16)] lg:leading-[var(--call-line-20)]">
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
              mediaHeight="h-[var(--call-media-height)] md:h-[var(--call-media-height-md-top)] lg:h-[var(--call-media-height-lg-top)]"
            />
          ))}


          {BOTTOM_CARDS.map((card) => (
            <FeatureCard
              key={card.title}
              card={card}
              className="md:col-span-2"
              mediaHeight="h-[var(--call-media-height)] md:h-[var(--call-media-height-md-bottom)] lg:h-[var(--call-media-height-lg-bottom)]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
