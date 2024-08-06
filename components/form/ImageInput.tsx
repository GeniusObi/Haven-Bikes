import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

function ImageInput() {
  const name = 'image';

  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        bike image
      </Label>
      <Input
        id={name}
        name={name}
        type="file"
        accept="image/*"
        className="dark:outline outline-input"
      />
    </div>
  );
}

export default ImageInput;
