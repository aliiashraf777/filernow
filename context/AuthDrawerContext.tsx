// context/AuthDrawerContext.tsx
"use client"

import AuthDrawer from "@/components/common/header/authDrawer/AuthDrawer"
import { createContext, useCallback, useContext, useMemo, useState } from "react"

type AuthViewTy = "signin" | "register"

type AuthDrawerContextValue = {
    isOpen: boolean
    view: AuthViewTy
    openAuthDrawer: (view?: AuthViewTy) => void
    closeAuthDrawer: () => void
    setView: (view: AuthViewTy) => void
}

const AuthDrawerContext = createContext<AuthDrawerContextValue | null>(null)

export const AuthDrawerProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [view, setView] = useState<AuthViewTy>("signin")

    const openAuthDrawer = useCallback((nextView: AuthViewTy = "signin") => {
        setView(nextView)
        setIsOpen(true)
    }, [])

    const closeAuthDrawer = useCallback(() => setIsOpen(false), [])

    const value = useMemo(
        () => ({ isOpen, view, openAuthDrawer, closeAuthDrawer, setView }),
        [isOpen, view, openAuthDrawer, closeAuthDrawer],
    )

    return (
        <AuthDrawerContext.Provider value={value}>
            {children}
            <AuthDrawer />
        </AuthDrawerContext.Provider>
    )
}

export const useAuthDrawer = () => {
    const ctx = useContext(AuthDrawerContext)
    if (!ctx) throw new Error("useAuthDrawer must be used within AuthDrawerProvider")
    return ctx
}