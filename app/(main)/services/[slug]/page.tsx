// app/services/[slug]/page.tsx
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ServicesHero from "@/components/services/ServicesHero"
import ServiceNeedProvidedSection from "@/components/services/ServiceNeedProvidedSection"
import { getServiceBySlug, allServiceSlugs } from "@/data/servicesData"
import Faqs from "@/components/home/faqs/Faqs"
import BeforeFooter from "@/components/common/footer/BeforeFooter"

type Props = {
    params: Promise<{ slug: string }>,
}

export function generateStaticParams() {
    return allServiceSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const service = getServiceBySlug(slug)
    if (!service) return {}
    return { title: service.seoTitle, description: service.seoDescription }
}

const ServiceDetailPage = async ({ params }: Props) => {
    const { slug } = await params
    const service = getServiceBySlug(slug)
    if (!service) notFound()

    return (
        <main>
            <ServicesHero
                breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.breadcrumbLabel }]}
                infoBadgeLabel={service.heroInfoBadgeLabel}
                heading={service.heroHeading}
                description={service.heroDescription}
                ctas={service.heroCtas}
                checklist={service.heroChecklist}
            />

            <ServiceNeedProvidedSection
                heading={service.needProvidedHeading}
                para={service.needProvidedPara}
                boxes={service.needProvidedBoxes}
            />

            <Faqs
                faqData={service.faqs}
                sectionHeading="Common questions about this service"
                paddingClass="pt-0"
            />

            <BeforeFooter />
        </main>
    )
}

export default ServiceDetailPage