import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '../ui/textarea';
type TextAreaInputProps = {
  name: string;
  labelText?: string;
  defaultValue?: string;
};
function TextAreaInput({ defaultValue, name, labelText }: TextAreaInputProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {labelText || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        rows={5}
        required
        className="leading-loose dark:outline outline-input"
      />
    </div>
  );
}

export default TextAreaInput;
