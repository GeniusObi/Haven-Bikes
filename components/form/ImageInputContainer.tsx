'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { SubmitButton } from './Button';
import FormContainer from './FormContainer';
import { Button } from '../ui/button';
import ImageInput from './ImageInput';
import { type actionFunction } from '@/utils/types';

type ImageInputContainerProps = {
  action: actionFunction;
  image: string;
  name: string;
  text: string;
  children?: React.ReactNode;
};

function ImageInputContainer({
  image,
  action,
  name,
  text,
  children,
}: ImageInputContainerProps) {
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false);
  return (
    <div className="mb-8">
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="rounded object-center mb-4 w-[200px] h-[200px] transform hover:scale-110 transition-transform duration-500"
        priority
      />
      <Button
        variant="outline"
        size={'sm'}
        onClick={() => setUpdateFormVisible((prev) => !prev)}
      >
        {text}
      </Button>
      {isUpdateFormVisible && (
        <FormContainer action={action}>
          {children}
          <ImageInput />
          <SubmitButton size="sm" text={text} />
        </FormContainer>
      )}
    </div>
  );
}
export default ImageInputContainer;
