import { cn } from "@/utils/cn"

type Props = {
    children: React.ReactNode,
    sectionClass?: string,
    containerClass?: string,
}

const SectionContainer = ({ children, sectionClass, containerClass }: Props) => {
    return (
        <section className={cn("w-full", sectionClass)}>
            <div className={cn("container-x-padding")}>
                <div className={cn("container-custom", containerClass)}>
                    {children}
                </div>
            </div>
        </section>
    )
}

export default SectionContainer