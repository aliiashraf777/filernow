// app/api/leads/contact/route.ts

// Same proxy pattern as my auth routes, Next.js talks server-to-server to FastAPI via FASTAPI_INTERNAL_URL, no CORS config needed on the FastAPI side, and this route re-validates instead of trusting the client:

import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/leads";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid form data", errors: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  // Honeypot tripped — pretend success, don't tell the bot why
  if (parsed.data.companyWebsite) {
    return NextResponse.json(
      { ticketId: "N/A", message: "Thanks — your message has been received." },
      { status: 201 },
    );
  }

  try {
    // const fastapiRes = await fetch(`${process.env.FASTAPI_INTERNAL_URL}/leads/contact`, {
    const fastapiRes = await fetch(`${process.env.FASTAPI_INTERNAL_URL}/api/admin/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        full_name: parsed.data.fullName,
        email: parsed.data.email,
        phone: parsed.data.phone,
        subject: parsed.data.subject,
        message: parsed.data.message,
        source_page: "contact-us",
      }),
      cache: "no-store",
    });

    const data = await fastapiRes.json();

    if (!fastapiRes.ok) {
      return NextResponse.json(
        { message: data.detail ?? "Failed to submit inquiry" },
        { status: fastapiRes.status },
      );
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error("[contact-lead-proxy]", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 502 },
    );
  }
}