import { cn } from "@/utils/cn"
import React from "react"

type Props = {
    children: React.ReactNode,
    className?: string,
    onClick?: () => void,
    disabled?: boolean,
    variant?: 'gradient' | 'blur' | 'ghost' | 'white',
    size?: 'normal' | 'full'
}

const Button = ({
    children, onClick, className, disabled, variant = 'gradient', size = 'normal' }: Props) => {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={cn(
                // 1. base styles - common and always apply
                "w-max h-max flex items-center gap-2 rounded-full px-6 py-3 para-base font-semibold cursor-pointer border border-transparent hover:scale-105 default-transition",

                // 2. size variant
                size === "full" && "w-full flex-1",

                // 3. color variants
                variant === "gradient" && "bg-gradient-btn text-white-off shadow-btn",

                variant === "blur" && "border-white/20 bg-white/5 backdrop-blur-xl",

                variant === "ghost" && "bg-transparent border-border-clr text-text-primary",

                variant === "white" && "bg-white text-text-primary hover:bg-white/90",
            )}
        >
            {children}
        </button>
    )
}

export default Button