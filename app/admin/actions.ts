"use server";

import { promises as fs } from "node:fs";
import path from "node:path";
import { cvDataSchema, type CvDataInput } from "./cv-schema";
import { isAuthed } from "./auth";

const DATA_PATH = path.join(process.cwd(), "app", "cv", "data.json");

export type SaveResult =
  | { ok: true }
  | { ok: false; error: string; fieldErrors?: Record<string, string[]> };

/**
 * Recursively drop empty optional values so the written JSON stays minimal:
 * empty strings, empty arrays, and the falsy `footnoteMark` flag are removed.
 * This keeps git diffs meaningful and matches the existing data conventions.
 */
function prune(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(prune);
  }
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [key, raw] of Object.entries(value)) {
      const v = prune(raw);
      if (v === undefined || v === "") continue;
      if (Array.isArray(v) && v.length === 0) continue;
      if (key === "footnoteMark" && v !== true) continue;
      out[key] = v;
    }
    return out;
  }
  return value;
}

/**
 * Serialize + prune, format with Prettier to match repo style, and write the
 * full validated document to data.json. Prettier is imported lazily so it is
 * never pulled into the prod bundle.
 */
async function writeCvData(data: CvDataInput): Promise<void> {
  const json = JSON.stringify(prune(data), null, 2);
  let output = json + "\n";
  try {
    const { format } = await import("prettier");
    output = await format(json, { parser: "json" });
  } catch {
    // Prettier unavailable — fall back to the plain stringified JSON.
  }
  await fs.writeFile(DATA_PATH, output, "utf8");
}

/**
 * Merge a single section's slice into the current data.json and persist it.
 * Each admin page edits one slice (e.g. `{ contact }` or `{ jobs }`); the
 * patch is layered over the on-disk document so untouched sections are
 * preserved, then the whole merged document is validated before writing.
 */
export async function saveCvPatch(
  patch: Partial<CvDataInput>,
): Promise<SaveResult> {
  // 1. Hard production kill-switch — can never write in a deployed container.
  if (process.env.NODE_ENV !== "development") {
    return { ok: false, error: "Editing is disabled outside development." };
  }

  // 2. Re-verify auth server-side (the real gate for this POST).
  if (!(await isAuthed())) {
    return { ok: false, error: "Not authorised." };
  }

  // 3. Read the current document and merge the incoming slice over it.
  let current: unknown;
  try {
    current = JSON.parse(await fs.readFile(DATA_PATH, "utf8"));
  } catch {
    return { ok: false, error: "Could not read data.json." };
  }
  const merged = { ...(current as Record<string, unknown>), ...patch };

  // 4. Validate the whole merged document (keeps the unique-id refinements).
  const parsed = cvDataSchema.safeParse(merged);
  if (!parsed.success) {
    return {
      ok: false,
      error: "Validation failed.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<
        string,
        string[]
      >,
    };
  }

  // 5. Write.
  await writeCvData(parsed.data);
  return { ok: true };
}
