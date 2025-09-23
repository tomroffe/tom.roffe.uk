import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import TARLogo from '@/app/ui/tar-logo';
import NavLinks from '@/app/ui/nav-links';
import { DarkThemeToggle } from "flowbite-react";
import PrintButton from '@/app/components/print-button';

export default function Header() {
  return (
    <header className="text-gray-600 dark:text-gray-50 bg-white dark:bg-gray-800 body-font print:hidden">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0' >
          <TARLogo className="w-10 h-10 text-white p-2 bg-gray-300 rounded-full" />
          <span className="ml-3 text-lg font-bold dark:text-gray-50">Tom Roffe</span>
        </Link>
        <NavLinks />
        <PrintButton />
        <DarkThemeToggle />
        {/* <Link */}
        {/*   href="/login" */}
        {/*   className="flex items-center rounded-md  px-4 py-2 ml-2 text-sm font-medium transition-colors  md:text-base " */}
        {/* > */}
        {/*   <span>Log In</span> <ArrowRightIcon className="w-3 h-3 ml-1" /> */}
        {/* </Link> */}
      </div>
    </header >
  );
}
