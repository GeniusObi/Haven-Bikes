import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import { VscCode } from 'react-icons/vsc';
import logo from '../../public/images/Resized biko image.jpg';
import Image from 'next/image';
function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href={'/'}>
        <VscCode className={'w-6 h-6'} />
      </Link>
    </Button>
  );
}

export default Logo;
