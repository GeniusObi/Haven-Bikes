import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
const name = 'price';
type FormInputNumberProps = {
  defaultValue?: number;
};
function PriceInput({ defaultValue }: FormInputNumberProps) {
  return (
    <div className="mb-2">
      <Label>Price ($)</Label>
      <Input
        id={name}
        type="number"
        name={name}
        min={0}
        defaultValue={defaultValue || 100}
        required
        className="dark:outline outline-input"
      />
    </div>
  );
}

export default PriceInput;
