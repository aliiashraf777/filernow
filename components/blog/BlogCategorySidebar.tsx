// components/blog/BlogCategorySidebar.tsx
import Link from "next/link"
import type { IBlogCategory } from "@/lib/types/blogs/blog"

const BlogCategorySidebar = ({ categories }: { categories: IBlogCategory[] }) => (
    <div className="bg-card-bg-clrx">
        <h4 className="heading-h6 text-text-dark">Categories</h4>
        <div className="mt-4 flex flex-col gap-1 divide-y">
            {categories.map((cat) => (
                <Link
                    key={cat.slug}
                    href={`/blog?category=${cat.slug}`}
                    className="group flex items-center justify-between px-3 py-2.5 para-small default-transition hover:bg-primary-lighter hover:text-primary"
                >
                    <span className="text-text-secondary">{cat.label}</span>
                    <span className="rounded-sm bg-primary-lighter group-hover:bg-background px-3 py-1 para-tiny font-semibold text-primary">
                        {cat.count}
                    </span>
                </Link>
            ))}
        </div>
    </div>
)

export default BlogCategorySidebar