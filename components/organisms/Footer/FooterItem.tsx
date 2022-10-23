import Link from 'next/link';
import React from 'react';

interface FooterItemProps {
  title: string;
}
export default function FooterItem({ title }: FooterItemProps) {
  return (
    <li className='mb-6'>
      <Link href='/'>
        <a href='/#' className='text-lg color-palette-1 text-decoration-none'>
          {title}
        </a>
      </Link>
    </li>
  );
}
