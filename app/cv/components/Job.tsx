import type { Job as JobType } from '../data';
import Bullets from './Bullets';
import Engagement from './Engagement';

export default function Job({ job }: { job: JobType }) {
  return (
    <div
      id={job.id}
      className={`cv-job ${job.engagements?.length ? 'cv-job-with-engagements' : ''} text-gray-700 dark:text-gray-200 rounded-sm bg-gray-100 dark:bg-gray-700 p-2 mb-2`}
    >
      <div className="flex justify-between">
        <p className="font-medium text-gray-800 dark:text-gray-200">
          {job.company}
          {job.footnoteMark && (
            <span className="text-gray-600 dark:text-gray-400 text-sm mx-0.5">*</span>
          )}
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-xs font-light">{job.dates}</p>
      </div>
      {job.role && (
        <p className="font-bold text-gray-800 dark:text-gray-200 m-2">
          <span className="font-medium">{job.role}</span>
        </p>
      )}
      {job.bullets && <Bullets bullets={job.bullets} />}
      {job.engagements?.map((eng) => <Engagement key={eng.id} engagement={eng} />)}
    </div>
  );
}
