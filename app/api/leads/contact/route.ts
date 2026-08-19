// app/api/leads/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/leads-schema";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid form data", errors: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  const rawBaseUrl = process.env.FASTAPI_INTERNAL_URL;

  if (!rawBaseUrl) {
    console.error(
      "[contact-lead-proxy] FASTAPI_INTERNAL_URL is not set. " +
        "Check .env.local and restart the dev server.",
    );
    return NextResponse.json(
      { message: "Server is misconfigured. Please try again shortly." },
      { status: 502 },
    );
  }

  const fastapiBaseUrl = rawBaseUrl.replace(/\/+$/, "");
  const targetUrl = `${fastapiBaseUrl}/api/contact`;

  try {
    const fastapiRes = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
      body: JSON.stringify({
        name: parsed.data.fullName,
        email: parsed.data.email,
        phone: parsed.data.phone,
        subject: parsed.data.subject,
        message: parsed.data.message,
      }),
      cache: "no-store",
    });

    const contentType = fastapiRes.headers.get("content-type") ?? "";
    if (!contentType.includes("application/json")) {
      const text = await fastapiRes.text();
      console.error(
        `[contact-lead-proxy] Non-JSON response from ${targetUrl} ` +
          `(status ${fastapiRes.status}):`,
        text.slice(0, 500),
      );
      return NextResponse.json(
        { message: "Backend returned an unexpected response. Please try again." },
        { status: 502 },
      );
    }

    const data = await fastapiRes.json();

    if (!fastapiRes.ok) {
      return NextResponse.json(
        { message: data.detail ?? "Failed to submit inquiry" },
        { status: fastapiRes.status },
      );
    }

    // Backend returns { ticket_id: number, status: string } — translate
    // into the { ticketId, message } shape lib/api/leads-submit.ts expects,
    // same as the Become-Filer route does for its own response shape.
    return NextResponse.json(
      {
        ticketId: data.ticket_id != null ? String(data.ticket_id) : "N/A",
        message: "Thanks — your message has been received. Our team will reach out shortly.",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(`[contact-lead-proxy] Failed to reach ${targetUrl}`, error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 502 },
    );
  }
}