import { formatCurrency } from '@/utils/format';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Card, CardContent } from '../ui/card';
import FavoriteToggleButton from './FavoriteToggleButton';
import { Product } from '@/utils/types';

function ProductsList({ products }: { products: any }) {
  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product: any) => {
        const { name, price, brand, image } = product;
        const dollarsAmount = formatCurrency(price);
        const productId = product.id;
        return (
          <article key={productId} className="group relative">
            <Link href={`/products/${productId}`}>
              <Card className="transform group-hover:shadow-xl transition-shadow duration-500">
                <CardContent>
                  <div className="relative h-64 md:h-48 md:w-48">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="{max-width:768px} 100vw,{max-width:1200px} 50vw,33vw"
                      priority
                      className="w-full rounded object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold capitalize">{name}</h2>
                    <h4 className="text-muted-foreground">{brand}</h4>
                  </div>
                  <p className="text-muted-foreground text-lg md:ml-auto">
                    {dollarsAmount}
                  </p>
                </CardContent>
              </Card>
            </Link>
            <div className="absolute bottom-8 right-8 z-5">
              <FavoriteToggleButton productId={productId} />
            </div>
          </article>
        );
      })}
    </div>
  );
}
export default ProductsList;
