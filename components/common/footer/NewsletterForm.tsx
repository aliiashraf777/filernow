// components/footer/NewsletterForm.tsx
"use client"
import { useState } from "react"
import { IoSend, IoCheckmarkCircle } from "react-icons/io5"
import { cn } from "@/utils/cn"

type Status = "idle" | "submitting" | "success" | "error"

const NewsletterForm = () => {
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState<Status>("idle")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (status === "submitting") return // guard against double-submit

        setStatus("submitting")
        try {
            // await fetch("/api/newsletter", { method: "POST", body: JSON.stringify({ email }) })
            await new Promise((res) => setTimeout(res, 600)) // placeholder
            setStatus("success")
            setEmail("")
        } catch {
            setStatus("error")
        }
    }

    return (
        <div className="flex flex-col gap-2">
            <form onSubmit={handleSubmit} className="flex w-full">
                <input
                    type="email"
                    required
                    disabled={status === "submitting"}
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                        if (status !== "idle") setStatus("idle")
                    }}
                    placeholder="Enter your email"
                    className="flex-1 min-w-0 border border-border-clr rounded-brand-8x rounded-tl-brand-8 rounded-bl-brand-8 px-4 py-2 para-base outline-none focus:border-primary disabled:opacity-60"
                />

                <button
                    type="submit"
                    disabled={status === "submitting"}
                    aria-label="Subscribe"
                    className="group flex items-center justify-center px-4 bg-primary text-white rounded-r-brand-8 hover:bg-primary/90 default-transition disabled:opacity-70"
                >
                    <IoSend
                        size={16}
                        className={cn(
                            "default-transition",
                            status === "submitting" ? "animate-pulse" : "group-hover:translate-x-0.5"
                        )}
                    />
                </button>
            </form>

            <p aria-live="polite" className="para-tiny min-h-[16px]">
                {status === "success" && (
                    <span className="flex items-center gap-1 text-primary">
                        <IoCheckmarkCircle size={14} /> Subscribed — thanks!
                    </span>
                )}
                {status === "error" && (
                    <span className="text-red-500">Something went wrong. Try again.</span>
                )}
            </p>
        </div>
    )
}

export default NewsletterForm