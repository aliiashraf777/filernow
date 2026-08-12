// components/blog/BlogPostFaqs.tsx
import type { IBlogFaqItem } from "@/lib/types/blogs/blog"
import Faqs from "@/components/home/faqs/Faqs"

type Props = {
    faqs: IBlogFaqItem[]
    paddingClass?: string,
}

const BlogPostFaqs = ({ faqs, paddingClass }: Props) => {
    if (faqs.length === 0) return null
    return (<>
        <Faqs
            faqData={faqs}
            paddingClass={paddingClass}
        />
    </>)
}

export default BlogPostFaqs