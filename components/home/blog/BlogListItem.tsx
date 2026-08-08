import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import CategoryTag from "@/components/ui-custom/CategoryTag"
import { formatTimeAgo } from "@/utils/formatTimeAgo"
import type { IBlogPost } from "@/types/blog"

type Props = {
    post: IBlogPost,
}

// the compact horizontal row used for the right-hand stack — thumbnail
// left, everything else right, same on every breakpoint (it's already
// small enough that switching to a vertical layout on mobile isn't worth
// the extra CSS path)
const BlogListItem = ({ post }: Props) => {
    const { slug, title, category, coverImage, coverImageAlt, publishedAt } = post

    return (
        <Link
            href={`/blog/${slug}`}
            className="group flex items-center gap-4 rounded-brand-12 default-transition borderx border-border-clrx hover:bg-card-bg-clr sm:p-2x"
        >
            <div className="relative sheen-sweep-hover h-[88px] w-[88px] shrink-0 overflow-hidden rounded-brand-8 sm:h-[224px] sm:w-[224px]">
                <Image
                    src={coverImage}
                    alt={coverImageAlt}
                    fill
                    sizes="224px"
                    className="object-cover default-transition group-hover:scale-105"
                />
            </div>

            <div className="flex min-w-0 flex-col gap-1.5">
                <div className="flex items-center gap-3">
                    <CategoryTag label={category} />
                    <span className="para-tiny text-text-secondary-muter">{formatTimeAgo(publishedAt)}</span>
                </div>

                <h4 className="para-base line-clamp-2 font-semibold text-text-dark">{title}</h4>

                <span className="flex items-center gap-1.5 para-tiny font-semibold text-primary">
                    Read more
                    <ArrowRight size={13} className="default-transition group-hover:translate-x-1" />
                </span>
            </div>
        </Link>
    )
}

export default BlogListItem