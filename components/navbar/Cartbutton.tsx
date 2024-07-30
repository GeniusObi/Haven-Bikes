import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import { LuShoppingCart } from 'react-icons/lu';

async function Cartbutton() {
  const numItemsCart = 9;
  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="flex justify-center items-center relative "
    >
      <Link href={'/cart'}>
        <LuShoppingCart />
        <span className="absolute -top-3 -right-3 bg-primary rounded-full text-white flex items-center justify-center text-xs h-6 w-6">
          {numItemsCart}
        </span>
      </Link>
    </Button>
  );
}

export default Cartbutton;
