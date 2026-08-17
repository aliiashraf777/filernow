// app/(auth)/register/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { registerSchema, type RegisterFormValues } from "@/lib/validations/auth";
import { FormField, inputGenericClass } from "@/components/common/form/FormField";
import { cn } from "@/utils/cn";

export default function RegisterPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: { fullName: "", email: "", password: "", confirmPassword: "" },
  });

  const onSubmit: SubmitHandler<RegisterFormValues> = async (data) => {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const error = await res.json();
      setError("root", { message: error.detail ?? "Could not create account" });
      return;
    }

    router.push("/dashboard");
    router.refresh();
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-text-dark">Create your account</h1>
        <p className="text-gray-500">Get started with Filernow in a few seconds.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <FormField label="Full Name" htmlFor="fullName" error={errors.fullName?.message}>
          <input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            className={cn("", inputGenericClass)}
            {...register("fullName")}
          />
        </FormField>

        <FormField label="Email" htmlFor="email" error={errors.email?.message}>
          <input
            id="email"
            type="text"
            placeholder="Enter email id"
            className={cn("", inputGenericClass)}
            {...register("email")}
          />
        </FormField>

        <FormField label="Password" htmlFor="password" error={errors.password?.message}>
          <input
            id="password"
            type="password"
            placeholder="Create a password"
            className={cn("", inputGenericClass)}
            {...register("password")}
          />
        </FormField>

        <FormField label="Confirm Password" htmlFor="confirmPassword" error={errors.confirmPassword?.message}>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            className={cn("", inputGenericClass)}
            {...register("confirmPassword")}
          />
        </FormField>

        {errors.root && <p className="text-sm text-red-600">{errors.root.message}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-md bg-primary py-3 font-semibold text-white disabled:opacity-60"
        >
          {isSubmitting ? "Creating account..." : "Register"}
        </button>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-primary">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}