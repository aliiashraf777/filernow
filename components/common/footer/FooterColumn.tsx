import { IFooterLinkItem } from "@/data/appData"
import Link from "next/link"

type FooterColumnProps = {
    title: string
    links: IFooterLinkItem[]
}

const FooterColumn = ({ title, links }: FooterColumnProps) => (
    <div className="flex flex-col gap-2 md:gap-4">
        <h6 className="heading-h6 font-bold capitalize">
            {title}
        </h6>

        <ul className="flex flex-col gap-2 md:gap-4">
            {links.map((link) => (
                <li key={link.id}
                    className="hover:translate-x-0.5 default-transition"
                >
                    <Link
                        href={link.href}
                        className="para-small text-text-secondary-muted hover:text-primary"
                    >
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
)

export default FooterColumn