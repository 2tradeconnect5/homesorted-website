import { NextRequest, NextResponse } from "next/server";
import crypto from "node:crypto";

function verifyJWT(
  token: string,
  secret: string,
  expectedAudience: string
): Record<string, unknown> | null {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;

    const [headerB64, payloadB64, signatureB64] = parts;

    const expectedSig = crypto
      .createHmac("sha256", secret)
      .update(`${headerB64}.${payloadB64}`)
      .digest("base64url");

    if (signatureB64.length !== expectedSig.length) return null;
    if (
      !crypto.timingSafeEqual(
        Buffer.from(signatureB64, "utf8"),
        Buffer.from(expectedSig, "utf8")
      )
    ) {
      return null;
    }

    const payload = JSON.parse(
      Buffer.from(payloadB64, "base64url").toString()
    );

    if (!payload.exp || payload.exp < Math.floor(Date.now() / 1000))
      return null;
    if (payload.iss !== "homesorted-invest") return null;
    if (payload.aud !== expectedAudience) return null;

    return payload;
  } catch {
    return null;
  }
}

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");
  if (!token) {
    return new NextResponse("Missing token", { status: 400 });
  }

  const secret = process.env.HS_INVEST_PREAUTH_SECRET;
  if (!secret) {
    return new NextResponse("Server configuration error", { status: 500 });
  }

  const payload = verifyJWT(token, secret, "website");
  if (!payload) {
    // Debug: try to decode token to find what failed
    try {
      const parts = token.split(".");
      const decoded = JSON.parse(Buffer.from(parts[1], "base64url").toString());
      const expectedSig = crypto
        .createHmac("sha256", secret)
        .update(`${parts[0]}.${parts[1]}`)
        .digest("base64url");
      console.error("preauth debug:", {
        tokenSigLength: parts[2]?.length,
        expectedSigLength: expectedSig.length,
        sigMatch: parts[2] === expectedSig,
        aud: decoded.aud,
        iss: decoded.iss,
        exp: decoded.exp,
        now: Math.floor(Date.now() / 1000),
        expired: decoded.exp < Math.floor(Date.now() / 1000),
        secretLength: secret.length,
      });
    } catch (e) {
      console.error("preauth debug decode error:", e);
    }
    // Temporary: return debug info in response
    try {
      const parts = token.split(".");
      const decoded = JSON.parse(Buffer.from(parts[1], "base64url").toString());
      const expectedSig = crypto
        .createHmac("sha256", secret)
        .update(`${parts[0]}.${parts[1]}`)
        .digest("base64url");
      return NextResponse.json({
        error: "Invalid or expired token",
        debug: {
          tokenSigLen: parts[2]?.length,
          expectedSigLen: expectedSig.length,
          sigMatch: parts[2] === expectedSig,
          aud: decoded.aud,
          iss: decoded.iss,
          expired: decoded.exp < Math.floor(Date.now() / 1000),
          secretLen: secret.length,
          secretFirst4: secret.substring(0, 4),
        },
      }, { status: 403 });
    } catch {
      return new NextResponse("Invalid or expired token (decode failed)", { status: 403 });
    }
  }

  // Set the same cookie the gate sets, then redirect to homepage
  const response = NextResponse.redirect(new URL("/", request.url));
  response.cookies.set("hs-access", "granted", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });
  return response;
}
