// import Image from "next/image";

// export default function Hero() {
//   return (
//     // <section className="relative mx-auto mt-[74px] min-h-[752px] w-full max-w-[359px] overflow-hidden rounded-[20px] lg:max-w-[1100px] xl:max-w-[1280px]">
//     <section className="relative mx-[10px] mt-[74px] max-h-[752px] w-auto max-w-none overflow-hidden rounded-[20px] lg:mx-[10px] lg:w-[1004px] lg:h-auto xl:max-w-[1420px] xl:mx-[10px] xl:w-full xl:h-auto ">
//     {/* // <section className="relative mx-[10px] mt-[74px] max-h-[752px] w-auto max-w-none overflow-hidden rounded-[20px] lg:mx-[10px] lg:w-[1004px] lg:h-auto xl:max-w-[1440px] xl:mx-[10px] xl:w-full xl:h-auto "> */}
//     {/* // <section className="relative mx-[10px] mt-[74px] max-h-[752px] w-auto max-w-none overflow-hidden rounded-[20px] lg:w-[1004px] lg:h-auto xl:max-w-[1440px] xl:w-full xl:h-auto"> */}

//       {/* Hero Background */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat "
//         style={{
//           backgroundImage: "url('/images/Hero-bg.jpeg')",
//         }}
//       ></div>

//       {/* Background Overlay */}
//       <div className="absolute inset-0 bg-black/10" />

//       {/* Hero Content */}
//       <div className="relative z-10 flex h-[752px] flex-col items-center text-center text-white mx-[10px] gap-y-3 pb-[40px] md:max-h-[752px]">
//         <div className="flex flex-col justify-center items-center w-[100%] mx-[2px] py-[60px] h-[381px]">
//           <h1 className="font-denton mb-[60px] text-[16px] font-[400] uppercase leading-[24px] tracking-[-0.01rem] text-white w-[335px]">
//             #1 AI VOICE AGENT PLATFORM FOR AUTOMATING PHONE CALLS
//           </h1>

//           <h2
//             className=" w-[335px] max-w-full font-extralight text-[max(45px,6.25vw)] leading-[51.3px] tracking-[-1.08px] text-white md:w-[768px] md:text-[64px]
//     lg:w-[800px] lg:text-[80px]"
//           >
//             Meet your AI call center from the future.
//           </h2>
//         </div>
//         <div className="mt-[75.2344px] gap-[40px] flex flex-col justify-self-end items-end md:flex md:flex-row md:mt-[100px] ">
//           <div className="flex flex-col gap-[12px]">
//             <a
//               href=""
//               className="flex h-[22.88px] w-[120px] items-center justify-center bg-white/20 p-[3px] backdrop-blur-[30px]"
//             >
//               <Image
//                 src="/images/Google-rating.svg"
//                 alt="Hero span"
//                 width={120}
//                 height={16.88}
//                 className="h-full w-full flex justify-center items-center object-cover object-center brightness-0 invert"
//               />
//             </a>

//             <div className="">
//               <p className="font-denton text-[14px] text-justify font-normal md:max-w-[50%]">
//                 Build, deploy, and manage next-generation AI voice agents that
//                 sound human, execute tasks, and scale effortlessly.
//               </p>
//             </div>
//           </div>

//           <a
//             href=""
//             className="flex bg-white/30 w-[246px] h-[80] rounded-xl p-[4px] justify-end-safe "
//           >
//             <span className="w-[164.13px] h-[72] flex justify-start items-center px-[8px]">
//               <span className="text-[18px] text-left">Try Our Live Demo</span>
//             </span>
//             <span className="inline-block h-[72px] w-[65.88px] overflow-hidden rounded-[10px] p-[4px]">
//               <Image
//                 src="/images/hero-span.jpeg"
//                 alt="Hero span"
//                 width={65.88}
//                 height={72}
//                 className="h-full w-full rounded-[10px] object-cover object-center"
//               />
//             </span>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative mx-[10px] mt-[74px] max-h-[780px] w-auto max-w-none overflow-hidden rounded-[20px] lg:max-h-none lg:mx-auto lg:h-[clamp(750px,37vw,950px)]">
      {/* Hero Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/Hero-bg.jpeg')" }}
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-[752px] flex-col items-center text-center text-white mx-[10px] gap-y-3 pb-[40px] md:max-h-[752px] lg:mx-0 lg:h-full lg:max-h-none lg:gap-y-0 lg:px-[24px] lg:pb-[50px]">
        {/* Label + heading */}
        <div className="flex flex-col justify-center items-center w-full mx-[2px] py-[60px] h-[381px] lg:mx-0 lg:h-auto lg:justify-start lg:gap-[20px] lg:mb-[50px] lg:pt-[85px] lg:pb-0">
          <h1 className="font-denton mb-[60px] w-[335px] text-[16px] font-[400] uppercase leading-[24px] tracking-[-0.01rem] text-white lg:mt-10 lg:mb-10 lg:w-auto lg:text-[14px] lg:leading-[1.2]">
            #1 AI VOICE AGENT PLATFORM FOR AUTOMATING PHONE CALLS
          </h1>

          <h2 className="w-[335px] max-w-full font-extralight text-[max(45px,6.25vw)] leading-[51.3px] tracking-[-1.08px] text-white md:w-[768px] md:text-[64px] lg:w-[8.2em] lg:text-[clamp(64px,6.1vw,120px)] lg:leading-[0.95] lg:tracking-[-0.02em]">
            Meet your AI call center from the future.
          </h2>
        </div>

        {/* Bottom row: aligned to the same 1082px container as the navbar */}
        <div className="mt-[75.2344px] flex flex-col items-end gap-[40px] md:mt-[100px] md:flex-row lg:mt-[10px] lg:w-full lg:max-w-[1200px] xl:max-w-[1300px] lg:items-end lg:justify-between">
          <div className="flex flex-col gap-[12px] lg:items-start lg:text-left">
            <a
              href=""
              className="flex h-[22.88px] w-[152px] items-center justify-center bg-white/20 p-[3px] backdrop-blur-[30px]"
            >
              <Image
                src="/images/Google-rating.svg"
                alt="Google rating"
                width={120}
                height={16.88}
                className="h-full w-full object-cover object-center brightness-0 invert"
              />
            </a>

            <p className="font-denton text-[14px] text-justify font-normal md:max-w-[50%] lg:max-w-[340px] lg:text-left">
              Build, deploy, and manage next-generation AI voice agents that
              sound human, execute tasks, and scale effortlessly.
            </p>
          </div>

          <a
            href=""
            className="flex h-[80px] w-[246 qpx] rounded-xl bg-white/30 p-[4px] backdrop-blur-[20px]"
          >
            <span className="flex h-[72px] w-[164.13px] items-center justify-start px-[8px]">
              <span className="text-left text-[18px]">Try Our Live Demo</span>
            </span>
            <span className="inline-block h-[72px] w-[65.88px] overflow-hidden rounded-[10px] p-[4px]">
              <Image
                src="/images/hero-span.jpeg"
                alt="Hero span"
                width={65.88}
                height={72}
                className="h-full w-full rounded-[10px] object-cover object-center"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
