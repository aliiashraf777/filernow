// components/header/mobileMenu/MobileMenuDrawer.tsx
"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, FileBadge, Headset, Home, LayoutGrid, UserCircle2 } from "lucide-react"
import { menuData } from "@/data/appData"
import { groupServicesByCategory } from "@/lib/services/groupServicesByCategory"
import { useAuthDrawer } from "@/context/AuthDrawerContext"
import { cn } from "@/utils/cn"
import SideDrawer from "../../sideDrawer/SideDrawer"

type Props = {
    isOpen: boolean
    onClose: () => void
}

// Matched by label since IMenuItem has no icon field yet
const navIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    Home,
    Services: LayoutGrid,
    "Contact Us": Headset,
    "Contact us": Headset,
}

const MobileMenuDrawer = ({ isOpen, onClose }: Props) => {
    const pathname = usePathname()
    const { openAuthDrawer } = useAuthDrawer()
    const [isServicesOpen, setIsServicesOpen] = useState(false)
    const isFirstRender = useRef(true)
    const groupedServices = groupServicesByCategory()

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }
        onClose()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])

    const handleAuthClick = (view: "signin" | "register") => {
        onClose()
        openAuthDrawer(view)
    }

    return (
        <SideDrawer
            isOpen={isOpen}
            onClose={onClose}
            side="right"
            ariaLabel="Site menu"
        >
            <div className="flex flex-col h-full overflow-y-auto">
                <div className="bg-primary-lighter/50 px-6 pt-14 pb-6 flex flex-col gap-3">
                    <UserCircle2
                        size={48}
                        className="text-text-secondary-muted cursor-pointer"
                        strokeWidth={1.2}
                    />
                    <div className="flex items-center gap-2 para-base">
                        <Link
                            href="/login"
                            className="text-text-secondary-muted font-semibold hover:text-primary default-transition cursor-pointer"
                        >
                            Login
                        </Link>
                        {/* <button
                            type="button"
                            // onClick={() => handleAuthClick("signin")}
                            className="text-text-secondary-muted font-semibold hover:text-primary default-transition cursor-pointer"
                        >
                            Sign in
                        </button> */}
                        <span className="text-text-secondary">|</span>
                        <Link
                            href="/register"
                            className="text-text-secondary-muted font-semibold hover:text-primary default-transition cursor-pointer"
                        >
                            Register
                        </Link>
                        {/* <button
                            type="button"
                            // onClick={() => handleAuthClick("register")}
                            className="text-text-secondary-muted font-semibold hover:text-primary default-transition cursor-pointer"
                        >
                            Register
                        </button> */}
                    </div>
                </div>

                <nav className="flex flex-col px-2 py-4">
                    {menuData.map((menu) => {
                        // const Icon = navIconMap[menu.label] ?? LayoutGrid
                        const Icon = menu.icon ?? LayoutGrid

                        if (menu.hasMegaMenu) {
                            return (
                                <div key={menu.id} className="flex flex-col">
                                    <button
                                        type="button"
                                        onClick={() => setIsServicesOpen((v) => !v)}
                                        aria-expanded={isServicesOpen}
                                        className="flex items-center justify-between gap-3 px-4 py-3 para-base text-text-dark hover:text-primary default-transition rounded-brand-8 hover:bg-primary-lighter/50"
                                    >
                                        <span className="flex items-center gap-3">
                                            <Icon size={20} className="text-text-secondary" />
                                            {menu.label}
                                        </span>
                                        <ChevronDown
                                            size={16}
                                            className={cn("default-transition text-text-secondary", isServicesOpen && "rotate-180")}
                                        />
                                    </button>

                                    {isServicesOpen && (
                                        <div className="flex flex-col gap-4 pl-11 pr-4 pb-3 pt-1">
                                            {groupedServices.map((group) => (
                                                <div key={group.category} className="flex flex-col gap-2">
                                                    <p className="para-small font-bold uppercase tracking-wide text-primary">
                                                        {group.label}
                                                    </p>
                                                    <ul className="flex flex-col gap-2">
                                                        {group.items.map((item) => (
                                                            <li key={item.id}>
                                                                <Link href={item.href} onClick={onClose} className="para-small text-text-secondary hover:text-primary default-transition">
                                                                    {item.label}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                            <Link href={menu.link} onClick={onClose} className="para-small font-semibold text-primary">
                                                View all services
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            )
                        }

                        return (
                            <Link
                                key={menu.id}
                                href={menu.link}
                                className={cn(
                                    "flex items-center gap-3 px-4 py-3 para-base text-text-dark hover:text-primary default-transition rounded-brand-8 hover:bg-primary-lighter/50",
                                    pathname === menu.link && "text-primary",
                                )}
                            >
                                <Icon size={20} className="text-text-secondary" />
                                {menu.label}
                            </Link>
                        )
                    })}

                    <Link
                        href="/become-filer"
                        className="flex items-center gap-3 px-4 py-3 para-base text-text-dark hover:text-primary default-transition rounded-brand-8 hover:bg-primary-lighter"
                    >
                        <FileBadge size={20} className="text-text-secondary" />
                        Become a filer
                    </Link>
                </nav>

                <div className="mt-auto border-t border-border-clr px-6 py-5 flex flex-row justify-between gap-2">
                    <Link href="/privacy-policy" className="para-small text-text-secondary hover:text-primary default-transition">
                        Privacy policy
                    </Link>
                    <Link href="/terms-of-service" className="para-small text-text-secondary hover:text-primary default-transition">
                        Terms of service
                    </Link>
                </div>
            </div>
        </SideDrawer>
    )
}

export default MobileMenuDrawer