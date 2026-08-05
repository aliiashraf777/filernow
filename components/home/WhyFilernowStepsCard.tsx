import { whyFilerNowStepExtras } from "@/data/appData";
import Image from "next/image";

type Props = {
    title: string,
    extra: typeof whyFilerNowStepExtras[number],
}

export function WhyFilernowStepsCard({ title, extra }: Props) {
    return (
        <div className="rounded-brand-16 overflow-hidden bg-card-bg-clr shadow-primary-btn">
            <div className="relative h-52 overflow-hidden">
                <Image
                    src={extra.image}
                    alt={extra.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <span
                    aria-hidden
                    className="absolute bottom-3 left-4 text-4xl font-black text-white/15 leading-none pointer-events-none select-none"
                >
                    {title}
                </span>
            </div>

            <div className="grid grid-cols-2 gap-px bg-border-clr border-t border-border-clr">
                {extra.highlights.map((h) => (
                    <div key={h.label} className="bg-card-bg-clr p-4">
                        <p className="para-small font-semibold text-text-dark">{h.label}</p>
                        <p className="para-tiny text-text-secondary-muted mt-1">{h.detail}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}