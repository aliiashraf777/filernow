// app/api/auth/login/route.ts
import { NextRequest, NextResponse } from "next/server";
import { setAuthCookies } from "@/lib/auth/cookies";

export async function POST(req: NextRequest) {
    const body = await req.json();

    const res = await fetch(`${process.env.FASTAPI_INTERNAL_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });

    if (!res.ok) {
        const error = await res.json();
        return NextResponse.json(error, { status: res.status });
    }

    const { access_token, refresh_token, user } = await res.json();
    await setAuthCookies({ accessToken: access_token, refreshToken: refresh_token });

    return NextResponse.json({ user });
}