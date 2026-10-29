import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import './globals.css'
import MarqueeSection from '@/components/sections/Marquee';
import HomeVid from '@/components/sections/HomeVid';
import Testimonial from "@/components/sections/Testimonial";
import ProductDemo from "@/components/sections/ProductDemo";
import Highlight from "@/components/sections/Highlight";
import SlideCards from '@/components/sections/SliderCards';
import OmniChannelCards from "@/components/sections/OmniChannelCards";
import BuiltToScale from "@/components/sections/BuiltToScale";
import FaqAccordion from "@/components/sections/FaqAccordion";
import CtaBanner from "@/components/sections/CtaBanner";
import TalksLikePeopleScroll from "@/components/sections/TalksLikePeopleScroll";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* <Navbar /> */}
      <Hero />
      <MarqueeSection />
      <BuiltToScale />
      <HomeVid />
      <Testimonial />
      <ProductDemo />
      <TalksLikePeopleScroll />
      <Highlight />
      <OmniChannelCards />
      <SlideCards />
      <FaqAccordion />
      <CtaBanner />

    </main>
  );
}
