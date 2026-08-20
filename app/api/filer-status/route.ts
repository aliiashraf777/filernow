// app/api/filer-status/route.ts

// exact check (POST, used when someone types a full CNIC/NTN and hits "Check Status" directly, without picking a suggestion)
import { NextRequest, NextResponse } from "next/server"
import { searchFilers, findExactMatch } from "@/lib/api/filerStatus"
import type { FilerCheckResponseTy } from "@/lib/types/filerStatus/types"

const FASTAPI_INTERNAL_URL = process.env.FASTAPI_INTERNAL_URL
const digitsOnly = (v: string) => v.replace(/\D/g, "")

export async function POST(req: NextRequest) {
    if (!FASTAPI_INTERNAL_URL) {
        return NextResponse.json({ error: "Backend not configured" }, { status: 500 })
    }

    const { query, mode } = await req.json()
    const trimmed = String(query ?? "").trim()

    if (mode === "identifier") {
        const normalized = digitsOnly(trimmed)
        if (normalized.length < 7 || normalized.length > 13) {
            return NextResponse.json({ error: "Invalid CNIC or NTN" }, { status: 400 })
        }

        let records
        try {
            records = await searchFilers(FASTAPI_INTERNAL_URL, normalized, 20)
        } catch {
            return NextResponse.json({ error: "Upstream unreachable" }, { status: 502 })
        }

        const match = findExactMatch(records, normalized)
        const response: FilerCheckResponseTy = match
            ? { status: "active", queriedValue: normalized, record: match }
            : { status: "not_found", queriedValue: normalized }
        return NextResponse.json(response)
    }

    // mode === "text" — name or business name, typed and submitted directly
    // without picking a suggestion (e.g. Enter key on a full match).
    if (trimmed.length < 3) {
        return NextResponse.json({ error: "Query too short" }, { status: 400 })
    }

    let records
    try {
        records = await searchFilers(FASTAPI_INTERNAL_URL, trimmed, 20)
    } catch {
        return NextResponse.json({ error: "Upstream unreachable" }, { status: 502 })
    }

    const q = trimmed.toLowerCase()
    // Exact match only — a name/business string that exactly equals the
    // person's name OR one of their business names. Upstream is fuzzy-ranked,
    // so "contains" isn't good enough here; we don't want to silently pick
    // the top-ranked loose match and show the wrong person's data.
    const exactMatches = records.filter(
        (r) => r.name.toLowerCase() === q || r.businessNames.some((b) => b.toLowerCase() === q)
    )

    if (exactMatches.length === 0) {
        const response: FilerCheckResponseTy = { status: "not_found", queriedValue: trimmed }
        return NextResponse.json(response)
    }

    if (exactMatches.length > 1) {
        // Same name/business string shared by more than one real record —
        // don't guess which one the user means. Signal the client to keep
        // the dropdown open and force an explicit pick instead.
        return NextResponse.json({ error: "AMBIGUOUS", candidates: exactMatches }, { status: 409 })
    }

    const response: FilerCheckResponseTy = { status: "active", queriedValue: trimmed, record: exactMatches[0] }
    return NextResponse.json(response)
}