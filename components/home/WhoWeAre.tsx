import { Eye, Target } from "lucide-react"
import SectionContainer from "@/components/common/section/SectionContainer"
import SectionTitle from "@/components/ui-custom/SectionTitle"
import { whoWeAreTrustPoints } from "@/data/appData"
import WhoWeAreVisual from "./WhoWeAreVisual"
import BentoStatCard from "./BentoStatCard"
import IconTextBlock from "@/components/ui-custom/IconTextBlock"
import WhyTrustCard from "./WhyTrustCard"
import RevealOnScroll from "@/components/ui-custom/RevealOnScroll"

type Props = {}

const WhoWeAre = (props: Props) => {
    return (
        <SectionContainer
            paddingClass="container-y-padding"
        >
            <SectionTitle
                infoLabel="who we are"
                heading="Your trusted partner in tax & compliance"
                para="FilerNow is a Tax & Business Compliance company in Pakistan. We make tax filing and business setup simple, fast and reliable for individuals, freelancers, startups, SMEs and companies — handling everything from NTN registration to SECP incorporation."
            />

            <div className="grid grid-cols-1 lg:grid-cols-[315px_1fr_1fr_280px] gap-4">
                {/* col 1 — visual + mission, spans all 3 row-bands */}
                <RevealOnScroll delay={0} className="lg:col-start-1 lg:row-start-1 lg:row-span-3">
                    <WhoWeAreVisual
                        imageSrc="/assets/ourMission.png"
                        imageAlt="Precision and focus in every filing"
                        icon={<Target size={20} />}
                        heading="Our Mission"
                        description="To make tax compliance and business registration effortless and accessible for everyone in Pakistan."
                        className="h-full default-transition hover:-translate-y-1 hover:shadow-text-secondary"
                    />
                </RevealOnScroll>

                {/* row 1 */}
                <RevealOnScroll delay={80} className="lg:col-start-2 lg:row-start-1">
                    <BentoStatCard
                        to={10000}
                        suffix="+"
                        align="center"
                        description="Trusted by thousands of individuals and businesses across Pakistan."
                        className="h-full"
                    />
                </RevealOnScroll>

                <RevealOnScroll delay={160} className="lg:col-start-3 lg:col-span-2 lg:row-start-1">
                    <IconTextBlock
                        icon={<Eye size={20} />}
                        heading="Our Vision"
                        description="To be Pakistan's most trusted digital platform for tax filing and corporate compliance."
                        className="bg-background px-5 py-8 lg:py-5 rounded-brand-16 h-full default-transition hover:-translate-y-1 hover:shadow-icon-card"
                    />
                </RevealOnScroll>

                {/* row 2 + row 3 — trust card spans both, matching the combined height of the two stacked stats beside it */}
                <RevealOnScroll delay={240} className="lg:col-start-2 lg:col-span-2 lg:row-start-2 lg:row-span-2">
                    <WhyTrustCard
                        heading="Why Businesses Trust Us"
                        description="Transparent pricing, dedicated support, complete documentation management, and timely reminders—everything you need for a smooth and hassle-free tax experience."
                        points={whoWeAreTrustPoints}
                        className="h-full default-transition hover:-translate-y-1 hover:shadow-text-secondary"
                    />
                </RevealOnScroll>

                <RevealOnScroll delay={320} className="lg:col-start-4 lg:row-start-2">
                    <BentoStatCard
                        to={99}
                        suffix="%"
                        align="center"
                        description="Trusted by thousands for accurate, timely, and hassle-free solutions."
                        className="h-full"
                    />
                </RevealOnScroll>

                <RevealOnScroll delay={400} className="lg:col-start-4 lg:row-start-3">
                    <BentoStatCard
                        to={24}
                        suffix="/7"
                        variant="white"
                        align="center"
                        description="Professional guidance whenever you need tax or business support."
                        className="h-full"
                    />
                </RevealOnScroll>
            </div>
        </SectionContainer>
    )
}

export default WhoWeAre