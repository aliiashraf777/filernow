import Link from "next/link"
import type { FaqAnswerPart } from "@/lib/types/faq/types"

const toParts = (answer: string | FaqAnswerPart[]): FaqAnswerPart[] =>
    typeof answer === "string" ? [{ type: "text", content: answer }] : answer

const FaqAnswer = ({ answer }: { answer: string | FaqAnswerPart[] }) => (
    <p className="para-small text-text-secondary leading-[22.75px]">
        {toParts(answer).map((part, i) =>
            part.type === "link" ? (
                <Link key={i} href={part.href} className="text-primary text-text-link font-semibold underline underline-offset-2 hover:text-primary/80 default-transition">
                    {part.content}
                </Link>
            ) : (
                <span key={i}>{part.content}</span>
            )
        )}
    </p>
)

export default FaqAnswer