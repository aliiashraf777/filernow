import Image from "next/image"
import SectionContainer from "../section/SectionContainer"
import { ArrowRight } from "lucide-react"
import Button, { AnchorBtn, LinkBtn } from "../btns/Button"
import RevealOnScroll from "@/components/ui-custom/RevealOnScroll"

type Props = {
    heading?: string,
    para?: string,
    primaryLabel?: string,
    primaryHref?: string,
    secondaryLabel?: string,
    secondaryHref?: string,
}

const BeforeFooter = ({
    heading = "Ready to file your taxes the smart way?",
    para = "Get expert help with tax filing, registration and compliance. Fast, secure and reliable — become a filer today.",
    primaryLabel = "Become a filer",
    primaryHref,
    secondaryLabel,
    secondaryHref,
}: Props) => {
    return (
        <SectionContainer containerClass="container-y-padding pt-0">
            <RevealOnScroll delay={100}>
                <div className="w-full flex items-center justify-center bg-primary/10 rounded-brand-16 py-[50px] px-3 relative overflow-hidden">
                    {/* corner circles */}
                    <Image
                        src={'/assets/beforeFooterCircle.svg'}
                        alt=""
                        width={270}
                        height={205}
                        className="w-[80px] md:w-[270px] h-[65px] md:h-[205px] absolute right-0 top-0"
                    />
                    <Image
                        src={'/assets/beforeFooterCircle.svg'}
                        alt=""
                        width={270}
                        height={205}
                        className="w-[80px] md:w-[270px] h-[65px] md:h-[205px] absolute left-0 bottom-0 rotate-180 opacity-75"
                    />

                    {/* content */}
                    <div className="flex flex-col gap-4 items-center justify-center">
                        <RevealOnScroll delay={200}>
                            <Image
                                src={'/assets/headerLogo.svg'}
                                alt="FilerNow"
                                width={80}
                                height={80}
                                className="hover:-translate-y-0.5 default-transition"
                            />
                        </RevealOnScroll>

                        <RevealOnScroll delay={300}>
                            <h2 className="heading-h2 font-extrabold leading-10 text-center tracking-[-0.9px]">
                                {heading}
                            </h2>
                        </RevealOnScroll>

                        <RevealOnScroll delay={400}>
                            <p className="para-base text-text-secondary-muted text-center md:max-w-[576px]">
                                {para}
                            </p>
                        </RevealOnScroll>

                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <RevealOnScroll delay={500}>
                                {primaryHref ? (
                                    <LinkBtn href={primaryHref} label={primaryLabel} icon={<ArrowRight size={20} />} />
                                ) : (
                                    <Button>
                                        {primaryLabel}
                                        <ArrowRight size={20} />
                                    </Button>
                                )}
                            </RevealOnScroll>

                            <RevealOnScroll delay={600}>
                                {secondaryLabel && secondaryHref && (
                                    <AnchorBtn href={secondaryHref} openOnNewTab label={secondaryLabel} variant="white" />
                                )}
                            </RevealOnScroll>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </SectionContainer>
    )
}

export default BeforeFooter