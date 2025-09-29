import Link from 'next/link';
import TARLogo from '@/app/ui/tar-logo';
import NavLinks from '@/app/ui/nav-links';
import { DarkThemeToggle } from "flowbite-react";

export default function Header() {
  return (
    <header className="text-gray-600 dark:text-gray-50 bg-white dark:bg-gray-800 body-font print:hidden">
      <div className="container mx-auto flex flex-wrap p-3 md:p-5 flex-row items-center justify-between">
        <Link href="/" className='flex-none flex ustify-self-start title-font font-medium items-center text-gray-900 mr-1' >
          <TARLogo className="w-10 h-10 text-white p-2 bg-gray-300 rounded-full" />
          <span className="ml-3 text-lg font-bold dark:text-gray-50">Tom Roffe</span>
        </Link>
        <NavLinks />
        <nav className="flex justify-end  md:border-gray-400 text-base">
          <DarkThemeToggle />
        </nav>
      </div>
    </header >
  );
}
