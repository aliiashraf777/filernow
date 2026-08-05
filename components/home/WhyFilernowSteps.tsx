"use client"
import SectionContainer from "@/components/common/section/SectionContainer"
import Button from "@/components/btns/Button"
import { whyFilerNowSteps, whyFilerNowStepExtras } from "@/data/appData"
import { useScrollProgress } from "@/hooks/useScrollProgress"
import { useScrollSpy } from "@/hooks/useScrollSpy"
import { cn } from "@/utils/cn"
import { WhyFilernowStepsCard } from "./WhyFilernowStepsCard"

const WhyFilerNowSteps = () => {
    const { ref: trackRef, progressPct } = useScrollProgress<HTMLDivElement>(0.5)
    const { activeIndex, setItemRef } = useScrollSpy<HTMLDivElement>(whyFilerNowSteps.length, 0.4)
    const active = whyFilerNowSteps[activeIndex]
    const activeExtra = whyFilerNowStepExtras[activeIndex]

    return (
        <SectionContainer sectionClass="bg-background" containerClass="container-y-padding">
            <div className="flex items-start justify-between mb-12 gap-4">
                <div>
                    <h2 className="heading-h2 text-text-dark max-w-xl">
                        Built on trust and results
                    </h2>
                    <p className="para-base text-text-secondary mt-2 max-w-lg">
                        Everything we do is designed to make compliance effortless while keeping your business protected.
                    </p>
                </div>
                <Button variant="primary-light" className="shrink-0 mt-1 hidden md:flex">
                    Talk to an Expert
                </Button>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-start">
                {/* left: steps + progress rail */}
                <div ref={trackRef} className="relative flex-1 min-w-0">
                    {/* static rail line */}
                    <div
                        aria-hidden
                        className="absolute left-[2.35rem] top-0 bottom-0 w-px bg-border-clr"
                    />
                    {/* progressing primary rail line */}
                    <div
                        aria-hidden
                        className="absolute left-[2.35rem] top-0 w-px bg-primary origin-top"
                        style={{ height: `${progressPct}%`, willChange: "height", transition: "height 0.08s linear" }}
                    />

                    {whyFilerNowSteps.map((step, i) => {
                        const isActive = activeIndex === i
                        return (
                            <div
                                key={step.number}
                                ref={setItemRef(i)}
                                className="relative flex gap-6 pb-24 last:pb-0"
                            >
                                <div className="relative z-10 shrink-0">
                                    <div className={cn(
                                        "w-[4.7rem] h-[4.7rem] rounded-full flex items-center justify-center text-2xl font-extrabold default-transition",
                                        isActive
                                            ? "bg-primary text-white shadow-primary-btn"
                                            : "bg-transparent text-text-secondary-muted border border-border-clr",
                                    )}>
                                        {step.number}
                                    </div>
                                </div>

                                <div className="pt-3 max-w-xs">
                                    <h3 className={cn("heading-h5 default-transition", isActive ? "text-text-dark" : "text-text-secondary-muted")}>
                                        {step.title}
                                    </h3>
                                    <p className={cn(
                                        "mt-2 para-small default-transition",
                                        isActive ? "text-text-secondary" : "text-text-secondary-muted/60",
                                    )}>
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* right: sticky card */}
                <div
                    className="lg:w-[420px] xl:w-[480px] shrink-0 sticky self-start"
                    style={{ top: "calc(var(--sticky-header-height, 68px) + 32px)" }}
                >
                    <WhyFilernowStepsCard
                        key={activeIndex}
                        title={active.title}
                        extra={activeExtra}
                    />
                </div>
            </div>
        </SectionContainer>
    )
}

export default WhyFilerNowSteps