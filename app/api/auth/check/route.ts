import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const cookie = request.headers.get("cookie") || "";
  const hasSession = cookie.includes(`putra_admin=${process.env.ADMIN_SESSION_SECRET}`);

  if (hasSession) {
    return NextResponse.json({ authenticated: true });
  }

  return NextResponse.json({ authenticated: false }, { status: 401 });
}
