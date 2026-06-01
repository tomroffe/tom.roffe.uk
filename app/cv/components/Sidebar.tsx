import { PhoneIcon, EnvelopeIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import {
  contact,
  education,
  hobbies,
  languages,
  platforms,
  software,
  cloud,
  cloudNative,
  dataScience,
  otherSkills,
} from '../data';
import { TagList } from './Tag';

export function NameBlock() {
  return (
    <div className="cv-name">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
        Thomas A. Roffe
      </h1>
      <p className="cv-title text-sm text-gray-600 dark:text-gray-400">
        Operations Manager · Lead DevOps Engineer
      </p>
      {contact.printAddress.map((line) => (
        <p key={line} className="text-sm text-gray-600 dark:text-gray-400">
          {line}
        </p>
      ))}
    </div>
  );
}

export function ContactBlock() {
  return (
    <div className="cv-contact mx-auto container pl-1">
      <div id="telephone-number" className="flex text-sm">
        <PhoneIcon className="size-5 my-1" strokeWidth={1.5} />
        <a href={`tel:${contact.phoneTel}`} className="my-1 mx-2">
          {contact.phoneDisplay}
        </a>
      </div>
      <div id="email-address" className="flex text-sm">
        <EnvelopeIcon className="size-5 my-1" strokeWidth={1.5} />
        <a href={`mailto:${contact.email}`} className="my-1 mx-2">
          {contact.email}
        </a>
      </div>
      <div id="website" className="flex text-sm">
        <GlobeAltIcon className="size-5 my-1" strokeWidth={1.5} />
        <a href={contact.websiteHref} className="my-1 mx-2">
          {contact.website}
        </a>
      </div>
    </div>
  );
}

export function EducationBlock() {
  return (
    <div id="education" className="cv-education text-sm mt-1">
      <p className="font-medium mx-2 my-2">Education</p>
      <div className="text-sm">
        <p className="font-medium mx-2 pl-2 my-2">Degree</p>
        <p className="mx-2 pl-5">
          {education.degree.title}
          <span className="font-bold mx-0.5">@</span>
        </p>
        <p className="mx-2 pl-5 font-light">{education.degree.institution}</p>
        <p className="mx-2 pl-5 text-xs font-light">{education.degree.note}</p>
      </div>
      <p className="font-medium mx-2 pl-2 my-3">Industry Training</p>
      <ul className="text-sm list-disc mx-4 font-light">
        {education.training.map((t) => (
          <li key={t.name} className="mx-5 my-1">
            {t.name}
            {t.note && (
              <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">{t.note}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function HobbiesBlock() {
  return (
    <div id="hobbies-interests" className="cv-hobbies text-sm">
      <p className="font-medium mx-2 my-3">Hobbies &amp; Interests</p>
      <div className="text-sm">
        {hobbies.map((para, i) => (
          <p key={i} className="m-2 px-2 dark:text-gray-300 font-light">
            {para}
          </p>
        ))}
      </div>
    </div>
  );
}

export function SkillsBlock() {
  return (
    <div id="skills" className="cv-skills text-sm pt-1">
      <p className="font-medium mx-2 my-1">Industry Skills &amp; Exposure</p>

      <div className="text-sm">
        <p className="font-medium mx-2 pl-2 my-2">Languages &amp; Scripting</p>
        <p className="m-2 pl-3">
          <TagList items={languages} />
        </p>
      </div>

      <div className="text-sm">
        <p className="font-medium mx-2 pl-2 my-2">OS &amp; Platforms</p>
        <ul className="mx-2 pl-3 font-light">
          {platforms.map((p) => (
            <li key={p.label} className="flex flex-wrap text-pretty">
              <span className="mt-0.5">{p.label}</span>
              <TagList items={p.items} size="xs" />
            </li>
          ))}
        </ul>
      </div>

      <div className="text-sm">
        <p className="font-medium mx-2 pl-2 mt-2">Software</p>
        {software.map((section) => (
          <div key={section.title}>
            <p className="mx-2 pl-3 flex">
              <span className="mt-0.5">{section.title}</span>
            </p>
            <p className="mx-2 my-1 pl-4 font-light">
              <TagList items={section.items ?? []} />
            </p>
          </div>
        ))}
      </div>

      <div className="text-sm">
        <p className="font-medium mx-2 pl-2 mt-2">Cloud Services</p>
        {cloud.map((section) => (
          <div key={section.title}>
            <p className="mx-2 my-1 pl-3 flex">
              <span className="mt-0.5">{section.title}</span>
            </p>
            <p className="mx-2 my-1 pl-4 font-light">
              <TagList items={section.items ?? []} />
            </p>
          </div>
        ))}
      </div>

      <div className="text-sm">
        <p className="font-medium mx-2 pl-2 my-2">Cloud Native Applications</p>
        <p className="m-2 pl-4 font-light">
          <TagList items={cloudNative} />
        </p>
      </div>

      <div className="text-sm">
        <p className="font-medium mx-2 pl-2 my-2">Data Science Tooling</p>
        <p className="m-2 pl-5 font-light">
          <TagList items={dataScience} />
        </p>
      </div>

      <div className="text-sm">
        <p className="font-medium mx-2 pl-2 my-2">Other</p>
        <ul className="m-2 pl-5 dark:text-gray-300">
          {otherSkills.map((s) => (
            <li key={s} className="my-1">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Sidebar() {
  return (
    <div className="cv-sidebar md:basis-1/4 md:max-w-64">
      <div className="cv-sidebar-card my-4 p-1 mx-1 mb-1 rounded-md dark:text-gray-200 bg-gray-100 dark:bg-gray-700">
        <NameBlock />
        <ContactBlock />
        <EducationBlock />
        <HobbiesBlock />
        <SkillsBlock />
      </div>
    </div>
  );
}

export function PrintHeader() {
  return (
    <div className="cv-print-header hidden print:block">
      <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-gray-100">
        Thomas A. Roffe
      </h1>
      {contact.printAddress.map((line) => (
        <p key={line} className="text-center text-gray-800 dark:text-gray-500 text-sm">
          {line}
        </p>
      ))}
    </div>
  );
}

