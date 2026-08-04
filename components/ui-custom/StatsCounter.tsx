// components/ui/StatCounter.tsx
"use client"
import { useCountUp } from "@/hooks/useCountUp"

type Props = {
    to: number
    suffix?: string
    label: string
}

const StatCounter = ({ to, suffix = "", label }: Props) => {
    const { value, ref } = useCountUp(to)

    return (
        <div ref={ref}>
            <h3 className="heading-h3 text-[26px] text-primary text-center">
                {value.toLocaleString()}{suffix}
            </h3>
            <p className="mt-2 para-base text-text-secondary text-center">{label}</p>
        </div>
    )
}

export default StatCounter