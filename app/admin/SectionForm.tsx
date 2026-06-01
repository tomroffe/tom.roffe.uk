"use client";

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "flowbite-react";
import { cvDataSchema, type CvDataInput } from "./cv-schema";
import { saveCvPatch } from "./actions";

type Status =
  | { kind: "idle" }
  | { kind: "saving" }
  | { kind: "saved" }
  | { kind: "error"; message: string };

/**
 * Per-section editor form. Holds the full CV document so the existing field
 * components (keyed to the full `CvDataInput` shape) work unchanged, but only
 * renders the section's fields and only saves `sectionKeys` back to data.json.
 */
export default function SectionForm({
  initial,
  sectionKeys,
  children,
}: {
  initial: CvDataInput;
  sectionKeys: (keyof CvDataInput)[];
  children: React.ReactNode;
}) {
  const methods = useForm<CvDataInput>({
    resolver: zodResolver(cvDataSchema),
    defaultValues: initial,
  });
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const onSubmit = methods.handleSubmit(async (values) => {
    setStatus({ kind: "saving" });
    const patch = Object.fromEntries(
      sectionKeys.map((key) => [key, values[key]]),
    ) as Partial<CvDataInput>;
    const result = await saveCvPatch(patch);
    if (result.ok) {
      setStatus({ kind: "saved" });
      methods.reset(values);
    } else {
      setStatus({ kind: "error", message: result.error });
    }
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        {children}
        <div className="sticky bottom-0 mt-8 flex items-center gap-3 border-t border-gray-200 bg-white/90 py-3 backdrop-blur dark:border-gray-700 dark:bg-gray-900/90">
          <Button type="submit" disabled={status.kind === "saving"}>
            {status.kind === "saving" ? "Saving…" : "Save"}
          </Button>
          {status.kind === "saved" && (
            <span className="text-sm text-green-600 dark:text-green-400">
              Saved. Commit &amp; rebuild to deploy.
            </span>
          )}
          {status.kind === "error" && (
            <span className="text-sm text-red-600 dark:text-red-400">
              {status.message}
            </span>
          )}
        </div>
      </form>
    </FormProvider>
  );
}
