import Image from "next/image"
import { Target } from "lucide-react"
import SectionContainer from "@/components/common/section/SectionContainer"
import { whyChooseFilernowPoints } from "@/data/appData"
import RevealOnScroll from "../ui-custom/RevealOnScroll"
import { RiTargetLine } from "react-icons/ri"

type Props = {}

const AboutHighlights = (props: Props) => {
    return (
        <SectionContainer paddingClass="container-y-padding pt-0">
            <div className="flex flex-col gap-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <RevealOnScroll delay={0}>
                        <div className="relative overflow-hidden rounded-brand-16 bg-background p-8 md:p-10 h-full min-h-[320px]">
                            <RiTargetLine
                                size={156}
                                strokeWidth={0.1}
                                aria-hidden="true"
                                className="absolute bottom-5 right-5 text-border-clr pointer-events-none select-none"
                            />

                            <div className="relative max-w-[380px]">
                                <p className="text-primary text-sm font-semibold tracking-[2.52px] uppercase">
                                    Our Vision
                                </p>
                                <h3 className="heading-h3 text-text-dark mt-2">
                                    Be The Best For You!
                                </h3>
                                <p className="para-base text-text-secondary mt-3">
                                    To become the leading online tax consultancy and registration platform in Pakistan by offering user-friendly, tech-driven, and affordable solutions for everyone from salaried individuals to growing startups.
                                </p>
                            </div>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll delay={100}>
                        <div className="relative overflow-hidden rounded-brand-16 bg-primary-lighter p-8 md:p-10 h-full min-h-[320px]">
                            <Target
                                size={224}
                                strokeWidth={1}
                                aria-hidden="true"
                                className="absolute -bottom-10 -right-2.5 text-primary/10 pointer-events-none select-none"
                            />

                            <div className="relative max-w-[420px]">
                                <Image
                                    src="/assets/businessTrustUs.png"
                                    alt="Filernow.com"
                                    width={56}
                                    height={56}
                                />

                                <p className="text-primary text-sm font-semibold tracking-[2.52px] uppercase mt-4">
                                    Why Choose Filernow?
                                </p>
                                <h3 className="heading-h3 text-text-dark mt-2">
                                    Filernow.com
                                </h3>

                                <ul className="mt-5 flex flex-col gap-3">
                                    {whyChooseFilernowPoints.map((point) => (
                                        <li
                                            key={point.title}
                                            className="flex items-start gap-3 para-base text-text-secondary"
                                        >
                                            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                            <span>
                                                <span className="font-semibold text-text-darkx">
                                                    {point.title}:</span> {point.description}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>

                <RevealOnScroll delay={200}>
                    <div className="relative overflow-hidden rounded-brand-16 min-h-[420px] md:min-h-[380px] flex items-center">
                        <Image
                            src="/assets/about/businessTrustUs2.png"
                            alt="Calculator and notebook on a desk"
                            fill
                            sizes="100vw"
                            className="object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-r from-text-dark/90 via-text-dark/60 to-text-dark/10" />

                        <Image
                            src="/assets/about/businessTrustUsLogo.png"
                            alt=""
                            width={260}
                            height={260}
                            aria-hidden="true"
                            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none select-none hidden md:block invert hue-rotate-180 brightness-50"
                        />

                        <div className="relative p-8 md:px-8 max-w-[660px]">
                            <p className="text-primary-light text-sm font-semibold tracking-[2.52px] uppercase">
                                Introduction
                            </p>
                            <h3 className="heading-h3 text-white mt-2">
                                Lets Simplify Taxation – Together!
                            </h3>
                            <p className="para-base text-white/70 mt-3">
                                Whether you&apos;re a new business owner or a first-time tax filer, Filernow.com makes the process easy, understandable, and fully compliant. Join thousands of satisfied clients who have made their tax and registration journeys stress-free with us and Under Sir Tahir&apos;s guidance, Webtery.com is committed to delivering excellence, creativity, and unmatched customer support to every client we serve.
                            </p>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </SectionContainer>
    )
}

export default AboutHighlights