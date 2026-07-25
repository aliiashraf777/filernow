import React from "react"

type Props = {
    href: string,
    icon: React.ReactNode,
    label: string,
    openOnNewTab?: boolean,
}

const TopBarContactItem = ({ href, icon, label, openOnNewTab = false }: Props) => {
    return (
        <a
            href={href}
            target={openOnNewTab ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="flex gap-2 items-center hover:opacity-80 transition-opacity"
        >
            {icon}
            <p className="para-tiny text-white">{label}</p>
        </a>
    )
}

export default TopBarContactItem