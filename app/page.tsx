import LoadingContainer from '@/components/global/LoadingContainer';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Hero from '@/components/home/Hero';
import { Button } from '@/components/ui/button';
import React from 'react';
import { Suspense } from 'react';
function Home() {
  return (
    <main className="max-w-full">
      <Hero />
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
    </main>
  );
}

export default Home;
