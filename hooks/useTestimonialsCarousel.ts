"use client"
import { useCallback, useEffect, useRef, useState } from "react"

type Options = {
    length: number,
    autoPlayMs?: number,
}

export function useTestimonialCarousel({ length, autoPlayMs = 3500 }: Options) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

    const goTo = useCallback((index: number) => {
        setActiveIndex(((index % length) + length) % length)
    }, [length])

    const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo])
    const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo])

    // tab in the background shouldn't keep advancing slides — otherwise you
    // switch back and the carousel has silently jumped several slides ahead
    useEffect(() => {
        const handleVisibility = () => setIsPaused(document.hidden)
        document.addEventListener("visibilitychange", handleVisibility)
        return () => document.removeEventListener("visibilitychange", handleVisibility)
    }, [])

    useEffect(() => {
        if (isPaused || autoPlayMs <= 0 || length <= 1) return

        timerRef.current = setInterval(() => {
            setActiveIndex((current) => (current + 1) % length)
        }, autoPlayMs)

        return () => {
            if (timerRef.current) clearInterval(timerRef.current)
        }
    }, [isPaused, autoPlayMs, length])

    const getOffset = useCallback((index: number) => {
        const raw = index - activeIndex
        const half = length / 2
        if (raw > half) return raw - length
        if (raw < -half) return raw + length
        return raw
    }, [activeIndex, length])

    return {
        activeIndex,
        goTo,
        next,
        prev,
        getOffset,
        pause: () => setIsPaused(true),
        resume: () => setIsPaused(false),
        // kept as aliases so existing onMouseEnter/onMouseLeave usage doesn't break
        onMouseEnter: () => setIsPaused(true),
        onMouseLeave: () => setIsPaused(false),
    }
}