import { Star, Quote } from "lucide-react"
import Image from "next/image"
import { cn } from "@/utils/cn"
import { IHomeTestimonialItem } from "@/data/appData"

type Props = {
    testimonial: IHomeTestimonialItem,
    isActive: boolean,
}

const getInitials = (name: string) =>
    name.split(" ").map((part) => part[0]).slice(0, 2).join("").toUpperCase()

const TestimonialCard = ({ testimonial, isActive }: Props) => {
    const { name, role, avatarSrc, rating, review } = testimonial

    return (
        <div
            className={cn(
                "relative flex h-full w-full flex-col rounded-brand-8 border bg-card-bg-clr px-6 py-8 sm:px-8 sm:py-10 default-transition",
                isActive
                    ? "border-primary/15 shadow-service-card"
                    : "border-border-clr shadow-none"
            )}
        >
            <Quote
                size={82}
                strokeWidth={1}
                className="pointer-events-none absolute bottom-6 right-6 text-primary-lighter"
                aria-hidden
            />

            <div className="relative flex items-center gap-3">
                {avatarSrc ? (
                    <Image
                        src={avatarSrc}
                        alt={name}
                        width={44}
                        height={44}
                        className="h-11 w-11 shrink-0 rounded-full object-cover"
                    />
                ) : (
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-lighter para-small font-semibold text-primary">
                        {getInitials(name)}
                    </span>
                )}

                <div>
                    <p className="para-small font-semibold text-text-dark">{name}</p>
                    <p className="para-tiny text-text-secondary-muted">{role}</p>
                </div>
            </div>

            <p className="para-base text-text-secondary relative mt-6 flex-1x line-clamp-5">
                {review}
            </p>

            <div className="relative mt-4 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                        key={i}
                        size={16}
                        strokeWidth={0}
                        fill="currentColor"
                        className={i < rating ? "text-primary" : "text-border-clr"}
                    />
                ))}
            </div>
        </div>
    )
}

export default TestimonialCard