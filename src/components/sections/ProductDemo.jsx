import FeatureCard from "./FeatureCard";

export default function ProductDemo() {
  return (
    <>

      <section className="product-demo">

        <div className="product-demo__content">
          <div className="product-demo__eyebrow">
            AI-powered no code studio
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[minmax(0,59fr)_minmax(0,41fr)] lg:gap-x-0 lg:items-end">
            <h2 className="product-demo__heading">
              Production-Ready AI Agent Platform Your Team Can Operate
            </h2>

            <p className="product-demo__description">
              Build, update, test, and deploy AI voice agents without relying
              on Retell for every change. Your team stays in control as your
              operation evolves.
            </p>
          </div>
        </div>


        <div
          className="product-demo__banner"
          style={{ backgroundImage: "url('/images/Hero-bg.jpeg')" }}
        >
          <FeatureCard />
        </div>
      </section>
    </>
  );
}