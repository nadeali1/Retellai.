import Button from "../ui/Button";
import TestimonialCards from "./TestimonialCards";

export default function Testimonial() {
  return (
    <>
      <section
        className="
          pt-[var(--testimonial-space-60)]
          px-[var(--compliance-space-8)]
          flex flex-col gap-[var(--testimonial-space-60)]

          xl:w-[calc(100%-var(--testimonial-space-200))]
          xl:max-w-[var(--testimonial-xl-max-width)]
          xl:mx-auto

          lg:w-[calc(100%-var(--testimonial-space-200))]
          lg:max-w-[var(--testimonial-lg-max-width)]
          lg:mx-auto
        "
      >
        <div className="flex flex-col gap-[var(--testimonial-space-40)] xl:ml-[var(--testimonial-space-100)]">
          <div>
  <label
    htmlFor=""
    className="!text-[var(--testimonial-blue)] text-[var(--testimonial-font-13)] mb-[var(--testimonial-space-5)] block"
  >
    Case Studies
  </label>
</div>

          <div className="grid grid-cols-1 gap-[var(--testimonial-space-40)] md:grid-cols-2 lg:grid-cols-[minmax(0,59fr)_minmax(0,41fr)] lg:gap-x-0">
            <h2 className="text-[length:var(--testimonial-font-32)] tracking-[-0.01em] leading-[100%] lg:text-[clamp(22px,2.5vw,40px)] xl:text-[clamp(22px,2.5vw,60px)]">
              Proven Impact, <br />
              Real Conversations
            </h2>

            <div className="flex flex-col gap-[var(--testimonial-space-16)]">
              <Button className="text-white bg-[var(--testimonial-dark)] w-[var(--testimonial-button-width)]">
                See All Case Studies
              </Button>

              <p className="text-[length:var(--testimonial-font-21)] leading-[90%] text-gray-700 tracking-[var(--testimonial-letter-spacing)] max-w-[var(--testimonial-max-width)]">
                Discover how businesses use Retell’s AI voice agents to
                streamline operations, enhance customer service, and scale
                effortlessly.
              </p>
            </div>
          </div>
        </div>

        <div>
          <TestimonialCards />
        </div>
      </section>
    </>
  );
}
