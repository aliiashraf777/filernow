// components/header/authDrawer/AuthDrawer.tsx
"use client"

import { useState } from "react"
import { cn } from "@/utils/cn"
import Button from "@/components/common/btns/Button"
import { useAuthDrawer } from "@/context/AuthDrawerContext"
import SideDrawer from "../../sideDrawer/SideDrawer"

const inputClass =
    "w-full rounded-brand-8 border border-border-clr bg-background px-4 py-2.5 para-base text-text-dark outline-none focus:border-primary default-transition"

const AuthDrawer = () => {
    const { isOpen, view, setView, closeAuthDrawer } = useAuthDrawer()

    return (
        <SideDrawer
            isOpen={isOpen}
            onClose={closeAuthDrawer}
            side="right"
            ariaLabel="Sign in or register"
        >
            <div className="pt-16 px-6 pb-8 flex flex-col h-full overflow-y-auto">
                <div className="flex border-b border-border-clr mb-6">
                    <button
                        type="button"
                        onClick={() => setView("signin")}
                        className={cn(
                            "flex-1 pb-3 para-base font-semibold border-b-2 default-transition",
                            view === "signin" ? "border-primary text-primary" : "border-transparent text-text-secondary",
                        )}
                    >
                        Sign in
                    </button>
                    <button
                        type="button"
                        onClick={() => setView("register")}
                        className={cn(
                            "flex-1 pb-3 para-base font-semibold border-b-2 default-transition",
                            view === "register" ? "border-primary text-primary" : "border-transparent text-text-secondary",
                        )}
                    >
                        Register
                    </button>
                </div>

                {view === "signin" ? <SignInForm /> : <RegisterForm />}
            </div>
        </SideDrawer>
    )
}

const SignInForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: wire to FastAPI auth endpoint once available
        console.log({ email, password })
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
                <label className="para-small font-medium text-text-secondary" htmlFor="signin-email">Email</label>
                <input id="signin-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} placeholder="you@example.com" />
            </div>

            <div className="flex flex-col gap-1.5">
                <label className="para-small font-medium text-text-secondary" htmlFor="signin-password">Password</label>
                <input id="signin-password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className={inputClass} placeholder="••••••••" />
            </div>

            <Button variant="primary" className="mt-2 w-full justify-center">
                Sign in
            </Button>
        </form>
    )
}

const RegisterForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: wire to FastAPI auth endpoint once available
        console.log({ name, email, password })
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
                <label className="para-small font-medium text-text-secondary" htmlFor="register-name">Full name</label>
                <input id="register-name" type="text" required value={name} onChange={(e) => setName(e.target.value)} className={inputClass} placeholder="Ali Khan" />
            </div>

            <div className="flex flex-col gap-1.5">
                <label className="para-small font-medium text-text-secondary" htmlFor="register-email">Email</label>
                <input id="register-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} placeholder="you@example.com" />
            </div>

            <div className="flex flex-col gap-1.5">
                <label className="para-small font-medium text-text-secondary" htmlFor="register-password">Password</label>
                <input id="register-password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className={inputClass} placeholder="••••••••" />
            </div>

            <Button variant="primary" className="mt-2 w-full justify-center">
                Create account
            </Button>
        </form>
    )
}

export default AuthDrawer