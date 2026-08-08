"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { cn } from "@/utils/cn"

const SHOW_AFTER_PX = 400

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX)
        onScroll()

        window.addEventListener("scroll", onScroll, { passive: true })

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={cn(
                "fixed sheen-sweep-hover overflow-hidden bottom-6 right-6 z-scroll-top grid place-items-center w-11 h-11 rounded-full",
                "bg-primary text-white shadow-primary-btn default-transition cursor-pointer",
                "hover:scale-105 hover:shadow-tool-card",
                visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
            )}
        >
            <ArrowUp size={20} />
        </button>
    )
}

export default ScrollToTopButton