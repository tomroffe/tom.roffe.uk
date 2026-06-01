import Link from "next/link";
import { notFound } from "next/navigation";
import data from "@/app/cv/data.json";
import type { CvDataInput } from "../../../cv-schema";
import SectionForm from "../../../SectionForm";
import { JobFields } from "../../../fields";

export const dynamic = "force-dynamic";

export default async function RolePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cv = data as CvDataInput;
  const index = cv.jobs.findIndex((job) => job.id === id);
  if (index === -1) notFound();

  const job = cv.jobs[index];
  const title = [job.company, job.role].filter(Boolean).join(" — ") || "Role";

  return (
    <>
      <Link
        href="/admin/jobs"
        className="text-sm text-gray-500 hover:underline"
      >
        ← All roles
      </Link>
      <h2 className="mb-4 mt-1 text-2xl font-bold">{title}</h2>
      <SectionForm initial={cv} sectionKeys={["jobs"]}>
        <JobFields index={index} />
      </SectionForm>
    </>
  );
}
