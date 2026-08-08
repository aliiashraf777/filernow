import Image from "next/image"
import SectionContainer from "@/components/common/section/SectionContainer"
import { ArrowRight } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { heroStatsData } from "@/data/appData"
import { cn } from "@/utils/cn"
import HeroTextbox from "./HeroTextbox"

const HeroPersonPanel = ({ className }: { className?: string }) => (
    <div className={cn("relative overflow-hidden", className)}>
        <Image src="/assets/heroPersonBg.svg" alt="" width={620} height={654}
            className="absolute inset-0 w-full h-full object-cover rounded-l-brand-16 animate-fade-scale-in [animation-delay:150ms]" />
        <Image src="/assets/heroLogo.svg" width={150} height={150} alt=""
            className="absolute top-20 left-40 z-10 opacity-90 icon-pulse animate-fade-scale-in" />
        <Image src="/assets/heroPersonImgUp.png" alt="FilerNow tax expert" fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            style={{ objectFit: "contain", objectPosition: "bottom right" }}
            className="z-20 animate-fade-slide-up [animation-delay:300ms]" />
    </div>
)

const HeroUp = () => {
    return (
        <SectionContainer
            bgImage={<>
                <Image src="/assets/heroBgImg.svg" alt="" fill priority style={{ objectFit: "cover" }} className="-z-10 hero-bg-image" />
                <HeroPersonPanel
                    className="hidden lg:block absolute inset-y-0 left-1/2 right-0"
                />
            </>}
            containerClass="relative"
        >
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <HeroTextbox
                    infoBadgeLabel="Online Tax Filing Portal"
                    heading={<>File Your Taxes In<span className="text-primary"> Just 1 Day</span></>}
                    description="File your income tax return in just one day — fast, secure, and fully online. From NTN registration and ATL listing to business registration, trademarks, and SECP incorporation, FilerNow handles everything with expert support."
                    ctas={[
                        {
                            label: "File Now",
                            icon: <ArrowRight size={18} />, variant: "primary"
                        },
                        {
                            label: "Talk to an Expert",
                            icon: <FaWhatsapp size={18} className="text-secondary" />, variant: "white"
                        },
                    ]}
                    bottomRow={{ type: "stats", items: heroStatsData }}
                />

                <HeroPersonPanel
                    className="hidden lg:hidden aspect-[4/5]"
                />
            </div>
        </SectionContainer>
    )
}

export default HeroUp