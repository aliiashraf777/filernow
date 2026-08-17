// app/api/auth/refresh/route.ts
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { setAuthCookies, clearAuthCookies } from "@/lib/auth/cookies";

export async function POST(_req: NextRequest) {
  const store = await cookies();
  const refreshToken = store.get("refresh_token")?.value;

  if (!refreshToken) {
    return NextResponse.json({ detail: "No refresh token" }, { status: 401 });
  }

  const res = await fetch(`${process.env.FASTAPI_INTERNAL_URL}/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh_token: refreshToken }),
  });

  if (!res.ok) {
    await clearAuthCookies();
    return NextResponse.json({ detail: "Session expired" }, { status: 401 });
  }

  const { access_token, refresh_token } = await res.json();
  await setAuthCookies({ accessToken: access_token, refreshToken: refresh_token });
  return NextResponse.json({ success: true });
}