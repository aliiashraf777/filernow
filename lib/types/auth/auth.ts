// lib/types/auth/auth.ts

export type UserRole = "user" | "admin";

export interface IAuthUser {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
  isEmailVerified: boolean;
}

export interface IAuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface IApiError {
  detail: string;
  code?: string;
}