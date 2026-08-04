"use client"

import { cn } from "@/utils/cn"
import { useInView } from "@/hooks/useInView"

type Props = {
    children: React.ReactNode,
    delay?: number,
    className?: string,
}

const RevealOnScroll = ({ children, delay = 0, className }: Props) => {
    const { ref, inView } = useInView<HTMLDivElement>(0.15)

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={cn(
                "transition-all duration-700 ease-out",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
                className,
            )}
        >
            {children}
        </div>
    )
}

export default RevealOnScroll