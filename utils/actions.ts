'use server';

import db from '@/utils/db';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { imageSchema, productSchema, validatedWithZod } from './schema';
import { deleteImage, uploadImage } from './supabase';
import { revalidatePath } from 'next/cache';

const getAuthUser = async () => {
  const user = await currentUser();
  if (!user) redirect('/');
  return user;
};
const getAdminUser = async () => {
  const user = await getAuthUser();
  if (user.id !== process.env.ADMIN_USER_ID) redirect('/');
  return user;
};
const renderError = (error: unknown): { message: string } => {
  return {
    message: error instanceof Error ? error.message : 'an error occurred',
  };
};

export const fetchFeaturedProducts = async () => {
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
  });
  return products;
};

export const fetchAllProducts = ({ search = '' }: { search: string }) => {
  return db.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: 'insensitive' } },
        { brand: { contains: search, mode: 'insensitive' } },
      ],
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};
export const fetchSingleProduct = async (productId: string) => {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) redirect('/products');
  return product;
};

export const createProductAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();
  try {
    //First approach for creating product and ensuring validation with typescript

    // const name = formData.get('name') as string;
    // const brand = formData.get('brand') as string;
    // const price = Number(formData.get('price') as string);
    // const image = formData.get('image') as File;
    // const description = formData.get('description') as string;
    // const featured = Boolean(formData.get('featured') as string);

    //=====Second method:using industry standard Zod
    const rawData = Object.fromEntries(formData);
    const file = formData.get('image') as File;
    const validatedFields = validatedWithZod(productSchema, rawData);
    const validatedFile = validatedWithZod(imageSchema, { image: file });
    const fullPath = await uploadImage(validatedFile.image);

    await db.product.create({
      data: {
        ...validatedFields,
        image: fullPath,
        clerkId: user.id,
      },
    });
  } catch (error) {
    return renderError(error);
  }
  redirect('/admin/products');
};

export const fetchAdminProducts = async () => {
  await getAdminUser();
  const products = await db.product.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return products;
};

export const deleteProductAction = async (prevState: { productId: string }) => {
  const { productId } = prevState;
  await getAdminUser();
  try {
    const product = await db.product.delete({
      where: {
        id: productId,
      },
    });
    console.log(product);
    await deleteImage(product.image);
    revalidatePath('/admin/products');
    return { message: 'product deleted successfully' };
  } catch (error) {
    return renderError(error);
  }
};

export const fetchAdminProductDetails = async (productId: string) => {
  await getAdminUser();
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) redirect('/admin/products');
  return product;
};

export const updateProductImageAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  return { message: 'product Image updated successfully' };
};
