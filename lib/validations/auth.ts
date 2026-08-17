// lib/validations/auth.ts
import { z } from "zod";

export const loginSchema = z.object({
    email: z.email("Enter a valid email address"),
    password: z.string().min(1, "Password is required"),
});

export const forgotPasswordSchema = z.object({
    email: z.email("Enter a valid email address"),
});

const passwordRules = z
    .string()
    .min(10, "At least 10 characters long")
    .regex(/[A-Z]/, "At least one uppercase letter")
    .regex(/[0-9]/, "At least one digit")
    .regex(/[^A-Za-z0-9]/, "At least one special character");

export const resetPasswordSchema = z
    .object({
        password: passwordRules,
        confirmPassword: z.string().min(1, "Confirm your password"),
    })
    .refine((d) => d.password === d.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

export const registerSchema = z
    .object({
        fullName: z.string().min(2, "Full name is required"),
        email: z.email("Enter a valid email address"),
        password: passwordRules,
        confirmPassword: z.string().min(1, "Confirm your password"),
    })
    .refine((d) => d.password === d.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

export type LoginFormValues = z.infer<typeof loginSchema>;
export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;
export type RegisterFormValues = z.infer<typeof registerSchema>;