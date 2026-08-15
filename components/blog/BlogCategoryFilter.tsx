// components/blog/BlogCategoryFilter.tsx
"use client"
import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { cn } from "@/utils/cn"
import { IBlogCategory } from "@/lib/types/blogs/blog"


type Props = { categories: IBlogCategory[] }

const BlogCategoryFilter = ({ categories }: Props) => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const activeCategory = searchParams.get("category") ?? "all"

    const handleSelect = (slug: string) => {
        const params = new URLSearchParams(searchParams.toString())
        slug === "all" ? params.delete("category") : params.set("category", slug)
        params.delete("page")
        router.push(`${pathname}?${params.toString()}`)
    }

    const pillClass = (active: boolean) => cn(
        "shrink-0 rounded-full border px-4 py-2 para-small font-semibold default-transition cursor-pointer",
        active ? "border-primary bg-primary text-white" : "border-border-clr bg-card-bg-clr text-text-secondary hover:border-primary/40"
    )

    return (
        <div className="no-scrollbar flex items-center gap-2 overflow-x-auto">
            <button
                type="button"
                onClick={() => handleSelect("all")}
                className={pillClass(activeCategory === "all")}
            >
                All
            </button>

            {categories.map((cat) => (
                <button
                    key={cat.slug}
                    type="button"
                    onClick={() => handleSelect(cat.slug)}
                    className={pillClass(activeCategory === cat.slug)}
                >
                    {cat.label}
                </button>
            ))}
        </div>
    )
}

export default BlogCategoryFilter