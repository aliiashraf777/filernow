// app/(auth)/reset-password/page.tsx
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordSchema, type ResetPasswordFormValues } from "@/lib/validations/auth";
import { FormField } from "@/components/common/form/FormField";
import { PasswordStrengthMeter } from "@/components/auth/PasswordStrengthMeter";


export default function ResetPasswordPage() {
    const params = useSearchParams();
    const router = useRouter();
    const token = params.get("token") ?? "";

    const {
        register,
        handleSubmit,
        watch,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<ResetPasswordFormValues>({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: { password: "", confirmPassword: "" },
    });

    const password = watch("password");

    const onSubmit: SubmitHandler<ResetPasswordFormValues> = async (data) => {
        const res = await fetch("/api/auth/reset-password", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token, new_password: data.password }),
        });

        if (!res.ok) {
            const error = await res.json();
            setError("root", { message: error.detail ?? "Reset link expired" });
            return;
        }
        router.push("/login");
    };

    return (
        <div className="flex flex-col gap-6">
            <div>
                <h1 className="text-2xl font-bold text-text-dark">Set new password</h1>
                <p className="text-gray-500">Set Your New Password According To The Instructions.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                <FormField label="New Password" htmlFor="password" error={errors.password?.message}>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter New Password"
                        className="rounded-md border border-border-clr px-4 py-3"
                        {...register("password")}
                    />
                </FormField>

                <FormField
                    label="Confirm Password"
                    htmlFor="confirmPassword"
                    error={errors.confirmPassword?.message}
                >
                    <input
                        id="confirmPassword"
                        type="password"
                        placeholder="Enter New Password"
                        className="rounded-md border border-border-clr px-4 py-3"
                        {...register("confirmPassword")}
                    />
                </FormField>

                <PasswordStrengthMeter password={password} />

                {errors.root && <p className="text-sm text-red-600">{errors.root.message}</p>}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-md bg-primary py-3 font-semibold text-white disabled:opacity-60"
                >
                    {isSubmitting ? "Saving..." : "Save Change"}
                </button>
            </form>
        </div>
    );
}