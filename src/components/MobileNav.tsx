"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <section className="sm:hidden block">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            alt="open"
            width={34}
            height={34}
          />
        </SheetTrigger>
        <SheetContent side="left" className="bg-dark-1 border-none text-white">
          {/* Accessibility Headers */}
          <SheetHeader>
            <SheetTitle>Navigation Menu</SheetTitle>
            <SheetDescription>
              Browse through the application pages and features.
            </SheetDescription>
          </SheetHeader>
          <Link className="flex items-center p-2" href={"/"}>
            <Image
              src={"icons/logo.svg"}
              alt="zoom"
              width={34}
              height={34}
              className="max-sm:size-10"
            />
            <p className="text-white">Zoom</p>
          </Link>
          
            {sidebarLinks.map((link) => {
              const isActive =
                pathname === link.route || pathname.startsWith(link.route);
              return (
                <SheetClose  asChild key={link.route}>
                <Link
                  href={link.route}
                  key={link.label}
                  className={clsx(
                    "flex items-center justify-start p-5 space-x-4",
                    {
                      "bg-blue-600": isActive,
                    }
                  )}
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
                  <p className="text-lg font-semibold max-lg:hidden">
                    {link.label}
                  </p>
                </Link>
                </SheetClose>
              );
            })}
          
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
