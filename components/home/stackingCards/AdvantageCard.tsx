import { IAdvantageItem } from "@/data/appData"
import { cn } from "@/utils/cn"
import Image from "next/image"

type Props = {
    card: IAdvantageItem,
    index: number,
}

export function AdvantageCard({ card, index }: Props) {
    // alternates primary/secondary - badge color is derived, not stored, so it stays consistent with our brand palette automatically
    const isPrimary = index % 2 === 0

    return (
        <div
            className="sticky rounded-brand-16 overflow-hidden shadow-icon-card border border-background/10"
            style={{
                top: `calc(var(--sticky-header-height, 68px) + ${32 + index * 24}px)`
            }}
        >
            <div className={cn(
                "flex flex-col md:flex-row h-full",
                card.reverse && "md:flex-row-reverse"
            )}>
                {/* text side */}
                <div className="flex-1 bg-card-bg-clr p-8 md:p-10 flex flex-col justify-between min-h-[340px]">
                    <div>
                        <span className={cn(
                            "inline-block text-white para-tiny font-semibold px-3 py-1.5 rounded-full mb-5 tracking-wide",
                            isPrimary ? "bg-primary" : "bg-secondary",
                        )}>
                            {card.badge}
                        </span>

                        <h3
                            className="heading-h4 text-text-dark mb-4">
                            {card.title}
                        </h3>

                        <p className="para-small text-text-secondary mb-6">
                            {card.description}
                        </p>

                        <div className="flex gap-8 mb-6">
                            {card.stats.map((stat, i) => (
                                <div
                                    key={stat.label}
                                >
                                    <p
                                        className={cn("heading-h2 leading-none", i === 0 ? "text-primary" : "text-secondary")}
                                    >
                                        {stat.value}
                                    </p>

                                    <p className="para-tiny text-text-secondary-muted mt-1">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="para-small font-semibold text-text-dark border-t border-border-clr pt-4">
                        {card.bottomText}
                    </p>
                </div>

                {/* image side */}
                <div className="flex-1 relative sheen-sweep-hover min-h-[280px] md:min-h-0 overflow-hidden">
                    {card.imageProofBadge && (
                        <span className="absolute top-4 left-4 z-10 bg-primary text-white para-tiny font-semibold px-3 py-1.5 rounded-full shadow-primary-btn">
                            {card.imageProofBadge}
                        </span>
                    )}
                    <Image
                        src={card.image}
                        alt={card.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent"
                    />
                </div>
            </div>
        </div>
    )
}