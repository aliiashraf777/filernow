// components/home/Hero.tsx
import Image from "next/image"
import SectionContainer from "@/components/common/section/SectionContainer"
import Button from "@/components/btns/Button"
import { ArrowRight } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import InfoBadge from "../ui/InfoBadge"
import StatCounter from "../ui/StatsCounter"
import { heroStatsData } from "@/data/appData"
import { cn } from "@/utils/cn"

const HeroPersonPanel = ({ className }: { className?: string }) => (
    <div className={cn("relative overflow-hidden", className)}>
        <Image
            src="/assets/heroPersonBg.svg"
            alt=""
            width={620}
            height={654}
            // fill
            // style={{ objectFit: "cover" }}
            className="absolute inset-0 w-full h-full object-cover rounded-l-brand-16"

        />
        <Image
            src="/assets/heroLogo.svg"
            width={150}
            height={150}
            alt=""
            className="absolute top-20 left-40 z-10 opacity-90"
        />
        <Image
            src="/assets/heroPersonImg.svg"
            alt="FilerNow tax expert"
            // width={500}
            // height={560}
            // className="absolute right-8 bottom-[45px] z-20 h-auto w-[70%] max-w-[450px]"
            className="z-20"
            fill
            style={{ objectFit: "contain", objectPosition: "bottom right" }}
        />
    </div>
)

type Props = {}

const Hero = (props: Props) => {
    return (
        <SectionContainer
            bgImage={<>
                <Image
                    src="/assets/heroBgImg.svg"
                    alt=""
                    fill
                    priority
                    style={{ objectFit: "cover" }}
                    className="-z-10"
                />

                {/* desktop-only bleeding panel — lives at section level, not inside the padded container */}
                <HeroPersonPanel
                    className="hidden lg:block absolute inset-y-0 left-1/2 right-0"
                />
            </>}
            containerClass="relative"
        >
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* left content */}
                <div className="container-y-padding flex flex-col gap-7">
                    <InfoBadge
                        className="bg-white"
                        label="Online Tax Filing Portal"
                    />

                    <h1 className="heading-h1 tracking-[-1.5px]">
                        File Your Taxes In
                        <br />
                        <span className="text-primary">Just 1 Day</span>
                    </h1>

                    <p className="para-18 text-text-secondary max-w-[600px]">
                        File your income tax return in just one day — fast, secure, and fully
                        online. From NTN registration and ATL listing to business registration,
                        trademarks, and SECP incorporation, FilerNow handles everything with
                        expert support.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <Button
                            className="hover:-translate-y-0.5"
                        >
                            File Now
                            <ArrowRight size={18} />
                        </Button>

                        <Button variant="white"
                            className="hover:-translate-y-0.5"
                        >
                            Talk to an Expert
                            <FaWhatsapp size={18} className="text-secondary" />
                        </Button>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-7 divide-x divide-[#EAE0E0]">
                        {heroStatsData.map((stat) => (
                            <StatCounter
                                key={stat.label}
                                to={stat.to}
                                suffix={stat.suffix}
                                label={stat.label}
                            />
                        ))}
                    </div>
                </div>

                {/* right img */}
                {/* mobile/tablet — normal in-flow card, no bleed */}
                <HeroPersonPanel
                    className="hidden lg:hidden aspect-[4/5]"
                />

            </div>
        </SectionContainer >
    )
}

export default Hero