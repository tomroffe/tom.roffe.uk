"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "flowbite-react";

type RoleLink = { id: string; label: string };

const SECTIONS = [
  { href: "/admin/contact", label: "Contact" },
  { href: "/admin/education", label: "Education" },
  { href: "/admin/skills", label: "Skills" },
  { href: "/admin/hobbies", label: "Hobbies" },
];

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`block rounded-md px-3 py-1.5 text-sm ${
        active
          ? "bg-gray-200 font-medium dark:bg-gray-700"
          : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
      }`}
    >
      {label}
    </Link>
  );
}

export default function AdminNav({
  roles,
  logout,
}: {
  roles: RoleLink[];
  logout: () => Promise<void>;
}) {
  const pathname = usePathname();

  return (
    <nav className="flex w-56 shrink-0 flex-col gap-4 border-r border-gray-200 px-3 py-6 dark:border-gray-700">
      <div>
        <h1 className="px-3 text-lg font-bold">CV editor</h1>
        <p className="px-3 text-xs text-gray-500">
          Writes to app/cv/data.json
        </p>
      </div>

      <div className="flex flex-col gap-0.5">
        {SECTIONS.map((s) => (
          <NavLink
            key={s.href}
            href={s.href}
            label={s.label}
            active={pathname === s.href}
          />
        ))}
      </div>

      <div className="flex flex-col gap-0.5">
        <div className="px-3 pb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">
          Roles
        </div>
        <NavLink
          href="/admin/jobs"
          label="Manage roles"
          active={pathname === "/admin/jobs"}
        />
        {roles.map((r) => (
          <NavLink
            key={r.id}
            href={`/admin/jobs/${r.id}`}
            label={r.label}
            active={pathname === `/admin/jobs/${r.id}`}
          />
        ))}
      </div>

      <form action={logout} className="mt-auto px-3">
        <Button type="submit" color="light" size="sm">
          Log out
        </Button>
      </form>
    </nav>
  );
}
