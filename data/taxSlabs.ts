// taxSlabs - single source of truth for every year/category combo
import type { TaxYearSlabs } from "@/lib/types/tax/types"

export const taxSlabsByYear: Record<number, TaxYearSlabs> = {
    2026: {
        year: 2026,
        verified: true, // sourced from filernow.com/salaried-individuals-ty-2026/
        brackets: {
            salaried: [
                { min: 0, max: 600000, rate: 0, baseTax: 0 },
                { min: 600001, max: 1200000, rate: 0.01, baseTax: 0 },
                { min: 1200001, max: 2200000, rate: 0.11, baseTax: 6000 },
                { min: 2200001, max: 3200000, rate: 0.15, baseTax: 116000 },
                { min: 3200001, max: 4100000, rate: 0.19, baseTax: 266000 },
                { min: 4100001, max: null, rate: 0.22, baseTax: 437000 },
            ],
            // TODO — source from filernow.com/business-individuals-aops-ty-2026/ before shipping
            business: [],
            // TODO — source from filernow.com company TY2026 page before shipping
            company: [],
        },
        surcharge: {
            salaried: { threshold: 10000000, rate: 0.09 },
            business: undefined,
            company: undefined,
        },
    },

    // TODO — 2020 through 2025: pull from filernow.com/salaried-individuals-ty-{year}/
    // (and the equivalent business-individuals-aops-ty-{year} / company pages) before
    // enabling these years in the dropdown. Do not guess — FBR revises brackets most budgets.
}

export const availableTaxYears = Object.values(taxSlabsByYear)
    .filter((y) => y.verified)
    .map((y) => y.year)
    .sort((a, b) => b - a)