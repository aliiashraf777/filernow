// components/home/filerStatus/FilerStatusDrawer
"use client"

import { useEffect, useRef, useState } from "react"
import { ShieldCheck, X, Search, XCircle, AlertCircle, Loader2, ChevronDown } from "lucide-react"
import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { useFilerStatusContext } from "@/context/FilerStatusContext"
import { validateFilerQuery } from "@/lib/types/filerStatus/validate"
import { pickMatchedBusiness } from "@/lib/api/filerStatus"
import type { FilerCheckResponseTy, FilerCheckScreenTy, FilerRecord } from "@/lib/types/filerStatus/types"
import { useDebouncedValue } from "@/hooks/useDebouncedValue"
import { cn } from "@/utils/cn"
import { FilerStatusResultScreen } from "./FilerStatusResultScreen"

const MIN_QUERY_LENGTH = 3

const FilerStatusDrawer = () => {
    const { isFilerStatusOpen, closeFilerStatus } = useFilerStatusContext()

    const [input, setInput] = useState("")
    const [validationError, setValidationError] = useState<string | undefined>()
    const [screen, setScreen] = useState<FilerCheckScreenTy>("form")
    const [result, setResult] = useState<FilerCheckResponseTy | null>(null)
    const [apiError, setApiError] = useState<string | undefined>()

    const [suggestions, setSuggestions] = useState<FilerRecord[]>([])
    const [suggestionsLoading, setSuggestionsLoading] = useState(false)
    const [expandedId, setExpandedId] = useState<number | null>(null)
    const debouncedInput = useDebouncedValue(input, 350)
    const wrapperRef = useRef<HTMLDivElement>(null)

    // Visibility is DERIVED, not a separately-toggled boolean — this is what
    // was causing the dropdown to appear on empty focus. It can only ever
    // show once there's enough input AND something to show.
    const dropdownVisible =
        input.trim().length >= MIN_QUERY_LENGTH && (suggestionsLoading || suggestions.length > 0)

    const resetToForm = () => {
        setScreen("form")
        setResult(null)
        setApiError(undefined)
        setInput("")
        setValidationError(undefined)
        setSuggestions([])
        setExpandedId(null)
    }

    const handleClose = (open: boolean) => {
        if (!open) {
            closeFilerStatus()
            setTimeout(resetToForm, 200)
        }
    }

    useEffect(() => {
        const trimmed = debouncedInput.trim()
        if (screen !== "form" || trimmed.length < MIN_QUERY_LENGTH) {
            setSuggestions([])
            return
        }

        let cancelled = false
        setSuggestionsLoading(true)

        fetch(`/api/filer-status/search?q=${encodeURIComponent(trimmed)}`)
            .then((res) => res.json())
            .then((data: { results?: FilerRecord[] }) => {
                if (!cancelled) setSuggestions(data.results ?? [])
            })
            .catch(() => {
                if (!cancelled) setSuggestions([])
            })
            .finally(() => {
                if (!cancelled) setSuggestionsLoading(false)
            })

        return () => {
            cancelled = true
        }
    }, [debouncedInput, screen])

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setExpandedId(null)
            }
        }
        document.addEventListener("mousedown", handler)
        return () => document.removeEventListener("mousedown", handler)
    }, [])

    const handleSelectSuggestion = (record: FilerRecord) => {
        setResult({ status: "active", queriedValue: input, record })
        setScreen("result")
    }

    const handleCheck = async () => {
        const { valid, message, normalized, mode } = validateFilerQuery(input)
        if (!valid) {
            setValidationError(message)
            return
        }
        setValidationError(undefined)
        setScreen("loading")

        try {
            const res = await fetch("/api/filer-status", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ query: normalized, mode }),
            })

            if (res.status === 409) {
                // Ambiguous text match — send them back to the form with
                // suggestions narrowed to the candidates, rather than guessing.
                const data = await res.json()
                setSuggestions(data.candidates ?? [])
                setScreen("form")
                setValidationError("Multiple matches found — pick one from the list below.")
                return
            }
            if (!res.ok) throw new Error("Request failed")

            const data: FilerCheckResponseTy = await res.json()
            setResult(data)
            setScreen("result")
        } catch {
            setApiError("Something went wrong while checking your status. Please try again.")
            setScreen("error")
        }
    }

    return (
        <Dialog open={isFilerStatusOpen} onOpenChange={handleClose}>
            <DialogContent className="max-w-[480px] sm:max-w-[480px] w-[92vw] p-0 gap-0 overflow-hidden rounded-brand-16 border border-border-clr/10 shadow-2xl">
                <div className="relative bg-primary px-6 py-5 flex items-center justify-between gap-4">
                    <span className="grid place-items-center w-12 h-12 rounded-brand-16 bg-white/15 text-white shrink-0">
                        <ShieldCheck size={22} />
                    </span>
                    <div>
                        <DialogTitle className="heading-h5 font-bold text-white">
                            Check Filer Status
                        </DialogTitle>
                        <p className="para-small text-white/80">Verify your Active Taxpayer List status</p>
                    </div>
                    <DialogClose
                        aria-label="Close"
                        className="text-white/80 cursor-pointer rounded-brand-8 p-1 hover:text-foreground hover:bg-background default-transition"
                    >
                        <X size={20} />
                    </DialogClose>
                </div>

                <div className="p-6">
                    {screen === "form" && (
                        <div className="flex flex-col gap-5">
                            <p className="para-base text-text-secondary">
                                Search by CNIC, NTN, name, or business name.
                            </p>

                            <div className="relative" ref={wrapperRef}>
                                <label className="para-small font-medium text-text-secondary mb-1.5 block">
                                    CNIC, NTN, Name, or Business Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. 35202-1234567-1 or Tahir Amin"
                                    value={input}
                                    onChange={(e) => {
                                        setInput(e.target.value)
                                        if (validationError) setValidationError(undefined)
                                    }}
                                    onKeyDown={(e) => e.key === "Enter" && handleCheck()}
                                    className={cn(
                                        "w-full rounded-brand-8 border bg-border-clr/10 px-4 py-3 para-base text-text-dark default-transition focus:outline-none",
                                        validationError ? "border-destructive/60" : "border-border-clr/50 focus:border-primary/40"
                                    )}
                                />
                                {validationError && (
                                    <p className="flex items-center gap-1.5 para-small text-primary mt-2">
                                        <AlertCircle size={16} />
                                        {validationError}
                                    </p>
                                )}

                                {dropdownVisible && (
                                    <div className="absolute z-20 top-full left-0 right-0 mt-1.5 max-h-72 overflow-y-auto rounded-brand-8 border border-border-clr/40 bg-white shadow-xl">
                                        {suggestionsLoading && (
                                            <div className="flex items-center gap-2 px-4 py-3 para-small text-text-secondary">
                                                <Loader2 size={14} className="animate-spin" />
                                                Searching…
                                            </div>
                                        )}
                                        {!suggestionsLoading &&
                                            suggestions.map((record) => {
                                                const { primary, matchedIndex } = pickMatchedBusiness(record, input)
                                                const otherCount = record.businessNames.length - (matchedIndex === -1 ? 0 : 1)
                                                const isExpanded = expandedId === record.id

                                                return (
                                                    <div
                                                        key={record.id}
                                                        className="border-b border-border-clr/20 last:border-0"
                                                    >
                                                        <button
                                                            type="button"
                                                            onClick={() => handleSelectSuggestion(record)}
                                                            className="w-full text-left px-4 py-3 hover:bg-border-clr/10 default-transition"
                                                        >
                                                            <p className="para-small font-bold text-text-dark truncate">
                                                                {record.name}
                                                            </p>
                                                            {primary && (
                                                                <p className="para-tiny text-text-secondary truncate">
                                                                    {primary}
                                                                </p>
                                                            )}
                                                            <p className="para-tiny text-text-secondary-muter">
                                                                {record.taxpayerId}
                                                            </p>
                                                        </button>

                                                        {otherCount > 0 && (
                                                            <button
                                                                type="button"
                                                                onClick={(e) => {
                                                                    e.stopPropagation()
                                                                    setExpandedId(isExpanded ? null : record.id)
                                                                }}
                                                                className="flex items-center gap-1 px-4 pb-2.5 para-tiny font-medium text-primary"
                                                            >
                                                                <ChevronDown
                                                                    size={12}
                                                                    className={cn("default-transition", isExpanded && "rotate-180")}
                                                                />
                                                                {isExpanded ? "Hide" : `+${otherCount} more`} registered business
                                                                {otherCount > 1 ? "es" : ""}
                                                            </button>
                                                        )}

                                                        {isExpanded && (
                                                            <ul className="px-4 pb-3 flex flex-col gap-1">
                                                                {record.businessNames
                                                                    .filter((_, i) => i !== matchedIndex)
                                                                    .map((b) => (
                                                                        <li
                                                                            key={b}
                                                                            className="para-tiny text-text-secondary truncate"
                                                                        >
                                                                            {b}
                                                                        </li>
                                                                    ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                )
                                            })}
                                    </div>
                                )}
                            </div>

                            <button
                                type="button"
                                onClick={handleCheck}
                                className="relative sheen-sweep-hover flex items-center justify-center gap-2 w-full rounded-brand-8 bg-primary text-white py-3.5 para-base font-bold cursor-pointer default-transition"
                            >
                                <Search size={18} />
                                Check Status
                            </button>

                            <p className="para-tiny text-text-secondary-muter text-center">
                                Your information is used only to process this status check.
                            </p>
                        </div>
                    )}

                    {screen === "loading" && (
                        <div className="flex flex-col items-center gap-4 py-10">
                            <div className="w-10 h-10 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
                            <p className="para-small text-text-secondary">Checking Active Taxpayer List…</p>
                        </div>
                    )}

                    {screen === "result" && result && (
                        <FilerStatusResultScreen result={result} onCheckAnother={resetToForm} />
                    )}

                    {screen === "error" && (
                        <div className="flex flex-col items-center gap-4 py-8 text-center">
                            <span className="grid place-items-center w-16 h-16 rounded-full bg-destructive/10 text-destructive">
                                <XCircle size={32} />
                            </span>
                            <h3 className="heading-h4 font-bold text-text-dark">Couldn't complete the check</h3>
                            <p className="para-small text-text-secondary">{apiError}</p>
                            <button type="button" onClick={resetToForm} className="para-small font-bold text-primary hover:underline">
                                Try again
                            </button>
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default FilerStatusDrawer