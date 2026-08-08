"use client"

import { cn } from "@/utils/cn"
import { useCountUp } from "@/hooks/useCountUp"

type Props = {
    to: number,
    suffix?: string,
    description: string,
    align?: 'left' | 'center',
    variant?: 'highlighted' | 'white',
    className?: string,
}

const BentoStatCard = ({ to, suffix = "", description, align = 'left', variant = 'highlighted', className }: Props) => {
    const { value, ref } = useCountUp(to)

    return (
        <div
            ref={ref}
            className={cn(
                "group flex flex-col justify-center gap-7.5 rounded-brand-16 px-5 py-10 md:py-5 default-transition hover:-translate-y-1",
                variant === 'highlighted' ? "bg-primary-lighter hover:shadow-tool-card" : "bg-background hover:shadow-icon-card",
                align === 'center' ? "items-center text-center" : "items-start text-left",
                className,
            )}
        >
            <h3
                className={cn(
                    "heading-h1 text-[50px] leading-[28px] default-transition group-hover:scale-105",
                    variant === 'highlighted' ? "text-primary" : "text-text-dark",
                )}
            >
                {value.toLocaleString()}{suffix}
            </h3>
            <p className="para-small leading-[16.5px] text-text-secondary-muted">
                {description}
            </p>
        </div>
    )
}

export default BentoStatCard