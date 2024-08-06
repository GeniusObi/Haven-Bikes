import FavoriteToggleButton from '@/components/products/FavoriteToggleButton';
import AddToCart from '@/components/singleproduct/AddToCart';
import BreadCrumbs from '@/components/singleproduct/BreadCrumbs';
import ProductRating from '@/components/singleproduct/ProductRating';
import { fetchSingleProduct } from '@/utils/actions';
import { formatCurrency } from '@/utils/format';
import Image from 'next/image';

export default async function SingleProduct({
  params,
}: {
  params: { id: string };
}) {
  const product = await fetchSingleProduct(params.id);
  const { name, image, brand, description, price, id } = product;
  const dollarsAmount = formatCurrency(price);
  return (
    <section>
      <BreadCrumbs name={product.name} />
      <div className="mt-6 grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-8">
        {/* IMAGE COL */}
        <div className="relative h-64 lg:h-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width:786px) 100vw,(max-width:1200px) 50vw,33vw"
            priority
            className="w-full rounded  object-center aspect-square"
          />
        </div>
        {/* PRODUCT INFO SECOND COL */}
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{name}</h1>
            <FavoriteToggleButton productId={id} />
          </div>
          <ProductRating productId={id} />
          <h4 className="text-xl mt-2">{brand}</h4>
          <p className="mt-3 leading-8 text-muted-foreground">
            {dollarsAmount}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
          <AddToCart productId={id} />
        </div>
      </div>
    </section>
  );
}
