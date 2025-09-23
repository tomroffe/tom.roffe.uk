import {
  NewspaperIcon,
  AcademicCapIcon,
  IdentificationIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const links = [
  { name: 'Identity', href: '/identity', icon: IdentificationIcon },
  {
    name: 'CV',
    href: '/cv',
    icon: AcademicCapIcon,
  },
];


export default function NavLinks() {
  return (
    <nav className="inline-flex justify-center md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 items-center text-base">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="inline-flex mr-5 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
          >
            <LinkIcon className="w-6 mr-1" />
            <p className="block">{link.name}</p>
          </Link>
        );
      })}
    </nav>
  );
}

