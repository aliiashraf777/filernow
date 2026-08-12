// components/blog/BlogAuthorCard.tsx
import Image from "next/image"
import type { IBlogAuthor } from "@/lib/types/blogs/blog"

const BlogAuthorCard = ({ author }: { author: IBlogAuthor }) => (
    <div className="flex flex-col gap-4 rounded-brand-16 border border-border-clr bg-card-bg-clrx bg-background p-6 sm:flex-row sm:items-start">
        <Image src={author.avatarSrc} alt={author.name} width={56} height={56} className="h-14 w-14 shrink-0 rounded-full object-cover" />
        <div>
            <p className="para-base font-semibold text-text-dark">{author.name}</p>
            <p className="para-small font-medium text-primary">{author.role}</p>
            {author.bio && <p className="para-small mt-2 text-text-secondary">{author.bio}</p>}
        </div>
    </div>
)

export default BlogAuthorCard