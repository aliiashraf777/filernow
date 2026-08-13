// components/ui/ThemeToggle.tsx
"use client"
import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { IconSmallBtn } from "../common/btns/Button"

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

    return (<>
        <IconSmallBtn
            onClick={toggle}
            ariaLabel="toggle theme"
        >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </IconSmallBtn>
    </>)
}

export default ThemeToggle