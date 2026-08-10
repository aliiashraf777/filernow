import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/utils/cn"

type Props = {
    icon: React.ReactNode,
    title: string,
    description: string,
    href?: string,
    onClick?: () => void,
    variant?: 'primary' | 'neutral',
}

const ToolsCard = ({ icon, title, description, href, onClick, variant = 'neutral' }: Props) => {
    const className = cn(
        "relative sheen-sweep-hover overflow-hidden group flex items-center gap-4 rounded-brand-16 p-6 border default-transition text-left w-full",
        variant === "primary" && "bg-primary/5 border-primary/20 hover:bg-primary/10 shadow-tool-card",
        variant === "neutral" && "bg-border-clr/30 border-border-clr/40 hover:bg-primary/5 hover:border-primary/20 hover:shadow-tool-card",
    )

    const content = (
        <>
            <span className="grid place-items-center w-14 h-14 rounded-brand-16 bg-primary text-white shrink-0 group-hover:scale-105 default-transition">
                {icon}
            </span>
            <div className="flex-1">
                <h3 className="heading-h5 font-bold">{title}</h3>
                <p className="para-small text-text-secondary mt-1">{description}</p>
            </div>
            <ArrowRight size={20} className="text-primary shrink-0 default-transition group-hover:translate-x-1" />
        </>
    )

    // action-driven cards open something in-page — a real <button>, not a <Link> to a placeholder "#"
    if (onClick) {
        return (
            <button
                type="button"
                onClick={onClick}
                className={className}
            >
                {content}
            </button>
        )
    }

    return (
        <Link
            href={href ?? "#"}
            className={className}
        >
            {content}
        </Link>)
}

export default ToolsCard