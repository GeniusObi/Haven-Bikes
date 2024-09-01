'use client';

import { Card } from '@/components/ui/card';

import ThirdColumn from './ThirdColumn';
import { CartItem, CartItemWithProduct } from '@/utils/types';
import { FirstColumn, FourthColumn, SecondColumn } from './CartItemColumn';

function CartItemsList({ cartItems }: { cartItems: CartItem[] }) {
  return (
    <div>
      {cartItems.map((cartItem: CartItem) => {
        const { id, amount } = cartItem;
        const { image, name, brand, price, id: productId } = cartItem.product;

        return (
          <Card
            key={id}
            className="flex flex-col gap-y-4 md:flex-row flex-wrap p-6 mb-8 gap-x-4"
          >
            <FirstColumn image={image} name={name} />
            <SecondColumn name={name} brand={brand} productId={productId} />
            <ThirdColumn id={id} quantity={amount} />
            <FourthColumn price={price} />
          </Card>
        );
      })}
    </div>
  );
}
export default CartItemsList;
