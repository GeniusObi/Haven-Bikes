import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
type FormProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};
function FormInput({
  name,
  type,
  defaultValue,
  label,
  placeholder,
}: FormProps) {
  return (
    <div className="mb-2 ">
      <Label htmlFor="name" className="mb-8">
        {label || name}
      </Label>
      <Input
        name={name}
        type={type}
        id={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required
        className="dark:outline outline-input"
      />
    </div>
  );
}

export default FormInput;
