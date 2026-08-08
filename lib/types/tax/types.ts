export type TaxCategory = "salaried" | "business" | "company"

export type TaxBracket = {
    min: number,
    max: number | null,   // null = no upper bound
    rate: number,          // e.g. 0.11 for 11%
    baseTax: number,       // pre-computed tax on everything below `min` — avoids re-deriving it at calc time
}

export type SurchargeRule = {
    threshold: number,
    rate: number,  // applied to the computed tax, not the income
}

export type TaxYearSlabs = {
    year: number,
    brackets: Record<TaxCategory, TaxBracket[]>,
    surcharge?: Record<TaxCategory, SurchargeRule | undefined>,
    verified: boolean,     // false = placeholder, needs sourcing before shipping
}