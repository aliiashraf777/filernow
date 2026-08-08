// app/services/[slug]/page.tsx — hero section (heading/description/checklist would come from
// your service data source per slug; hardcoded here to match the Figma you sent)
import Image from "next/image"
import SectionContainer from "@/components/common/section/SectionContainer"
// import HeroTextbox from "@/components/common/hero/HeroTextbox"
import { ArrowRight, Check, Zap } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import HeroTextbox from "@/components/home/hero/HeroTextbox"

type Props = {}

const page = (props: Props) => {
    return (
        <SectionContainer
            bgImage={
                <>
                    <Image src="/assets/services/servicesHeroBg.png" alt="" fill priority style={{ objectFit: "cover" }} className="-z-10" />
                    <div
                        className="absolute inset-0 -z-10"
                    // className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/95 to-background/10"
                    // style={{background: "linear-gradient(90deg, #FFFFFF 43.77%, rgba(255, 238, 238, 0) 100%)"}}
                    />
                </>
            }
            containerClass="relative py-16"
            sectionClass="-my-6"
        >
            <HeroTextbox
                infoBadgeLabel="Fast Processing"
                heading={<>Business NTN<br /><span className="text-primary">Registration</span></>}
                description="Register your business name with the Federal Board of Revenue (FBR) in Pakistan. FilerNow handles the entire process online, securing your official Business NTN and Taxpayer Certificate within 12 working hours."
                ctas={[
                    { label: "Become A Filer", icon: <ArrowRight size={18} />, variant: "primary" },
                    { label: "Talk to an Expert", icon: <FaWhatsapp size={18} className="text-secondary" />, variant: "white" },
                ]}
                bottomRow={{
                    type: "checklist",
                    items: [
                        { icon: <Check size={16} />, label: "100% Online Process" },
                        { icon: <Zap size={16} />, label: "Within 12 Working Hours" },
                    ],
                }}
                className="max-w-xl py-[45px]"
            />
        </SectionContainer>
    )
}

export default page