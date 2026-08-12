"use client"
import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { menuData } from "@/data/appData"
import { cn } from "@/utils/cn"
import ServicesMegaMenu from "./ServicesMegaMenu"

const CLOSE_DELAY_MS = 150

const DeskMenu = () => {
    const pathname = usePathname()
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
    const wrapperRef = useRef<HTMLDivElement>(null)

    const openMenu = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current)
        setIsMegaMenuOpen(true)
    }
    const scheduleClose = () => {
        closeTimer.current = setTimeout(() => setIsMegaMenuOpen(false), CLOSE_DELAY_MS)
    }

    useEffect(() => {
        if (!isMegaMenuOpen) return
        const handleClickOutside = (e: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) setIsMegaMenuOpen(false)
        }
        const handleEscape = (e: KeyboardEvent) => { if (e.key === "Escape") setIsMegaMenuOpen(false) }
        document.addEventListener("mousedown", handleClickOutside)
        document.addEventListener("keydown", handleEscape)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
            document.removeEventListener("keydown", handleEscape)
        }
    }, [isMegaMenuOpen])

    useEffect(() => () => { if (closeTimer.current) clearTimeout(closeTimer.current) }, [])

    return (
        <div className="hidden md:flex items-center gap-9">
            {menuData.map((menu) => {
                if (menu.hasMegaMenu) {
                    return (
                        <div
                            key={menu.id}
                            ref={wrapperRef}
                            className="relative"
                            onMouseEnter={openMenu}
                            onMouseLeave={scheduleClose}
                        >
                            <button
                                type="button"
                                onClick={() => setIsMegaMenuOpen((v) => !v)}
                                aria-expanded={isMegaMenuOpen}
                                aria-haspopup="true"
                                className={cn(
                                    "flex items-center gap-1 para-small font-medium text-text-secondary hover:text-primary default-transition cursor-pointer",
                                    pathname.startsWith(menu.link) && "text-primary",
                                )}
                            >
                                {menu.label}
                                <ChevronDown
                                    size={16}
                                    className={cn("default-transition", isMegaMenuOpen && "rotate-180")}
                                />
                            </button>

                            {isMegaMenuOpen && (
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 ml-10 z-[var(--z-dialog,50)] animate-fade-slide-up">
                                    <ServicesMegaMenu onNavigate={() => setIsMegaMenuOpen(false)} />
                                </div>
                            )}
                        </div>
                    )
                }
                return (
                    <Link
                        key={menu.id}
                        href={menu.link}
                        className={cn("para-small text-text-secondary font-medium hover:text-primary default-transition", pathname === menu.link && "text-primary")}
                    >
                        {menu.label}
                    </Link>
                )
            })}
        </div>
    )
}

export default DeskMenu