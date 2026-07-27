"use client"

import { useState } from "react"
import { IoSend } from "react-icons/io5"

const NewsletterForm = () => {
    const [email, setEmail] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: wire to actual subscribe endpoint
        setEmail("")
    }

    return (
        <form onSubmit={handleSubmit} className="flex w-full">
            <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 min-w-0 border border-border-clr rounded-brand-8x rounded-tl-brand-8 rounded-bl-brand-8 px-4 py-2 para-base outline-none focus:border-primary"
            />

            <button
                type="submit"
                aria-label="Subscribe"
                className="flex items-center justify-center px-4 bg-primary text-white rounded-r-brand-8 hover:bg-primary/90 default-transition">
                <IoSend size={16} />
            </button>
        </form>
    )
}

export default NewsletterForm