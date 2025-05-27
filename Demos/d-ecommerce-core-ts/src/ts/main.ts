import { createProduct } from './services/d1-productService';
import { Product } from './types/product';

const product: Product = {
  id: 'p1001',
  title: 'Wireless Mouse',
  price: 29.99, // ✅ correct type
  stock: 20,
};

try {
  const savedProduct = createProduct(product);
  console.log('Saved:', savedProduct);
} catch (err) {
  console.error('Validation Error:', err);
}