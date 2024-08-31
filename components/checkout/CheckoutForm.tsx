'use client';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
  PaymentElement,
  useStripe,
  useElements,
  Elements,
} from '@stripe/react-stripe-js';
import { Button } from '../ui/button';
import React from 'react';

type CheckoutFormProps = {
  clientSecret: string | undefined;
  cartTotal: number;
  loading: boolean;
  errorMessage: string | undefined;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string | undefined>>;
};
function CheckoutForm({
  cartTotal,
  clientSecret,
  errorMessage,
  loading,
  setLoading,
  setErrorMessage,
}: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    if (!stripe || !elements) {
      return;
    }
    const { error: submitError } = await elements.submit();
    const submitErrorMsg = submitError
      ? submitError.message
      : 'error when submitting card details';

    if (submitError) {
      setErrorMessage(submitErrorMsg);
      setLoading(false);
      return;
    }
    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http:localhost:3000/`,
      },
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="h-80 text-white bg-white">
        {clientSecret && <PaymentElement />}
        {errorMessage && <div>{errorMessage}</div>}
        <Button disabled={!stripe || loading} type="submit" variant={'default'}>
          {!loading ? `Pay $${cartTotal}` : `Processing`}
        </Button>
      </form>
    </div>
  );
}

export default CheckoutForm;
