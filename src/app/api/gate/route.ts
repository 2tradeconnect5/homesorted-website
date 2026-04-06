import { NextResponse } from "next/server";

const VALID_EMAIL = process.env.GATE_EMAIL || "robert@homesorted.ie";
const VALID_PASSWORD = process.env.GATE_PASSWORD || "HomeSorted7642489f";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  if (email === VALID_EMAIL && password === VALID_PASSWORD) {
    const response = NextResponse.json({ success: true });
    response.cookies.set("hs-access", "granted", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });
    return response;
  }

  return NextResponse.json(
    { success: false, error: "Invalid credentials" },
    { status: 401 }
  );
}
