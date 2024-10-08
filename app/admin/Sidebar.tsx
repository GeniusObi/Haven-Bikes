'use client';
import { Button } from '@/components/ui/button';
import { adminLinks } from '@/utils/links';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="dark:border-4 rounded-md border-[#fff]">
      {adminLinks.map((link) => {
        const isActivePage = pathname === link.href;
        const variant = isActivePage ? 'default' : 'ghost';
        return (
          <Button
            asChild
            className="w-full mb-2 capitalize font-normal"
            variant={variant}
            key={link.href}
          >
            <Link href={link.href}>{link.label}</Link>
          </Button>
        );
      })}
    </aside>
  );
}

export default Sidebar;
