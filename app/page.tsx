import HomeBlogs from "@/components/home/blog/HomeBlogs";
import Faqs from "@/components/home/faqs/Faqs";
import Hero from "@/components/home/hero/Hero";
import HeroUp from "@/components/home/hero/HeroUp";
import HowItWorks from "@/components/home/howWorks/HowItWorks";
import OurAdvantageStack from "@/components/home/stackingCards/OurAdvantageStack";
import OurProcessTimeline from "@/components/home/process/OurProcessTimeline";
import OurServices from "@/components/home/ourServices/OurServices";
import QuickTools from "@/components/home/quickTools/QuickTools";
import WhoWeAre from "@/components/home/whoWeAre/WhoWeAre";
import WhyFilerNow from "@/components/home/whyFilernow/WhyFilernow";
import WhyFilerNowSteps from "@/components/home/whyFilernow/WhyFilernowSteps";
import HomeTestimonials from "@/components/home/testimonials/HomeTestimonials";

export default function Home() {
  return (
    <main className="min-h-[40vh]">
      {/* <Hero /> */}
      <HeroUp />

      <QuickTools />

      <OurServices />

      <WhyFilerNow />

      {/* <WhyFilerNowSteps /> */}

      <HowItWorks />

      {/* <OurProcessTimeline /> */}

      <WhoWeAre />

      {/* <OurAdvantageStack /> */}

      <Faqs />

      <HomeTestimonials />

      <HomeBlogs />
    </main>
  );
}
