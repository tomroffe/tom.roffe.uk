import type { Engagement as EngagementType } from '../data';
import Bullets from './Bullets';

export default function Engagement({ engagement }: { engagement: EngagementType }) {
  return (
    <div
      id={engagement.id}
      className="cv-engagement text-gray-600 dark:text-gray-200 rounded-sm bg-gray-200 dark:bg-gray-600 p-2 my-2"
    >
      <div className="flex justify-between">
        <p className="font-medium text-gray-800 dark:text-gray-200">{engagement.client}</p>
        <p className="text-gray-600 dark:text-gray-400 text-xs font-light">{engagement.dates}</p>
      </div>
      <p className="font-bold text-gray-800 dark:text-gray-200 m-2">
        <span className="font-medium">{engagement.role}</span>
      </p>
      <Bullets bullets={engagement.bullets} />
    </div>
  );
}
