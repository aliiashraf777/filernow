"use client"
import { useEffect, useRef, useState } from "react"

export function useScrollProgress<T extends HTMLElement>(viewportFraction = 0.5) {
    const ref = useRef<T>(null)
    const [progressPct, setProgressPct] = useState(0)

    useEffect(() => {
        const onScroll = () => {
            const node = ref.current
            if (!node) return
            const { top, height } = node.getBoundingClientRect()
            const scrolled = -top
            const ratio = Math.min(Math.max(scrolled / (height - window.innerHeight * viewportFraction), 0), 1)
            setProgressPct(ratio * 100)
        }
        window.addEventListener("scroll", onScroll, { passive: true })
        onScroll()
        return () => window.removeEventListener("scroll", onScroll)
    }, [viewportFraction])

    return { ref, progressPct }
}