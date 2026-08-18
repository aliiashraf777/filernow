// app/api/leads/become-filer/route.ts
import { NextRequest, NextResponse } from "next/server";
import { becomeFilerFormSchema, getServiceLabelById } from "@/lib/validations/leads";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const parsed = becomeFilerFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid form data", errors: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  // Honeypot tripped: return the same 201 shape a real success would get so a
  // scripted bot has nothing to learn from and stops retrying, but never call
  // FastAPI — no row created, no trace of the submission.
//   if (parsed.data.companyWebsite) {
//     return NextResponse.json(
//       { ticketId: "N/A", message: "Thanks — we'll be in touch shortly." },
//       { status: 201 },
//     );
//   }

  try {
    const fastapiRes = await fetch(`${process.env.FASTAPI_INTERNAL_URL}/api/admin/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: parsed.data.username,
        email: parsed.data.email || null,
        phone: parsed.data.phone,
        // TEMP: sends the display label, not the stable svc1–svc16 id, to
        // match Umar's sample payload. Confirm whether this endpoint can
        // accept the id instead — labels drift, ids don't.
        service_type: getServiceLabelById(parsed.data.service),
        // TODO: "address" and "city" aren't the same thing. This form only
        // collects one free-text address field. Confirm with Umar whether
        // "city" should hold that full string, or whether the form needs a
        // dedicated City field added.
        city: parsed.data.city,
      }),
      cache: "no-store",
    });

    const data = await fastapiRes.json();

    if (!fastapiRes.ok) {
      return NextResponse.json(
        { message: data.detail ?? "Failed to submit request" },
        { status: fastapiRes.status },
      );
    }

    // TEMP: /api/admin/leads returns the raw created row, not a
    // { ticket_id, message } contract — there is no ticket_id yet. Using the
    // row id as a stand-in rather than fabricating a ticket number that
    // doesn't exist. Revisit once Umar's endpoint returns a real ticket_id.
    return NextResponse.json(
      {
        ticketId: data.id != null ? String(data.id) : "N/A",
        message: "Thanks — we'll be in touch shortly.",
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("[become-filer-lead-proxy]", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 502 },
    );
  }
}