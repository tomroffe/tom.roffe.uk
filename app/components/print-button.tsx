'use client';

import { usePathname } from 'next/navigation';
import { Button } from 'flowbite-react';
import { PrinterIcon } from "@heroicons/react/24/outline";

export default function PrintButton() {
  const pathname = usePathname();

  if (pathname !== '/cv') return null;

  return (
    <Button
      id="print-button"
      color="dark"
      className="print:hidden rounded-lg p-2.5 mx-2 text-sm text-gray-500 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      onClick={() => window.print()}
    >
      <PrinterIcon className='w-4.5 h-4.5 stroke-2' />
    </Button>
  );
}
