// app/blog/[slug]/page.tsx
import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import SectionContainer from "@/components/common/section/SectionContainer"
import BeforeFooter from "@/components/common/footer/BeforeFooter"
import CategoryTag from "@/components/ui-custom/CategoryTag"
import BlogBreadcrumb from "@/components/blog/BlogBreadcrumb"
import BlogMarkdown from "@/components/blog/BlogMarkdown"
import BlogAuthorCard from "@/components/blog/BlogAuthorCard"
import BlogCategorySidebar from "@/components/blog/BlogCategorySidebar"
import RelatedArticles from "@/components/blog/RelatedArticles"
import { formatTimeAgo } from "@/utils/formatTimeAgo"
import { getAllBlogSlugs, getBlogPostBySlug, getBlogPosts, getBlogCategories } from "@/lib/api/blogs"
import BlogPostFaqs from "@/components/blog/BlogPostFaqs"
import BlogPostCta from "@/components/blog/BlogPostCta"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
    const slugs = await getAllBlogSlugs()
    return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const post = await getBlogPostBySlug(slug)
    if (!post) return { title: "Article not found | FilerNow" }

    return {
        title: `${post.title} | FilerNow Blog`,
        description: post.excerpt,
        openGraph: { title: post.title, description: post.excerpt, images: [{ url: post.coverImage }] },
    }
}

export default async function BlogDetailPage({ params }: Props) {
    const { slug } = await params
    const post = await getBlogPostBySlug(slug)
    if (!post) notFound()

    const [{ items: allPosts }, categories] = await Promise.all([
        getBlogPosts({ pageSize: 50 }),
        getBlogCategories(),
    ])

    const relatedPosts = allPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3)

    return (
        <main>
            <SectionContainer containerClass="container-y-padding pb-10">
                <BlogBreadcrumb
                    items={[
                        { label: "Home", href: "/" },
                        { label: "Blog", href: "/blog" },
                        { label: post.category, href: `/blog?category=${post.category.toLowerCase().replace(/\s+/g, "-")}` },
                        { label: post.title },
                    ]}
                />

                <div className="mt-6"><CategoryTag label={post.category} /></div>
                <h1 className="heading-h1 text-[40px] mt-4 max-w-3xlx text-text-dark">{post.title}</h1>

                <div className="mt-4 flex flex-wrap items-center gap-3 para-small text-text-secondary-muter">
                    {post.author && (
                        <span className="flex items-center gap-2">
                            <Image src={post.author.avatarSrc} alt={post.author.name} width={28} height={28} className="h-7 w-7 rounded-full object-cover sheen-sweep-hover overflow-hidden" />
                            <span className="font-medium text-text-dark">{post.author.name}</span>
                        </span>
                    )}
                    <span>•</span>
                    <span>{formatTimeAgo(post.publishedAt)}</span>
                    {post.readTimeMinutes && (<><span>•</span><span>{post.readTimeMinutes} min read</span></>)}
                </div>

                <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-brand-16 sm:aspect-[21/9] sheen-sweep-hover overflow-hidden">
                    <Image src={post.coverImage} alt={post.coverImageAlt} fill priority sizes="100vw" className="object-cover" />
                </div>
            </SectionContainer>

            <SectionContainer containerClass="container-y-padding pt-0">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
                    <article>
                        {post.content && <BlogMarkdown content={post.content} />}
                        {post.author && <div className="mt-10"><BlogAuthorCard author={post.author} /></div>}

                        {/* {post.faqs && post.faqs.length > 0 && (
                            <div className="mt-10">
                                <h3 className="heading-h4 mb-4 text-text-dark">Frequently Asked Questions</h3>
                                <FaqAccordion items={post.faqs} />
                            </div>
                        )} */}
                    </article>

                    <aside className="flex flex-col gap-6">
                        <RelatedArticles posts={relatedPosts} />
                        <BlogCategorySidebar categories={categories} />
                    </aside>
                </div>
            </SectionContainer>

            <BlogPostCta />

            {post.faqs && post.faqs.length > 0 && (
                <BlogPostFaqs
                    faqs={post.faqs}
                    paddingClass="pt-0x"
                />
            )}

            <BeforeFooter
                heading="Ready to Get Started?"
                para="Join thousands of clients and start your journey today. Register now for the best experience, or reach out on WhatsApp if you have any questions."
                primaryLabel="Register Now"
                primaryHref="/become-filer"
            // secondaryLabel="Talk To An Expert"
            // secondaryHref="https://wa.me/923041110555"
            />
        </main>
    )
}