
import FeatureCard from "./FeatureCard";

export default function ProductDemo() {
  return (
    <>
      
      <section className="pt-[30px] px-[8px]">
        
        <div className="flex flex-col gap-[40px] min-w-[359px] lg:min-w-0 lg:w-[80%] xl:w-[61%] lg:mx-auto">
          <div className="text-[#3e6aef] text-[13px]">
            AI-powered no code studio
          </div>

          <div className="grid grid-cols-1 gap-[40px] md:grid-cols-2 lg:grid-cols-[minmax(0,59fr)_minmax(0,41fr)] lg:gap-x-0 lg:items-end">
            <h2 className="text-[32px] tracking-[-0.01em] leading-[100%] lg:max-w-[9em] lg:text-[clamp(22px,2.5vw,40px)] xl:text-[clamp(22px,2.7vw,60px)]">
              Production-Ready AI Agent Platform Your Team Can Operate
            </h2>

            <p className="text-[16px] leading-[1.15] max-w-[400px] lg:max-w-[23em] lg:text-[clamp(13px,0.85vw,16px)]">
              Build, update, test, and deploy AI voice agents without relying
              on Retell for every change. Your team stays in control as your
              operation evolves.
            </p>
          </div>
        </div>

        
        <div
          className="mt-[60px] mx-auto flex w-full max-w-none flex-col justify-center rounded-[clamp(16px,1.11111vw,17.7778px)] bg-[#00122e] bg-cover bg-[position:50%_100%] px-[clamp(16px,1.11111vw,17.7778px)] pt-[48px] pb-[32px] lg:px-0 lg:pt-[34px] lg:pb-[24px]"
          style={{ backgroundImage: "url('/images/Hero-bg.jpeg')" }}
        >
          <FeatureCard />
        </div>
      </section>
    </>
  );
}
