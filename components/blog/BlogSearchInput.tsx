// components/blog/BlogSearchInput.tsx
"use client"
import { Search } from "lucide-react"
import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

const BlogSearchInput = () => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [value, setValue] = useState(searchParams.get("search") ?? "")
    const isFirstRender = useRef(true)

    useEffect(() => {
        if (isFirstRender.current) { isFirstRender.current = false; return }
        const timeout = setTimeout(() => {
            const params = new URLSearchParams(searchParams.toString())
            value ? params.set("search", value) : params.delete("search")
            params.delete("page")
            router.push(`${pathname}?${params.toString()}`)
        }, 400)
        return () => clearTimeout(timeout)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return (
        <div className="relative w-full">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary-muter" />
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Search blogs..."
                className="w-full rounded-brand-12 border border-border-clr bg-background py-3.5 pl-11 pr-4 para-small text-text-dark default-transition placeholder:text-text-secondary-muter focus:border-primary focus:outline-none"
            />
        </div>
    )
}

export default BlogSearchInput