"use client";

import { useState } from "react";
import Image from "next/image";

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

// export default function FeatureCard() {
//   const [active, setActive] = useState(0);
//   const feature = features[active];

//   return (
//     <>
      
// <div className="xl:mx-auto 2xl:mx-auto">

//   {/* Video */}
//   {/* <div className="relative aspect-[16/7] w-[] overflow-hidden rounded-[12px]"> */}
//   <div className="relative aspect-[16/8] w-full overflow-hidden rounded-[24px]">
//   <video
//     key={feature.video}
//     src={feature.video}
//     autoPlay
//     muted
//     loop
//     playsInline
//     className="absolute inset-0 h-full w-full object-cover"
//   />
// </div>

//   {/* Content aligned to video */}
//   <div className="mt-[28px] grid w-full grid-cols-1 gap-y-[20px] md:grid-cols-[1fr_1fr] md:gap-x-[24px]">

//     <h2 className="m-0 w-full max-w-[330px] text-[28px] leading-[1.15] tracking-[-0.03em] text-white">
//       {feature.title}
//     </h2>

//     <p className="m-0 w-full max-w-[400px] text-[18px] leading-[1.2] text-white/85 md:ml-auto">
//       {feature.description}
//     </p>

//     <div className="col-span-1 flex w-full flex-wrap items-center justify-start gap-[8px] md:col-span-2">
//       {features.map((item, index) => (
//         <button
//           key={item.name}
//           type="button"
//           onClick={() => setActive(index)}
//           className={`w-fit shrink-0 rounded-full border px-[16px] py-[12px] text-[12px] font-semibold ${
//             active === index
//               ? "border-white bg-white text-[#00122e]"
//               : "border-white/40 bg-white/10 text-white"
//           }`}
//         >
//           {item.name}
//         </button>
//       ))}
//     </div>

//   </div>
// </div>



//     </>
//   );
// }

// mt-8 grid grid-cols-2 gap-2  md:grid-cols-5


export default function FeatureCard() {
  const [active, setActive] = useState(0);
  const feature = features[active];

  return (
    <div className="lg:w-[80%] xl:w-[61%] lg:mx-auto">
      {/* Video */}
      <div className="relative aspect-[16/8] w-full overflow-hidden rounded-[24px] lg:aspect-[16/9] lg:rounded-[12px]">
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

      {/* Title + description + tabs, aligned to the video edges */}
      <div className="mt-[28px] grid w-full grid-cols-1 gap-y-[20px] md:grid-cols-[1fr_1fr] md:gap-x-[24px] lg:mt-[32px] lg:grid-cols-[minmax(0,69.5fr)_minmax(0,30.5fr)] lg:gap-x-0 lg:gap-y-[40px]">
        <h2 className="m-0 w-full max-w-[330px] text-[28px] leading-[1.15] tracking-[-0.03em] text-white lg:max-w-[11em] lg:text-[clamp(20px,1.4vw,32px)]">
          {feature.title}
        </h2>

        <p className="m-0 w-full max-w-[400px] text-[18px] leading-[1.2] text-white/85 md:ml-auto lg:ml-0 lg:max-w-none lg:text-[clamp(13px,0.9vw,18px)]">
          {feature.description}
        </p>

        <div className="col-span-1 flex w-full flex-wrap items-center justify-start gap-[8px] md:col-span-2 lg:gap-[6px]">
          {features.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setActive(index)}
              className={`flex w-fit shrink-0 items-center gap-[8px] rounded-full border px-[16px] py-[12px] text-[12px] font-semibold ${
                active === index
                  ? "border-white bg-white text-[#00122e]"
                  : "border-white/40 bg-white/10 text-white"
              }`}
            >
              {active === index && (
                <span className="h-[14px] w-[14px] rounded-full border-2 border-[#b24bf3]" />
              )}
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}