// lib/api/blogs.ts
import { blogPosts } from "@/data/blogData"
import { mapBlogPost, mapBlogListResponse, mapBlogCategory } from "./mappers"
import type { IBlogPost, IBlogListResponse, IBlogCategory } from "@/lib/types/blogs/blog"

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL

type BlogQueryParams = {
    category?: string, search?: string, page?: number, pageSize?: number, featured?: boolean,
}

function filterMockPosts(params: BlogQueryParams): IBlogListResponse {
    const { category, search, page = 1, pageSize = 6, featured } = params
    let filtered = [...blogPosts]

    if (category && category !== "all") {
        filtered = filtered.filter((p) => p.category.toLowerCase() === category.toLowerCase())
    }
    if (search) {
        const q = search.toLowerCase()
        filtered = filtered.filter((p) => p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q))
    }
    if (featured) filtered = filtered.filter((p) => p.featured)

    filtered.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

    const total = filtered.length
    const start = (page - 1) * pageSize
    return { items: filtered.slice(start, start + pageSize), total, page, pageSize }
}

export async function getBlogPosts(params: BlogQueryParams = {}): Promise<IBlogListResponse> {
    if (!API_BASE) return filterMockPosts(params)

    try {
        const query = new URLSearchParams()
        if (params.category) query.set("category", params.category)
        if (params.search) query.set("search", params.search)
        if (params.featured) query.set("featured", "true")
        query.set("page", String(params.page ?? 1))
        query.set("page_size", String(params.pageSize ?? 6))

        const res = await fetch(`${API_BASE}/api/blogs?${query.toString()}`, {
            next: { revalidate: 300, tags: ["blogs"] },
        })
        if (!res.ok) throw new Error(`GET /api/blogs failed: ${res.status}`)
        return mapBlogListResponse(await res.json())
    } catch (err) {
        console.error("[blogs] falling back to mock data:", err)
        return filterMockPosts(params)
    }
}

export async function getFeaturedBlogPosts(): Promise<IBlogPost[]> {
    const { items } = await getBlogPosts({ featured: true, pageSize: 4 })
    return items
}

export async function getBlogPostBySlug(slug: string): Promise<IBlogPost | null> {
    if (!API_BASE) return blogPosts.find((p) => p.slug === slug) ?? null

    try {
        const res = await fetch(`${API_BASE}/api/blogs/${slug}`, {
            next: { revalidate: 300, tags: ["blogs", `blog:${slug}`] },
        })
        if (res.status === 404) return null
        if (!res.ok) throw new Error(`GET /api/blogs/${slug} failed: ${res.status}`)
        return mapBlogPost(await res.json())
    } catch (err) {
        console.error(`[blogs] falling back to mock data for "${slug}":`, err)
        return blogPosts.find((p) => p.slug === slug) ?? null
    }
}

export async function getBlogCategories(): Promise<IBlogCategory[]> {
    if (!API_BASE) return getCategoriesFromMockPosts()

    try {
        const res = await fetch(`${API_BASE}/api/blogs/categories`, { next: { revalidate: 300, tags: ["blogs"] } })
        if (!res.ok) throw new Error(`GET /api/blogs/categories failed: ${res.status}`)
        const raw: unknown[] = await res.json()
        return raw.map((c) => mapBlogCategory(c as Parameters<typeof mapBlogCategory>[0]))
    } catch (err) {
        console.error("[blogs] falling back to mock categories:", err)
        return getCategoriesFromMockPosts()
    }
}

function getCategoriesFromMockPosts(): IBlogCategory[] {
    const counts = new Map<string, number>()
    blogPosts.forEach((p) => counts.set(p.category, (counts.get(p.category) ?? 0) + 1))
    return Array.from(counts.entries()).map(([label, count]) => ({
        slug: label.toLowerCase().replace(/\s+/g, "-"), label, count,
    }))
}

export async function getAllBlogSlugs(): Promise<string[]> {
    if (!API_BASE) return blogPosts.map((p) => p.slug)
    try {
        const res = await fetch(`${API_BASE}/api/blogs?page_size=1000`, { next: { revalidate: 3600, tags: ["blogs"] } })
        if (!res.ok) throw new Error(`GET /api/blogs failed: ${res.status}`)
        const data = mapBlogListResponse(await res.json())
        return data.items.map((p) => p.slug)
    } catch (err) {
        console.error("[blogs] falling back to mock slugs:", err)
        return blogPosts.map((p) => p.slug)
    }
}