"use client"

import Button, { LinkBtn } from "@/components/common/btns/Button"
import SectionContainer from "../section/SectionContainer"
import Image from "next/image"
import { FileBadge, Menu } from "lucide-react"
import Link from "next/link"
import DeskMenu from "./DeskMenu"
import ThemeToggle from "@/components/theme/ThemeToggle"
import { cn } from "@/utils/cn"
import { useStickyHeader } from "@/hooks/useStickyHeader"

type Props = {}

const MenuBar = (props: Props) => {

    // on scroll header stick
    const { isScrolled } = useStickyHeader(".menubar")

    return (
        <SectionContainer
            sectionClass={cn(
                "menubar bg-whitex bg-background border-b border-border-clr/25",
                isScrolled && "scrolled",
            )}
            containerClass="py-1.5"
        >
            <div className="flex justify-between items-center">
                <Link
                    href={'/'}
                    className="hover:-translate-y-0.5 default-transition"
                >
                    <Image
                        src={'/assets/headerLogo.svg'}
                        alt="header_logo"
                        width={58}
                        height={58}
                        priority
                        className="-ml-1"
                    />
                </Link>

                <DeskMenu />

                <div className="flex items-center gap-5">
                    <ThemeToggle />

                    <LinkBtn
                        href="/become-a-filer"
                        label="Become a filer"
                        icon={<FileBadge size={16} />}
                        className="hidden md:flex"
                    />

                    <Button
                        variant="primary-light"
                        className="border-transparent p-2 flex md:hidden"
                    >
                        <Menu size={20} />
                    </Button>
                </div>
            </div>
        </SectionContainer>
    )
}

export default MenuBar