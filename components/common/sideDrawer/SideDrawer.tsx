// components/common/SideDrawer.tsx
"use client"

import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"
import { cn } from "@/utils/cn"
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock"

type Props = {
    isOpen: boolean
    onClose: () => void
    side?: "left" | "right"
    widthClassName?: string
    ariaLabel: string
    children: React.ReactNode
}

const SideDrawer = ({
    isOpen,
    onClose,
    side = "right",
    widthClassName = "w-[85vw] max-w-sm",
    ariaLabel,
    children,
}: Props) => {
    const panelRef = useRef<HTMLDivElement>(null)
    const [mounted, setMounted] = useState(false)

    useBodyScrollLock(isOpen)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!isOpen) return
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
        }
        document.addEventListener("keydown", handleEscape)
        return () => document.removeEventListener("keydown", handleEscape)
    }, [isOpen, onClose])

    useEffect(() => {
        if (isOpen) panelRef.current?.focus()
    }, [isOpen])

    if (!mounted) return null

    return createPortal(
        <div
            className={cn("fixed inset-0 z-[var(--z-dialog,50)]", !isOpen && "pointer-events-none")}
            aria-hidden={!isOpen}
        >
            <div
                onClick={onClose}
                className={cn(
                    "absolute inset-0 bg-black/15 backdrop-blur-sm default-transition",
                    isOpen ? "opacity-100" : "opacity-0",
                )}
            />

            <div
                ref={panelRef}
                role="dialog"
                aria-modal="true"
                aria-label={ariaLabel}
                tabIndex={-1}
                className={cn(
                    "absolute top-0 h-full bg-background shadow-2xl flex flex-col outline-none",
                    "transition-transform duration-300 ease-in-out",
                    widthClassName,
                    side === "left" ? "left-0" : "right-0",
                    isOpen
                        ? "translate-x-0"
                        : side === "left"
                            ? "-translate-x-full"
                            : "translate-x-full",
                )}
            >
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close menu"
                    className="absolute top-4 right-4 text-text-secondary hover:text-primary default-transition z-10"
                >
                    <X size={22} />
                </button>

                {children}
            </div>
        </div>,
        document.body,
    )
}

export default SideDrawer