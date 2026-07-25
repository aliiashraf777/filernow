import { cn } from "@/utils/cn"
import React from "react"

type Props = {
    children: React.ReactNode,
    className?: string,
    onClick?: () => void,
    disabled?: boolean,
    variant?: 'gradient' | 'primary' | 'primary-light' | 'white' | 'blur' | 'ghost',
    size?: 'normal' | 'full'
}

const Button = ({
    children, onClick, className, disabled, variant = 'primary', size = 'normal' }: Props) => {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={cn(
                // 1. base styles - common and always apply
                "w-max h-max flex items-center gap-2 rounded-brand-8 px-5 py-3 para-small font-semibold font-sans capitalize cursor-pointer border border-transparent default-transition",

                // 2. size variant
                size === "full" && "w-full flex-1",

                // 3. color variants
                variant === "gradient" && "bg-gradient-primary-rl text-white shadow-primary-btn",

                variant === "primary" &&
                "bg-primary text-white shadow-primary-btn hover:opacity-90",

                variant === "primary-light" &&
                "bg-primary/10 text-primary border-primary hover:bg-primary/15",

                variant === "white" && "bg-white text-text-dark hover:bg-white/90 border-border-clr",

                variant === "blur" && "border-white/20 bg-white/5 backdrop-blur-xl text-white",

                variant === "ghost" && "bg-transparent border-border-clr text-white/80",

                disabled && "opacity-50 cursor-not-allowed pointer-events-none",

                className,
            )}
        >
            {children}
        </button>
    )
}

export default Button