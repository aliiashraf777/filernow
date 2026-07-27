// components/common/section/SectionContainer.tsx
import { cn } from "@/utils/cn"

type Props = {
    children: React.ReactNode,
    sectionClass?: string,
    paddingClass?: string,
    containerClass?: string,
    bgImage?: React.ReactNode,
}

const SectionContainer = ({ children, sectionClass, containerClass, bgImage, paddingClass }: Props) => {
    return (
        <section
            className={cn("w-full relative", sectionClass)}
        >
            {bgImage}

            <div
                className={cn("container-x-padding relative", paddingClass)}
            >
                <div
                    className={cn("container-custom", containerClass)}
                >
                    {children}
                </div>
            </div>
        </section>
    )
}

export default SectionContainer