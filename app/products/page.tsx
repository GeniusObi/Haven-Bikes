import ProductsContainer from '@/components/products/ProductsContainer';
import React from 'react';

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { layout?: string; search?: string };
}) {
  const layout = searchParams.layout || 'grid';
  const search = searchParams.search || '';
/**
 Side note: if we search with just empty string,it is going to return all the products from the api,
 but if we search by undefined,we won't get anything back.
 */
  return <ProductsContainer layout={layout} search={search} />;
}
