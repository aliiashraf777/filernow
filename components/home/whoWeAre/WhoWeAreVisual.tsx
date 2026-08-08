import Image from "next/image"
import IconTextBlock from "@/components/ui-custom/IconTextBlock"
import { cn } from "@/utils/cn"

type Props = {
    imageSrc: string,
    imageAlt: string,
    icon?: React.ReactNode,
    heading: string,
    description: string,
    className?: string,
}

const WhoWeAreVisual = ({ imageSrc, imageAlt, icon, heading, description, className }: Props) => {
    return (
        <div className={cn("group relative flex flex-col rounded-brand-16 overflow-hidden bg-border-card-clr", className)}>

            {/* blurImageOnCenter */}
            <div
                className="z-10 h-[210px] absolute inset-0 -translate-y-1/2x top-1/2x top-[270px] backdrop-blur-sm"
                style={{ background: "linear-gradient(180deg, rgba(240, 239, 244, 0.012) 0%, rgba(240, 239, 244, 0.2) 100%)" }}
            />

            {/* sharp image */}
            <div className="relative sheen-sweep-hover w-full h-[375px] aspect-[16/10] lg:aspect-[4/5] shrink-0">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    fill
                    sizes="(min-width: 1024px) 320px, 100vw"
                    style={{ objectFit: "cover" }}
                    loading="eager"
                    className="transition-transform duration-700 ease-out group-hover:scale-105"
                />
            </div>

            {/* mission content */}
            <div className="z-20 flex-1 px-7.5 py-8 flex flex-col justify-center">
                <IconTextBlock
                    icon={icon}
                    heading={heading}
                    description={description}
                />
            </div>
        </div>
    )
}

export default WhoWeAreVisual