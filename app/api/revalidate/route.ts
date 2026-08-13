// app/api/revalidate/route.ts
import { revalidateTag } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
    const secret = request.nextUrl.searchParams.get("secret")
    const tag = request.nextUrl.searchParams.get("tag")

    if (secret !== process.env.REVALIDATE_SECRET) {
        return NextResponse.json({ message: "Invalid secret" }, { status: 401 })
    }
    if (!tag) return NextResponse.json({ message: "Missing tag" }, { status: 400 })

    // revalidateTag(tag, "max") // "max" = background revalidation, correct for blog content
    revalidateTag(tag, { expire: 0 }) // instant revalidation, correct for blog live changes
    return NextResponse.json({ revalidated: true, tag, now: Date.now() })
}