
// Iteration 1 : Basic Hook to Fetch Products
// import { useState, useEffect } from 'react';
// import { Product } from '../models';
// import { fetchProducts } from '../api/fakeApi';

// export const useFetchProducts = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     fetchProducts()
//       .then(data => {
//         setProducts(data);
//         setError(null);
//       })
//       .catch(err => setError(err.message))
//       .finally(() => setLoading(false));
//   }, []);

//   return { products, loading, error };
// };

// Iteration 2: Enhanced Hook with Retry Logic
// import { useState, useEffect } from 'react';
// import { Product } from '../models';
// import axios from 'axios';

// const API_URL = 'const API_URL = 'http://localhost:5000/products';  
// // Local mock API endpoint ';  // replace with real API endpoint

// export const useFetchProducts = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         const response = await axios.get<Product[]>(API_URL); // Fetch products
//         setProducts(response.data);
//       } catch (err) {
//         setError('Failed to fetch products. Please try again.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return { products, loading, error };
// };


// Iteration 3: Final Hook with Retry Logic and API Fetching
import { useState, useEffect } from 'react';
import { Product } from '../models';
import axios from 'axios';

const API_URL = 'http://localhost:5000/products';  
// Local mock API endpoint ';  // Replace with real API endpoint

export const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch products
  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get<Product[]>(API_URL); // Fetch products from API
      setProducts(response.data);
    } catch (err) {
      setError('Failed to fetch products. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch products initially on mount
  // It is important to call this function to load the products when the component mounts.
  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error, fetchProducts };
};

// Iteration 4: Using Mock Data Instead of API
// import { useState, useEffect } from 'react';
// import { Product } from '../models';
// import axios from 'axios';

// const mockData: Product[] = [
//   { id: 1, name: 'Sneakers', price: 89.99, onSale: true, tags: ['footwear', 'sports'] },
//   { id: 2, name: 'Hat', price: 19.99, onSale: false }
// ];

// const API_URL = '';  // We're not using an external URL here.

// export const useFetchProducts = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const fetchProducts = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       // Simulating an API call with a delay
//       await new Promise(resolve => setTimeout(resolve, 1000));

//       // Use mock data instead of real API call
//       setProducts(mockData);
//     } catch (err) {
//       setError('Failed to fetch products. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return { products, loading, error, fetchProducts };
// };

