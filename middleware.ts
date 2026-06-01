import { NextResponse, type NextRequest } from "next/server";

// Convenience UX gate: redirects unauthenticated /admin/* requests to the
// login page. This only checks for the presence of a session cookie — the
// authoritative cryptographic check (and the dev-only kill-switch) lives in
// isAuthed() in app/admin/auth.ts, which every admin page and the save action
// re-run server-side. Middleware runs on the Edge runtime, so it stays simple.
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // The login page must stay reachable.
  if (pathname.startsWith("/admin/login")) return NextResponse.next();

  const hasSession = !!req.cookies.get("admin_session")?.value;
  if (!hasSession) {
    const url = req.nextUrl.clone();
    url.pathname = "/admin/login";
    url.search = "";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
