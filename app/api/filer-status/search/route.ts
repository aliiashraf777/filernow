// app/api/filer-status/search/route.ts
import { NextRequest, NextResponse } from "next/server"
import { searchFilers } from "@/lib/api/filerStatus"

const FASTAPI_INTERNAL_URL = process.env.FASTAPI_INTERNAL_URL
const MIN_QUERY_LENGTH = 3

export async function GET(req: NextRequest) {
    if (!FASTAPI_INTERNAL_URL) {
        return NextResponse.json({ error: "Backend not configured" }, { status: 500 })
    }

    const q = req.nextUrl.searchParams.get("q")?.trim() ?? ""

    if (q.length < MIN_QUERY_LENGTH) {
        // Blocks 1-2 char queries here — cheap on our side, avoids sending a
        // broad scan to the FBR dataset on every early keystroke. This is
        // NOT a substitute for rate limiting on the FastAPI side — flag to
        // fastapi dev that this endpoint has none yet.
        return NextResponse.json({ results: [] })
    }

    try {
        const records = await searchFilers(FASTAPI_INTERNAL_URL, q, 10)
        return NextResponse.json({ results: records })
    } catch {
        return NextResponse.json({ error: "Search failed" }, { status: 502 })
    }
}