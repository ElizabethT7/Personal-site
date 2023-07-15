'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Page } from '@/types/page';

/*type NavLink = {
  label: string;
  href: string;
};*/

type Props = {
  navLinks: Page[];
};

export default function Navigation({ navLinks }: Props) {
  const pathname = usePathname();

  return (
    <nav>
    {
      navLinks.map((link) => {
        const isActive = pathname === `/${link.slug}`;

        return (
          <Link
            key={link._id}
            href={`/${link.slug}`}
            className={isActive ? 'navigation_active' : 'navigation'}
          >
            {link.title}
          </Link>
        )
      })
    }
    </nav>
  )
}