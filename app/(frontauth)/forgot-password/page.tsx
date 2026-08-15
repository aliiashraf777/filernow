// app/(auth)/forgot-password/page.tsx
"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { forgotPasswordSchema, type ForgotPasswordFormValues } from "@/lib/validations/auth";
import { FormField } from "@/components/common/form/FormField";
import { VerifyEmailModal } from "@/components/auth/VerfiyEmailModal";


export default function ForgotPasswordPage() {
    const [sent, setSent] = useState(false);

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<ForgotPasswordFormValues>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: { email: "" },
    });

    const onSubmit: SubmitHandler<ForgotPasswordFormValues> = async (data) => {
        const res = await fetch("/api/auth/forgot-password", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            const error = await res.json();
            setError("root", { message: error.detail ?? "Something went wrong" });
            return;
        }
        setSent(true);
    };

    return (
        <div className="flex flex-col gap-6">
            <div>
                <h1 className="text-2xl font-bold text-text-dark">Forgot Password</h1>
                <p className="text-gray-500">
                    Enter the email address associated with your account and we will send you a link to
                    reset your password.
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                <FormField label="Email" htmlFor="email" error={errors.email?.message}>
                    <input
                        id="email"
                        type="text"
                        placeholder="Enter email id"
                        className="rounded-md border border-border-clr px-4 py-3"
                        {...register("email")}
                    />
                </FormField>

                {errors.root && <p className="text-sm text-red-600">{errors.root.message}</p>}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-md bg-primary py-3 font-semibold text-white disabled:opacity-60"
                >
                    {isSubmitting ? "Sending..." : "Sent"}
                </button>

                <Link href="/login" className="text-center text-sm">
                    Back to <span className="font-semibold text-primary">Sign In</span>
                </Link>
            </form>

            {sent && <VerifyEmailModal onClose={() => setSent(false)} />}
        </div>
    );
}