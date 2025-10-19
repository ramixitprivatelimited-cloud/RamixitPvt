import { NextRequest, NextResponse } from "next/server";
// If your connector is a *named* export:  import { dbConnect } from "@/lib/mongodb";
// If it's the *default* export, keep the line below:
import dbConnect from "@/lib/mongodb";
import Contact from "@/models/Contact";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// ---- PATCH /api/contact/[id]?adminKey=... ----
export async function PATCH(
  req: NextRequest,
  ctx: { params: Promise<{ id: string }> } // <-- note Promise here
) {
  try {
    const { id } = await ctx.params; // <-- await to get id

    const { searchParams } = new URL(req.url);
    const adminKey = searchParams.get("adminKey");

    if (adminKey !== process.env.ADMIN_SECRET_KEY) {
      return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
    }

    // If your connector is a named export, use: await dbConnect();
    await dbConnect();

    const body = await req.json();
    const { status } = body;

    const validStatuses = ["new", "read", "responded", "archived"] as const;
    if (!validStatuses.includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    }

    const contact = await Contact.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!contact) {
      return NextResponse.json({ error: "Contact not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Contact status updated successfully",
      contact,
    });
  } catch (error) {
    console.error("Error updating contact status:", error);
    return NextResponse.json(
      { error: "Failed to update contact status" },
      { status: 500 }
    );
  }
}

// ---- DELETE /api/contact/[id]?adminKey=... ----
export async function DELETE(
  req: NextRequest,
  ctx: { params: Promise<{ id: string }> } // <-- note Promise here
) {
  try {
    const { id } = await ctx.params; // <-- await to get id

    const { searchParams } = new URL(req.url);
    const adminKey = searchParams.get("adminKey");

    if (adminKey !== process.env.ADMIN_SECRET_KEY) {
      return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
    }

    await dbConnect();

    const contact = await Contact.findByIdAndDelete(id);

    if (!contact) {
      return NextResponse.json({ error: "Contact not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Contact deleted successfully" });
  } catch (error) {
    console.error("Error deleting contact:", error);
    return NextResponse.json(
      { error: "Failed to delete contact" },
      { status: 500 }
    );
  }
}
