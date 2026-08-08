"use client"

import Image from "next/image"
import { useState } from "react"
import { Play } from "lucide-react"
import VideoModal from "./VideoModal"

type Props = {}

const VideoCard = (props: Props) => {
    const [isVideoOpen, setIsVideoOpen] = useState(false)

    return (<>
        <button
            type="button"
            aria-haspopup="dialog"
            aria-label="Play how it works video"
            onClick={() => setIsVideoOpen(true)}
            className="group relative sheen-sweep-hover w-full text-left rounded-brand-16 overflow-hidden aspect-video"
            style={{ boxShadow: "0px 20px 50px -16px rgba(17, 17, 17, 0.18)" }}
        >
            <Image
                src="/assets/howItWorksOverlay.png"
                alt="FilerNow team reviewing a tax filing"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                style={{ objectFit: "cover" }}
                priority={false}
                loading="eager"
                className=""
            />

            {/* tint layer for play-button contrast */}
            <div className="absolute inset-0 bg-text-dark/25 group-hover:bg-text-dark/35 default-transition sheen-sweep-hover" />

            <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-primary-btn default-transition group-hover:scale-105">
                    <Play size={24} className="text-white fill-white ml-1 cursor-pointer" />
                </span>
            </span>
        </button>

        {isVideoOpen && (
            <VideoModal
                src="/assets/howItWorks.mp4"
                poster="/assets/howItWorksOverlay.png"
                title="How FilerNow works"
                onClose={() => setIsVideoOpen(false)}
            />
        )}
    </>)
}

export default VideoCard