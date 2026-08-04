"use client"

/**
 * ProcessTimeline — left sticky rail + right scrolling panels.
 *
 * Ported from a Bolt export ("progressive-vertical-bar-with-sticky-cards").
 * The LEFT rail is the sticky element (short content: eyebrow/heading/
 * description + a progress line) — the RIGHT column is normal document flow
 * (tall image+text panels) and drives the scrollable height. `items-start`
 * on the flex row is load-bearing: without it both columns stretch to equal
 * height and the sticky rail never actually sticks.
 */

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import SectionContainer from "@/components/common/section/SectionContainer"
import { processTimelineData, type IProcessPanel } from "@/data/appData"

type Props = {
    panels?: IProcessPanel[],
}

const ProcessTimeline = ({ panels = processTimelineData }: Props) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [progressPct, setProgressPct] = useState(0)

    const sectionRef = useRef<HTMLDivElement>(null)
    const panelRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const onScroll = () => {
            const section = sectionRef.current
            if (!section) return

            const { top, height } = section.getBoundingClientRect()
            const scrolled = -top
            const ratio = Math.min(Math.max(scrolled / (height - window.innerHeight * 0.6), 0), 1)
            setProgressPct(ratio * 100)

            const triggerY = window.innerHeight * 0.35
            let next = 0
            panelRefs.current.forEach((el, i) => {
                if (!el) return
                if (el.getBoundingClientRect().top < triggerY) next = i
            })
            setActiveIndex(next)
        }

        window.addEventListener("scroll", onScroll, { passive: true })
        onScroll()
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <SectionContainer
            sectionClass="bg-text-dark"
            paddingClass="container-y-padding"
        >
            <div ref={sectionRef} className="relative">
                <div className="max-w-2xl mb-16">
                    <p className="text-brand-secondary text-sm font-semibold tracking-widest uppercase">
                        How it works
                    </p>
                    <h2 className="heading-h2 text-white mt-3">
                        Filing, without the back-and-forth
                    </h2>
                    <p className="para-18 text-white/60 mt-4">
                        Four steps, one outcome: a filed, confirmed return with nothing left for you to chase.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
                    <div className="lg:w-[340px] xl:w-[380px] shrink-0 sticky top-24 self-start max-h-[88vh] overflow-hidden">
                        <div className="relative pl-8">
                            <div aria-hidden className="absolute left-0 top-2 bottom-2 w-0.5 bg-white/15 rounded-full" />
                            <div
                                aria-hidden
                                className="absolute left-0 top-2 w-0.5 bg-brand-secondary rounded-full origin-top"
                                style={{
                                    height: `${progressPct}%`,
                                    willChange: "height",
                                    transition: "height 0.1s linear",
                                }}
                            />

                            <div className="relative space-y-10">
                                {panels.map((panel, i) => {
                                    const isActive = activeIndex === i

                                    return (
                                        <div key={panel.id} className="relative">
                                            <div
                                                className={`absolute -left-8 top-1 z-10 w-4 h-4 rounded-full border-2 default-transition ${
                                                    isActive
                                                        ? "bg-brand-secondary border-brand-secondary shadow-[0_0_0_6px_rgba(52,176,141,0.18)]"
                                                        : "bg-text-dark border-white/25"
                                                }`}
                                            />

                                            <p
                                                className={`text-xs font-semibold tracking-widest uppercase default-transition ${
                                                    isActive ? "text-brand-secondary" : "text-white/30"
                                                }`}
                                            >
                                                {panel.eyebrow}
                                            </p>

                                            <h3
                                                className={`heading-h4 mt-2 default-transition ${
                                                    isActive ? "text-white" : "text-white/30"
                                                }`}
                                            >
                                                {panel.heading}
                                            </h3>

                                            <p
                                                className={`para-base mt-2 overflow-hidden transition-all duration-500 ${
                                                    isActive ? "text-white/70 max-h-40 opacity-100" : "max-h-0 opacity-0"
                                                }`}
                                            >
                                                {panel.description}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 min-w-0 space-y-24 md:space-y-32">
                        {panels.map((panel, i) => (
                            <div
                                key={panel.id}
                                ref={(el) => { panelRefs.current[i] = el }}
                                className="scroll-mt-24"
                            >
                                <PanelCard panel={panel} active={activeIndex === i} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionContainer>
    )
}

const PanelCard = ({ panel, active }: { panel: IProcessPanel, active: boolean }) => {
    return (
        <article
            className={`rounded-brand-16 overflow-hidden bg-white/5 border default-transition ${
                active ? "border-brand-secondary/40 shadow-[0_20px_60px_-15px_rgba(52,176,141,0.25)]" : "border-white/10"
            }`}
        >
            <div className="relative h-64 md:h-80 overflow-hidden">
                {panel.card.image ? (
                    <Image
                        src={panel.card.image}
                        alt={panel.card.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 60vw, 100vw"
                        className="object-cover"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-brand-primary/25 via-text-dark to-brand-secondary/20" />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-text-dark via-text-dark/20 to-transparent" />
                <h3 className="absolute bottom-5 left-6 text-white heading-h3">
                    {panel.card.title}
                </h3>
            </div>

            <div className="p-6 md:p-8">
                <p className="para-18 text-white/70">
                    {panel.card.body}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                    {panel.card.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs font-medium text-brand-secondary-light bg-brand-secondary/10 border border-brand-secondary/20 px-3 py-1 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    )
}

export default ProcessTimeline