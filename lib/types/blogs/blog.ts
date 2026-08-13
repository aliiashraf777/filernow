// Single source of truth for the blog shape across the whole app —
// home "featured posts" widget, /blog listing, /blog/[slug] detail,
// and the contract handed to the FastAPI/CMS side (see the Pydantic
// mirror suggested below). Every surface that touches a blog post
// imports THIS type — nothing redeclares its own shape.

export interface IBlogAuthor {
    name: string,
    role: string,
    avatarSrc: string,
    bio?: string,
}

// deliberately NOT imported from data/appData's IFaqItem — that would
// make a types file depend on a data file, backwards from how the rest
// of this app is layered. Same shape ({id, question, answer}) means
// FaqAccordion (which expects IFaqItem[]) accepts IBlogFaqItem[] anyway —
// TypeScript matches by structure, not by import path.
export interface IBlogFaqItem {
    id: string
    question: string
    answer: string
}

export interface IBlogPost {
    id: string,
    slug: string,               // drives /blog/[slug]
    title: string,
    excerpt: string,
    category: string,           // display label, e.g. "Tax Tips" — see IBlogCategory for filter/counts
    coverImage: string,
    coverImageAlt: string,
    publishedAt: string,        // ISO 8601 — "time ago" is derived client-side via formatTimeAgo,
    // never stored as a string like "5 days ago" (goes stale under caching)
    readTimeMinutes?: number,
    featured?: boolean,         // true = eligible for the home page widget
    author?: IBlogAuthor,
    content?: string,           // full body — only present on the detail-page fetch, not the list fetch
    faqs?: IBlogFaqItem[]   // per-post FAQs — see §8 below
}

export interface IBlogCategory {
    slug: string,
    label: string,
    count: number,
}

// shape of GET /api/blogs — matches a typical FastAPI paginated-list response
export interface IBlogListResponse {
    items: IBlogPost[],
    total: number,
    page: number,
    pageSize: number,
}