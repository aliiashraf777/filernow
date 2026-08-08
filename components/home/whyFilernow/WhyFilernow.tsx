"use client"
import SectionContainer from "@/components/common/section/SectionContainer"
import SectionTitle from "@/components/ui-custom/SectionTitle"
import { whyFilerNowSteps } from "@/data/appData"
import { useInView } from "@/hooks/useInView"
import { cn } from "@/utils/cn"
import WhyFilerNowWave from "./WhyFilernowWave"
import RevealOnScroll from "../../ui-custom/RevealOnScroll"

const WhyFilerNow = () => {
    const { ref, inView } = useInView<HTMLDivElement>(0.15)

    return (
        <SectionContainer containerClass="container-y-padding pt-0 lg:pb-[200px]">
            <RevealOnScroll delay={0}>
                <SectionTitle
                    infoLabel="Why FilerNow"
                    heading="Built on trust and results"
                    para="Everything we do is designed to make compliance effortless while keeping your business protected."
                    sectionClass="pb-0 md:pb-[60px]"
                />
            </RevealOnScroll>

            <div ref={ref} className="relative w-full hidden lg:block mt-32 sm:mt-36 lg:mt-40">
                <div style={{ paddingBottom: "13.57%" }} />
                <WhyFilerNowWave />

                {whyFilerNowSteps.map((step, idx) => {
                    const isFirst = idx === 0
                    const isLast = idx === whyFilerNowSteps.length - 1

                    return (
                        <div
                            key={step.number}
                            // style={
                            //     isFirst
                            //         ? { left: "-2%", top: `${step.top}%`, transitionDelay: `${idx * 150}ms` }
                            //         : isLast
                            //             ? { right: "-180px", top: `${step.top}%`, transitionDelay: `${idx * 150}ms` }
                            //             : { left: `${step.left}%`, top: `${step.top}%`, transitionDelay: `${idx * 150}ms` }
                            // }
                            style={
                                isFirst ? { left: "-2%", top: `${step.top}%`, transitionDelay: `${idx * 150}ms` }
                                    : isLast ? { right: "-16%", top: `${step.top}%`, transitionDelay: `${idx * 150}ms` }
                                        : { left: `${step.left}%`, top: `${step.top}%`, transitionDelay: `${idx * 150}ms` }
                            }
                            className={cn(
                                "absolute flex flex-col items-start gap-10 default-transition",
                                step.labelPosition === "top" ? "flex-col-reverse bottom-full mb-4" : "top-full mt-4",
                                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                            )}
                        >
                            {/* icon */}
                            <span
                                style={{ animationDelay: `${idx * 0.3}s` }}
                                className="icon-pulse flex items-center justify-center min-w-14 min-h-14 rounded-brand-16 bg-white shadow-icon-card ring-1 ring-border-card-clr hover:shadow-primary-light default-transition">
                                {step.icon}
                            </span>

                            {/* number & text box */}
                            <div
                                className="max-w-[300px] relative text-left"
                                style={{
                                    ...(step.textOffsetX ? { right: `${step.textOffsetX}px` } : {}),
                                    ...(step.textOffsetY ? { top: `${step.textOffsetY}px` } : {}),
                                }}
                            >
                                <span
                                    style={{ animationDelay: `${idx * 0.3}s` }}
                                    className="number-float absolute -z-10 right-4 -top-16 text-[100px] font-bold leading-none select-none bg-[linear-gradient(180deg,#D9D9D9_0%,#F4F4F4_100%)] bg-clip-text text-transparent">
                                    {step.number}
                                </span>
                                <h3 className="para-base font-semibold">{step.title}</h3>
                                <p className="para-tiny text-text-secondary mt-1 leading-[22.7px]">{step.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="lg:hidden flex flex-col gap-8 mt-10">
                {whyFilerNowSteps.map((step) => (
                    <div key={step.number} className="flex gap-4 items-start">
                        <span className="flex items-center justify-center w-14 h-14 rounded-brand-16 bg-white shadow-icon-card shrink-0">
                            {step.icon}
                        </span>
                        <div>
                            <h3 className="para-base font-semibold">{step.title}</h3>
                            <p className="para-tiny text-text-secondary mt-1">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </SectionContainer >
    )
}

export default WhyFilerNow