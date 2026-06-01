import { notFound, redirect } from "next/navigation";
import data from "@/app/cv/data.json";
import type { CvDataInput } from "../cv-schema";
import { isAuthed, logout } from "../auth";
import AdminNav from "../AdminNav";

export const dynamic = "force-dynamic";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Dev-only kill-switch — the editor does not exist in production.
  if (process.env.NODE_ENV !== "development") notFound();
  if (!(await isAuthed())) redirect("/admin/login");

  const roles = (data as CvDataInput).jobs.map((job) => ({
    id: job.id,
    label:
      [job.company, job.role].filter(Boolean).join(" — ") || "Untitled role",
  }));

  return (
    <div className="mx-auto flex w-full max-w-6xl gap-6 px-4">
      <AdminNav roles={roles} logout={logout} />
      <main className="min-w-0 grow py-8">{children}</main>
    </div>
  );
}
