import { cn } from "@/utils/cn"

type Props = {
    label: string,
    className?: string,
}

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