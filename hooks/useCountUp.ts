"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "@/hooks/useInView"

export function useCountUp(target: number, duration = 1500) {
    const [value, setValue] = useState(0)
    const { ref, inView } = useInView<HTMLDivElement>(0.4)
    const hasRun = useRef(false)

    useEffect(() => {
        if (!inView || hasRun.current) return
        hasRun.current = true

        const start = performance.now()
        let frameId: number

        const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            setValue(Math.floor(progress * target))
            if (progress < 1) frameId = requestAnimationFrame(tick)
        }

        frameId = requestAnimationFrame(tick)

        return () => cancelAnimationFrame(frameId)
    }, [inView, target, duration])

    return { value, ref }
}