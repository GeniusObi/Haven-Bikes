import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
type Data = {
  url?: string;
  error?: string;
};
import { NextResponse, NextRequest } from 'next/server';
import db from '@/utils/db';

export const POST = async (req: NextRequest) => {

  const origin = 'http://localhost:3000';

  const { cart } = await req.json();

  const line_items = cart.cartItems.map((cartItem: any) => {
    return {
      quantity: cartItem.amount,
      price_data: {
        currency: 'usd',
        product_data: {
          name: cartItem.product.name,
          images: [cartItem.product.image],
        },
        unit_amount: cartItem.product.price * 100, // price in cents
      },
    };
  });
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: 'payment',
      success_url: `${origin}/success?success=true`,
      cancel_url: `${origin}/cancel?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
