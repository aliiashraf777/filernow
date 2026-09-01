// components/blog/RelatedArticles.tsx
import BlogListItem from "./BlogListItem"
import type { IBlogPost } from "@/lib/types/blogs/blog"

const RelatedArticles = ({ posts }: { posts: IBlogPost[] }) => {
    if (posts.length === 0) return null
    return (
        <div className="">
            <h4 className="heading-h6 text-text-dark">Related Articles</h4>

            <div className="mt-4 flex flex-col gap-4 divide-x divide-x-border-clr">
                {posts.map((post) =>
                    <BlogListItem
                        key={post.id}
                        post={post}
                        thumbSizeClass="h-[100px] w-[100px]"
                        className="max-sm:p-2 bg-background hover:bg-background border border-border-clr"
                    />
                )}
            </div>
        </div>
    )
}

export default RelatedArticles