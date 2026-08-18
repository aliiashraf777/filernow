import Image from "next/image"
import { cn } from "@/utils/cn"

type AboutHeroVisualTy = {
    aboutHeroVisualClass?: string,
    redBlobHidden?: boolean,
    aboutHeroImg: string,
}

const AboutHeroVisual = ({ aboutHeroVisualClass, redBlobHidden, aboutHeroImg }: AboutHeroVisualTy) => (
    <div className={cn("relative w-full aspect-413/540", aboutHeroVisualClass)}>
        {/* watermark logo — faint, sits behind everything, mirrors the Home hero's icon-pulse layer */}
        <Image
            src="/assets/heroLogo.svg"
            alt=""
            width={150}
            height={150}
            aria-hidden
            className="absolute top-50 -left-10 z-0 opacity-90 icon-pulse animate-fade-scale-in"
        />

        {/* red blob shape — behind the portrait, anchored bottom-right of the column */}
        <Image
            src="/assets/about/aboutHeroPersonBlob.png"
            alt=""
            fill
            aria-hidden
            sizes="(min-width: 1024px) 35vw, 60vw"
            style={{ objectFit: "contain", objectPosition: "bottom right" }}
            className={cn(
                "z-1 opacity-90 animate-fade-scale-in [animation-delay:200ms]",
                redBlobHidden && "hidden",
            )}
        />

        {/* portrait — foreground, same layer anchored bottom-right of the column */}
        <Image
            // src="/assets/about/aboutHeroPerson.png"
            src={aboutHeroImg}
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