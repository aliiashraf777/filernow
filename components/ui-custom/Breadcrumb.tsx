import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/utils/cn"

export type BreadcrumbItem = { label: string, href?: string }

type Props = {
    items: BreadcrumbItem[],
    className?: string,
}

const Breadcrumb = ({ items, className }: Props) => (
    <nav aria-label="Breadcrumb"
        className={cn("mb-3x", className)}
    >
        <ol className="flex flex-wrap items-center gap-1.5 para-tiny text-text-secondary-muted">
            {items.map((item, i) => {
                const isLast = i === items.length - 1
                return (
                    <li key={item.label} className="flex items-center gap-1.5">
                        {item.href && !isLast ? (
                            <Link href={item.href} className="hover:text-primary default-transition">{item.label}</Link>
                        ) : (
                            <span aria-current={isLast ? "page" : undefined} className={isLast ? "text-primary font-medium" : ""}>
                                {item.label}
                            </span>
                        )}
                        {!isLast && <ChevronRight size={12} className="shrink-0" aria-hidden />}
                    </li>
                )
            })}
        </ol>
    </nav>
)

export default Breadcrumb