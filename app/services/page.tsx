// app/services/page.tsx — listing page
import type { Metadata } from "next"
import ServicesHero from "@/components/services/ServicesHero"
import HomeTestimonials from "@/components/home/testimonials/HomeTestimonials"
import QuickTools from "@/components/home/quickTools/QuickTools"
import OurServices from "@/components/home/ourServices/OurServices"
import Faqs from "@/components/home/faqs/Faqs"
import { faqData } from "@/data/homeFaqsData"
import BeforeFooter from "@/components/common/footer/BeforeFooter"

export const metadata: Metadata = {
    title: "Our Services | FilerNow.com",
    description: "Tax filing, NTN & business registration, GST, trademarks, and full FBR/SECP compliance services — all in one place.",
}

const ServicesPage = () => (
    <main>
        <ServicesHero
            breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Services" }]}
            infoBadgeLabel="Our Services"
            heading={<>Every Compliance Service<br /><span className="text-primary">Under One Roof</span></>}
            description="From tax filing to company setup and brand protection — explore the full range of services FilerNow handles for individuals and businesses across Pakistan."
        />

        <QuickTools />

        <OurServices />

        <Faqs
            faqData={faqData}
            paddingClass="pt-0"
        />

        <HomeTestimonials />

        <BeforeFooter />
    </main>
)

export default ServicesPage