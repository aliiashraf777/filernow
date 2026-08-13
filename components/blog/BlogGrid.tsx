// components/blog/BlogGrid.tsx
"use client"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Loader2 } from "lucide-react"
import BlogCard from "./BlogCard"
import type { IBlogPost, IBlogListResponse } from "@/lib/types/blogs/blog"

// const PAGE_SIZE = 9

type Props = {
    initialData: IBlogListResponse,
    pageSize: number,
}

const BlogGrid = ({ initialData, pageSize }: Props) => {
    const searchParams = useSearchParams()
    const category = searchParams.get("category") ?? ""
    const search = searchParams.get("search") ?? ""

    const [posts, setPosts] = useState<IBlogPost[]>(initialData.items)
    const [total, setTotal] = useState(initialData.total)
    const [page, setPage] = useState(initialData.page)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setPosts(initialData.items)
        setTotal(initialData.total)
        setPage(initialData.page)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialData])

    const hasMore = posts.length < total

    const loadMore = async () => {
        setIsLoading(true)
        try {
            const params = new URLSearchParams()
            if (category) params.set("category", category)
            if (search) params.set("search", search)
            params.set("page", String(page + 1))
            // params.set("pageSize", String(PAGE_SIZE))
            params.set("pageSize", String(pageSize))

            const res = await fetch(`/api/blogs?${params.toString()}`)
            const data: IBlogListResponse = await res.json()
            setPosts((prev) => [...prev, ...data.items])
            setPage(data.page)
        } catch (err) {
            console.error("[BlogGrid] failed to load more posts:", err)
        } finally {
            setIsLoading(false)
        }
    }

    if (posts.length === 0) {
        return (
            <div className="rounded-brand-16 border border-border-clr bg-card-bg-clr py-20 text-center">
                <p className="para-base text-text-secondary">No articles match your search.</p>
            </div>
        )
    }

    return (
        <div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => <BlogCard key={post.id} post={post} />)}
            </div>

            {hasMore && (
                <div className="mt-10 flex justify-center">
                    <button
                        type="button"
                        onClick={loadMore}
                        disabled={isLoading}
                        className="flex items-center gap-2 rounded-brand-8 bg-text-dark px-6 py-3 para-small font-semibold text-white default-transition hover:opacity-90 disabled:opacity-60 cursor-pointer"
                    >
                        {isLoading && <Loader2 size={16} className="animate-spin" />}
                        {isLoading ? "Loading..." : "Load More Articles"}
                    </button>
                </div>
            )}
        </div>
    )
}

export default BlogGrid