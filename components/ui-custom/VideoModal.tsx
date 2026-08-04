"use client"

import { useEffect } from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"

type Props = {
    src: string,
    poster?: string,
    title?: string,
    onClose: () => void,
}

const VideoModal = ({ src, poster, title = "Video", onClose }: Props) => {
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
        }
        document.addEventListener("keydown", onKeyDown)

        const html = document.documentElement
        const previousHtmlOverflow = html.style.overflow
        const previousBodyOverflow = document.body.style.overflow

        html.style.overflow = "hidden"
        document.body.style.overflow = "hidden"

        return () => {
            document.removeEventListener("keydown", onKeyDown)
            html.style.overflow = previousHtmlOverflow
            document.body.style.overflow = previousBodyOverflow
        }
    }, [onClose])

    return createPortal(
        <div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
            {/* backdrop */}
            <button
                type="button"
                aria-label="Close video"
                onClick={onClose}
                className="absolute inset-0 bg-text-dark/80 backdrop-blur-sm cursor-default"
            />

            {/* content */}
            <div className="relative z-10 w-full max-w-[960px] aspect-video rounded-brand-16 overflow-hidden shadow-primary-btn">
                <button
                    type="button"
                    aria-label="Close video"
                    onClick={onClose}
                    className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center default-transition"
                >
                    <X size={20} className="text-text-dark" />
                </button>

                <video
                    key={src}
                    src={src}
                    poster={poster}
                    controls
                    autoPlay
                    muted
                    className="w-full h-full bg-black"
                >
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>,
        document.body
    )
}

export default VideoModal