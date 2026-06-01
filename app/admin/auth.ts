import { cookies } from "next/headers";
import { createHash, timingSafeEqual } from "node:crypto";
import { redirect } from "next/navigation";

const COOKIE_NAME = "admin_session";

const isDev = () => process.env.NODE_ENV === "development";

/** sha256 hex of the configured admin password, or null if none is set. */
function expectedToken(): string | null {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return null;
  return createHash("sha256").update(password).digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ab.length !== bb.length) return false;
  return timingSafeEqual(ab, bb);
}

/**
 * True only in development, when ADMIN_PASSWORD is set, and the request carries
 * a valid session cookie. Fails closed in every other case.
 */
export async function isAuthed(): Promise<boolean> {
  if (!isDev()) return false;
  const expected = expectedToken();
  if (!expected) return false;
  const token = (await cookies()).get(COOKIE_NAME)?.value;
  return !!token && safeEqual(token, expected);
}

export async function login(formData: FormData): Promise<void> {
  "use server";
  if (!isDev()) redirect("/admin/login?error=disabled");
  const expected = expectedToken();
  if (!expected) redirect("/admin/login?error=unconfigured");

  const password = String(formData.get("password") ?? "");
  const candidate = createHash("sha256").update(password).digest("hex");
  if (!safeEqual(candidate, expected!)) redirect("/admin/login?error=invalid");

  (await cookies()).set(COOKIE_NAME, expected!, {
    httpOnly: true,
    sameSite: "lax",
    secure: false, // dev-only tool, served over http://localhost
    path: "/",
    maxAge: 60 * 60 * 8,
  });
  redirect("/admin");
}

export async function logout(): Promise<void> {
  "use server";
  (await cookies()).delete(COOKIE_NAME);
  redirect("/admin/login");
}
