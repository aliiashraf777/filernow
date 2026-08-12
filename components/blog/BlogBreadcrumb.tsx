// components/blog/BlogBreadcrumb.tsx
import Link from "next/link"
import { ChevronRight } from "lucide-react"

type Crumb = { label: string, href?: string }
type Props = { items: Crumb[] }

const BlogBreadcrumb = ({ items }: Props) => (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 para-small">
        {items.map((item, i) => {
            const isLast = i === items.length - 1
            return (
                <span key={item.label} className="flex items-center gap-2">
                    {item.href && !isLast ? (
                        <Link href={item.href} className="text-text-secondary-muter hover:text-primary default-transition">{item.label}</Link>
                    ) : (
                        <span className={isLast ? "font-semibold text-primary" : "text-text-secondary-muter"}>{item.label}</span>
                    )}
                    {!isLast && <ChevronRight size={14} className="text-text-secondary-muter" />}
                </span>
            )
        })}
    </nav>
)

export default BlogBreadcrumb