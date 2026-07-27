import { cn } from "@/utils/cn"
import Link from "next/link"
import React from "react"

type ButtonVariantTy = 'gradient' | 'primary' | 'primary-light' | 'white' | 'blur' | 'ghost'
type ButtonSizeTy = 'normal' | 'full'

function variantClasses(variant: ButtonVariantTy, size: ButtonSizeTy, className?: string) {
    return cn(
        "w-max h-max flex items-center gap-2 rounded-brand-8 px-5 py-3 para-small font-semibold font-sans capitalize cursor-pointer border border-transparent default-transition",

        size === "full" && "w-full flex-1",

        variant === "gradient" && "bg-gradient-primary-rl text-white shadow-primary-btn",

        variant === "primary" && "bg-primary text-white shadow-primary-btn hover:opacity-90",

        variant === "primary-light" && "bg-primary/10 text-primary border-primary hover:bg-primary/15",

        variant === "white" && "bg-white text-text-dark hover:bg-white/90 border-border-clr",

        variant === "blur" && "border-white/20 bg-white/5 backdrop-blur-xl text-white",

        variant === "ghost" && "bg-transparent border-border-clr text-white/80",

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
}

const Button = ({
    children, onClick, className, disabled, variant = 'primary', size = 'normal' }: Props) => {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={cn(
                variantClasses(variant, size, className),
                disabled && "opacity-50 cursor-not-allowed pointer-events-none",
            )}
        >
            {children}
        </button>
    )
}

export default Button


// ------------
type AnchorBtnTy = {
    href: string,
    openOnNewTab?: boolean,
    label?: string,
    icon?: React.ReactNode,
    variant?: ButtonVariantTy,
    size?: ButtonSizeTy,
    className?: string,
}

export const AnchorBtn = ({ href, openOnNewTab, label, icon, variant = 'primary', size = 'normal', className }: AnchorBtnTy) => {
    return (
        <a
            href={href}
            target={openOnNewTab ? "_blank" : "_self"}
            rel={openOnNewTab ? "noopener noreferrer" : undefined}
            aria-label={label}
            className={variantClasses(variant, size, className)}
        >
            {icon}{label}
        </a>
    )
}


// ------------
type LinkBtnTy = {
    href: string,
    openOnNewTab?: boolean,
    label?: string,
    icon?: React.ReactNode,
    variant?: ButtonVariantTy,
    size?: ButtonSizeTy,
    className: string,
}

export const LinkBtn = ({ href, label, icon, variant = 'primary', size = 'normal', className }: LinkBtnTy) => {
    return (
        <Link
            href={href}
            className={variantClasses(variant, size, className)}
        >
            {icon}{label}
        </Link>
    )
}