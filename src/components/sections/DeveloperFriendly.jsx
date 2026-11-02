

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

export default function DeveloperFriendly() {
  return (
    <section className="w-full bg-[var(--dev-section-bg)] py-16 font-sans antialiased md:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[var(--dev-container-width)] px-4 sm:px-6 lg:px-8">
       
       <h2
  className="mx-auto max-w-[var(--dev-heading-max-width)] text-balance text-center font-[var(--dev-heading-font)]
    text-[length:var(--dev-heading-font-size)] font-normal leading-[var(--dev-main-heading-line)] tracking-[var(--dev-heading-tracking)] text-[var(--dev-heading-color)]
    sm:max-w-none sm:text-[length:var(--dev-heading-font-size-sm)] lg:text-[length:var(--dev-heading-font-size-lg)]"
>
  Developer friendly
</h2>

       
        <div className="mt-14 grid grid-cols-1 gap-2 md:mt-20 md:grid-cols-3">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className="flex flex-col overflow-hidden rounded-[var(--dev-card-radius)] border border-[var(--dev-border-color)] bg-[var(--dev-card-bg)]"
            >

              <div className="h-[var(--dev-image-height)] w-full md:h-[var(--dev-image-height-md)] lg:h-[var(--dev-image-height-lg)] xl:h-[var(--dev-image-height-xl)]">
                <img
                  src={card.image}
                  alt={card.alt}
                  loading="lazy"
                  draggable="false"
                  className="h-full w-full select-none object-contain object-top"
                />
              </div>

             
              <div className="px-6 pb-8 pt-4 lg:px-8">
                <h3 className="text-[length:var(--dev-card-heading-size)] font-normal leading-6 tracking-[var(--dev-card-heading-tracking)] text-[var(--dev-card-heading-color)] lg:text-[length:var(--dev-card-heading-size-lg)] lg:leading-[var(--dev-card-heading-line)]">
                  {card.title}
                </h3>
                <p className="mt-3 text-[length:var(--dev-description-size)] leading-[var(--dev-description-line)] tracking-[var(--dev-description-tracking)] text-[var(--dev-description-color)] lg:text-[length:var(--dev-description-size-lg)]">
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
