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
  const { name, image, company, description, price } = product;
  const dollarsAmount = formatCurrency(price);
  return (
    <section>
      <BreadCrumbs name={product.name} />
      <div className="mt-6 grid gap-y-8">
        {/* IMAGE COL */}
        <div className="relative h-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width:786px), 100vw,(max-width:1200px) 50vw,33vw"
            priority
            className="w-full rounded object-cover object-center"
          />
        </div>
        {/* PRODUCT INFO SECOND COL */}
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{name}</h1>
            <FavoriteToggleButton productId={params.id} />
          </div>
          <ProductRating productId={product.id} />
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 leading-8 text-muted-foreground">
            {dollarsAmount}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
          <AddToCart productId={params.id} />
        </div>
      </div>
    </section>
  );
}
