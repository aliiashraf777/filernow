// lib/api/leads-submit.ts
import type { BecomeFilerFormValues, ContactFormValues } from "@/lib/validations/leads-schema";

interface LeadSubmitResponse {
  ticketId: string;
  message: string;
}

interface FastApiValidationError {
  loc: (string | number)[];
  msg: string;
  type: string;
}

interface LeadSubmitError {
  message: string | FastApiValidationError[];
  errors?: Record<string, string[]>;
}

function extractErrorMessage(data: LeadSubmitError): string {
  if (typeof data.message === "string") return data.message;
  if (Array.isArray(data.message)) {
    // FastAPI's 422 shape: turn "field required" objects into readable text
    // instead of letting Error() silently stringify them into "[object Object]".
    return data.message
      .map((e) => `${e.loc?.[e.loc.length - 1] ?? "field"}: ${e.msg}`)
      .join(", ");
  }
  return "Submission failed";
}

async function postLead<T>(endpoint: string, payload: T): Promise<LeadSubmitResponse> {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = (await res.json()) as LeadSubmitResponse | LeadSubmitError;

  if (!res.ok) {
    throw new Error(extractErrorMessage(data as LeadSubmitError));
  }

  return data as LeadSubmitResponse;
}

// Always our own Next.js routes, never the backend's /api/admin/leads path directly.
export const submitContactForm = (payload: ContactFormValues) =>
  postLead<ContactFormValues>("/api/leads/contact", payload);

export const submitBecomeFilerForm = (payload: BecomeFilerFormValues) =>
  postLead<BecomeFilerFormValues>("/api/leads/become-filer", payload);