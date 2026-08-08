import SectionContainer from "@/components/common/section/SectionContainer"
// import SectionTitle from "@/components/ui/SectionTitle"
import { advantageStackData } from "@/data/appData"
import SectionTitle from "../../ui-custom/SectionTitle"
import { AdvantageCard } from "./AdvantageCard"
import RevealOnScroll from "../../ui-custom/RevealOnScroll"


const OurAdvantageStack = () => {
    return (
        <SectionContainer
            sectionClass="bg-dark-surface-bgx bg-background" containerClass="container-y-padding max-w-[900px]"
        >
            <RevealOnScroll delay={100}>
                <SectionTitle
                    infoLabel="Who we are"
                    heading={<>Why Thousands Choose <span className="text-primary">FilerNow</span> for Compliance</>}
                    para="FilerNow is a Tax & Business Compliance company in Pakistan. We make tax filing and business setup simple, fast and reliable for individuals, freelancers, startups, SMEs and companies — handling everything from NTN registration to SECP incorporation."
                // sectionClass="[&_p]:text-white/50 [&_h2]:text-white [&_span:first-child]:bg-white/10 [&_span:first-child]:text-white/70 [&_span:first-child]:border-white/10"
                />
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
                <div className="flex flex-col gap-6">
                    {advantageStackData.map((card, index) => (
                        <AdvantageCard
                            key={card.id}
                            card={card}
                            index={index}
                        />
                    ))}
                </div>
            </RevealOnScroll>
        </SectionContainer>
    )
}

export default OurAdvantageStack