import { IBlogAuthor, IBlogCategory, IBlogListResponse, IBlogPost } from "../types/blogs/blog"

type RawBlogAuthor = { name: string, role: string, avatar_src: string, bio?: string }
type RawBlogPost = {
    id: string, slug: string, title: string, excerpt: string, category: string,
    cover_image: string, cover_image_alt: string, published_at: string,
    read_time_minutes?: number, featured?: boolean, author?: RawBlogAuthor, content?: string,
}
type RawBlogCategory = { slug: string, label: string, count: number }
type RawBlogListResponse = { items: RawBlogPost[], total: number, page: number, page_size: number }

function mapBlogAuthor(raw: RawBlogAuthor): IBlogAuthor {
    return { name: raw.name, role: raw.role, avatarSrc: raw.avatar_src, bio: raw.bio }
}

export function mapBlogPost(raw: RawBlogPost): IBlogPost {
    return {
        id: raw.id,
        slug: raw.slug,
        title: raw.title,
        excerpt: raw.excerpt,
        category: raw.category,
        coverImage: raw.cover_image,
        coverImageAlt: raw.cover_image_alt,
        publishedAt: raw.published_at,
        readTimeMinutes: raw.read_time_minutes,
        featured: raw.featured,
        author: raw.author ? mapBlogAuthor(raw.author) : undefined,
        content: raw.content,
    }
}

export function mapBlogCategory(raw: RawBlogCategory): IBlogCategory {
    return { slug: raw.slug, label: raw.label, count: raw.count }
}

export function mapBlogListResponse(raw: RawBlogListResponse): IBlogListResponse {
    return { items: raw.items.map(mapBlogPost), total: raw.total, page: raw.page, pageSize: raw.page_size }
}