"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

type Props = {
    onPrev: () => void
    onNext: () => void
}

const buttonClass =
    "size-[44px] rounded-full border border-border-clr bg-background flex items-center justify-center default-transition cursor-pointer hover:bg-primary hover:text-white hover:border-brand-primary"

const TestimonialsNavigation = ({ onPrev, onNext }: Props) => {
    return (
        <div className="flex items-center justify-center gap-4 mt-[60px]">

            <button
                type="button"
                aria-label="Previous testimonial"
                onClick={onPrev}
                className={buttonClass}
            >
                <ChevronLeft size={22} />
            </button>

            <div className="testimonial-pagination flex items-center gap-2" />

            <button
                type="button"
                aria-label="Next testimonial"
                onClick={onNext}
                className={buttonClass}
            >
                <ChevronRight size={22} />
            </button>

        </div>
    )
}

export default TestimonialsNavigation