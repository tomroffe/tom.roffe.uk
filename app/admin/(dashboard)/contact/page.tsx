import data from "@/app/cv/data.json";
import type { CvDataInput } from "../../cv-schema";
import SectionForm from "../../SectionForm";
import { ContactFields } from "../../fields";

export const dynamic = "force-dynamic";

export default function ContactPage() {
  return (
    <>
      <h2 className="mb-4 text-2xl font-bold">Contact</h2>
      <SectionForm initial={data as CvDataInput} sectionKeys={["contact"]}>
        <ContactFields />
      </SectionForm>
    </>
  );
}
