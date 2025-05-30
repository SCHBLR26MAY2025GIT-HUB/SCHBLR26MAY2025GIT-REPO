// import { useState, useEffect } from 'react';
// import { Product } from '../models';

// const STORAGE_KEY = 'ecommerce-products';
// const defaultProducts: Product[] = [
//   { id: 1, name: 'Sneakers', price: 89.99, onSale: true, tags: ['footwear', 'sports'] },
//   { id: 2, name: 'Hat', price: 19.99, onSale: false },
// ];
// // export const useProducts = () => {
// //   const [products, setProducts] = useState<Product[]>(() => {
// //     const stored = localStorage.getItem(STORAGE_KEY);
// //     return stored ? JSON.parse(stored) : [];
// //   });

// export const useProducts = () => {
//   // Initialize products from localStorage or default fallback
//   const stored = localStorage.getItem(STORAGE_KEY);
//   console.log('Initial products from localStorage:', stored);
//   console.log('Default products:', defaultProducts);
//   const initialProducts = stored ? JSON.parse(stored) : defaultProducts;
//   console.log('Using products:', initialProducts);
//   const [products, setProducts] = useState<Product[]>(initialProducts);

//   // Optional: sync localStorage whenever products change
// useEffect(() => {
//   console.log('Saving products to localStorage:', products);
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
// }, [products]);



//   const addProduct = (product: Product) => {
//     setProducts(prev => [...prev, product]);
//   };

//   const updateProduct = (updatedProduct: Product) => {
//     setProducts(prev =>
//       prev.map(p => (p.id === updatedProduct.id ? updatedProduct : p))
//     );
//   };

//   const deleteProduct = (id: number) => {
//     setProducts(prev => prev.filter(p => p.id !== id));
//   };

//   return { products, addProduct, updateProduct, deleteProduct };
// };


// src/hooks/useProducts.ts
// Iteration 4: Custom Hook for Product Management
import { useState, useEffect } from 'react';
import { Product } from '../models/product';

const STORAGE_KEY = 'ecommerce-products';

const defaultProducts: Product[] = [
  { id: 1, name: 'Sneakers', price: 89.99, onSale: true, tags: ['footwear', 'sports'] },
  { id: 2, name: 'Hat', price: 19.99, onSale: false },
];

export const useProducts = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  const initialProducts = stored ? JSON.parse(stored) : defaultProducts;

  const [products, setProducts] = useState<Product[]>(initialProducts);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  const addProduct = (product: Product) => {
    setProducts(prev => [...prev, product]);
  };

  const updateProduct = (updatedProduct: Product) => {
    setProducts(prev =>
      prev.map(p => (p.id === updatedProduct.id ? updatedProduct : p))
    );
  };

  const deleteProduct = (id: number) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  return { products, addProduct, updateProduct, deleteProduct };
};
