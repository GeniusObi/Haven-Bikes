import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import HeroCarousel from './HeroCarousel';

function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div className="space-y-6 lg:space-y-8">
        <h1 className="max-w-2xl font-bold text-4xl tracking-widests   sm:text-6xl">
          Haven Bikes
        </h1>
        <p className="bold text-justify">
          Discover the thrill of the ride with our handpicked selection of
          exclusive bikes. At Haven Bikes, we cater to enthusiasts who value
          performance, style, and craftsmanship. Whether you're hitting the
          trails or cruising the city streets, our collection is designed to
          elevate your biking experience. Explore the finest models from
          world-renowned brands, each meticulously crafted to meet the demands
          of the most discerning riders. Experience the perfect blend of
          innovation and tradition with bikes that stand out, just like you.
        </p>
        <Button asChild size={'lg'} className="">
          <Link href={'/products'}>Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </div>
  );
}

export default Hero;
