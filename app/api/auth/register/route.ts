// app/api/auth/register/route.ts
import { NextRequest, NextResponse } from "next/server";
import { setAuthCookies } from "@/lib/auth/cookies";

export async function POST(req: NextRequest) {
    const body = await req.json();

    const res = await fetch(`${process.env.FASTAPI_INTERNAL_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });

    if (!res.ok) {
        const error = await res.json();
        return NextResponse.json(error, { status: res.status });
    }

    const data = await res.json();

    // Only set cookies if register auto-logs-in. I'll confirm this with backend dev
    // if registration requires email verification first, this block I should remofe
    // and the page would redirect to /verify-email-pending instead of /dashboard.
    if (data.access_token && data.refresh_token) {
        await setAuthCookies({ accessToken: data.access_token, refreshToken: data.refresh_token });
    }

    return NextResponse.json({ user: data.user });
}