import Image from "next/image"
import SectionContainer from "@/components/common/section/SectionContainer"
import HeroTextbox from "@/components/home/hero/HeroTextbox"
import { ArrowRight, Check, Zap } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import type { HeroChecklistItem, HeroCtaItem } from "@/lib/types/hero/types"

type Props = {
    infoBadgeLabel: string,
    heading: React.ReactNode,
    description: string,
    ctas?: HeroCtaItem[],
    checklist?: HeroChecklistItem[],
    bgImageSrc?: string,
}

const ServicesHero = ({
    infoBadgeLabel,
    heading,
    description,
    ctas = [
        { label: "Become A Filer", icon: <ArrowRight size={18} />, variant: "primary" },
        { label: "Talk to an Expert", icon: <FaWhatsapp size={18} className="text-secondary" />, variant: "white" },
    ],
    checklist = [],
    bgImageSrc = "/assets/servicesHeroBg.jpg",
}: Props) => {
    return (
        <SectionContainer
            bgImage={
                <>
                    <Image
                        src={bgImageSrc}
                        alt=""
                        fill
                        priority
                        sizes="100vw"
                        style={{ objectFit: "cover" }}
                        className="-z-10"
                    />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/95 to-background/10" />
                </>
            }
            containerClass="relative py-16"
        >
            <HeroTextbox
                infoBadgeLabel={infoBadgeLabel}
                heading={heading}
                description={description}
                ctas={ctas}
                bottomRow={checklist.length > 0 ? { type: "checklist", items: checklist } : undefined}
                className="max-w-xl"
            />
        </SectionContainer>
    )
}

export default ServicesHero