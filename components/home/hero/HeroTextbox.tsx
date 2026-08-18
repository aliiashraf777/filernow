import Button, { LinkBtn } from "@/components/common/btns/Button"
import Breadcrumb, { BreadcrumbItem } from "@/components/ui-custom/Breadcrumb"
import InfoBadge from "@/components/ui-custom/InfoBadge"
import StatCounter from "@/components/ui-custom/StatsCounter"
import { HeroBottomRow, HeroCtaItem } from "@/lib/types/hero/types"
import { cn } from "@/utils/cn"
import { ArrowRight } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

type Props = {
    breadcrumbItems?: BreadcrumbItem[],
    infoBadgeLabel: string,
    heading: React.ReactNode,
    description: string,
    ctas?: HeroCtaItem[],
    bottomRow?: HeroBottomRow,
    className?: string,
    headingClassName?: string,
}

const HeroTextbox = ({
    breadcrumbItems,
    infoBadgeLabel,
    heading,
    description,
    ctas = [
        {
            label: "Become A Filer",
            icon: <ArrowRight size={18} />,
            variant: "primary",
            href: "/become-filer",
        },

        {
            label: "Talk to an Expert",
            icon: <FaWhatsapp size={18} className="text-secondary" />,
            variant: "white",
            href: "https://wa.me/923041110555",
        },

    ],
    bottomRow,
    className,
    headingClassName,
}: Props) => {
    return (
        <div className={cn("pt-[50px] md:container-y-padding flex flex-col gap-4 md:gap-7", className)}>
            {breadcrumbItems && <Breadcrumb items={breadcrumbItems} />}

            <InfoBadge
                label={infoBadgeLabel}
                className="animate-fade-slide-up [animation-delay:450ms]"
            />

            <h1 className={cn(
                "max-w-[462px]x heading-h1 tracking-[-1.5px] animate-fade-slide-up [animation-delay:550ms]",
                headingClassName
            )}>
                {heading}
            </h1>

            <p className="para-18 text-text-secondary max-w-[600px] animate-fade-slide-up [animation-delay:650ms]">
                {description}
            </p>

            {ctas.length > 0 && (
                <div className="flex flex-wrap items-center gap-4 animate-fade-slide-up [animation-delay:750ms]">
                    {ctas.map((cta, i) =>
                        cta.href ? (
                            <LinkBtn
                                key={i}
                                href={cta.href}
                                label={cta.label}
                                icon={cta.icon}
                                variant={cta.variant}
                                className="hover:-translate-y-0.5"
                            />
                        ) : (
                            <Button key={i} variant={cta.variant} onClick={cta.onClick} className="hover:-translate-y-0.5">
                                {cta.label}
                                {cta.icon}
                            </Button>
                        )
                    )}
                </div>
            )}

            {bottomRow?.type === "stats" && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-7 divide-x divide-stat-divider-clr animate-fade-slide-up [animation-delay:850ms]">
                    {bottomRow.items.map((stat) => (
                        <StatCounter
                            key={stat.label}
                            to={stat.to}
                            suffix={stat.suffix}
                            label={stat.label}
                        />
                    ))}
                </div>
            )}

            {bottomRow?.type === "checklist" && (
                <div className="flex flex-wrap items-center gap-6 pt-2 animate-fade-slide-up [animation-delay:850ms]">
                    {bottomRow.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <span className="grid place-items-center w-7 h-7 rounded-full bg-primary/10 text-primary shrink-0">
                                {item.icon}
                            </span>
                            <span className="para-small font-semibold text-text-dark whitespace-nowrap">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default HeroTextbox