'use client';

import { useCvStyle } from '../hooks/use-cv-style';
import { jobs } from '../data';
import Job from './Job';
import Sidebar, { NameBlock, ContactBlock, EducationBlock, SkillsBlock } from './Sidebar';

export default function CvBody() {
  const [style] = useCvStyle();

  if (style === 'simple') {
    return (
      <div className="cv-grid cv-grid-flat">
        <NameBlock />
        <ContactBlock />
        <SkillsBlock />
        <div className="cv-main">
          {jobs.map((job) => (
            <Job key={job.id} job={job} />
          ))}
        </div>
        <EducationBlock />
      </div>
    );
  }

  return (
    <div className="cv-grid flex flex-col md:flex-row justify-center">
      <Sidebar />
      <div className="cv-main md:basis-3/4 my-4 px-1 mx-1">
        {jobs.map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}
