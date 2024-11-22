"use client"
import React from 'react';
import Link from 'next/link'; // Import Link for navigation
import { sidebarLinks } from '@/constants'; // Ensure this is correctly defined in your project
import { usePathname } from 'next/navigation';
import clsx from 'clsx'; // Import clsx for conditional class handling (or use classnames)
import Image from 'next/image';
const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="sticky h-screen flex flex-col justify-between p-6 pt-28 w-fit bg-dark-1 text-white max-sm:hidden lg:w-[256px]">
      <div className="flex gap-6 p-4 flex-col justify-between">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.route || pathname.startsWith(link.route);
          return (
            <Link
              href={link.route}
              key={link.label}
              className={clsx('flex items-center justify-center p-5', {
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

              {/* Label Section */}
              <p className="text-lg font-semibold max-lg:hidden">{link.label}</p>


              
            </Link>
          );
        })}
      </div>

    </section>
  );
};

export default Sidebar;
