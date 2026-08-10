import SectionContainer from "../../common/section/SectionContainer"
import SectionTitle from "../../ui-custom/SectionTitle"
import ServiceCard from "./ServiceCard"
import RevealOnScroll from "../../ui-custom/RevealOnScroll"
import { servicesGridData } from "@/data/servicesGridData"

type Props = {}

const OurServices = (props: Props) => {
    return (
        <SectionContainer
            containerClass="container-y-padding"
        >
            <RevealOnScroll delay={120}>
                <SectionTitle
                    infoLabel="Our services"
                    heading="Everything you need, in one place"
                    para="From tax filing to company setup and brand protection — our experts handle the full journey so you stay compliant and focused on growth."
                />
            </RevealOnScroll>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {servicesGridData.map((service, idx) => (
                    <RevealOnScroll key={service.id} delay={idx * 80}>
                        <ServiceCard
                            key={service.id}
                            {...service}
                        />
                    </RevealOnScroll>
                ))}
            </div>
        </SectionContainer>
    )
}

export default OurServices