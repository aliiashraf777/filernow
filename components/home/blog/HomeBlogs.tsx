// components/home/HomeBlogs.tsx
import { ArrowRight } from "lucide-react"
import SectionContainer from "@/components/common/section/SectionContainer"
import SectionTitle from "@/components/ui-custom/SectionTitle"
import RevealOnScroll from "@/components/ui-custom/RevealOnScroll"
import { AnchorBtn } from "@/components/common/btns/Button"
import FeaturedBlogCard from "../../blog/FeaturedBlogCard"
import BlogListItem from "../../blog/BlogListItem"
import { homeFeaturedBlogPosts } from "@/data/blogData"

const HomeBlogs = () => {
    // home widget only ever shows one large + three compact — trim
    // defensively so this doesn't break if the mock/API array grows
    const [featured, ...rest] = homeFeaturedBlogPosts
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
                    <AnchorBtn
                        href="/blog"
                        label="View All Articles"
                        icon={<ArrowRight size={16} />}
                        variant="primary-light"
                        className="hidden sm:flex"
                    />
                </div>
            </RevealOnScroll>

            {featured && (
                <div className="grid grid-cols-1 gap-7 lg:grid-cols-[1.05fr_1fr]">
                    <RevealOnScroll delay={150}>
                        <FeaturedBlogCard
                            post={featured}
                        />
                    </RevealOnScroll>

                    <RevealOnScroll delay={250}>
                        <div className="flex h-full flex-col justify-betweenx gap-4 sm:gap-7">
                            {listPosts.map((post) => (
                                <BlogListItem
                                    key={post.id}
                                    post={post}
                                />
                            ))}
                        </div>
                    </RevealOnScroll>
                </div>
            )}

            <AnchorBtn
                href="/blog"
                label="View All Articles"
                icon={<ArrowRight size={16} />}
                variant="primary-light"
                className="mt-8 flex w-full justify-center sm:hidden"
            />
        </SectionContainer>
    )
}

export default HomeBlogs