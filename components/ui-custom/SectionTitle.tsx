// components/ui-custom/SectionTitle.tsx
import { cn } from "@/utils/cn"
import InfoBadge from "./InfoBadge"

type Props = {
    infoLabel: string,
    heading?: React.ReactNode,
    para?: string,
    sectionClass?: string,
    variant?: 'light' | 'dark',
}

const SectionTitle = ({ infoLabel, heading, para, sectionClass, variant = 'light' }: Props) => {
    return (
        <div className={cn("flex flex-col gap-3.5 items-center justify-center mb-[30px] md:mb-[60px] max-w-[650px] mx-auto", sectionClass)}>
            <InfoBadge
                label={infoLabel}
                className={variant === 'dark' ? "bg-white/10 text-white/70 border-white/10" : undefined}
            />

            <h2 className={cn("heading-h2 text-center tracking-[-0.9px]", variant === 'dark' && "text-white")}>
                {heading}
            </h2>

            <p className={cn("para-18 text-center", variant === 'dark' ? "text-white/50" : "text-text-secondary-muted")}>
                {para}
            </p>
        </div>
    )
}

export default SectionTitle