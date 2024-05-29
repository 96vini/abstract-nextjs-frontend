'use client';

import {
  Square2StackIcon,
  HomeIcon,
  PlayIcon,
} from '@heroicons/react/24/outline';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Início', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Filmes',
    href: '/dashboard/invoices',
    icon: PlayIcon,
  },
  { name: 'Séries', href: '/dashboard/customers', icon: Square2StackIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-secondary hover:text-white md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-secondary text-white': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
