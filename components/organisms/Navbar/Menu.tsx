import Link from 'next/link';
import React from 'react';

interface MenuProps {
  title: string;
  active?: boolean;
  href: string;
}
export default function Menu({ title, active, href }: MenuProps) {
  return (
    <li className='nav-item my-auto'>
      <Link href={href}>
        <a
          className={active ? 'nav-link active' : 'nav-link'}
          aria-current='page'
        >
          {title}
        </a>
      </Link>
    </li>
  );
}
