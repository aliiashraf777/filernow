export type FilerQueryMode = "identifier" | "text"

const digitsOnly = (v: string) => v.replace(/\D/g, "")

export interface FilerQueryValidation {
    valid: boolean
    message?: string
    normalized: string
    mode: FilerQueryMode
}

/**
 * Detects whether input looks like a CNIC/NTN (mostly digits/dashes) or a
 * name/business search (mostly letters), then validates against the rules
 * for that shape. Do NOT run digit validation against free text
 */
export function validateFilerQuery(raw: string): FilerQueryValidation {
    const trimmed = raw.trim()

    if (!trimmed) {
        return { valid: false, message: "Enter a CNIC, NTN, name, or business name.", normalized: "", mode: "text" }
    }

    const digitCount = (trimmed.match(/\d/g) ?? []).length
    const isIdentifier = digitCount / trimmed.length > 0.5

    if (isIdentifier) {
        const digits = digitsOnly(trimmed)
        if (digits.length < 7) {
            return { valid: false, message: "Enter at least 7 digits for your CNIC or NTN.", normalized: digits, mode: "identifier" }
        }
        if (digits.length > 13) {
            return { valid: false, message: "That's too many digits for a CNIC or NTN.", normalized: digits, mode: "identifier" }
        }
        return { valid: true, normalized: digits, mode: "identifier" }
    }

    if (trimmed.length < 3) {
        return { valid: false, message: "Enter at least 3 characters to search by name or business.", normalized: trimmed, mode: "text" }
    }
    return { valid: true, normalized: trimmed, mode: "text" }
}