import Image from "next/image"
import SectionContainer from "@/components/common/section/SectionContainer"
import HeroTextbox from "@/components/home/hero/HeroTextbox"
import type { HeroChecklistItem, HeroCtaItem } from "@/lib/types/hero/types"
import { type BreadcrumbItem } from "@/components/ui-custom/Breadcrumb"

type Props = {
    infoBadgeLabel: string,
    heading: React.ReactNode,
    description: string,
    ctas?: HeroCtaItem[],
    checklist?: HeroChecklistItem[],
    bgImageSrc?: string,
    breadcrumbItems?: BreadcrumbItem[],
}

const ServicesHero = ({
    breadcrumbItems,
    infoBadgeLabel,
    heading,
    description,
    ctas,
    checklist = [],
    bgImageSrc = "/assets/services/servicesHeroBgUp.png",
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
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/55 to-background/10" />
                </>
            }
            containerClass="relative py-16x"
        >
            <div className="max-w-xl">
                {/* {breadcrumbItems && <Breadcrumb items={breadcrumbItems} />} */}
                <HeroTextbox
                    breadcrumbItems={breadcrumbItems}
                    infoBadgeLabel={infoBadgeLabel}
                    heading={heading}
                    description={description}
                    ctas={ctas}
                    bottomRow={checklist.length > 0 ? { type: "checklist", items: checklist } : undefined}
                // className="max-w-xl"
                />
            </div>
        </SectionContainer>
    )
}

export default ServicesHero