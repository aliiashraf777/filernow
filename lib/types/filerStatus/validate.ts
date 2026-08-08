// CNIC: 13 digits, dashes optional (35202-1234567-1). NTN: 7+ digits.
const digitsOnly = (v: string) => v.replace(/\D/g, "")

export function validateCnicOrNtn(raw: string): { valid: boolean; message?: string; normalized: string } {
    const digits = digitsOnly(raw)
    if (digits.length < 7) {
        return { valid: false, message: "Enter at least 7 digits for your CNIC or NTN.", normalized: digits }
    }
    if (digits.length > 13) {
        return { valid: false, message: "That's too many digits for a CNIC or NTN.", normalized: digits }
    }
    return { valid: true, normalized: digits }
}