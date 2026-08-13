"use client"

import { useEffect, useState } from "react"
import Loader from "./Loader"
import { cn } from "@/utils/cn"

const MIN_VISIBLE_MS = 900 // ~ two-thirds of one GIF loop — long enough to read as intentional

const FilerSplashLoader = () => {
    const [isFadingOut, setIsFadingOut] = useState(false)
    const [isMounted, setIsMounted] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFadingOut(true)
            document.documentElement.classList.add("app-ready") // ← new
        }, MIN_VISIBLE_MS)
        return () => clearTimeout(timer)
    }, [])

    if (!isMounted) return null

    return (
        <div
            aria-hidden={isFadingOut}
            onTransitionEnd={(e) => {
                if (e.propertyName === "opacity" && isFadingOut) setIsMounted(false)
            }}
            className={cn(
                "fixed inset-0 z-[999] flex items-center justify-center bg-black/15 backdrop-blur-sm default-transition",
                "transition-opacity duration-500 ease-out motion-reduce:duration-0",
                isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
            )}
        >
            {/* <Loader size={170} label="Loading FilerNow" /> */}
            <Loader size={170} />
        </div>
    )
}

export default FilerSplashLoader