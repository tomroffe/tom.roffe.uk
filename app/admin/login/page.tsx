import { notFound } from "next/navigation";
import { Button, Label, TextInput } from "flowbite-react";
import { login } from "../auth";

const ERRORS: Record<string, string> = {
  invalid: "Incorrect password.",
  disabled: "Admin editing is only available in development.",
  unconfigured: "ADMIN_PASSWORD is not set. Add it to .env.local.",
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  // Never expose the admin tool outside local development.
  if (process.env.NODE_ENV !== "development") notFound();

  const { error } = await searchParams;
  const message = error ? ERRORS[error] : undefined;

  return (
    <div className="mx-auto mt-16 w-full max-w-sm px-4">
      <h1 className="mb-6 text-2xl font-bold">Admin sign in</h1>
      <form action={login} className="flex flex-col gap-4">
        <div>
          <Label htmlFor="password">Password</Label>
          <TextInput
            id="password"
            name="password"
            type="password"
            autoFocus
            required
          />
        </div>
        {message && (
          <p className="text-sm text-red-600 dark:text-red-400">{message}</p>
        )}
        <Button type="submit">Sign in</Button>
      </form>
    </div>
  );
}
