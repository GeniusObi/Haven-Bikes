import { Prisma } from '@prisma/client';
import { DateTime } from 'luxon';

export type CartItemWithProduct = Prisma.CartItemGetPayload<{
  include: { product: true };
}>;

export type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;

// export type CartItem = {
//   productId: string;
//   image: string;
//   title: string;
//   price: string;
//   amount: number;
//   brand: string;
// };

// export type CartState = {
//   cartItems: CartItem[];
//   numItemsInCart: number;
//   cartTotal: number;
//   shipping: number;
//   tax: number;
//   orderTotal: number;
// };

// Import DateTime for types if needed

export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  featured: boolean;
  image: string;
  price: number;
  createdAt: DateTime;
  updatedAt: DateTime;
  clerkId: string;
  favorites: Favorite[];
  reviews: Review[];
  cartItems: CartItem[];
}

export interface Favorite {
  id: string;
  clerkId: string;
  productId: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  product: Product; // This implies a bi-directional relationship
}

export interface Review {
  id: string;
  clerkId: string;
  rating: number;
  comment: string;
  authorName: string;
  authorImageUrl: string;
  createdAt: DateTime;
  updatedAt: DateTime;
  productId: string;
  product: Product; // This implies a bi-directional relationship
}

export interface Cart {
  id: string;
  clerkId: string;
  cartItems: CartItem[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  taxRate: number;
  orderTotal: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface CartItem {
  id: string;
  productId: string;
  cartId: string;
  amount: number;
  createdAt: DateTime;
  updatedAt: DateTime;
  product: Product; // This implies a bi-directional relationship
  cart: Cart; // This implies a bi-directional relationship
}

export interface Order {
  id: string;
  clerkId: string;
  products: number;
  orderTotal: number;
  tax: number;
  shipping: number;
  email: string;
  isPaid: boolean;
  createdAt: DateTime;
  updatedAt: DateTime;
}
