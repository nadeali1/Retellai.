"use client";

import { useState } from "react";

const features = [
  {
    name: "Build",
    title: "Build complex call flows, visually.",
    description:
      "Design every step of the conversation on a drag-and-drop canvas. Add functions, integrations, call transfers, DTMF, SMS, and custom logic to handle even your most complex workflows.",
    video: "/videos/feature.mp4",
  },
  {
    name: "Test",
    title: "Test with confidence before you deploy.",
    description:
      "Manually test changes, simulate thousands of scenarios, and turn real production calls into regression tests. Catch failures and edge cases before they reach your customers.",
    video: "/videos/feature.mp4",
  },
  {
    name: "Deploy",
    title: "Deploy anywhere, in minutes.",
    description:
      "Deploy your agent in minutes for inbound calls, outbound campaigns, web, or SMS. Connect phone numbers, launch an outbound dialer, or embed a website widget, all out of the box.",
    video: "/videos/feature.mp4",
  },
  {
    name: "QA",
    title: "Make quality measurable at any scale.",
    description:
      "QA up to 100% of your AI calls to measure performance at scale, surface patterns across conversations, and focus your team on the improvements that matter most.",
    video: "/videos/feature.mp4",
  },
  {
    name: "Analytics",
    title: "Custom Analytics for the Outcomes That Matter.",
    description:
      "Build custom analytics from any post-call metric and compare A/B test results to understand exactly how each agent version performs.",
    video: "/videos/feature.mp4",
  },
];

export default function FeatureCard() {
  const [active, setActive] = useState(0);
  const feature = features[active];

  return (
    <div className="lg:w-[var(--feature-video-width-lg)] xl:w-[var(--feature-video-width-xl)] lg:mx-auto">
      <div className="relative aspect-[var(--feature-video-aspect)] w-full overflow-hidden rounded-[var(--feature-video-radius)] lg:aspect-[var(--feature-video-aspect-lg)] lg:rounded-[var(--feature-video-radius-lg)]">
        <video
          key={feature.video}
          src={feature.video}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="mt-[var(--feature-content-margin)] grid w-full grid-cols-1 gap-y-[var(--feature-row-gap)] md:grid-cols-[var(--feature-grid-columns)] md:gap-x-[var(--feature-column-gap)] lg:mt-[var(--feature-content-margin-lg)] lg:grid-cols-[var(--feature-grid-columns-lg)] lg:gap-x-0 lg:gap-y-[var(--feature-row-gap-lg)]">
        <h2 className="m-0 w-full max-w-[var(--feature-heading-width)] text-[length:var(--feature-heading-size)] leading-[var(--feature-heading-line)] tracking-[var(--feature-heading-tracking)] text-[var(--feature-heading-color)] lg:max-w-[var(--feature-heading-width-lg)] lg:text-[length:var(--feature-heading-size-lg)]">
          {feature.title}
        </h2>

        <p className="m-0 w-full max-w-[var(--feature-description-width)] text-[length:var(--feature-description-size)] leading-[var(--feature-description-line)] text-[var(--feature-description-color)] md:ml-auto lg:ml-0 lg:max-w-none lg:text-[length:var(--feature-description-size-lg)]">
          {feature.description}
        </p>

        <div className="col-span-1 flex w-full flex-wrap items-center justify-start gap-[var(--feature-button-gap)] md:col-span-2 lg:gap-[var(--feature-button-gap-lg)]">
          {features.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setActive(index)}
              className={`flex w-fit shrink-0 items-center gap-[var(--feature-button-gap)] rounded-full border px-[var(--feature-button-padding-x)] py-[var(--feature-button-padding-y)] text-[length:var(--feature-button-font)] font-semibold ${
                active === index
                  ? "border-[var(--feature-button-active-border)] bg-[var(--feature-button-active-bg)] text-[var(--feature-button-active-text)]"
                  : "border-[var(--feature-button-inactive-border)] bg-[var(--feature-button-inactive-bg)] text-[var(--feature-button-inactive-text)]"
              }`}
            >
              {active === index && (
                <span className="h-[var(--feature-button-dot-size)] w-[var(--feature-button-dot-size)] rounded-full border-2 border-[var(--feature-button-dot-border)]" />
              )}
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
