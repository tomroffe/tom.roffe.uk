import data from "@/app/cv/data.json";
import type { CvDataInput } from "../../cv-schema";
import SectionForm from "../../SectionForm";
import { StringList } from "../../fields";

export const dynamic = "force-dynamic";

export default function HobbiesPage() {
  return (
    <>
      <h2 className="mb-4 text-2xl font-bold">Hobbies</h2>
      <SectionForm initial={data as CvDataInput} sectionKeys={["hobbies"]}>
        <StringList name="hobbies" label="Hobby paragraphs" multiline />
      </SectionForm>
    </>
  );
}
