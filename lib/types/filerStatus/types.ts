export type FilerCheckResultStatus = "active" | "inactive" | "not_found"

export type FilerCheckResponseTy = {
    status: FilerCheckResultStatus
    lastFour: string  // backend returns only last 4 digits, never the full CNIC/NTN back
    matchedOn?: "cnic" | "ntn"
}

export type FilerCheckScreenTy = "form" | "loading" | "result" | "error"