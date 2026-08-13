import { cn } from "@/utils/cn"
import Link from "next/link"
import React from "react"

export type ButtonVariantTy = 'gradient' | 'primary' | 'primary-light' | 'white' | 'blur' | 'ghost'
type ButtonSizeTy = 'normal' | 'full'

// components/btns/Button.tsx — add attentionGrabbing as a boolean, not a new variant
function variantClasses(variant: ButtonVariantTy, size: ButtonSizeTy, attentionGrabbing: boolean | undefined, className?: string) {
    return cn(
        "w-max h-max flex items-center gap-2 rounded-brand-8 px-5 py-3 para-small font-semibold font-sans capitalize cursor-pointer border border-transparent default-transition relative overflow-hidden",
        size === "full" && "w-full flex-1",
        variant === "gradient" && "bg-gradient-primary-rl text-white shadow-primary-btn",
        variant === "primary" && "bg-primary text-white shadow-primary-btn hover:opacity-90",
        variant === "primary-light" && "bg-primary/10 text-primary border-primary hover:bg-primary/15",
        variant === "white" && "bg-background text-text-dark hover:bg-background/90 border-border-clr",
        variant === "blur" && "border-white/20 bg-white/5 backdrop-blur-xl text-white",
        variant === "ghost" && "bg-transparent border-border-clr text-white/80",
        "sheen-sweep-hover",
        attentionGrabbing && (variant === "white" || variant === "primary-light" ? "cta-shimmer-dark" : "cta-shimmer"),
        className,
    )
}

type Props = {
    children: React.ReactNode,
    className?: string,
    onClick?: () => void,
    disabled?: boolean,
    variant?: ButtonVariantTy,
    size?: ButtonSizeTy,
    isLoading?: boolean,
    attentionGrabbing?: boolean,
    spanClass?: string,
}

const Button = ({ children, onClick, className, disabled, variant = 'primary', size = 'normal', isLoading, attentionGrabbing, spanClass }: Props) => (
    <button
        type="button"
        onClick={onClick}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        className={cn(variantClasses(variant, size, attentionGrabbing, className), disabled && "opacity-50 cursor-not-allowed pointer-events-none")}
    >
        <span className={cn("relative z-10 flex items-center gap-2", spanClass)}>{children}</span>
    </button>
)

export default Button

// ------------ (AnchorBtn and LinkBtn — same attentionGrabbing prop threaded through)
type AnchorBtnTy = {
    href: string,
    openOnNewTab?: boolean,
    label?: string,
    icon?: React.ReactNode,
    variant?: ButtonVariantTy,
    size?: ButtonSizeTy,
    className?: string,
    attentionGrabbing?: boolean,
    spanClass?: string,
}

export const AnchorBtn = ({ href, openOnNewTab, label, icon, variant = 'primary', size = 'normal', className, attentionGrabbing, spanClass }: AnchorBtnTy) => (
    <a
        href={href}
        target={openOnNewTab ? "_blank" : "_self"}
        rel={openOnNewTab ? "noopener noreferrer" : undefined}
        aria-label={label}
        className={variantClasses(variant, size, attentionGrabbing, className)}
    >
        <span className={cn("relative z-10 flex items-center gap-2", spanClass)}>{label}{icon}</span>
    </a>
)

type LinkBtnTy = {
    href: string,
    openOnNewTab?: boolean,
    label?: string,
    icon?: React.ReactNode,
    variant?: ButtonVariantTy,
    size?: ButtonSizeTy,
    className?: string,
    attentionGrabbing?: boolean,
    spanClass?: string,
}

export const LinkBtn = ({ href, openOnNewTab, label, icon, variant = 'primary', size = 'normal', className, attentionGrabbing, spanClass }: LinkBtnTy) => (
    <Link
        href={href}
        target={openOnNewTab ? "_blank" : undefined}
        rel={openOnNewTab ? "noopener noreferrer" : undefined}
        className={variantClasses(variant, size, attentionGrabbing, className)}
    >
        <span className={cn("relative z-10 flex items-center gap-2", spanClass)}>
            {label}{icon}
        </span>
    </Link>
)