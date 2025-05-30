import { Product } from '../models';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

const sampleProducts: Product[] = [
  { id: 1, name: 'Sneakers', price: 89.99, onSale: true, tags: ['footwear', 'sports'] },
  { id: 2, name: 'Hat', price: 19.99, onSale: false },
];

export const fetchProducts = async (): Promise<Product[]> => {
  await delay(1000); // simulate network delay
  if (Math.random() < 0.2) {
    throw new Error('Failed to fetch products. Please try again.');
  }
  return sampleProducts;
};
