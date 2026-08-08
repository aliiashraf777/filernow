import type { TaxBracket, SurchargeRule } from "./types"

export function calculateTax(income: number, brackets: TaxBracket[], surcharge?: SurchargeRule) {
    if (income <= 0) return { tax: 0, effectiveRate: 0 }

    const bracket = brackets.find((b) => income >= b.min && (b.max === null || income <= b.max))
    if (!bracket) return { tax: 0, effectiveRate: 0 } // income below the lowest bracket's min

    let tax = bracket.baseTax + (income - bracket.min) * bracket.rate

    if (surcharge && income > surcharge.threshold) {
        tax += tax * surcharge.rate
    }

    return { tax: Math.round(tax), effectiveRate: tax / income }
}