// components/home/HomeBlogs.tsx — updated imports, now a server component
import { ArrowRight } from "lucide-react"
import SectionContainer from "@/components/common/section/SectionContainer"
import SectionTitle from "@/components/ui-custom/SectionTitle"
import RevealOnScroll from "@/components/ui-custom/RevealOnScroll"
import BlogCard from "@/components/blog/BlogCard"
import BlogListItem from "@/components/blog/BlogListItem"
import { getFeaturedBlogPosts } from "@/lib/api/blogs"
import { LinkBtn } from "@/components/common/btns/Button"

const HomeBlogs = async () => {
    const posts = await getFeaturedBlogPosts()
    const [featured, ...rest] = posts
    const listPosts = rest.slice(0, 3)

    return (
        <SectionContainer containerClass="container-y-padding pt-0">
            <RevealOnScroll>
                <SectionTitle
                    infoLabel="Recent Blogs"
                    heading="Insights & tax guides"
                    para="Stay informed with the latest on tax filing, compliance and business growth in Pakistan."
                />
            </RevealOnScroll>

            <RevealOnScroll delay={100}>
                <div className="mb-8 flex items-center justify-between gap-4">
                    <h3 className="heading-h5 text-text-dark">Featured blog posts</h3>
                    <LinkBtn href="/blog" label="View All Articles" icon={<ArrowRight size={16} />} variant="primary-light" className="hidden sm:flex" />
                </div>
            </RevealOnScroll>

            {featured && (
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.05fr_1fr]">
                    <RevealOnScroll delay={150}>
                        <BlogCard post={featured} />
                    </RevealOnScroll>
                    <RevealOnScroll delay={250}>
                        <div className="flex h-full flex-col justify-between gap-4 sm:gap-4">
                            {listPosts.map((post) => <BlogListItem key={post.id} post={post} />)}
                        </div>
                    </RevealOnScroll>
                </div>
            )}

            <LinkBtn href="/blog" label="View All Articles" icon={<ArrowRight size={16} />} variant="primary-light" className="mt-8 flex w-full justify-center sm:hidden" />
        </SectionContainer>
    )
}

export default HomeBlogs