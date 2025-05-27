"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = createProduct;
function createProduct(product) {
    if (!product.title || product.price <= 0) {
        throw new Error('Invalid product data');
    }
    return {
        ...product,
        createdAt: new Date(),
    };
}
// main.ts
// import { createProduct } from './services/productService';
// import { Product } from './types/product';
// const product: Product = {
//   id: 'p1001',
//   title: 'Wireless Mouse',
//   price: 29.99, // ✅ correct type
//   stock: 20,
// };
// try {
//   const savedProduct = createProduct(product);
//   console.log('Saved:', savedProduct);
// } catch (err) {
//   console.error('Validation Error:', err);
// }
