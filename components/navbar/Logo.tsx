import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import { VscCode } from 'react-icons/vsc';
import logo from '../../public/images/Resized biko image.jpg';
import Image from 'next/image';
function Logo() {
  return (
    <Link href={'/'} className=" text-2xl flex">
      <span className="text-primary"> Haven </span>
      <span className="text-black dark:text-white">Bikes</span>
    </Link>
  );
}

export default Logo;
