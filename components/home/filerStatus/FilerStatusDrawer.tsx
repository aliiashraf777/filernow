// components/home/filerStatus/FilerStatusDrawer
"use client"

import { useState } from "react"
import { ShieldCheck, X, Search, XCircle, AlertCircle } from "lucide-react"
import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { useFilerStatusContext } from "@/context/FilerStatusContext"
import { validateCnicOrNtn } from "@/lib/types/filerStatus/validate"
import type { FilerCheckResponseTy, FilerCheckScreenTy } from "@/lib/types/filerStatus/types"
import { cn } from "@/utils/cn"
import { FilerStatusResultScreen } from "./FilerStatusResultScreen"

const FilerStatusDrawer = () => {
    const { isFilerStatusOpen, closeFilerStatus } = useFilerStatusContext()

    const [input, setInput] = useState("")
    const [validationError, setValidationError] = useState<string | undefined>()
    const [screen, setScreen] = useState<FilerCheckScreenTy>("form")
    const [result, setResult] = useState<FilerCheckResponseTy | null>(null)
    const [apiError, setApiError] = useState<string | undefined>()

    const resetToForm = () => {
        setScreen("form")
        setResult(null)
        setApiError(undefined)
        setInput("")
        setValidationError(undefined)
    }

    const handleClose = (open: boolean) => {
        if (!open) {
            closeFilerStatus()
            // reset after close animation so the drawer doesn't flash "form" mid-close
            setTimeout(resetToForm, 200)
        }
    }

    const handleCheck = async () => {
        const { valid, message, normalized } = validateCnicOrNtn(input)
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
                body: JSON.stringify({ query: normalized }),
            })
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
                {/* Header — identical shell to TaxCalculatorDrawer */}
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

                {/* body */}
                <div className="p-6">
                    {screen === "form" && (
                        <div className="flex flex-col gap-5">
                            <p className="para-base text-text-secondary">
                                Enter your CNIC or NTN to check your filer status.
                            </p>

                            <div>
                                <label className="para-small font-medium text-text-secondary mb-1.5 block">
                                    CNIC or NTN
                                </label>
                                <input
                                    type="text"
                                    inputMode="numeric"
                                    placeholder="e.g. 35202-1234567-1"
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
                            <p className="para-small text-text-secondary">
                                Checking Active Taxpayer List…
                            </p>
                        </div>
                    )}

                    {screen === "result" && result && (
                        <FilerStatusResultScreen
                            result={result}
                            onCheckAnother={resetToForm}
                        />
                    )}

                    {screen === "error" && (
                        <div className="flex flex-col items-center gap-4 py-8 text-center">
                            <span className="grid place-items-center w-16 h-16 rounded-full bg-destructive/10 text-destructive">
                                <XCircle size={32} />
                            </span>
                            <h3 className="heading-h4 font-bold text-text-dark">
                                Couldn't complete the check
                            </h3>
                            <p className="para-small text-text-secondary">
                                {apiError}                            </p>
                            <button
                                type="button"
                                onClick={resetToForm}
                                className="para-small font-bold text-primary hover:underline"
                            >
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