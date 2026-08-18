// lib/api/leads.ts
import type { BecomeFilerFormValues, ContactFormValues } from "@/lib/validations/leads";

interface LeadSubmitResponse {
    ticketId: string;
    message: string;
}

interface LeadSubmitError {
    message: string;
    errors?: Record<string, string[]>;
}

async function postLead<T>(
    endpoint: string,
    payload: T,
): Promise<LeadSubmitResponse> {
    const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    const data = (await res.json()) as LeadSubmitResponse | LeadSubmitError;

    if (!res.ok) {
        throw new Error("message" in data ? data.message : "Submission failed");
    }

    return data as LeadSubmitResponse;
}

export const submitContactForm = (payload: ContactFormValues) =>
    postLead<ContactFormValues>("/api/leads/contact", payload);

export const submitBecomeFilerForm = (payload: BecomeFilerFormValues) =>
    postLead<BecomeFilerFormValues>("/api/leads/become-filer", payload);