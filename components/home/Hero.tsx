import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import HeroCarousel from './HeroCarousel';

function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-wider italic  sm:text-6xl">
          Exclusive Bikes
        </h1>
        <p className="bold dark:text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          numquam ducimus obcaecati nesciunt quo reiciendis nam cupiditate eos
          incidunt, vel quas deleniti saepe maxime quia. Inventore consequatur
          unde harum iure aliquam nisi quod adipisci porro, laborum temporibus
          animi deserunt veniam, corporis, culpa distinctio fugiat. Numquam
          laudantium officiis alias accusantium non in quia vero? Vel sed,
          placeat tempora nisi consectetur tenetur nam! Tempore temporibus
          accusamus ex! Dicta illum fugit blanditiis magnam cum praesentium
          libero maxime vel!
        </p>
        <Button asChild size={'lg'} className="mt-10">
          <Link href={'/products'}>Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </div>
  );
}

export default Hero;
