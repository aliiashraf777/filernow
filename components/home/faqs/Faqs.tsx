import SectionContainer from "@/components/common/section/SectionContainer"
import SectionTitle from "@/components/ui-custom/SectionTitle"
import FaqAccordion from "@/components/home/faqs/FaqAccordion"
import RevealOnScroll from "../../ui-custom/RevealOnScroll"
import { IFaqItem } from "@/lib/types/faq/types"

type Props = {
    faqData: IFaqItem[],
    sectionHeading?: string,
    sectionPara?: string,
}

const Faqs = ({ faqData, sectionHeading = "Frequently Asked Questions", sectionPara = "Everything you need to know about filing taxes and registering your business with FilerNow." }: Props) => {
    return (
        <SectionContainer
            paddingClass="container-y-padding pt-0"
        >
            <RevealOnScroll delay={100}>
                <SectionTitle
                    infoLabel="FAQs"
                    heading={sectionHeading}
                    para={sectionPara}
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