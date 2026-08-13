// app/api/blogs/route.ts — same-origin proxy the client-side "Load More" hits
import { NextRequest, NextResponse } from "next/server"
import { getBlogPosts } from "@/lib/api/blogs"

export async function GET(request: NextRequest) {
    const params = request.nextUrl.searchParams
    const data = await getBlogPosts({
        category: params.get("category") ?? undefined,
        search: params.get("search") ?? undefined,
        page: params.get("page") ? Number(params.get("page")) : undefined,
        pageSize: params.get("pageSize") ? Number(params.get("pageSize")) : undefined,
    })
    return NextResponse.json(data)
}