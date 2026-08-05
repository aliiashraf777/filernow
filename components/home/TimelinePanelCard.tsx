import { processTimelineData } from "@/data/appData";
import { cn } from "@/utils/cn";
import Image from "next/image";

export function TimelinePanelCard({ panel, active }: { panel: typeof processTimelineData[number], active: boolean }) {
    return (
        <article className={cn(
            "rounded-brand-16 overflow-hidden bg-card-bg-clr border default-transition",
            active ? "border-primary/30x shadow-primary-btn" : "border-border-clr",
        )}>
            <div className="relative h-64 md:h-80 overflow-hidden bg-border-clr">
                {panel.card.image ? (
                    <Image
                        src={panel.card.image}
                        alt={panel.card.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-text-secondary-muted para-small">
                        Image coming soon
                    </div>
                )}
                <div
                    className="absolute inset-0 bg-gradient-to-t from-text-dark/90 via-text-dark/20 to-transparent"
                />
                <h3 className="absolute bottom-5 left-6 text-white heading-h4">
                    {panel.card.title}
                </h3>
            </div>

            <div className="p-6 md:p-8">
                <p className="para-base text-text-secondary">
                    {panel.card.body}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                    {panel.card.tags.map((tag) => (
                        <span
                            key={tag}
                            className="para-tiny font-medium text-primary bg-primary-lighter border border-primary/20 px-3 py-1 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    )
}