import React from 'react';
import { Product } from '../models';
import ProductCard from '../components/ProductCard';

const products: Product[] = [
  { id: 1, name: 'Sneakers', price: 89.99, onSale: true, tags: ['footwear', 'sports'] },
  { id: 2, name: 'Hat', price: 19.99, onSale: false },
];

const App: React.FC = () => {
  const handleAddToCart = (product: Product) => {
    alert(`Added ${product.name} to cart!`);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Products</h1>
      <div style={{ display: 'flex', gap: 20 }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default App;