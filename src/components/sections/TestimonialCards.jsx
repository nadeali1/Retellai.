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
    name: "Mike Tadlock",
    role: "COO",
    company: "MDS",
    sticky: "lg:top-[140px] z-30",
  },
];

export default function TestimonialCards() {
  return (
    <div className="relative mb-[40px]">
      <div className="pb-[12px] overflow-x-auto lg:overflow-visible">
        <div className="flex gap-[8px] max-w-none lg:flex-col lg:gap-[24px]">
          {testimonials.map((t) => (
            <article
              key={t.name + t.company}
              className={` ${t.bg} ${t.sticky} w-[85vw] shrink-0 rounded-[24px] p-[24px] grid grid-cols-1 gap-[8px] md:grid-cols-2 lg:sticky lg:w-full lg:max-w-[1546.66px] lg:mx-auto lg:aspect-[1546.66/649.33] lg:grid-rows-[1fr_auto] lg:gap-x-[24px] `}
            >
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
                <blockquote className="text-[32px] tracking-[-0.01em] leading-[100%] lg:max-w-[560px] lg:text-[clamp(22px,2.5vw,40px)]">
                  {t.quote}
                </blockquote>
              </div>
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
