// MOCK DATA — stands in for a real fetch until the FastAPI CMS is live.
// Shaped identically to what GET /api/blogs is expected to return (see
// IBlogListResponse in types/blog.ts), so swapping this out later is a
// one-file change in lib/api/blogs.ts, not a component rewrite.
//
// daysAgo() only exists so this mock data "ages" realistically every
// time you view it locally — the real backend will send real
// `publishedAt` ISO strings instead.
const daysAgo = (n: number) => new Date(Date.now() - n * 24 * 60 * 60 * 1000).toISOString()

import type { IBlogPost } from "@/lib/types/blogs/blog"

export const homeFeaturedBlogPosts: IBlogPost[] = [
    {
        id: "blog1",
        slug: "understanding-tax-deductions-in-pakistan",
        title: "Understanding Tax Deductions in Pakistan",
        excerpt: "Learn about tax deductions in Pakistan and how to reduce your taxable income legally.",
        category: "Tax Tips",
        // image: "https://images.pexels.com/photos/6994996/pexels-photo-6994996.jpeg?auto=compress&cs=tinysrgb&w=900",
        coverImage: "/assets/blog/blog1.png",
        coverImageAlt: "Coins in a jar next to financial records and a notebook",
        publishedAt: daysAgo(1),
        readTimeMinutes: 8,
        featured: true,
    },
    {
        id: "blog2",
        slug: "how-to-file-a-tax-return-in-pakistan-2025",
        title: "How To File A Tax Return In Pakistan 2025",
        excerpt: "Step-by-step walkthrough of the active tax filing process for individuals and salaried class.",
        category: "Guides",
        // image: "https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=900",
        coverImage: "/assets/blog/blog2.png",
        coverImageAlt: "Hands typing on a laptop with a tax filing form open",
        publishedAt: daysAgo(5),
        readTimeMinutes: 6,
        featured: true,
    },
    {
        id: "blog3",
        slug: "income-tax-for-freelancers-in-pakistan",
        title: "Income Tax For Freelancers In Pakistan",
        excerpt: "Navigate foreign remittance rules, low-tax exports, and how to maintain active filer status.",
        category: "Freelancing",
        // image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=900",
        coverImage: "/assets/blog/blog3.png",
        coverImageAlt: "Freelancer working on a laptop and phone at a home desk",
        publishedAt: daysAgo(8),
        readTimeMinutes: 5,
        featured: true,
    },
    {
        id: "blog4",
        slug: "tax-benefits-for-businesses-in-pakistan",
        title: "Tax Benefits For Businesses In Pakistan",
        excerpt: "Explore corporate exemptions, startup tax holidays, and structure options under SECP regulations.",
        category: "Business",
        // image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900",
        coverImage: "/assets/blog/blog4.png",
        coverImageAlt: "Business owner reviewing documents at a desk",
        publishedAt: daysAgo(30),
        readTimeMinutes: 7,
        featured: true,
    },
]