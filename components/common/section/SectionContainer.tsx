// components/common/section/SectionContainer.tsx
import { cn } from "@/utils/cn"

type Props = {
    children: React.ReactNode,
    sectionClass?: string,
    paddingClass?: string,
    containerClass?: string,
    bgImage?: React.ReactNode,
    backgroundGradient?: string, // e.g. 'linear-gradient(270deg, #C8102E 0%, #FFFFFF 100%)'
}

const SectionContainer = ({
    children,
    sectionClass,
    containerClass,
    bgImage,
    paddingClass,
    backgroundGradient,
}: Props) => {
    return (
        <section className={cn("w-full relative", sectionClass)}>
            {backgroundGradient && (
                <div
                    className="absolute inset-0 -z-10"
                    style={{ background: backgroundGradient }}
                />
            )}
            {bgImage}
            <div className={cn("w-full container-x-padding relative", paddingClass)}>
                <div className={cn("container-custom", containerClass)}>
                    {children}
                </div>
            </div>
        </section>
    )
}

export default SectionContainer