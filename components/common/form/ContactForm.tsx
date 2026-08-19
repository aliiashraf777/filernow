// components/common/form/ContactForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { contactFormSchema, ContactFormValues } from "@/lib/validations/leads-schema";
import { submitContactForm } from "@/lib/api/leads-submit";
import { FormField, inputGenericClass } from "./FormField";
import { cn } from "@/utils/cn";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setServerError(null);
    try {
      await submitContactForm(values);
      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <FormField label="Full Name" htmlFor="fullName" error={errors.fullName?.message}>
        <input
          id="fullName"
          placeholder="e.g. Sarah Jenkins"
          className={cn("w-full", inputGenericClass)}
          {...register("fullName")}
        />
      </FormField>

      <FormField label="Email Address" htmlFor="email" error={errors.email?.message}>
        <input
          id="email"
          type="email"
          placeholder="e.g. s.jenkins@company.com"
          className={cn("w-full", inputGenericClass)}
          {...register("email")}
        />
      </FormField>

      <FormField label="Phone No" htmlFor="phone" error={errors.phone?.message}>
        <input
          id="phone"
          placeholder="03041110555"
          className={cn("w-full", inputGenericClass)}
          {...register("phone")}
        />
      </FormField>

      <FormField label="Subject" htmlFor="subject" error={errors.subject?.message}>
        <input
          id="subject"
          placeholder="What is this regarding?"
          className={cn("w-full", inputGenericClass)}
          {...register("subject")}
        />
      </FormField>

      <FormField label="Detailed Message" htmlFor="message" error={errors.message?.message}>
        <textarea
          id="message"
          rows={5}
          placeholder="Describe what you need help with..."
          className={cn("w-full", inputGenericClass)}
          {...register("message")}
        />
      </FormField>

      {status === "error" && serverError && (
        <p role="alert" className="text-sm text-red-600">
          {serverError}
        </p>
      )}
      {status === "success" && (
        <p role="status" className="text-sm text-green-600">
          Thanks — your message has been received. Our team will reach out shortly.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-primary px-6 py-3 font-semibold text-white disabled:opacity-60"
      >
        {isSubmitting ? "Submitting…" : "Submit Inquiry"}
      </button>
    </form>
  );
}