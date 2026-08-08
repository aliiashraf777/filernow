// components/home/WhyFilerNowWave.tsx
"use client"
import { useEffect, useRef } from "react"
import { useInView } from "@/hooks/useInView"

const WhyFilerNowWave = () => {
    const pathRef = useRef<SVGPathElement>(null)
    const { ref, inView } = useInView<HTMLDivElement>(0.2)

    useEffect(() => {
        const path = pathRef.current
        if (!path) return
        const length = path.getTotalLength()
        path.style.strokeDasharray = `${length}`
        path.style.strokeDashoffset = inView ? "0" : `${length}`
    }, [inView])

    return (
        <div
            ref={ref}
            className="absolute borderx"
            style={{ left: "-1.53%", right: "-1.58%", top: "-1.89%", bottom: "-31.88%" }}
        >
            {/* exact path from your shape.svg — don't touch the d or viewBox, the wrapper insets above are what align it */}
            <svg viewBox="0 0 1210 213" preserveAspectRatio="none" fill="none" className="w-full h-full overflow-visible">
                <path
                    ref={pathRef}
                    d="M18.0076 49.3025C400.008 393.303 354.008 -182.197 756.508 68.3028C1007.53 224.529 1027.51 -93.697 1191.51 74.3028"
                    stroke="#C8102E"
                    strokeWidth={6}
                    strokeLinecap="round"
                    className="drop-shadow-[0_31px_5px_rgba(0,0,0,0.16)]"
                    style={{ transition: "stroke-dashoffset 1.6s ease-out" }}
                />
            </svg>
        </div>
    )
}

export default WhyFilerNowWave