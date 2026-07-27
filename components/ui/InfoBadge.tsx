// components/ui/InfoBadge.tsx
import { cn } from "@/utils/cn"

type Props = {
    label: string
    className?: string
}

const InfoBadge = ({ label, className }: Props) => {
    return (
        <span className={cn("w-max flex items-center gap-2 rounded-full bg-primary-lighter text-primary para-small font-semibold px-4 py-1.5 border border-primary/20", className)}>
            <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {label}
        </span>
    )
}

export default InfoBadge