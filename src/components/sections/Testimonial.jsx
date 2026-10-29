import Button from "../ui/Button";
import TestimonialCards from "./TestimonialCards";

export default function Testimonial() {
  return (
    <>
      <section
        className="
          pt-[60px] px-[8px] flex flex-col gap-[60px] 
          xl:w-[calc(100%-200px)] xl:max-w-[1562.66px] xl:mx-auto

          lg:w-[calc(100%-200px)] lg:max-w-[1200.66px] lg   :mx-auto
        "
      >
        <div className="flex flex-col gap-[40px] xl:ml-[100px]">
          <div>
            <label htmlFor="" className="text-[#3e6aef] text-[13px] mb-[5px]">
              Case Studies
            </label>
          </div>

          <div className="grid grid-cols-1 gap-[40px] md:grid-cols-2 lg:grid-cols-[minmax(0,59fr)_minmax(0,41fr)] lg:gap-x-0">
            <h2 className="text-[32px] tracking-[-0.01em] leading-[100%] lg:text-[clamp(22px,2.5vw,40px)] xl:text-[clamp(22px,2.5vw,60px)]">
              Proven Impact, <br />
              Real Conversations
            </h2>

            <div className="flex flex-col gap-[16px]">
              <Button className="text-white bg-[#00122E] w-[200px]">
                See All Case Studies
              </Button>
              <p className="text-[21px] leading-[90%] text-gray-700 tracking-[-0.05px] max-w-[350px]">
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