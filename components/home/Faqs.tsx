import SectionContainer from "@/components/common/section/SectionContainer"
import SectionTitle from "@/components/ui-custom/SectionTitle"
import FaqAccordion from "@/components/home/FaqAccordion"
import { faqData } from "@/data/appData"

type Props = {}

const Faqs = (props: Props) => {
    return (
        <SectionContainer
            paddingClass="container-y-padding pt-0x"
        >
            <SectionTitle
                infoLabel="FAQ"
                heading="Frequently Asked Questions"
                para="Everything you need to know about filing taxes and registering your business with FilerNow."
            />

            <div className="max-w-[770px] mx-auto">
                <FaqAccordion
                    items={faqData}
                    defaultValue={faqData[0]?.id}
                />
            </div>
        </SectionContainer>
    )
}

export default Faqs