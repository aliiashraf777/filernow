import { cn } from "@/utils/cn"

type Props = {
    label: string
    className?: string
    variant?: "primary" | "neutral",
}

const InfoBadge = ({ label, className, variant = "neutral" }: Props) => {
    return (
        <span className={cn(
            "w-max flex items-center gap-2 rounded-full para-small font-semibold capitalize px-4 py-1.5 border border-primary/20 shadow-primary-btn",
            variant === "primary" && "bg-primary-lighter text-primary",
            variant === "neutral" && "bg-white text-primary",
            className
        )}>
            <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {label}
        </span>
    )
}

export default InfoBadge