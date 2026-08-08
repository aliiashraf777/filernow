"use client"
import Image from "next/image"
import { cn } from "@/utils/cn"

type Props = {
    size?: number,
    label?: string,
    className?: string,
}

const Loader = ({ size = 170, label = "Loading", className }: Props) => {
    return (
        <div
            role="status"
            aria-live="polite"
            className={cn("flex flex-col items-center gap-4", className)}
        >
            <div className="relative flex items-center justify-center shrink-0" style={{ width: size, height: size }}>
                <span
                    aria-hidden
                    className="absolute inset-[22%] rounded-full bg-primary/20 blur-lg loader-breathe pointer-events-none"
                />
                <Image
                    src="/assets/loaderLogo.gif"
                    alt=""
                    width={size}
                    height={size}
                    unoptimized
                    loading="eager"
                    className="relative z-10"
                />
            </div>

            {label && (
                <p className="para-tiny text-text-secondary-muted tracking-wide">
                    {label}…
                </p>
            )}
        </div>
    )
}

export default Loader