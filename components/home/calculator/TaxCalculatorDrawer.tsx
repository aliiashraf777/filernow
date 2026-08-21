"use client"
import { useMemo, useState } from "react"
import { Calculator, X, Calendar, Wallet, TrendingDown } from "lucide-react"
import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { taxSlabsByYear, availableTaxYears } from "@/data/taxSlabs"
import { calculateTax } from "@/lib/types/tax/calculate"
import type { TaxCategory } from "@/lib/types/tax/types"
import { useCalculatorContext } from "@/context/CalculatorContext"
import { StatCard } from "./StatCard"

const incomeTypes: { value: TaxCategory; label: string }[] = [
    { value: "salaried", label: "Salaried" },
    { value: "business", label: "Business" },
    { value: "company", label: "Company" },
]

const MIN_INCOME = '';
const MAX_INCOME = 20_000_000
const STEP = 50_000

const formatPKR = (n: number) =>
    new Intl.NumberFormat("en-PK", { maximumFractionDigits: 0 }).format(n)

const TaxCalculatorDrawer = () => {
    const { isCalculatorOpen, closeCalculator } = useCalculatorContext()

    const [year, setYear] = useState(availableTaxYears[0])
    const [incomeType, setIncomeType] = useState<TaxCategory>("salaried")
    const [income, setIncome] = useState(430_000)

    const { tax, effectiveRate } = useMemo(() => {
        const slabs = taxSlabsByYear[year]
        const brackets = slabs?.brackets[incomeType] ?? []
        const surcharge = slabs?.surcharge?.[incomeType]
        if (!brackets.length) return { tax: 0, effectiveRate: 0 }
        return calculateTax(income, brackets, surcharge)
    }, [year, incomeType, income])

    const monthlyTax = Math.round(tax / 12)

    return (
        <Dialog
            open={isCalculatorOpen}
            onOpenChange={(open) => !open && closeCalculator()}
        >
            <DialogContent className="max-w-[900px]x sm:max-w-[900px] w-[100vw] p-0 gap-0 overflow-hidden rounded-brand-16 border border-border-clr/10 shadow-2xl">
                {/* Header */}
                <div className="relative bg-primary px-6 py-5 flex items-center justify-between gap-4">

                    <div className="flex items-center gap-4">
                        <span className="grid place-items-center w-12 h-12 rounded-brand-16 bg-white/15 text-white shrink-0">
                            <Calculator size={22} />
                        </span>
                        <div>
                            <DialogTitle className="heading-h5 font-bold text-white">
                                Tax Calculator
                            </DialogTitle>
                            <p className="para-small text-white/80">Estimate your income tax instantly</p>
                        </div>
                    </div>

                    <DialogClose
                        aria-label="Close calculator"
                        className="text-white/80 cursor-pointer rounded-brand-8 p-1 hover:text-foreground hover:bg-background default-transition"
                    >
                        <X size={20} />
                    </DialogClose>
                </div>

                {/* Body */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-h-[75vh] overflow-y-auto">
                    {/* LEFT — inputs */}
                    <div className="flex flex-col gap-6">
                        <div className="grid grid-cols-2 gap-4">
                            {/* tax year */}
                            <div>
                                <label className="para-small font-small text-text-secondary mb-1.5 block">
                                    Tax Year
                                </label>
                                <div className="relative">
                                    <select
                                        value={year}
                                        onChange={(e) => setYear(Number(e.target.value))}
                                        className="w-full rounded-brand-8 border border-border-clr/50 bg-border-clr/10 px-2 py-3 para-small font-semibold text-text-dark default-transition focus:outline-none focus:border-primary/20"
                                    >
                                        {availableTaxYears.map((y) => (
                                            <option key={y} value={y}>{y}</option>
                                        ))}
                                    </select>
                                    <Calendar size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none" />
                                </div>
                            </div>

                            {/* income type */}
                            <div>
                                <label className="para-small font-small text-text-secondary mb-1.5 block">
                                    Income Type
                                </label>
                                <select
                                    value={incomeType}
                                    onChange={(e) => setIncomeType(e.target.value as TaxCategory)}
                                    className="w-full rounded-brand-8 border border-border-clr/50 bg-border-clr/10 px-2 py-3 para-small font-semibold text-text-dark default-transition focus:outline-none focus:border-primary/20"
                                >
                                    {incomeTypes.map((t) => (
                                        <option
                                            key={t.value}
                                            value={t.value}>
                                            {t.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            {/* Annual Income input + range slider block */}
                            <div>
                                <label className="para-small text-text-secondary mb-1.5 block">
                                    Annual Income (PKR)
                                </label>
                                <div className="rounded-brand-8 border border-border-clr/50 bg-border-clr/10 px-3 py-3 flex items-baseline gap-2">
                                    <span className="text-text-secondary font-medium">Rs</span>
                                    <input
                                        type="number"
                                        min={MIN_INCOME}
                                        max={MAX_INCOME}
                                        step={STEP}
                                        value={income}
                                        onChange={(e) => setIncome(Number(e.target.value))}
                                        className="w-full bg-transparent para-small font-semibold text-text-dark  focus:outline-none"
                                    />
                                </div>

                                <div className="flex justify-between para-tiny text-text-secondary mt-4 mb-1.5">
                                    <span>Rs 0</span>
                                    <span>Rs 20M+</span>
                                </div>
                                <input
                                    type="range"
                                    min={MIN_INCOME}
                                    max={MAX_INCOME}
                                    step={STEP}
                                    value={income}
                                    onChange={(e) => setIncome(Number(e.target.value))}
                                    className="w-full accent-primary h-2 rounded-full cursor-pointer"
                                />
                                <p className="para-tiny text-text-secondary mt-2">
                                    Drag to adjust in Rs {formatPKR(STEP)} increments.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT — results */}
                    <div className="flex flex-col gap-4">
                        {/* Annual Tax Payable card — unchanged */}
                        <div className="rounded-brand-16 bg-border-clr/10 p-5">
                            <div className="flex items-center justify-between">
                                <p className="para-small text-text-secondary">Annual Tax Payable</p>
                                <span className="para-tiny font-bold text-primary bg-primary/10 rounded-full px-3 py-1">
                                    {(effectiveRate * 100).toFixed(1)}% eff. rate
                                </span>
                            </div>

                            <p className="heading-h2 font-extrabold text-primary mt-1">
                                Rs {formatPKR(tax)}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                                <StatCard
                                    icon={<Calendar size={16} />} label="Monthly Tax"
                                    value={`Rs ${formatPKR(monthlyTax)}`}
                                />
                                <StatCard
                                    icon={<Wallet size={16} />}
                                    label="Income Type"
                                    value={incomeTypes.find(t => t.value === incomeType)!.label}
                                />
                                <StatCard
                                    icon={<TrendingDown size={16} />}
                                    label="Tax Year"
                                    value={String(year)}
                                />
                            </div>
                        </div>

                        {income > 0 && taxSlabsByYear[year]?.brackets[incomeType]?.length === 0 && (
                            <p className="para-small text-text-secondary-muted text-center">
                                {incomeTypes.find(t => t.value === incomeType)!.label} rates for TY {year} aren't loaded yet.
                            </p>
                        )}

                        <p className="para-tiny text-text-secondary-muter text-center mt-auto">
                            Estimates are based on FBR tax slabs and are for guidance only.
                        </p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default TaxCalculatorDrawer