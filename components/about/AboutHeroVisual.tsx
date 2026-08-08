import Image from "next/image"
import { cn } from "@/utils/cn"

const AboutHeroVisual = ({ className }: { className?: string }) => (
    <div className={cn("relative w-full aspect-[413/540]", className)}>
        {/* watermark logo — faint, sits behind everything, mirrors the Home hero's icon-pulse layer */}
        <Image
            src="/assets/heroLogo.svg"
            alt=""
            width={150}
            height={150}
            aria-hidden
            className="absolute top-50 -left-10 z-0 opacity-90 icon-pulse animate-fade-scale-in"
        />
        {/* <Image src="/assets/heroLogo.svg" width={150} height={150} alt=""
            className="absolute top-20 left-40 z-10 opacity-90 icon-pulse animate-fade-scale-in" /> */}

        {/* red blob shape — behind the portrait, anchored bottom-right of the column */}
        <Image
            src="/assets/about/aboutHeroPersonBlob.png"
            alt=""
            fill
            aria-hidden
            sizes="(min-width: 1024px) 35vw, 60vw"
            style={{ objectFit: "contain", objectPosition: "bottom right" }}
            className="z-[1] opacity-90 animate-fade-scale-in [animation-delay:200ms]"
        />

        {/* portrait — foreground, same layer anchored bottom-right of the column */}
        <Image
            src="/assets/about/aboutHeroPerson.png"
            alt="FilerNow Ambassador"
            // width={413}
            // height={570}
            fill
            priority
            sizes="(min-width: 1024px) 35vw, 60vw"
            style={{ objectFit: "contain", objectPosition: "bottom right" }}
            className="relative z-10 animate-fade-slide-up [animation-delay:350ms]"
        />
    </div>
)

export default AboutHeroVisual