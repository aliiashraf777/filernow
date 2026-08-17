// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

async function verifyAccessToken(token: string | undefined) {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload.role as string;
  } catch {
    return null; // expired or invalid
  }
}

async function tryRefresh(refreshToken: string | undefined) {
  if (!refreshToken) return null;
  const res = await fetch(`${process.env.FASTAPI_INTERNAL_URL}/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh_token: refreshToken }),
  });
  if (!res.ok) return null;
  return (await res.json()) as { access_token: string; refresh_token: string };
}

const cookieOpts = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
};

const protectedPrefixes = ["/dashboard", "/become-filer"];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (!protectedPrefixes.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  let role = await verifyAccessToken(req.cookies.get("access_token")?.value);
  let res = NextResponse.next();

  if (!role) {
    const refreshed = await tryRefresh(req.cookies.get("refresh_token")?.value);
    if (!refreshed) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    role = await verifyAccessToken(refreshed.access_token);
    res.cookies.set("access_token", refreshed.access_token, { ...cookieOpts, maxAge: 60 * 15 });
    res.cookies.set("refresh_token", refreshed.refresh_token, { ...cookieOpts, maxAge: 60 * 60 * 24 * 14 });
  }

  if (pathname.startsWith("/dashboard") && role !== "admin") {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  if (pathname.startsWith("/become-filer") && !role) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/dashboard/:path*", "/become-filer/:path*"],
};