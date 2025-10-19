import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";            // <-- add this for ValidationError narrowing
import dbConnect from "@/lib/mongodb";
import Contact from "@/models/Contact";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await dbConnect();

    // Robust IP derivation (works on Vercel/Node)
    const ipHeader = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "";
    const ipAddress = ipHeader.split(",")[0].trim() || "unknown";
    const userAgent = req.headers.get("user-agent") || "unknown";

    const contactSubmission = await Contact.create({
      name,
      email,
      phone: phone || "",
      subject,
      message,
      ipAddress,
      userAgent,
      submittedAt: new Date(),
    });

    return NextResponse.json(
      { message: "Contact form submitted successfully", id: contactSubmission._id },
      { status: 201 }
    );
  } catch (err: unknown) {                 // <-- unknown
    console.error("Error processing contact form:", err);

    if (err instanceof mongoose.Error.ValidationError) {
      return NextResponse.json(
        { error: "Invalid form data", details: err.message },
        { status: 400 }
      );
    }

    if (err instanceof Error) {
      // Optionally surface a generic message and keep details in logs
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 }
      );
    }

    // Non-Error throw (rare)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const adminKey = searchParams.get("adminKey");

    if (adminKey !== process.env.ADMIN_SECRET_KEY) {
      return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
    }

    await dbConnect();

    const pageRaw = parseInt(searchParams.get("page") || "1", 10);
    const limitRaw = parseInt(searchParams.get("limit") || "10", 10);
    const page = Number.isFinite(pageRaw) && pageRaw > 0 ? pageRaw : 1;
    const limit = Number.isFinite(limitRaw) && limitRaw > 0 ? limitRaw : 10;
    const status = searchParams.get("status") || undefined;
    const skip = (page - 1) * limit;

    const query: Record<string, unknown> = {};
    if (status && status !== "all") query.status = status;

    const [contacts, total] = await Promise.all([
      Contact.find(query).sort({ submittedAt: -1 }).limit(limit).skip(skip).select("-__v"),
      Contact.countDocuments(query),
    ]);

    return NextResponse.json({
      contacts,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) },
    });
  } catch (err: unknown) {
    console.error("Error fetching contacts:", err);
    return NextResponse.json({ error: "Failed to fetch contacts" }, { status: 500 });
  }
}
