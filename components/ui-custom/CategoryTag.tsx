import { cn } from "@/utils/cn"

type Props = {
    label: string,
    className?: string,
}

// intentionally separate from InfoBadge - InfoBadge's pulsing-dot
// styling reads as a "live status" indicator (used for eyebrows like
// "Testimonials"); a blog category is just a static classification tag
const CategoryTag = ({ label, className }: Props) => {
    return (
        <span className={cn(
            "w-max rounded-full bg-primary-lighter px-2.5 py-1 para-tiny font-semibold text-primary",
            className
        )}>
            {label}
        </span>
    )
}

export default CategoryTag