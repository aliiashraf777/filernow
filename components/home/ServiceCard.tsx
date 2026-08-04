// components/ui/ServiceCard.tsx
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/utils/cn"

type Props = {
    label: string,
    icon: string,
    href: string,
    highlighted?: boolean,
}

const ServiceCard = ({ label, icon, href, highlighted }: Props) => {
    return (
        <Link
            href={href}
            className={cn(
                "flex flex-col items-center text-center gap-3 rounded-brand-8 border py-4 px-5 default-transition hover:-translate-y-0.5 hover:shadow-service-card group",
                highlighted
                    ? "border-primary/70 shadow-service-card"
                    : "border-border-clr hover:border-primary/70",
            )}
        >
            <span
                className={cn("flex items-center justify-center w-[90px] h-[90px] rounded-full bg-primary-lighter group-hover:scale-115 default-transition"
                )}>
                <Image
                    src={icon}
                    alt={label}
                    width={50}
                    height={50}
                />
            </span>

            <p
                className={cn(
                    "para-base font-medium tracking-[1px] group-hover:text-primary default-transition", highlighted ? "text-primary font-semibold" : "text-text-dark"
                )}>
                {label}
            </p>
        </Link>
    )
}

export default ServiceCard