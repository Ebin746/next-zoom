"use client"
import React from 'react';
import Link from 'next/link';
import { sidebarLinks } from '@/constants'; 
import { usePathname } from 'next/navigation';
import clsx from 'clsx'; 
import Image from 'next/image';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="sticky h-screen flex flex-col justify-between p-6 pt-28  w-[256px] bg-dark-1 text-white max-sm:hidden">
      <div className="flex flex-col gap-6 p-4 justify-between">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.route || pathname.startsWith(link.route);
          return (
            <Link
              href={link.route}
              key={link.label}
              className={clsx('flex items-center justify-start p-5 space-x-4', {
                'bg-blue-600': isActive,
              })}
            >
              {/* Image Section */}
              <Image
                src={link.imgURL} // Ensure `imgURL` contains a valid URL
                alt={link.label}
                width={24}
                height={24}
                className="rounded"
              />

              {/* Label Section (only visible on larger screens) */}
              <p className="text-lg font-semibold max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
