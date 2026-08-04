import { ShieldCheck, Check, TrendingUp } from "lucide-react"
import IconTextBlock from "@/components/ui-custom/IconTextBlock"
import { cn } from "@/utils/cn"
import Image from "next/image"

type Props = {
    heading: string,
    description: string,
    points: string[],
    className?: string,
}

const WhyTrustCard = ({ heading, description, points, className }: Props) => {
    return (
        <div className={cn("group relative overflow-hidden rounded-brand-16 bg-border-card-clr px-7.5 py-8 default-transition", className)}>
            {/* decorative watermark */}
            <Image
                src={'/assets/businessTrustUs.png'}
                alt="businessTrustUs.png"
                width={150}
                height={150}
                className="absolute bottom-5 right-5 default-transition opacity-80 group-hover:opacity-100 group-hover:rotate-6 group-hover:scale-105"
            />

            <div className="relative">
                <IconTextBlock
                    icon={<ShieldCheck size={22} />}
                    heading={heading}
                    description={description}
                />

                <ul className="mt-5 flex flex-col gap-3 mb-5">
                    {points.map((point) => (
                        <li
                            key={point}
                            className="group/item flex items-center gap-3 para-small text-text-secondary-muted default-transition hover:text-text-dark"
                        >
                            <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 default-transition group-hover/item:scale-110">
                                <Check
                                    size={12}
                                    strokeWidth={3} className="text-white"
                                />
                            </span>
                            {point}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default WhyTrustCard