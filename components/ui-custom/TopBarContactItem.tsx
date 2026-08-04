import { cn } from "@/utils/cn"
import React from "react"

type Props = {
    href: string,
    icon?: React.ReactNode,
    label: string,
    openOnNewTab?: boolean,
    anchorClass?: string,
    paraClass?: string
}

const TopBarContactItem = ({ href, icon, label, openOnNewTab = false, anchorClass, paraClass }: Props) => {
    return (
        <a
            href={href}
            target={openOnNewTab ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={cn("flex gap-2 items-center hover:opacity-80 hover:translate-x-0.5 default-transition transition-opacity", anchorClass)}
        >
            {icon}
            <p className={cn("para-tiny", paraClass)}>
                {label}
            </p>
        </a>
    )
}

export default TopBarContactItem