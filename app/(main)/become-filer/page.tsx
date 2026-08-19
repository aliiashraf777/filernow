// app/(main)/become-filer/page.tsx
import Image from "next/image";
import { BecomeFilerForm } from "@/components/common/form/BecomeFilerForm";
import RevealOnScroll from "@/components/ui-custom/RevealOnScroll";
import { becomeFilerFaqData } from "@/data/becomeFilerFaqData";
import Faqs from "@/components/home/faqs/Faqs";
import SectionContainer from "@/components/common/section/SectionContainer";

export default function BecomeAFilerPage() {
  return (
    <main>
      <SectionContainer
        paddingClass="container-y-paddingx"
        backgroundGradient="linear-gradient(90deg, #FFE1E6 0%, rgba(148, 148, 148, 0) 100%)"
        sectionClass="overflow-hidden"
      >
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <RevealOnScroll className="hidden md:block -my-[80px]x -mb-[5%] xl:-mb-[12%]">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/assets/becomeFiler/becomeFilerHeroBg.png"
                alt="FilerNow representative ready to guide you through registration"
                width={375}
                height={375}
                className="absolute top-14 right-10"
                priority
              />
              <Image
                src="/assets/becomeFiler/becomeFilerHeroUp.png"
                alt="FilerNow representative ready to guide you through registration"
                fill
                // width={1330}
                // height={1385}
                className="object-contain object-bottom-left -mb-[40px]z"
                priority
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1} className="">
            <div>
              <div className="w-full h-[20px]" />
              <div className="rounded-2xl border border-border-clr bg-background p-8 my-[40px]x shadow-sm">
                <h1 className="text-2xl font-bold text-primary md:text-3xl">
                  Be Connected And Be Updated
                </h1>
                <p className="mt-2 para-small text-gray-500">
                  It's essential that we use your authentic information for FBR filing and
                  keep you informed at every step.
                </p>
                <div className="mt-6">
                  <BecomeFilerForm />
                </div>
              </div>
              <div className="w-full h-[20px]" />
            </div>
          </RevealOnScroll>
        </div>
      </SectionContainer>

      {/* FAQ */}
      <Faqs
        faqData={becomeFilerFaqData}
      />
    </main>
  );
}
