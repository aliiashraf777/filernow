// components/header/ServicesMegaMenu.tsx
"use client"
import Link from "next/link"
import Button from "@/components/common/btns/Button"
import { groupServicesByCategory } from "@/lib/services/groupServicesByCategory"

type Props = { onNavigate?: () => void }

const ServicesMegaMenu = ({ onNavigate }: Props) => {
    const grouped = groupServicesByCategory()

    return (
        <div className="w-[900px] max-w-[95vw] bg-background rounded-brand-16 shadow-2xl border border-border-clr/40 p-8">
            <div className="flex items-center gap-4 mb-6">
                <h3 className="heading-h4 font-bold">
                    <Link href={"/services"}>Our Services</Link>
                </h3>
                <span className="flex-1 h-px bg-border-clr" />
            </div>

            <div className="grid grid-cols-3 gap-8">
                {grouped.map(({ category, label, items }) => (
                    <div key={category}>
                        <h4 className="para-small font-bold uppercase tracking-wide text-primary pb-1.5 border-b-2 border-primary w-max mb-4">
                            {label}
                        </h4>

                        <ul className="flex flex-col gap-3.5">
                            {items.map((item) => (
                                <li key={item.id}>
                                    <Link
                                        href={item.href}
                                        onClick={onNavigate}
                                        className="flex items-center gap-2 para-base text-text-secondary hover:text-primary default-transition"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0" aria-hidden />
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border-clr">
                <p className="para-base text-text-secondary">Need help choosing a service?</p>
                <Button variant="primary" onClick={onNavigate}>Contact us</Button>
            </div>
        </div>
    )
}

export default ServicesMegaMenu