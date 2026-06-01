import raw from "./data.json";

export type Bullets = {
  short?: string[];
  long?: string[];
  shared?: string[];
};

export type Engagement = {
  id: string;
  client: string;
  role: string;
  dates: string;
  bullets: Bullets;
};

export type Job = {
  id: string;
  company: string;
  role?: string;
  dates: string;
  footnoteMark?: boolean;
  bullets?: Bullets;
  engagements?: Engagement[];
};

export type Contact = {
  phoneDisplay: string;
  phoneTel: string;
  email: string;
  website: string;
  websiteHref: string;
  printAddress: string[];
};

export type SkillGroup = { label: string; items: string[] };
export type SkillSection = {
  title: string;
  groups?: SkillGroup[];
  items?: string[];
};

export type Education = {
  degree: { title: string; institution: string; note?: string };
  training: { name: string; note?: string }[];
};

// Shape of the whole CV document held in data.json. Also mirrored by the zod
// schema in app/admin/cv-schema.ts — keep the two in sync.
export type CvData = {
  contact: Contact;
  education: Education;
  hobbies: string[];
  languages: string[];
  platforms: SkillGroup[];
  software: SkillSection[];
  cloud: SkillSection[];
  cloudNative: string[];
  dataScience: string[];
  otherSkills: string[];
  jobs: Job[];
};

const data = raw as CvData;

export const contact = data.contact;
export const education = data.education;
export const hobbies = data.hobbies;
export const languages = data.languages;
export const platforms = data.platforms;
export const software = data.software;
export const cloud = data.cloud;
export const cloudNative = data.cloudNative;
export const dataScience = data.dataScience;
export const otherSkills = data.otherSkills;
export const jobs = data.jobs;
