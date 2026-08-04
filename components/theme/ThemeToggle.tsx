// components/ui/ThemeToggle.tsx
"use client"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        setIsDark(document.documentElement.classList.contains("dark"))
    }, [])

    const toggle = () => {
        const next = !isDark
        setIsDark(next)
        document.documentElement.classList.toggle("dark", next)
        localStorage.setItem("theme", next ? "dark" : "light")
    }

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label="Toggle theme"
            className="flex items-center justify-center w-9 h-9 bg-card-bg-clr rounded-brand-8 hover:bg-border-clr default-transition"
        >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    )
}

export default ThemeToggle