import SectionContainer from "@/components/common/section/SectionContainer"
import SectionTitle from "@/components/ui-custom/SectionTitle"
import FaqAccordion from "@/components/home/faqs/FaqAccordion"
import { faqData } from "@/data/appData"
import RevealOnScroll from "../../ui-custom/RevealOnScroll"

type Props = {}

const Faqs = (props: Props) => {
    return (
        <SectionContainer
            paddingClass="container-y-padding pt-0"
        >
            <RevealOnScroll delay={100}>
                <SectionTitle
                    infoLabel="FAQ"
                    heading="Frequently Asked Questions"
                    para="Everything you need to know about filing taxes and registering your business with FilerNow."
                />
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
                <div className="max-w-[770px] mx-auto">
                    <FaqAccordion
                        items={faqData}
                        defaultValue={faqData[0]?.id}
                    />
                </div>
            </RevealOnScroll>
        </SectionContainer>
    )
}

export default Faqs