// lib/auth/cookies.ts
import { cookies } from "next/headers";
import type { IAuthTokens } from "@/lib/types/auth/auth";

const ACCESS_TOKEN_MAX_AGE = 60 * 15;        // 15 min
const REFRESH_TOKEN_MAX_AGE = 60 * 60 * 24 * 14; // 14 days

const baseCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
};

export async function setAuthCookies(tokens: IAuthTokens) {
  const store = await cookies();
  store.set("access_token", tokens.accessToken, {
    ...baseCookieOptions,
    maxAge: ACCESS_TOKEN_MAX_AGE,
  });
  store.set("refresh_token", tokens.refreshToken, {
    ...baseCookieOptions,
    maxAge: REFRESH_TOKEN_MAX_AGE,
  });
}

export async function clearAuthCookies() {
  const store = await cookies();
  store.delete("access_token");
  store.delete("refresh_token");
}