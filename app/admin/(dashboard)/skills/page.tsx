import data from "@/app/cv/data.json";
import type { CvDataInput } from "../../cv-schema";
import SectionForm from "../../SectionForm";
import { SkillGroupList, SkillSectionList, StringList } from "../../fields";

export const dynamic = "force-dynamic";

export default function SkillsPage() {
  return (
    <>
      <h2 className="mb-4 text-2xl font-bold">Skills</h2>
      <SectionForm
        initial={data as CvDataInput}
        sectionKeys={[
          "languages",
          "platforms",
          "software",
          "cloud",
          "cloudNative",
          "dataScience",
          "otherSkills",
        ]}
      >
        <div className="flex flex-col gap-4">
          <StringList name="languages" label="Languages" />
          <div>
            <h3 className="mb-2 text-sm font-semibold">Platforms</h3>
            <SkillGroupList name="platforms" />
          </div>
          <div>
            <h3 className="mb-2 text-sm font-semibold">Software</h3>
            <SkillSectionList name="software" />
          </div>
          <div>
            <h3 className="mb-2 text-sm font-semibold">Cloud</h3>
            <SkillSectionList name="cloud" />
          </div>
          <StringList name="cloudNative" label="Cloud native" />
          <StringList name="dataScience" label="Data science" />
          <StringList name="otherSkills" label="Other skills" />
        </div>
      </SectionForm>
    </>
  );
}
