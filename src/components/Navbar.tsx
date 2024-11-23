import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileNav from './MobileNav';
const Navbar = () => {
  return (
    <nav className='w-full flex-between p-5 fixed z-50 bg-dark-1'>
   <Link className='flex items-center p-2' href={"/"}>
      <Image src={"/icons/logo.svg"} alt='zoom' width={34} height={34} className='max-sm:size-10'/>
      <p className='text-white'>Zoom</p>
   </Link>

<div className="">   <MobileNav/></div>
    </nav>
  );
};

export default Navbar;
