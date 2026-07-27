// components/home/Hero.tsx
import Image from "next/image"
import SectionContainer from "@/components/common/section/SectionContainer"
import Button from "@/components/btns/Button"
import { ArrowRight } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

type Props = {}

const heroStats = [
    { value: "10,000+", label: "Our Clients" },
    { value: "1 Day", label: "Fast Filing" },
    { value: "15+", label: "Services" },
    { value: "99%", label: "Satisfaction" },
]

const Hero = (props: Props) => {
    return (
        <SectionContainer
            sectionClass="relative"
            paddingClass="relative"
            containerClass="relative container-y-padding"
        >
            <Image
                src="/assets/heroBgImg.svg"
                alt=""
                fill
                priority
                // quality={100}
                style={{ objectFit: "cover" }}
                className="-z-10"
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* left content */}
                <div className="flex flex-col gap-6">
                    <span className="w-max rounded-full bg-primary-lighter text-primary para-small font-semibold px-4 py-1.5">
                        Online Tax Filing Portal
                    </span>

                    <h1 className="heading-h1">
                        File Your Taxes In
                        <br />
                        <span className="text-primary">Just 1 Day</span>
                    </h1>

                    <p className="para-18 text-text-secondary-muted max-w-lg">
                        File your income tax return in just one day — fast, secure, and fully
                        online. From NTN registration and ATL listing to business registration,
                        trademarks, and SECP incorporation, FilerNow handles everything with
                        expert support.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <Button>
                            File Now
                            <ArrowRight size={18} />
                        </Button>

                        <Button variant="white">
                            <FaWhatsapp size={18} className="text-secondary" />
                            Talk to an Expert
                        </Button>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-border-clr">
                        {heroStats.map((stat) => (
                            <div key={stat.label}>
                                <p className="heading-h3 text-primary">{stat.value}</p>
                                <p className="para-tiny text-text-secondary-muted">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* right img */}
                <div className="relative rounded-brand-16 overflow-hidden bg-gradient-primary-rl aspect-[4/5] lg:aspect-square">
                    <Image
                        src="/assets/heroLogo.svg"
                        alt=""
                        fill
                        style={{ objectFit: "contain" }}
                        className="opacity-20 p-10"
                    />

                    {/* TODO: real hero photo — wasn't part of this upload */}
                    <Image
                        src="/assets/heroPerson.svg"
                        alt="FilerNow tax expert"
                        fill
                        style={{ objectFit: "contain", objectPosition: "bottom" }}
                    />
                </div>
            </div>
        </SectionContainer>
    )
}

export default Hero