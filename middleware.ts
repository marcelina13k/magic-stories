import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Add CSP headers with tally.so domain allowed
  response.headers.set(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://tally.so",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "media-src 'self'",
      "frame-src 'self' https://tally.so",
      "connect-src 'self' https://tally.so",
    ].join("; "),
  )

  return response
}

export const config = {
  matcher: "/:path*",
}

