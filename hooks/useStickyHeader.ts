// hooks/useStickyHeader.ts
"use client"
import { useEffect, useState } from "react"

export function useStickyHeader(selector: string, threshold = 100) {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > threshold)
        handleScroll()
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [threshold])

    useEffect(() => {
        const node = document.querySelector(selector)
        if (!node) return

        const updateHeight = () => {
            document.documentElement.style.setProperty(
                "--sticky-header-height",
                `${node.getBoundingClientRect().height}px`
            )
        }

        updateHeight()
        const observer = new ResizeObserver(updateHeight)
        observer.observe(node)
        return () => observer.disconnect()
    }, [selector])

    return { isScrolled }
}