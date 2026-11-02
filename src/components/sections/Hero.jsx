import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative mx-[var(--hero-side-margin)] mt-[var(--hero-top-margin)] max-h-[var(--hero-max-height)] w-auto max-w-none overflow-hidden rounded-[var(--hero-radius)] lg:max-h-none lg:mx-auto lg:h-[var(--hero-height-lg)]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/Hero-bg.jpeg')" }}
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[var(--hero-overlay)]" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-[var(--hero-height)] flex-col items-center text-center text-[var(--hero-text-color)] mx-[var(--hero-side-margin)] gap-y-[var(--hero-content-gap)] pb-[var(--hero-content-padding-bottom)] md:max-h-[var(--hero-max-height-md)] lg:mx-0 lg:h-full lg:max-h-none lg:gap-y-0 lg:px-[var(--hero-content-padding-x-lg)] lg:pb-[var(--hero-content-padding-bottom-lg)]">
        <div className="flex flex-col justify-center items-center w-full mx-[var(--hero-heading-margin-x)] py-[var(--hero-heading-padding-y)] h-[var(--hero-heading-height)] lg:mx-0 lg:h-auto lg:justify-start lg:gap-[var(--hero-heading-gap-lg)] lg:mb-[var(--hero-heading-margin-bottom-lg)] lg:pt-[var(--hero-heading-padding-top-lg)] lg:pb-0">
          <h1 className="font-denton mb-[var(--hero-heading-padding-y)] w-[var(--hero-label-width)] text-[length:var(--hero-label-font)] font-normal uppercase leading-[var(--hero-label-line-height)] tracking-[var(--hero-label-tracking)] text-[var(--hero-text-color)] lg:mt-10 lg:mb-10 lg:w-auto lg:text-[length:var(--hero-label-font-lg)] lg:leading-[1.2]">
            #1 AI VOICE AGENT PLATFORM FOR AUTOMATING PHONE CALLS
          </h1>

          <h2 className="w-[var(--hero-title-width)] max-w-full font-extralight text-[length:var(--hero-title-font)] leading-[var(--hero-title-line-height)] tracking-[var(--hero-title-tracking)] text-[var(--hero-text-color)] md:w-[var(--hero-title-width-md)] md:text-[length:var(--hero-title-font-md)] lg:w-[var(--hero-title-width-lg)] lg:text-[length:var(--hero-title-font-lg)] lg:leading-[var(--hero-title-line-height-lg)] lg:tracking-[var(--hero-title-tracking-lg)]">
            Meet your AI call center from the future.
          </h2>
        </div>

        {/* Bottom row: aligned to the same 1082px container as the navbar */}
        <div className="mt-[var(--hero-bottom-margin)] flex flex-col items-end gap-[var(--hero-bottom-gap)] md:mt-[var(--hero-bottom-margin-md)] md:flex-row lg:mt-[var(--hero-bottom-margin-lg)] lg:w-full lg:max-w-[var(--hero-bottom-max-width)] xl:max-w-[var(--hero-bottom-max-width-xl)] lg:items-end lg:justify-between">
          <div className="flex flex-col gap-[var(--hero-description-gap)] lg:items-start lg:text-left">
            <a
              href=""
              className="flex h-[var(--hero-rating-height)] w-[var(--hero-rating-width)] items-center justify-center bg-[var(--hero-rating-bg)] p-[var(--hero-rating-padding)] backdrop-blur-[var(--hero-rating-blur)]"
            >
              <Image
                src="/images/Google-rating.svg"
                alt="Google rating"
                width={120}
                height={16.88}
                className="h-full w-full object-cover object-center brightness-0 invert"
              />
            </a>

            <p className="font-denton text-[length:var(--hero-description-font)] text-justify font-normal md:max-w-[var(--hero-description-width-md)] lg:max-w-[var(--hero-description-width-lg)] lg:text-left">
              Build, deploy, and manage next-generation AI voice agents that
              sound human, execute tasks, and scale effortlessly.
            </p>
          </div>

          <a
            href=""
            className="flex h-[var(--hero-demo-height)] w-[var(--hero-demo-width)] rounded-[var(--hero-demo-radius)] bg-[var(--hero-demo-bg)] p-[var(--hero-demo-padding)] backdrop-blur-[var(--hero-demo-blur)]"
          >
            <span className="flex h-[var(--hero-demo-text-height)] w-[var(--hero-demo-text-width)] items-center justify-start px-[var(--hero-demo-text-padding)]">
              <span className="text-left text-[length:var(--hero-demo-text-font)]">
                Try Our Live Demo
              </span>
            </span>
            <span className="inline-block h-[var(--hero-demo-image-height)] w-[var(--hero-demo-image-width)] overflow-hidden rounded-[var(--hero-demo-image-radius)] p-[var(--hero-demo-padding)]">
              <Image
                src="/images/hero-span.jpeg"
                alt="Hero span"
                width={65.88}
                height={72}
                className="h-full w-full rounded-[var(--hero-demo-image-radius)] object-cover object-center"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
