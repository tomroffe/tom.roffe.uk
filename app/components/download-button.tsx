'use client';

import { usePathname } from 'next/navigation';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { useCvStyle } from '@/app/cv/hooks/use-cv-style';

export default function DownloadButton() {
  const pathname = usePathname();
  const [style] = useCvStyle();

  if (pathname !== '/cv') return null;

  return (
    <a
      href={`/tom-roffe-cv-${style}.pdf`}
      download
      title={`Download ${style} CV as PDF`}
      className="print:hidden rounded-lg p-2.5 text-sm text-gray-500 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 inline-flex items-center"
    >
      <ArrowDownTrayIcon className="w-4.5 h-4.5 stroke-2" />
    </a>
  );
}
