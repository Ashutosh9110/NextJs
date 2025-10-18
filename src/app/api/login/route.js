// /app/api/login/route.js
import { NextResponse } from "next/server";
import { createJWT } from "@/lib/auth";

export async function POST(req) {
  const { username, password } = await req.json();

  // ⚙️ Dummy authentication
  if (username === "admin" && password === "password") {
    const token = await createJWT({ username });

    const response = NextResponse.json({ success: true });
    response.cookies.set({
      name: "token",
      value: token,
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60, // 1 hour
    });

    return response;
  }

  return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 });
}
