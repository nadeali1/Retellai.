import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

const logos = [
  "/images/anker.svg",
  "/images/bill.svg",
  "/images/cap.svg",
  "/images/eufy.svg",
  "/images/grab.svg",
];

export default function MarqueeSection() {
  return (
    <div className="flex w-full flex-col gap-[var(--marquee-section-gap)] overflow-hidden pt-[var(--marquee-section-pt)] pb-[var(--marquee-section-pb)]">
      {/* First row */}
      <Marquee  className="[--duration:var(--marquee-duration)]">
        {logos.map((logo, index) => (
          <div
            key={`first-${index}`}
            className="mx-8 flex h-[var(--marquee-logo-height)] w-[var(--marquee-logo-width)] shrink-0 items-center justify-center"
          >
            <Image
              src={logo}
              alt={`Brand logo ${index + 1}`}
              width={128}
              height={48}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </Marquee>


      <Marquee reverse  className="[--duration:var(--marquee-duration)]">
        {logos.map((logo, index) => (
          <div
            key={`second-${index}`}
            className="mx-8 flex h-12 w-32 shrink-0 items-center justify-center"
          >
            <Image
              src={logo}
              alt={`Brand logo ${index + 1}`}
              width={128}
              height={48}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}