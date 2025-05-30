// Iteration 1: Basic Product Card Component
// import React from 'react';
// import { Product } from '../models';
// import ProductCard from '../components/ProductCard';

// const products: Product[] = [
//   { id: 1, name: 'Sneakers', price: 89.99, onSale: true, tags: ['footwear', 'sports'] },
//   { id: 2, name: 'Hat', price: 19.99, onSale: false },
// ];

// const ProductsPage: React.FC = () => {
//   return (
//     <div style={{ padding: 20 }}>
//       <h1>Products</h1>
//       <div style={{ display: 'flex', gap: 20 }}>
//         {products.map(product => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;

// Iteration 2: Product Card with Context for Cart Management
// import React, { useState } from 'react';
// import { Product } from '../models';
// import { useProducts } from '../hooks/useProducts';
// import ProductCard from '../components/ProductCard';

// const emptyProduct: Omit<Product, 'id'> = {
//   name: '',
//   price: 0,
//   onSale: false,
//   tags: [],
// };

// const ProductsPage: React.FC = () => {
//   const { products, addProduct, updateProduct, deleteProduct } = useProducts();

//   const [editingProduct, setEditingProduct] = useState<Product | null>(null);
//   const [form, setForm] = useState<Omit<Product, 'id'>>(emptyProduct);

//   // Handlers
//   const handleEdit = (product: Product) => {
//     setEditingProduct(product);
//     setForm({ ...product, tags: product.tags || [] });
//   };

//   const handleDelete = (id: number) => {
//     if (window.confirm('Are you sure you want to delete this product?')) {
//       deleteProduct(id);
//       if (editingProduct?.id === id) {
//         setEditingProduct(null);
//         setForm(emptyProduct);
//       }
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     setForm(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : name === 'price' ? Number(value) : value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!form.name.trim()) {
//       alert('Product name is required');
//       return;
//     }
//     if (editingProduct) {
//       updateProduct({ ...editingProduct, ...form });
//     } else {
//       addProduct({
//         id: Date.now(),
//         ...form,
//       });
//     }
//     setEditingProduct(null);
//     setForm(emptyProduct);
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>Manage Products</h1>

//       <form onSubmit={handleSubmit} style={formStyles.form}>
//         <input
//           name="name"
//           placeholder="Name"
//           value={form.name}
//           onChange={handleChange}
//           style={formStyles.input}
//           required
//         />
//         <input
//           name="price"
//           type="number"
//           placeholder="Price"
//           value={form.price}
//           onChange={handleChange}
//           style={formStyles.input}
//           min={0}
//           step={0.01}
//           required
//         />
//         <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
//           <input
//             name="onSale"
//             type="checkbox"
//             checked={form.onSale}
//             onChange={handleChange}
//           />
//           On Sale
//         </label>
//         <button type="submit" style={formStyles.button}>
//           {editingProduct ? 'Update' : 'Add'} Product
//         </button>
//         {editingProduct && (
//           <button
//             type="button"
//             style={formStyles.buttonSecondary}
//             onClick={() => {
//               setEditingProduct(null);
//               setForm(emptyProduct);
//             }}
//           >
//             Cancel
//           </button>
//         )}
//       </form>

//       <div style={{ marginTop: 40, display: 'flex', flexWrap: 'wrap', gap: 20 }}>
//         {products.length === 0 ? (
//           <p>No products available.</p>
//         ) : (
//           products.map(product => (
//             <div key={product.id} style={{ position: 'relative' }}>
//               <ProductCard product={product} />
//               <button
//                 onClick={() => handleEdit(product)}
//                 style={{ position: 'absolute', top: 8, right: 48 }}
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(product.id)}
//                 style={{ position: 'absolute', top: 8, right: 8, color: 'red' }}
//               >
//                 Delete
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// const formStyles: Record<string, React.CSSProperties> = {
//   form: {
//     display: 'flex',
//     gap: 12,
//     flexWrap: 'wrap',
//     alignItems: 'center',
//   },
//   input: {
//     padding: 8,
//     fontSize: 16,
//     flexGrow: 1,
//     minWidth: 150,
//   },
//   button: {
//     padding: '8px 16px',
//     fontSize: 16,
//     backgroundColor: '#007bff',
//     color: 'white',
//     border: 'none',
//     borderRadius: 4,
//     cursor: 'pointer',
//   },
//   buttonSecondary: {
//     padding: '8px 16px',
//     fontSize: 16,
//     backgroundColor: '#6c757d',
//     color: 'white',
//     border: 'none',
//     borderRadius: 4,
//     cursor: 'pointer',
//   },
// };

// export default ProductsPage;

// Iteration 3: Fetching Products from API
// import React from 'react';
// import ProductCard from '../components/ProductCard';
// import { useFetchProducts } from '../hooks/useFetchProducts';

// const ProductsPage: React.FC = () => {
//   const { products, loading, error } = useFetchProducts();

//   if (loading) return <p>Loading products...</p>;
//   if (error) return <p style={{ color: 'red' }}>{error}</p>;

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>Products</h1>
//       <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
//         {products.length === 0 ? (
//           <p>No products available.</p>
//         ) : (
//           products.map(product => <ProductCard key={product.id} product={product} />)
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;

// Iteration 3: Fetching Products from API
// import React from 'react';
// import ProductCard from '../components/ProductCard';
// import { useFetchProducts } from '../hooks/useFetchProducts';

// const ProductsPage: React.FC = () => {
//   const { products, loading, error } = useFetchProducts();

//   if (loading) return <p>Loading products...</p>;
//   if (error) return <p style={{ color: 'red' }}>{error}</p>;

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>Products</h1>
//       <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
//         {products.length === 0 ? (
//           <p>No products available.</p>
//         ) : (
//           products.map(product => <ProductCard key={product.id} product={product} />)
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductsPage;

// Iteration 4: Enhanced Products Page with Retry Logic
import React from 'react';
import ProductCard from '../components/ProductCard';
import { useFetchProducts } from '../hooks/useFetchProducts';

const ProductsPage: React.FC = () => {
  const { products, loading, error, fetchProducts } = useFetchProducts();

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Products</h1>
      {error ? (
        <>
          <p style={{ color: 'red' }}>{error}</p>
          <button onClick={fetchProducts} style={{ padding: '8px 16px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: 4 }}>
            Retry
          </button>
        </>
      ) : (
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          {products.length === 0 ? <p>No products available.</p> : products.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;

