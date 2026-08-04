import { servicesGridData } from "@/data/appData"
import SectionContainer from "../common/section/SectionContainer"
import SectionTitle from "../ui-custom/SectionTitle"
import ServiceCard from "./ServiceCard"

type Props = {}

const OurServices = (props: Props) => {
    return (
        <SectionContainer
            containerClass="container-y-padding"
        >
            <SectionTitle
                infoLabel="Our services"
                heading="Everything you need, in one place"
                para="From tax filing to company setup and brand protection — our experts handle the full journey so you stay compliant and focused on growth."
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {servicesGridData.map((service) => (
                    <ServiceCard
                        key={service.id}
                        {...service}
                    />
                ))}
            </div>
        </SectionContainer>
    )
}

export default OurServices