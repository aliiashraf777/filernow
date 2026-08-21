// lib/types/filerStatus/types.ts

export type FilerCheckScreenTy = "form" | "loading" | "result" | "error"

// struck_off / not_active are unreachable for now — this endpoint only
// distinguishes "found in ATL" vs "not found." Kept in the union so the
// result-screen config doesn't need to change if backend later adds a
// status column. See STATUS_CONFIG in FilerStatusResultScreen.tsx.
export type FilerStatusTy = "active" | "struck_off" | "not_active" | "not_found"

export interface FilerRecord {
    id: number
    registrationNo: string   // upstream `sr_no`/`id` — backend dev says "NTN",
                              // but format doesn't match real NTN (no check digit).
                              
    taxpayerId: string       // upstream `ntn` — CNIC for individuals, NTN-style
                              // (sometimes letter-prefixed) for companies/AOPs.
    name: string
    businessNames: string[]  // upstream `business_name` is comma-joined; split here
}

export interface FilerCheckResponseTy {
    status: FilerStatusTy
    queriedValue: string     // normalized input the user searched with, shown as fallback when no record matched
    record?: FilerRecord     // absent when status === "not_found"
}

// const digitsOnly = (v: string) => v.replace(/\D/g, "")

// export function validateCnicOrNtn(
//     raw: string
// ): { valid: boolean; message?: string; normalized: string } {
//     const digits = digitsOnly(raw)
//     if (digits.length < 7) {
//         return { valid: false, message: "Enter at least 7 digits for your CNIC or NTN.", normalized: digits }
//     }
//     if (digits.length > 13) {
//         return { valid: false, message: "That's too many digits for a CNIC or NTN.", normalized: digits }
//     }
//     return { valid: true, normalized: digits }
// }