import data from "@/app/cv/data.json";
import type { CvDataInput } from "../../cv-schema";
import SectionForm from "../../SectionForm";
import { EducationFields } from "../../fields";

export const dynamic = "force-dynamic";

export default function EducationPage() {
  return (
    <>
      <h2 className="mb-4 text-2xl font-bold">Education</h2>
      <SectionForm initial={data as CvDataInput} sectionKeys={["education"]}>
        <EducationFields />
      </SectionForm>
    </>
  );
}
