"use client"
import { useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import SectionContainer from "@/components/common/section/SectionContainer"
import SectionTitle from "@/components/ui-custom/SectionTitle"
import RevealOnScroll from "@/components/ui-custom/RevealOnScroll"
import { cn } from "@/utils/cn"
import type { IHomeTestimonialItem } from "@/data/appData"
import { useTestimonialCarousel } from "@/hooks/useTestimonialsCarousel"
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion"
import TestimonialCard from "./TestimonialCard"

type Props = {
    testimonials: IHomeTestimonialItem[],
    infoLabel?: string,
    heading?: string,
    para?: string,
}

const MAX_VISIBLE_OFFSET = 2
const SWIPE_THRESHOLD = 40

const TestimonialsCarousel = ({
    testimonials,
    infoLabel = "Testimonials",
    heading = "What people say about us",
    para = "Real feedback from clients who trust FilerNow with their tax and business compliance.",
}: Props) => {
    const { activeIndex, goTo, next, prev, getOffset, pause, resume } =
        useTestimonialCarousel({ length: testimonials.length, autoPlayMs: 3500 })
    const prefersReducedMotion = usePrefersReducedMotion()
    const prevOffsets = useRef<Map<string, number>>(new Map())
    const dotRefs = useRef<Map<number, HTMLButtonElement>>(new Map())
    const dragState = useRef<{ startX: number } | null>(null)
    const stripRef = useRef<HTMLDivElement>(null)
    const isFirstRender = useRef(true)

    useEffect(() => {
        testimonials.forEach((t, i) => prevOffsets.current.set(t.id, getOffset(i)))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeIndex])

    useEffect(() => {
        if (isFirstRender.current) { isFirstRender.current = false; return }
        const strip = stripRef.current
        const dot = dotRefs.current.get(activeIndex)
        if (!strip || !dot) return
        strip.scrollTo({ left: dot.offsetLeft - strip.clientWidth / 2 + dot.clientWidth / 2, behavior: "smooth" })
    }, [activeIndex])

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowRight") { e.preventDefault(); next() }
        if (e.key === "ArrowLeft") { e.preventDefault(); prev() }
    }
    const handlePointerDown = (e: React.PointerEvent) => { dragState.current = { startX: e.clientX }; pause() }
    const handlePointerUp = (e: React.PointerEvent) => {
        if (!dragState.current) return
        const delta = e.clientX - dragState.current.startX
        if (Math.abs(delta) > SWIPE_THRESHOLD) delta < 0 ? next() : prev()
        dragState.current = null
        resume()
    }

    return (
        <SectionContainer containerClass="container-y-padding pt-0">
            <RevealOnScroll>
                <SectionTitle infoLabel={infoLabel} heading={heading} para={para} />
            </RevealOnScroll>

            <RevealOnScroll delay={150}>
                <div
                    role="region" aria-roledescription="carousel" aria-label={heading} tabIndex={0}
                    onKeyDown={handleKeyDown} onMouseEnter={pause} onMouseLeave={resume}
                    onPointerDown={handlePointerDown} onPointerUp={handlePointerUp}
                    onPointerLeave={() => dragState.current && handlePointerUp}
                    className="relative mx-auto w-full h-[430px] sm:h-[400px] md:h-[380px] overflow-hidden cursor-grab active:cursor-grabbing outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-brand-16 [--fn-card-w:clamp(260px,82vw,390px)] [--fn-gap:calc(var(--fn-card-w)*0.95)]"
                    style={{ touchAction: "pan-y" }}
                >
                    <span className="sr-only" aria-live="polite">Showing testimonial {activeIndex + 1} of {testimonials.length}</span>
                    {testimonials.map((testimonial, index) => {
                        const offset = getOffset(index)
                        const isActive = offset === 0
                        const isVisible = Math.abs(offset) <= MAX_VISIBLE_OFFSET
                        const prevOffset = prevOffsets.current.get(testimonial.id) ?? offset
                        const skipTransition = Math.abs(offset - prevOffset) > 1 || prefersReducedMotion
                        return (
                            <div
                                key={testimonial.id} role="group" aria-roledescription="slide" aria-hidden={!isActive}
                                className="absolute left-1/2 top-0 h-full w-[var(--fn-card-w)] py-2"
                                style={{
                                    transform: `translateX(calc(-50% + var(--fn-gap) * ${offset})) scale(${isActive ? 1 : 0.88})`,
                                    opacity: isVisible ? (isActive ? 1 : 0.45) : 0,
                                    zIndex: 10 - Math.abs(offset),
                                    pointerEvents: isActive ? "auto" : "none",
                                    transitionProperty: "transform, opacity",
                                    transitionDuration: skipTransition ? "0ms" : "600ms",
                                    transitionTimingFunction: "ease-out",
                                }}
                            >
                                <TestimonialCard testimonial={testimonial} isActive={isActive} />
                            </div>
                        )
                    })}
                </div>

                {/* testimonials navigation */}
                <div className="mt-8 flex items-center justify-center gap-6">
                    <button type="button" onClick={prev} aria-label="Previous testimonial"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-clr text-text-secondary default-transition hover:border-primary hover:text-primary cursor-pointer">
                        <ChevronLeft size={18} />
                    </button>
                    <div ref={stripRef} className="no-scrollbar flex max-w-[220px] items-center gap-2 overflow-x-auto scroll-smooth px-1 sm:max-w-none">
                        {testimonials.map((testimonial, index) => (
                            <button
                                key={testimonial.id}
                                ref={(el) => { if (el) dotRefs.current.set(index, el); else dotRefs.current.delete(index) }}
                                type="button" onClick={() => goTo(index)} aria-label={`Go to testimonial ${index + 1}`} aria-current={index === activeIndex}
                                className={cn("h-2 shrink-0 rounded-full cursor-pointer default-transition", index === activeIndex ? "w-6 bg-primary" : "w-2 bg-border-clr hover:bg-text-secondary-muter")}
                            />
                        ))}
                    </div>
                    <button type="button" onClick={next} aria-label="Next testimonial"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-clr text-text-secondary default-transition hover:border-primary hover:text-primary cursor-pointer">
                        <ChevronRight size={18} />
                    </button>
                </div>
            </RevealOnScroll>
        </SectionContainer>
    )
}

export default TestimonialsCarousel