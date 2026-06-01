import type { Bullets as BulletsType } from '../data';

export default function Bullets({ bullets }: { bullets: BulletsType }) {
  const { short, long, shared } = bullets;

  return (
    <>
      {shared && shared.length > 0 && (
        <ul className="list-disc m-2 pl-6 dark:text-gray-300 text-gray-700 font-light text-sm">
          {shared.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
      {short && short.length > 0 && (
        <ul className="short list-disc m-2 pl-6 dark:text-gray-300 text-gray-700 font-light text-sm">
          {short.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
      {long && long.length > 0 && (
        <ul className="long list-disc m-2 pl-6 dark:text-gray-300 text-gray-700 font-light text-sm">
          {long.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
}
