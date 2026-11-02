import Image from "next/image";
import Button from "../ui/Button";

const testimonials = [
  {
    quote:
      "With Retell, we’ve increased scheduling NPS by 38%, and filled underutilized provider capacity, allowing our team to focus on meaningful patient care instead of phone tag.",
    bg: "bg-[var(--testimonial-card-light)] text-[var(--testimonial-card-dark)]",
    dark: false,
    img: "/images/testi1.avif",
    logo: "/images/testi1sm.avif",
    avatar: "/images/testi1lg.png",
    name: "Mike Tadlock",
    role: "COO",
    company: "Pink Park Health",
    sticky: "lg:top-[var(--testimonial-sticky-100)] z-10",
  },
  {
    quote:
      "Lucas answers calls in seconds, handles urgent EV support at scale, cuts support costs by over 50%, and significantly improves our SaaS margins.",
    bg: "bg-[var(--testimonial-card-dark)] text-white",
    dark: true,
    img: "/images/testi2.avif",
    logo: "/images/testi2sm.avif",
    avatar: "/images/testi2lg.avif",
    name: "Carter Li",
    role: "CEO & Founder",
    company: "SWITCH",
    sticky: "lg:top-[var(--testimonial-sticky-120)] z-20",
  },
  {
    quote:
      "By deploying conversational AI, MDS now handles 100% of inbound calls with only a 30% transfer rate, scaling effortlessly, and collecting ~$280,000 per month without sacrificing patient trust.",
    bg: "bg-[var(--testimonial-card-blue)] text-white",
    dark: true,
    img: "/images/testi3.avif",
    logo: "/images/test3sm.avif",
    avatar: "/images/test3lg.avif",
    name: "Mike Tadlock",
    role: "COO",
    company: "MDS",
    sticky: "lg:top-[var(--testimonial-sticky-140)] z-30",
  },
];

export default function TestimonialCards() {
  return (
    <div className="relative mb-[var(--testimonial-card-space-40)]">
      <div className="pb-[var(--testimonial-card-space-12)] overflow-x-auto lg:overflow-visible">
        <div className="flex gap-[var(--testimonial-card-space-8)] max-w-none lg:flex-col lg:gap-[var(--testimonial-card-space-24)]">
          {testimonials.map((t) => (
            <article
              key={t.name + t.company}
              className={`${t.bg} ${t.sticky} w-[var(--testimonial-card-mobile-width)] shrink-0 rounded-[var(--testimonial-card-radius)] p-[var(--testimonial-card-space-24)] grid grid-cols-1 gap-[var(--testimonial-card-space-8)] md:grid-cols-2 lg:sticky lg:w-full lg:max-w-[var(--testimonial-card-width)] lg:mx-auto lg:aspect-[1546.66/649.33] lg:grid-rows-[1fr_auto] lg:gap-x-[var(--testimonial-card-space-24)]`}
            >
              <div className="flex flex-col gap-[var(--testimonial-card-space-16)] mb-[var(--testimonial-card-space-40)] lg:mb-0 lg:col-start-1 lg:row-start-1">
                <div className="max-w-[var(--testimonial-card-space-12)] max-h-[var(--testimonial-card-space-12)]">
                  <Image
                    src="/images/quote.svg"
                    alt="quote"
                    width={11}
                    height={8}
                    className={t.dark ? "brightness-0 invert" : ""}
                  />
                </div>

                <blockquote className="text-[length:var(--testimonial-card-font-32)] tracking-[-0.01em] leading-[100%] lg:max-w-[var(--testimonial-card-content-width)] lg:text-[clamp(22px,2.5vw,40px)]">
                  {t.quote}
                </blockquote>
              </div>

              <div className="relative w-full overflow-hidden rounded-[var(--testimonial-card-image-radius)] flex justify-end lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:h-full lg:min-h-0">
                <Image
                  src={t.img}
                  alt={`${t.name} testimonial`}
                  width={330}
                  height={420}
                  className="object-cover md:w-full lg:w-1/2 lg:h-full"
                />

                <a
                  href="#"
                  className="absolute bottom-[var(--testimonial-card-space-8)] left-[var(--testimonial-card-space-8)] md:bottom-[var(--testimonial-card-space-16)] md:left-[var(--testimonial-card-space-16)] lg:bottom-[var(--testimonial-card-space-8)] lg:left-[calc(50%+var(--testimonial-card-space-8))] z-10"
                >
                  <span className="flex min-h-[64px] items-center rounded-[var(--testimonial-card-video-radius)] bg-white/20 px-[var(--testimonial-card-space-40)] text-[var(--testimonial-text-light)] backdrop-blur-[var(--testimonial-card-blur)]">
                    Play Video
                  </span>
                </a>
              </div>

              <div className="mt-[var(--testimonial-card-space-32)] lg:mt-0 lg:col-start-1 lg:row-start-2 lg:flex lg:items-end lg:justify-between">
                <div className="flex items-end gap-[var(--testimonial-card-space-16)]">
                  <div className="flex">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={64}
                      height={64}
                    />
                    <Image
                      src={t.logo}
                      alt={t.company}
                      width={64}
                      height={64}
                    />
                  </div>

                  <div className="text-[length:var(--testimonial-card-font-14)]">
                    <div>{t.name}</div>
                    <div className="font-medium">
                      <span>{t.role}</span> {t.company}
                    </div>
                  </div>
                </div>

                <div className="mt-[var(--testimonial-card-space-16)] lg:mt-0">
                  <Button
                    className={
                      t.dark
                        ? "bg-white text-[var(--testimonial-card-dark)]"
                        : "bg-[var(--testimonial-card-dark)] text-white"
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