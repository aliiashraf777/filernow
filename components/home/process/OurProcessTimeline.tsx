// components/home/OurProcessTimeline.tsx
"use client"
import Image from "next/image"
import SectionContainer from "@/components/common/section/SectionContainer"
import { processTimelineData } from "@/data/appData"
import { useScrollProgress } from "@/hooks/useScrollProgress"
import { useScrollSpy } from "@/hooks/useScrollSpy"
import { cn } from "@/utils/cn"
import { TimelinePanelCard } from "./TimelinePanelCard"
import RevealOnScroll from "../../ui-custom/RevealOnScroll"

const OurProcessTimeline = () => {
    const { ref: sectionRef, progressPct } = useScrollProgress<HTMLDivElement>(0.6)
    const { activeIndex, setItemRef } = useScrollSpy<HTMLDivElement>(processTimelineData.length, 0.35)

    return (
        <SectionContainer sectionClass="bg-background" containerClass="container-y-padding">
            <div ref={sectionRef} className="relative">
                {/* section title */}
                <RevealOnScroll delay={100}>
                    <div className="max-w-2xl mb-10 md:mb-16">
                        <p className="para-small font-semibold tracking-widest uppercase text-primary">
                            Our Process
                        </p>
                        <h2 className="heading-h2 text-text-dark mt-3">
                            A Process Built for Peace of Mind
                        </h2>
                        <p className="para-base text-text-secondary mt-4">
                            Four simple steps, one outcome: your filing done right, on time, every time.
                        </p>
                    </div>
                </RevealOnScroll>

                <RevealOnScroll delay={200}>
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
                        {/* left: sticky rail — short side, so it's the one that sticks */}
                        <div
                            className="lg:w-[340px] xl:w-[380px] shrink-0 md:sticky self-start max-h-[88vh] overflow-hidden"
                            style={{ top: "calc(var(--sticky-header-height, 68px) + 24px)" }}
                        >
                            <div className="relative pl-8">
                                <div
                                    aria-hidden
                                    className="absolute left-0 top-2 bottom-2 w-0.5 bg-border-clr rounded-full"
                                />
                                <div
                                    aria-hidden
                                    className="absolute left-0 top-2 w-0.5 bg-primary rounded-full origin-top"
                                    style={{ height: `${progressPct}%`, willChange: "height", transition: "height 0.1s linear" }}
                                />

                                <div className="relative space-y-10">
                                    {processTimelineData.map((panel, i) => {
                                        const isActive = activeIndex === i
                                        return (
                                            <div key={panel.id} className="relative">
                                                <div className={cn(
                                                    "absolute -left-7.5 top-2 z-20 w-4 h-4 rounded-full border-2 default-transition",
                                                    isActive
                                                        ? "bg-primary border-primary shadow-[0_0_0_6px_var(--brand-primary-lighter)]"
                                                        : "bg-background border-border-clr",
                                                )} />

                                                <p className={cn(
                                                    "para-tiny font-semibold tracking-widest uppercase default-transition",
                                                    isActive ? "text-primary" : "text-text-secondary-muted",
                                                )}>
                                                    {panel.eyebrow}
                                                </p>

                                                <h3 className={cn(
                                                    "mt-2 heading-h5 default-transition",
                                                    isActive ? "text-text-dark" : "text-text-secondary-muted",
                                                )}>
                                                    {panel.heading}
                                                </h3>

                                                <p className={cn(
                                                    "mt-2 para-small default-transition overflow-hidden",
                                                    isActive ? "text-text-secondary max-h-40 opacity-100" : "max-h-0 opacity-0",
                                                )}>
                                                    {panel.description}
                                                </p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* right: tall scrolling panels — drives the scroll distance */}
                        <div className="flex-1 min-w-0 space-y-5 md:space-y-32">
                            {processTimelineData.map((panel, i) => (
                                <div key={panel.id} ref={setItemRef(i)} className="scroll-mt-24">
                                    <TimelinePanelCard
                                        panel={panel}
                                        active={activeIndex === i}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </SectionContainer>
    )
}

export default OurProcessTimeline