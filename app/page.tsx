import Faqs from "@/components/home/Faqs";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import OurAdvantageStack from "@/components/home/OurAdvantageStack";
import OurServices from "@/components/home/OurServices";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import QuickTools from "@/components/home/QuickTools";
import WhoWeAre from "@/components/home/WhoWeAre";
import WhyFilerNow from "@/components/home/WhyFilernow";

export default function Home() {
  return (
    <main className="min-h-[40vh]">
      {/* <Hero /> */}

      {/* <QuickTools /> */}

      {/* <OurServices /> */}

      <WhyFilerNow />

      <ProcessTimeline />

      <HowItWorks />

      {/* <WhoWeAre /> */}

      {/* <OurAdvantageStack /> */}

      {/* <Faqs /> */}
    </main>
  );
}
