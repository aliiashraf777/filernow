// components/common/form/BecomeFilerForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
  becomeFilerFormSchema,
  BecomeFilerFormValues,
  FILER_SERVICE_GROUPS,
} from "@/lib/validations/leads-schema";
import { submitBecomeFilerForm } from "@/lib/api/leads-submit";
import { FormField, inputGenericClass } from "./FormField";
import { FormSelectField } from "./FormSelectField";
import { cn } from "@/utils/cn";

export function BecomeFilerForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BecomeFilerFormValues>({
    resolver: zodResolver(becomeFilerFormSchema),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      // service: undefined,
      service_type: undefined,
      city: "",
      // companyWebsite: "",
    },
  });

  const onSubmit = async (values: BecomeFilerFormValues) => {
    setServerError(null);
    try {
      await submitBecomeFilerForm(values);
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px]"
        aria-hidden="true"
        {...register("companyWebsite")}
      /> */}

      <FormField label="Your Name *" htmlFor="username" error={errors.username?.message}>
        <input
          id="username"
          placeholder="Enter Your Name"
          className={cn("w-full", inputGenericClass)}
          {...register("username")}
        />
      </FormField>

      <FormSelectField
        id="service_type"
        label="Service"
        error={errors.service_type?.message}
        groups={FILER_SERVICE_GROUPS}
        {...register("service_type")}
      />

      <FormField label="Email (Optional)" htmlFor="email" error={errors.email?.message}>
        <input
          id="email"
          type="email"
          placeholder="Email Address"
          className={cn("w-full", inputGenericClass)}
          {...register("email")}
        />
      </FormField>

      <FormField label="Phone Number" htmlFor="phone" error={errors.phone?.message}>
        <input
          id="phone"
          placeholder="Enter Phone Number"
          className={cn("w-full", inputGenericClass)}
          {...register("phone")}
        />
      </FormField>

      <FormField label="City" htmlFor="city" error={errors.city?.message}>
        <input
          id="city"
          placeholder="Enter Your City"
          className={cn("w-full", inputGenericClass)}
          {...register("city")}
        />
      </FormField>

      {status === "error" && serverError && (
        <p role="alert" className="text-sm text-red-600">
          {serverError}
        </p>
      )}
      {status === "success" && (
        <p role="status" className="text-sm text-green-600">
          Thanks — we've received your details and will be in touch shortly.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-primary px-6 py-3 font-semibold text-white disabled:opacity-60"
      >
        {isSubmitting ? "Submitting…" : "Submit"}
      </button>
    </form>
  );
}
