

const CARDS = [
  {
    title: "Always on the Best Models",
    text: "Retell continuously integrates leading AI models, so you stay at the cutting edge without rebuilding your stack.",
    image: "/images/devf1.png",
    alt: "Developer friendly 1",
  },
  {
    title: "Comprehensive APIs & SDKs",
    text: "Go beyond the dashboard with APIs and SDKs that give developers deep programmatic control across the platform.",
    image: "/images/devf2.png",
    alt: "Developer friendly 2",
  },
  {
    title: "Powerful Integrations, Out of the Box",
    text: "Connect Retell to your telephony, CCaaS, CRM, knowledge bases, calendars, and other business systems with ease.",
    image: "/images/devf3.png",
    alt: "Developer friendly 3",
  },
];

/* 2. SECTION */
export default function DeveloperFriendly() {
  return (
    <section className="w-full bg-white py-16 font-sans antialiased md:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
       
        <h2
          className="mx-auto max-w-[360px] text-balance text-center font-['Instrument_Serif',Georgia,serif]
            text-[60px] font-normal leading-[0.95] tracking-[-0.04em] text-[#2b2b2b]
            sm:max-w-none sm:text-[64px] lg:text-[72px]"
        >
          Developer friendly
        </h2>

       
        <div className="mt-14 grid grid-cols-1 gap-2 md:mt-20 md:grid-cols-3">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className="flex flex-col overflow-hidden rounded-[12px] border border-[#e7e9f0] bg-white"
            >

              <div className="h-[340px] w-full md:h-[380px] lg:h-[400px] xl:h-[330px]">
                <img
                  src={card.image}
                  alt={card.alt}
                  loading="lazy"
                  draggable="false"
                  className="h-full w-full select-none object-contain object-top"
                />
              </div>

             
              <div className="px-6 pb-8 pt-4 lg:px-8">
                <h3 className="text-[20px] font-normal leading-6 tracking-[-0.03em] text-[#0e1535] lg:text-[22px] lg:leading-[24px]">
                  {card.title}
                </h3>
                <p className="mt-3 text-[16px] leading-[26px] tracking-[-0.02em] text-[#6b7280] lg:text-[17px]">
                  {card.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
