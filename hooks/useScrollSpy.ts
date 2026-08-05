"use client"
import { useEffect, useRef, useState } from "react"

export function useScrollSpy<T extends HTMLElement>(itemCount: number, triggerRatio = 0.4) {
    const [activeIndex, setActiveIndex] = useState(0)
    const itemRefs = useRef<(T | null)[]>([])

    useEffect(() => {
        const onScroll = () => {
            const triggerY = window.innerHeight * triggerRatio
            let next = 0
            itemRefs.current.forEach((el, i) => {
                if (!el) return
                if (el.getBoundingClientRect().top < triggerY) next = i
            })
            setActiveIndex(next)
        }
        window.addEventListener("scroll", onScroll, { passive: true })
        onScroll()
        return () => window.removeEventListener("scroll", onScroll)
    }, [triggerRatio])

    const setItemRef = (i: number) => (el: T | null) => { itemRefs.current[i] = el }

    return { activeIndex, setItemRef }
}