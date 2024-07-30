import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import importA from '@/public/images/bike power.jpg';
import importB from '@/public/images/Bike 2.jpeg';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
const CarouselImages = [importA, importB];
function HeroCarousel() {
  return (
    <div className="hidden lg:block">
      <Carousel>
        <CarouselPrevious />
        <CarouselContent>
          {CarouselImages.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="p-2">
                    <Image
                      src={image}
                      alt="hero"
                      className="w-full h-[24rem] rounded-md object-fill object-center"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default HeroCarousel;
