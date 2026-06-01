import { z } from "zod";
import type { CvData } from "@/app/cv/data";

// Mirrors the types in app/cv/data.ts. Optional keys use .optional() (not
// .nullable()) so that omitted values serialize as absent in data.json.

export const bulletsSchema = z.object({
  short: z.array(z.string()).optional(),
  long: z.array(z.string()).optional(),
  shared: z.array(z.string()).optional(),
});

export const engagementSchema = z.object({
  id: z.string().min(1),
  client: z.string().min(1),
  role: z.string().min(1),
  dates: z.string().min(1),
  bullets: bulletsSchema,
});

export const jobSchema = z
  .object({
    id: z.string().min(1),
    company: z.string().min(1),
    role: z.string().optional(),
    dates: z.string().min(1),
    footnoteMark: z.boolean().optional(),
    bullets: bulletsSchema.optional(),
    engagements: z.array(engagementSchema).optional(),
  })
  .superRefine((job, ctx) => {
    // Engagement ids must be unique within a job.
    const seen = new Set<string>();
    job.engagements?.forEach((eng, i) => {
      if (seen.has(eng.id)) {
        ctx.addIssue({
          code: "custom",
          message: `Duplicate engagement id "${eng.id}"`,
          path: ["engagements", i, "id"],
        });
      }
      seen.add(eng.id);
    });
  });

export const contactSchema = z.object({
  // Kept loose (no .email()) — this is a single-user dev authoring tool.
  phoneDisplay: z.string(),
  phoneTel: z.string(),
  email: z.string(),
  website: z.string(),
  websiteHref: z.string(),
  printAddress: z.array(z.string()),
});

export const skillGroupSchema = z.object({
  label: z.string().min(1),
  items: z.array(z.string()),
});

export const skillSectionSchema = z.object({
  title: z.string().min(1),
  groups: z.array(skillGroupSchema).optional(),
  items: z.array(z.string()).optional(),
});

export const educationSchema = z.object({
  degree: z.object({
    title: z.string(),
    institution: z.string(),
    note: z.string().optional(),
  }),
  training: z.array(
    z.object({ name: z.string().min(1), note: z.string().optional() }),
  ),
});

export const cvDataSchema = z
  .object({
    contact: contactSchema,
    education: educationSchema,
    hobbies: z.array(z.string()),
    languages: z.array(z.string()),
    platforms: z.array(skillGroupSchema),
    software: z.array(skillSectionSchema),
    cloud: z.array(skillSectionSchema),
    cloudNative: z.array(z.string()),
    dataScience: z.array(z.string()),
    otherSkills: z.array(z.string()),
    jobs: z.array(jobSchema),
  })
  .superRefine((data, ctx) => {
    // Job ids must be unique across the whole CV.
    const seen = new Set<string>();
    data.jobs.forEach((job, i) => {
      if (seen.has(job.id)) {
        ctx.addIssue({
          code: "custom",
          message: `Duplicate job id "${job.id}"`,
          path: ["jobs", i, "id"],
        });
      }
      seen.add(job.id);
    });
  });

export type CvDataInput = z.infer<typeof cvDataSchema>;

// Compile-time guard: the schema's inferred type must stay assignable to the
// CvData shape used by the CV components. If these drift, tsc fails here.
const _typeCheck: CvData extends CvDataInput
  ? CvDataInput extends CvData
    ? true
    : never
  : never = true;
void _typeCheck;
