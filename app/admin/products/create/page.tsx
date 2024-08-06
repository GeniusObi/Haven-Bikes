import { SubmitButton } from '@/components/form/Button';
import CheckboxInput from '@/components/form/CheckboxInput';
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import ImageInput from '@/components/form/ImageInput';
import PriceInput from '@/components/form/PriceInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createProductAction } from '@/utils/actions';
import { faker } from '@faker-js/faker';

function CreateProductPage() {
  const name = faker.vehicle.bicycle();
  const brand = faker.vehicle.manufacturer();
  const description = faker.lorem.paragraph({ min: 10, max: 12 });
  return (
    <section className="w-full">
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        create products
      </h1>
      <div className="border p-8 rounded-md ">
        <FormContainer action={createProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <FormInput
              type="text"
              name="name"
              label="Bike Name"
              defaultValue={name}
            />
            <FormInput
              type="text"
              name="brand"
              label="Brand"
              defaultValue={brand}
            />
            <PriceInput />
            <ImageInput />
          </div>
          <TextAreaInput
            name="description"
            labelText="Bike Description"
            defaultValue={description}
          />
          <div>
            <CheckboxInput name="featured" label="featured" />
          </div>
          <SubmitButton text="create product" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}

export default CreateProductPage;
