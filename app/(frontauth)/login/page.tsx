// app/(auth)/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { loginSchema, type LoginFormValues } from "@/lib/validations/auth";
import { FormField, inputGenericClass } from "@/components/common/form/FormField";
import { cn } from "@/utils/cn";

export default function LoginPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: { email: "", password: "" },
    });

    const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            const error = await res.json();
            setError("root", { message: error.detail ?? "Invalid credentials" });
            return;
        }

        router.push("/dashboard");
        router.refresh();
    };

    return (
        <div className="flex flex-col gap-6">
            <div>
                <h1 className="text-2xl font-bold text-text-dark">Welcome Back Admin !</h1>
                <p className="text-gray-500">Sign in to access your dashboard & Manage your Account.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                <FormField label="Email" htmlFor="email" error={errors.email?.message}>
                    <input
                        id="email"
                        type="text"
                        placeholder="Enter Email or User Name"
                        className={cn("", inputGenericClass)}
                        {...register("email")}
                    />
                </FormField>

                <FormField label="Password" htmlFor="password" error={errors.password?.message}>
                    <div className="relative">
                        <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter password"
                            className={cn("w-full", inputGenericClass)}
                            {...register("password")}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((v) => !v)}
                            className="absolute right-4 top-1/2 -translate-y-1/2"
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                </FormField>

                <Link href="/forgot-password" className="self-end text-sm text-primary">
                    Forget Password
                </Link>

                {errors.root && <p className="text-sm text-red-600">{errors.root.message}</p>}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-md bg-primary py-3 font-semibold text-white disabled:opacity-60"
                >
                    {isSubmitting ? "Signing in..." : "Login"}
                </button>
            </form>
        </div>
    );
}