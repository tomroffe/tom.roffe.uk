import data from "@/app/cv/data.json";
import type { CvDataInput } from "../../cv-schema";
import SectionForm from "../../SectionForm";
import { JobsList } from "../../fields";

export const dynamic = "force-dynamic";

export default function JobsPage() {
  return (
    <>
      <h2 className="mb-1 text-2xl font-bold">Roles</h2>
      <p className="mb-4 text-sm text-gray-500">
        Reorder, remove or add roles, then Save. Edit a role to change its
        details. A new role must be saved before it can be edited.
      </p>
      <SectionForm initial={data as CvDataInput} sectionKeys={["jobs"]}>
        <JobsList />
      </SectionForm>
    </>
  );
}
