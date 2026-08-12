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

const usmanAuthor = {
    name: "Muhammad Usman, ACA",
    role: "Senior Tax Consultant & Financial Advisory Lead",
    avatarSrc: "/assets/blog/authors/usman.png",
    // avatarSrc: "/assets/testi/testi1.jpg",
    bio: "Muhammad Usman is a Chartered Accountant with over 10 years of experience helping corporate clients, startups, and freelancers navigate the complex tax landscape of Pakistan and FBR regulations.",
}

const author1 = {
    name: "Ayesha Khan",
    role: "Senior Tax Consultant",
    avatarSrc: "/assets/testi/testi1.jpg",
    bio: "8+ years advising salaried and freelance clients on FBR compliance.",
}

const author2 = {
    name: "Bilal Ahmed",
    role: "Corporate Compliance Lead",
    avatarSrc: "/assets/testi/testi2.png",
    bio: "Specializes in company registration and SECP filings for growing businesses.",
}

export const blogPosts: IBlogPost[] = [
    {
        id: "blog0",
        slug: "understanding-tax-deductions-in-pakistan",
        title: "Understanding Tax Deductions in Pakistan",
        excerpt: "Learn about tax deductions in Pakistan and how to reduce your taxable income legally.",
        category: "Tax Tips",
        coverImage: "/assets/blog/blog1.png",
        coverImageAlt: "Coins in a jar next to financial records and a notebook",
        publishedAt: daysAgo(1),
        readTimeMinutes: 8,
        featured: true,
        author: usmanAuthor,
        content: `## Understanding Salary Tax Deductions

Most salaried individuals in Pakistan overpay their tax simply because they don't know which deductions they're entitled to claim. Here's a breakdown of the ones that matter most.

## Zakat Contributions

Zakat deducted at source under the Zakat and Ushr Ordinance is excluded from your taxable income entirely — no separate claim needed if your bank already deducts it.

## Provident Fund

Contributions to a **recognized provident fund** are exempt up to the annually notified limit. Anything above that limit is added back to taxable income.

## Key Deductions to Track

- Zakat paid via bank deduction or certificate
- Recognized provident fund contributions
- Approved pension fund contributions under the Voluntary Pension System
- Medical allowance (up to 10% of basic salary, if not separately reimbursed)

## Common Mistake

Many salaried employees assume their employer automatically applies every eligible deduction during monthly withholding. In practice, employers apply the *standard* ones — Zakat and provident fund — but pension fund contributions and some allowances need to be claimed explicitly at return-filing time.

**A quick way to check:** compare your total annual tax withheld (from your salary certificate) against what our [tax calculator](/) estimates for your income bracket. A large gap often means an unclaimed deduction.`,
        faqs: [
            {
                id: "faq-1",
                question: "Is Zakat deductible from my taxable salary?",
                answer: "Yes — Zakat paid under the Zakat and Ushr Ordinance is deducted before your taxable income is calculated, as long as it's deducted at source or paid against a valid Zakat certificate.",
            },
            {
                id: "faq-2",
                question: "Do provident fund contributions reduce my tax?",
                answer: "Contributions to a recognized provident fund are exempt up to the limits set by FBR each year — check the current year's limit before assuming full exemption.",
            },
            {
                id: "faq-3",
                question: "Can I claim medical allowance as a deduction?",
                answer: "Medical allowance up to 10% of basic salary is exempt if it isn't separately reimbursed by your employer. If your employer reimburses actual medical bills instead, the allowance itself becomes taxable.",
            },
        ],
    },
    {
        id: "blog1",
        slug: "how-to-file-a-tax-return-in-pakistan-2025",
        title: "How To File A Tax Return In Pakistan 2025",
        excerpt: "Step-by-step walkthrough of the active tax filing process for individuals and salaried class.",
        category: "Guides",
        coverImage: "/assets/blog/blog2.png",
        coverImageAlt: "Hands typing on a laptop with a tax filing form open",
        publishedAt: daysAgo(5),
        readTimeMinutes: 6,
        featured: true,
        author: usmanAuthor,
        content: `## What You'll Need

                [Placeholder content — full copy pending. Structure: required documents list, IRIS portal walkthrough, typical processing time, common rejection reasons.]`,
    },
    {
        id: "blog2",
        slug: "income-tax-for-freelancers-in-pakistan",
        title: "Income Tax For Freelancers In Pakistan",
        excerpt: "Navigate foreign remittance rules, low-tax exports, and how to maintain active filer status.",
        category: "Freelancing",
        coverImage: "/assets/blog/blog3.png",
        coverImageAlt: "Freelancer working on a laptop and phone at a home desk",
        publishedAt: daysAgo(8),
        readTimeMinutes: 5,
        featured: true,
        author: usmanAuthor,
        content: `## Freelance Income and FBR

[Placeholder content — full copy pending. Structure: remittance tax exemption thresholds, PSEB registration benefit, invoicing requirements for international clients.]`,
    },
    {
        id: "blog3",
        slug: "company-vs-sole-proprietorship-2026",
        title: "Company vs. Sole Proprietorship: What Should You Register?",
        excerpt: "A practical comparison for founders deciding between speed and long-term structure.",
        category: "Business",
        coverImage: "/assets/blog/blog4.png",
        coverImageAlt: "Two entrepreneurs discussing business structure",
        publishedAt: "2026-04-30T09:00:00.000Z",
        readTimeMinutes: 6,
        featured: true,
        author: author2,
        content: `## Choosing Your Structure

[Placeholder content — full copy pending. Structure: liability comparison, tax rate differences, SECP incorporation cost/time vs sole proprietorship simplicity.]`,
    },
    {
        id: "blog4",
        slug: "understanding-wealth-statements",
        title: "Understanding Wealth Statements",
        excerpt: "A simple guide to declaring your assets accurately to avoid audit notices from FBR.",
        category: "Tax Tips",
        coverImage: "/assets/blog/blog5.png",
        coverImageAlt: "Wealth statement document with a pen and rings",
        publishedAt: daysAgo(21),
        readTimeMinutes: 6,
        author: usmanAuthor,
        content: `## GST Basics

[Placeholder content — full copy pending. Structure: turnover threshold, voluntary vs mandatory registration, input tax credit explanation.]`,
    },
    {
        id: "blog5",
        slug: "secp-private-limited-company-registration",
        title: "SECP Private Limited Company Registration",
        excerpt: "Complete registration checklist from name reservation to getting your certified incorporation.",
        category: "Guides",
        coverImage: "/assets/blog/blog6.png",
        coverImageAlt: "Company registration stamp and documents on a desk",
        publishedAt: daysAgo(30),
        readTimeMinutes: 9,
        author: usmanAuthor,
        content: `## PSW and WEBOC

[Placeholder content — full copy pending. Structure: eligibility, required documents, typical timeline, common issues for first-time traders.]`,
    },
    {
        id: "blog6",
        slug: "sst-vs-gst-retailer-sales-tax-guide",
        title: "SST vs GST: Retailer Sales Tax Guide",
        excerpt: "A simple breakdown of regional sales taxes on services versus federal goods tax.",
        category: "Business",
        coverImage: "/assets/blog/blog7.png",
        coverImageAlt: "Point-of-sale terminal in a retail store",
        publishedAt: daysAgo(34),
        readTimeMinutes: 5,
        author: usmanAuthor,
        content: `## Foreign Employer, Local Tax

[Placeholder content — full copy pending. Structure: residency-based taxation, foreign tax credit, remittance documentation.]`,
    },
    {
        id: "blog7",
        slug: "receiving-usd-remittances-legally",
        title: "Receiving USD Remittances Legally",
        excerpt: "Optimize banking setups and withholding taxes on technology export proceeds.",
        category: "Freelancing",
        coverImage: "/assets/blog/blog8.png",
        coverImageAlt: "USD banknotes next to a mobile banking app",
        publishedAt: daysAgo(60),
        readTimeMinutes: 4,
        author: usmanAuthor,
        content: `## Annual Filings

[Placeholder content — full copy pending. Structure: Form A/29 deadlines, annual return, financial statement filing, penalty structure for late filing.]`,
    },
    {
        id: "blog8",
        slug: "fbr-audit-response-best-practices",
        title: "FBR Audit Response Best Practices",
        excerpt: "What to do if you receive a tax notice under Section 122(9). Step-by-step checklist.",
        category: "Guides",
        coverImage: "/assets/blog/blog9.png",
        coverImageAlt: "Official tax notice documents on a desk with glasses",
        publishedAt: daysAgo(64),
        readTimeMinutes: 6,
        author: usmanAuthor,
        content: `## Why ATL Status Matters

[Placeholder content — full copy pending. Structure: withholding tax rate comparison (filer vs non-filer) for property, vehicle registration, and banking transactions.]`,
    },
]

// convenience export used by HomeBlogs before this file existed with full data —
// kept for backward compatibility, now just an alias
export const homeFeaturedBlogPosts = blogPosts.filter((p) => p.featured)