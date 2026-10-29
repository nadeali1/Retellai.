// import Image from "next/image";
// import Button from "../ui/Button";

// export default function TestimonialCards() {
//   return (
//     <>
//       <div className="relative">
//         <div className="mb-[40px]">
//           <div className="pb-[12px] overflow-x-auto">
//             <div className="flex  gap-[8px] max-w-none lg:flex lg:flex-col">

//               <article className="grid w-[85vw] shrink-0 grid-cols-1 md:grid-cols-2 p-[24px] gap-[8px] bg-[#F5F5FA] rounded-[8px]">
//                 <div className="flex flex-col gap-[16px] mb-[40px]">
//                   <div className="max-w-[12px] max-h-[12px] ">
//                     <Image
//                       src="/images/quote.svg"
//                       alt="quote"
//                       width={11}
//                       height={8}
//                     //   className="brightness-0 invert"
//                     />
//                   </div>
//                   <blockquote className="text-[32px] tracking-[-0.01em] leading-[100%]">
//                     With Retell, we’ve increased scheduling NPS by 38%, and
//                     filled underutilized provider capacity, allowing our team to
//                     focus on meaningful patient care instead of phone tag.
//                   </blockquote>
//                 </div>
//                 <div className="relative w-full overflow-hidden rounded-[8px] flex justify-end">
//                   <Image
//                     src="/images/testi1.avif"
//                     alt="Testimonial 1"
//                     width={330}
//                     height={42}
//                     className="object-cover "
//                   ></Image>
//                   <a href="" className="absolute bottom-[8px] left-[8px] md:bottom-[10px] md:left-[20px] lg:bottom-[10px] lg:left-[90px] xl:bottom-[10px] xl:left-[270px]  z-10">
//                     <butto className="flex min-h-[64px] items-center rounded-[64px] bg-white/20 px-[40px] text-[#f5f5fa] backdrop-blur-[20px]">
//                       Play Video
//                     </butto>
//                   </a>
//                 </div>
//                 <div className="mt-[32px] xl:-mt-[32px]">
//                   <div className="flex">
//                     <Image
//                       src="/images/testi1sm.avif"
//                       alt="test small"
//                       width={64}
//                       height={64}
//                     ></Image>
//                     <Image
//                       src="/images/testi1lg.png"
//                       alt="test small"
//                       width={64}
//                       height={64}
//                     ></Image>
//                   </div>
//                   <div>
//                     <div>Mike Tadlock</div>
//                     <div>
//                       <span>COO</span> Pink Park Health
//                     </div>
//                   </div>
//                   <div>
//                     <Button className="text-white bg-[#00122E]">Read Study Case</Button>
//                   </div>
//                 </div>
//               </article>

//               <article className="grid w-[85vw] shrink-0 grid-cols-1 md:grid-cols-2 p-[24px] gap-[8px] bg-[#00122E] text-white rounded-[8px]">
//                 <div className="flex flex-col gap-[16px] mb-[40px]">
//                   <div className="max-w-[12px] max-h-[12px] ">
//                     <Image
//                       src="/images/quote.svg"
//                       alt="quote"
//                       width={11}
//                       height={8}
//                       className="brightness-0 invert"
//                     />
//                   </div>
//                   <blockquote className="text-[32px] tracking-[-0.01em] leading-[100%]">
//                     Lucas answers calls in seconds, handles urgent EV support at scale, cuts support costs by over 50%, and significantly improves our SaaS margins.
//                   </blockquote>
//                 </div>
//                 <div className="relative w-full overflow-hidden rounded-[8px] flex justify-end">
//                   <Image
//                     src="/images/testi2.avif"
//                     alt="Testimonial 1"
//                     width={330}
//                     height={42}
//                     className="object-cover "
//                   ></Image>
//                   <a href="" className="absolute bottom-[36px] left-[8px] md:bottom-[55px] z-10">
//                     <button className="flex min-h-[64px] items-center rounded-[64px] bg-white/20 px-[40px] text-[#f5f5fa] backdrop-blur-[20px]">
//                       Play Video
//                     </button>
//                   </a>
//                 </div>
//                 <div className="mt-[32px] xl:-mt-[32px]">
//                   <div className="flex">
//                     <Image
//                       src="/images/testi2sm.avif"
//                       alt="test small"
//                       width={64}
//                       height={64}
//                     ></Image>
//                     <Image
//                       src="/images/testi2lg.avif"
//                       alt="test small"
//                       width={64}
//                       height={64}
//                     ></Image>
//                   </div>
//                   <div>
//                     <div>Carter Li</div>
//                     <div>
//                       <span>CEO &</span>Founder SWITCH
//                     </div>
//                   </div>
//                   <div>
//                     <Button className="bg-white text-[#00122E]">Read Study Case</Button>
//                   </div>
//                 </div>
//               </article>

//               <article className="grid w-[85vw] shrink-0 grid-cols-1 md:grid-cols-2 p-[24px] gap-[8px] bg-[#3D6AEF] text-white rounded-[8px]">
//                 <div className="flex flex-col gap-[16px] mb-[40px]">
//                   <div className="max-w-[12px] max-h-[12px] ">
//                     <Image
//                       src="/images/quote.svg"
//                       alt="quote"
//                       width={11}
//                       height={8}
//                       className="brightness-0 invert"
//                     />
//                   </div>
//                   <blockquote className="text-[32px] tracking-[-0.01em] leading-[100%]">
//                     By deploying conversational AI, MDS now handles 100% of inbound calls with only a 30% transfer rate, scaling effortlessly, and collecting ~$280,000 per month without sacrificing patient trust.
//                   </blockquote>
//                 </div>
//                 <div className="relative w-full overflow-hidden rounded-[8px] lg:flex lg:justify-end">
//                   <Image
//                     src="/images/testi3.avif"
//                     alt="Testimonial 1"
//                     width={330}
//                     height={42}
//                     className="object-cover "
//                   ></Image>
//                   <a href="" className="absolute bottom-[3px] left-[8px] md:bottom-[105px] z-10">
//                     <butto className="flex min-h-[64px] items-center rounded-[64px] bg-white/20 px-[40px] text-[#f5f5fa] backdrop-blur-[20px]">
//                       Play Video
//                     </butto>
//                   </a>
//                 </div>
//                 <div className="mt-[32px] xl:-mt-[32px]">
//                   <div className="flex">
//                     <Image
//                       src="/images/test3sm.avif"
//                       alt="test small"
//                       width={64}
//                       height={64}
//                     ></Image>
//                     <Image
//                       src="/images/test3lg.avif"
//                       alt="test small"
//                       width={64}
//                       height={64}
//                     ></Image>
//                   </div>
//                   <div>
//                     <div>Mike Tadlock</div>
//                     <div>
//                       <span>COO</span> Pink Park Health
//                     </div>
//                   </div>
//                   <div>
//                     <Button className="bg-white text-[#00122E]">Read Study Case</Button>
//                   </div>
//                 </div>
//               </article>

//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// import Image from "next/image";
// import Button from "../ui/Button";// keep your own import path

// const testimonials = [
//   {
//     quote:
//       "With Retell, we’ve increased scheduling NPS by 38%, and filled underutilized provider capacity, allowing our team to focus on meaningful patient care instead of phone tag.",
//     bg: "bg-[#F5F5FA] text-[#00122E]",
//     dark: false,
//     img: "/images/testi1.avif",
//     logo: "/images/testi1sm.avif",
//     avatar: "/images/testi1lg.png",
//     name: "Mike Tadlock",
//     role: "COO",
//     company: "Pink Park Health",
//     sticky: "lg:top-[100px] z-10",
//   },
//   {
//     quote:
//       "Lucas answers calls in seconds, handles urgent EV support at scale, cuts support costs by over 50%, and significantly improves our SaaS margins.",
//     bg: "bg-[#00122E] text-white",
//     dark: true,
//     img: "/images/testi2.avif",
//     logo: "/images/testi2sm.avif",
//     avatar: "/images/testi2lg.avif",
//     name: "Carter Li",
//     role: "CEO & Founder",
//     company: "SWITCH",
//     sticky: "lg:top-[120px] z-20",
//   },
//   {
//     quote:
//       "By deploying conversational AI, MDS now handles 100% of inbound calls with only a 30% transfer rate, scaling effortlessly, and collecting ~$280,000 per month without sacrificing patient trust.",
//     bg: "bg-[#3D6AEF] text-white",
//     dark: true,
//     img: "/images/testi3.avif",
//     logo: "/images/test3sm.avif",
//     avatar: "/images/test3lg.avif",
//     name: "Mike Tadlock", // change to the real MDS person
//     role: "COO",
//     company: "MDS",
//     sticky: "lg:top-[140px] z-30",
//   },
// ];

// export default function TestimonialCards() {
//   return (
//     <div className="relative mb-[40px]">
//       {/* lg:overflow-visible is REQUIRED so position:sticky works */}
//       <div className="pb-[12px] overflow-x-auto lg:overflow-visible">
//         <div className="flex gap-[8px] max-w-none lg:flex-col lg:gap-[24px]">
//           {testimonials.map((t) => (
//             <article
//               key={t.name + t.company}
//               className={`
//                 ${t.bg} ${t.sticky}
//                 w-[85vw] shrink-0 rounded-[8px] p-[24px]
//                 grid grid-cols-1 gap-[8px]
//                 md:grid-cols-2
//                 lg:w-full lg:sticky lg:min-h-[490px]
//                 lg:grid-rows-[1fr_auto] lg:gap-x-[24px]
//               `}
//             >
//               {/* Quote */}
//               <div className="flex flex-col gap-[16px] mb-[40px] lg:mb-0 lg:col-start-1 lg:row-start-1">
//                 <div className="max-w-[12px] max-h-[12px]">
//                   <Image
//                     src="/images/quote.svg"
//                     alt="quote"
//                     width={11}
//                     height={8}
//                     className={t.dark ? "brightness-0 invert" : ""}
//                   />
//                 </div>
//                 <blockquote className="text-[32px] tracking-[-0.01em] leading-[100%] lg:max-w-[560px] lg:text-[36px]">
//                   {t.quote}
//                 </blockquote>
//               </div>

//               {/* Image + Play button (spans both rows on desktop) */}
//               <div className="relative w-full overflow-hidden rounded-[8px] flex justify-end lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:h-full">
//                 <Image
//                   src={t.img}
//                   alt={`${t.name} testimonial`}
//                   width={330}
//                   height={420}
//                   className="object-cover md:w-full lg:w-full lg:h-full"
//                 />
//                 <a
//                   href="#"
//                   className="absolute bottom-[8px] left-[8px] md:bottom-[16px] md:left-[16px] lg:bottom-[24px] lg:left-[24px] z-10"
//                 >
//                   <span className="flex min-h-[64px] items-center rounded-[64px] bg-white/20 px-[40px] text-[#f5f5fa] backdrop-blur-[20px]">
//                     Play Video
//                   </span>
//                 </a>
//               </div>

//               {/* Author + CTA */}
//               <div className="mt-[32px] lg:mt-0 lg:col-start-1 lg:row-start-2 lg:flex lg:items-end lg:justify-between">
//                 <div className="flex items-end gap-[16px]">
//                   <div className="flex">
//                     <Image src={t.avatar} alt={t.name} width={64} height={64} />
//                     <Image src={t.logo} alt={t.company} width={64} height={64} />
//                   </div>
//                   <div className="text-[14px]">
//                     <div>{t.name}</div>
//                     <div className="font-medium">
//                       <span>{t.role}</span> {t.company}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-[16px] lg:mt-0">
//                   <Button
//                     className={
//                       t.dark ? "bg-white text-[#00122E]" : "bg-[#00122E] text-white"
//                     }
//                   >
//                     Read Case Study
//                   </Button>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import Button from "../ui/Button";

const testimonials = [
  {
    quote:
      "With Retell, we’ve increased scheduling NPS by 38%, and filled underutilized provider capacity, allowing our team to focus on meaningful patient care instead of phone tag.",
    bg: "bg-[#F5F5FA] text-[#00122E]",
    dark: false,
    img: "/images/testi1.avif",
    logo: "/images/testi1sm.avif",
    avatar: "/images/testi1lg.png",
    name: "Mike Tadlock",
    role: "COO",
    company: "Pink Park Health",
    sticky: "lg:top-[100px] z-10",
  },
  {
    quote:
      "Lucas answers calls in seconds, handles urgent EV support at scale, cuts support costs by over 50%, and significantly improves our SaaS margins.",
    bg: "bg-[#00122E] text-white",
    dark: true,
    img: "/images/testi2.avif",
    logo: "/images/testi2sm.avif",
    avatar: "/images/testi2lg.avif",
    name: "Carter Li",
    role: "CEO & Founder",
    company: "SWITCH",
    sticky: "lg:top-[120px] z-20",
  },
  {
    quote:
      "By deploying conversational AI, MDS now handles 100% of inbound calls with only a 30% transfer rate, scaling effortlessly, and collecting ~$280,000 per month without sacrificing patient trust.",
    bg: "bg-[#3D6AEF] text-white",
    dark: true,
    img: "/images/testi3.avif",
    logo: "/images/test3sm.avif",
    avatar: "/images/test3lg.avif",
    name: "Mike Tadlock", // change to the real MDS person
    role: "COO",
    company: "MDS",
    sticky: "lg:top-[140px] z-30",
  },
];

export default function TestimonialCards() {
  return (
    <div className="relative mb-[40px]">
      {/* lg:overflow-visible is REQUIRED so position:sticky works */}
      <div className="pb-[12px] overflow-x-auto lg:overflow-visible">
        <div className="flex gap-[8px] max-w-none lg:flex-col lg:gap-[24px]">
          {testimonials.map((t) => (
            <article
              key={t.name + t.company}
              className={` ${t.bg} ${t.sticky} w-[85vw] shrink-0 rounded-[24px] p-[24px] grid grid-cols-1 gap-[8px] md:grid-cols-2 lg:sticky lg:w-full lg:max-w-[1546.66px] lg:mx-auto lg:aspect-[1546.66/649.33] lg:grid-rows-[1fr_auto] lg:gap-x-[24px] `}
            >
              {/* Quote */}
              <div className="flex flex-col gap-[16px] mb-[40px] lg:mb-0 lg:col-start-1 lg:row-start-1">
                <div className="max-w-[12px] max-h-[12px]">
                  <Image
                    src="/images/quote.svg"
                    alt="quote"
                    width={11}
                    height={8}
                    className={t.dark ? "brightness-0 invert" : ""}
                  />
                </div>
                {/* <blockquote className="text-[32px] tracking-[-0.01em] leading-[100%] lg:max-w-[560px] lg:text-[36px]"> */}
                <blockquote className="text-[32px] tracking-[-0.01em] leading-[100%] lg:max-w-[560px] lg:text-[clamp(22px,2.5vw,40px)]">
                  {t.quote}
                </blockquote>
              </div>

              {/* Image + Play button (spans both rows on desktop) */}
              <div className="relative w-full overflow-hidden rounded-[8px] flex justify-end lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:h-full lg:min-h-0">
                <Image
                  src={t.img}
                  alt={`${t.name} testimonial`}
                  width={330}
                  height={420}
                  className="object-cover md:w-full lg:w-1/2 lg:h-full"
                />
                <a
                  href="#"
                  className="absolute bottom-[8px] left-[8px] md:bottom-[16px] md:left-[16px] lg:bottom-[8px] lg:left-[calc(50%+8px)] z-10"
                >
                  <span className="flex min-h-[64px] items-center rounded-[64px] bg-white/20 px-[40px] text-[#f5f5fa] backdrop-blur-[20px]">
                    Play Video
                  </span>
                </a>
              </div>

              {/* Author + CTA */}
              <div className="mt-[32px] lg:mt-0 lg:col-start-1 lg:row-start-2 lg:flex lg:items-end lg:justify-between">
                <div className="flex items-end gap-[16px]">
                  <div className="flex">
                    <Image src={t.avatar} alt={t.name} width={64} height={64} />
                    <Image
                      src={t.logo}
                      alt={t.company}
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className="text-[14px]">
                    <div>{t.name}</div>
                    <div className="font-medium">
                      <span>{t.role}</span> {t.company}
                    </div>
                  </div>
                </div>
                <div className="mt-[16px] lg:mt-0">
                  <Button
                    className={
                      t.dark
                        ? "bg-white text-[#00122E]"
                        : "bg-[#00122E] text-white"
                    }
                  >
                    Read Case Study
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
