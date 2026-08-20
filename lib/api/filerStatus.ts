// lib/api/filerStatus.ts
import type { FilerRecord } from "@/lib/types/filerStatus/types"

interface UpstreamFilerResult {
    id: number
    sr_no: string
    ntn: string
    name: string
    business_name: string
    search_vector: string
    rank: number
}

interface UpstreamSearchResponse {
    query: string
    count: number
    results: UpstreamFilerResult[]
}

const digitsOnly = (v: string) => v.replace(/\D/g, "")

/**
 * Maps a raw XLSX-search row to our domain shape. See field-naming caveat
 * in lib/types/filerStatus/types.ts — do not trust upstream key names literally.
 * We also never forward `search_vector` or `rank` past this boundary — those
 * are Postgres full-text-search internals with no user-facing meaning.
 */
export function mapUpstreamResult(raw: UpstreamFilerResult): FilerRecord {
    return {
        id: raw.id,
        registrationNo: raw.sr_no,
        taxpayerId: raw.ntn,
        name: raw.name.trim(),
        businessNames: raw.business_name
            .split(",")
            .map((b) => b.trim())
            .filter(Boolean),
    }
}

export async function searchFilers(
    baseUrl: string,
    query: string,
    limit = 10
): Promise<FilerRecord[]> {
    const url = new URL("/api/xlsx/search", baseUrl)
    url.searchParams.set("q", query)
    url.searchParams.set("limit", String(limit))

    const res = await fetch(url.toString(), { headers: { accept: "application/json" } })
    if (!res.ok) throw new Error(`Upstream search failed: ${res.status}`)

    const data: UpstreamSearchResponse = await res.json()
    return data.results.map(mapUpstreamResult)
}

export function findExactMatch(records: FilerRecord[], normalizedDigits: string): FilerRecord | undefined {
    // digitsOnly on a letter-prefixed identifier like "A064181-2" strips the
    // letter and compares the numeric remainder. Works for now; if a user's
    // full identifier genuinely starts with "A", this needs a smarter compare.
    return records.find(
        (r) => digitsOnly(r.taxpayerId) === normalizedDigits || digitsOnly(r.registrationNo) === normalizedDigits
    )
}

/**
 * A FilerRecord can carry several comma-joined business names. Which one is
 * relevant depends entirely on what the user searched for — there is no
 * fixed "primary" business. This must be the only place that decides which
 * business name to surface, so the suggestion dropdown and the result
 * screen can never disagree.
 */
export function pickMatchedBusiness(
    record: FilerRecord,
    query: string
): { primary: string | undefined; matchedIndex: number } {
    const q = query.trim().toLowerCase()

    if (!q || record.businessNames.length === 0) {
        return { primary: record.businessNames[0], matchedIndex: record.businessNames.length ? 0 : -1 }
    }

    const idx = record.businessNames.findIndex((b) => b.toLowerCase().includes(q))
    if (idx === -1) {
        return { primary: record.businessNames[0], matchedIndex: 0 }
    }
    return { primary: record.businessNames[idx], matchedIndex: idx }
}