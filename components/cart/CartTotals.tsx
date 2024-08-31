'use client';
import { Card, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { formatCurrency } from '@/utils/format';
import { createOrderAction } from '@/utils/actions';
import FormContainer from '../form/FormContainer';
import { Cart } from '@prisma/client';
import { OrderNowButton, SubmitButton } from '../form/Button';
import { useState } from 'react';
import { useToast } from '../ui/use-toast';

function CartTotals({ cart }: { cart: Cart }) {
  const { cartTotal, shipping, tax, orderTotal } = cart;
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const handleCheckout = async () => {
    try {
      setLoading(!loading);
      toast({
        description: 'your order is being placed',
      });

      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cart }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
        const order = await createOrderAction();
        console.log(order);
      } else {
        console.error('Checkout session failed to create.');
      }
      setLoading(!loading);
    } catch (error) {
      console.error('Checkout error:', error);
    }
  };
  return (
    <div>
      <Card className="p-8">
        <CartTotalRow label="Subtotal" amount={cartTotal} />
        <CartTotalRow label="Shipping" amount={shipping} />
        <CartTotalRow label="Tax" amount={tax} />
        <CardTitle className="mt-8">
          <CartTotalRow label="Order Total" amount={orderTotal} lastRow />
        </CardTitle>
      </Card>

      <OrderNowButton
        text="Place Order"
        onClick={handleCheckout}
        className="w-full mt-8"
        loading={loading}
      />
    </div>
  );
}

function CartTotalRow({
  label,
  amount,
  lastRow,
}: {
  label: string;
  amount: number;
  lastRow?: boolean;
}) {
  return (
    <>
      <p className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{formatCurrency(amount)}</span>
      </p>
      {lastRow ? null : <Separator className="my-2" />}
    </>
  );
}

export default CartTotals;
