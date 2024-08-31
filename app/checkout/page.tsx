'use client';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
  PaymentElement,
  useStripe,
  useElements,
  Elements,
} from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';
import CheckoutForm from '@/components/checkout/CheckoutForm';

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error('NEXT_PUBLIC_STRIPE_PUBLIC_KEY not defined');
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
function CheckoutPage() {
  const searchParams = useSearchParams();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientsecret] = useState();
  const [loading, setLoading] = useState(false);
  const orderId = searchParams.get('orderId');
  const cartId = searchParams.get('cartId');
  const cartTotal = Number(searchParams.get('cartTotal'));
  useEffect(() => {
    fetch('/api/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cartId: cartId, orderId: orderId }),
    })
      .then((res) => res.json())
      .then((data) => setClientsecret(data.clientSecret));
  }, []);

  console.log(stripePromise);

  // const fetchClientSecret = useCallback(async () => {
  //   const response = await axios.post('/api/payment', {
  //     orderId,
  //     cartId,
  //   });
  //   return response.data.clientSecret;
  // }, []);

  return (
    // <div id="checkout">
    //   <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
    //     <EmbeddedCheckout />
    //   </EmbeddedCheckoutProvider>
    // </div>

    <Elements
      stripe={stripePromise}
      options={{
        mode: 'payment',
        amount: cartTotal * 100,
        currency: 'usd',
      }}
    >
      <CheckoutForm
        clientSecret={clientSecret}
        errorMessage={errorMessage}
        cartTotal={cartTotal}
        loading={loading}
        setLoading={setLoading}
        setErrorMessage={setErrorMessage}
      />
    </Elements>
  );
}
export default CheckoutPage;
