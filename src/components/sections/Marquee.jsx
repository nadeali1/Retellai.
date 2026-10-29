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
    <div className="flex w-full flex-col gap-[52px] overflow-hidden pt-[30px] pb-[12px]">
      {/* First row */}
      <Marquee pauseOnHover className="[--duration:25s]">
        {logos.map((logo, index) => (
          <div
            key={`first-${index}`}
            className="mx-8 flex h-[30px] w-[136px] shrink-0 items-center justify-center"
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

      {/* Second row - reverse direction */}
      <Marquee reverse pauseOnHover className="[--duration:25s]">
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