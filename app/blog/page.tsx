// app/blog/page.tsx
import type { Metadata } from "next"
import SectionContainer from "@/components/common/section/SectionContainer"
import BeforeFooter from "@/components/common/footer/BeforeFooter"
import BlogSearchInput from "@/components/blog/BlogSearchInput"
import BlogCategoryFilter from "@/components/blog/BlogCategoryFilter"
import BlogGrid from "@/components/blog/BlogGrid"
import { getBlogPosts, getBlogCategories } from "@/lib/api/blogs"

export const metadata: Metadata = {
    title: "All Blog Posts | FilerNow",
    description: "Stay up to date with the latest tax guidelines, FBR changes, SECP rules, and compliance strategies for business owners and freelancers in Pakistan.",
}

const PAGE_SIZE = 6

type Props = {
    searchParams: Promise<{ category?: string, search?: string }>,
}

export default async function BlogListingPage({ searchParams }: Props) {
    const { category, search } = await searchParams

    const [listData, categories] = await Promise.all([
        getBlogPosts({ category, search, page: 1, pageSize: PAGE_SIZE }),
        getBlogCategories(),
    ])

    return (
        <main>
            <SectionContainer containerClass="container-y-padding pb-0">
                <p className="para-small font-semibold uppercase tracking-widest text-primary">Resource Center</p>
                <h1 className="heading-h1 mt-3 text-text-dark">All Blog Posts</h1>
                <p className="para-base mt-4 max-w-2xl text-text-secondary">
                    Stay up to date with the latest tax guidelines, FBR changes, SECP rules, and compliance strategies for business owners and freelancers in Pakistan.
                </p>

                <div className="mt-8 flex flex-col gap-4">
                    <BlogSearchInput />
                    <BlogCategoryFilter categories={categories} />
                </div>
            </SectionContainer>

            <SectionContainer containerClass="container-y-padding">
                <BlogGrid
                    initialData={listData}
                    pageSize={PAGE_SIZE}
                />
            </SectionContainer>

            <BeforeFooter />
        </main>
    )
}