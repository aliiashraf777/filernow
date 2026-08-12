// components/blog/BlogMarkdown.tsx — requires: npm install react-markdown
import ReactMarkdown from "react-markdown"

const BlogMarkdown = ({ content }: { content: string }) => (
    <div className="max-w-none">
        <ReactMarkdown
            components={{
                h2: ({ children }) => <h2 className="heading-h3 mt-10 mb-4 text-text-dark first:mt-0">{children}</h2>,
                h3: ({ children }) => <h3 className="heading-h5 mt-8 mb-3 text-text-dark">{children}</h3>,
                p: ({ children }) => <p className="para-base mb-5 text-text-secondary">{children}</p>,
                ul: ({ children }) => <ul className="mb-5 flex flex-col gap-2 pl-1">{children}</ul>,
                li: ({ children }) => (
                    <li className="para-base flex gap-2.5 text-text-secondary">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{children}</span>
                    </li>
                ),
                strong: ({ children }) => <strong className="font-semibold text-text-dark">{children}</strong>,
                a: ({ href, children }) => <a href={href} className="font-medium text-primary underline underline-offset-2">{children}</a>,
            }}
        >
            {content}
        </ReactMarkdown>
    </div>
)

export default BlogMarkdown