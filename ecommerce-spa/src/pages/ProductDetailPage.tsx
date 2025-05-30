import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts'; // or your product data hook
import { useCart } from '../contexts/CartContext';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { products } = useProducts();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Find product by id, converting param to number
  const product = products.find(p => p.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => navigate(-1)}>← Back</button>
      <h1>{product.name}</h1>
      <p>Price: ${product.price.toFixed(2)}</p>
      {product.tags && <p>Tags: {product.tags.join(', ')}</p>}
      {product.onSale && <p style={{ color: 'red' }}>On Sale!</p>}
      <button onClick={() => {
        addToCart(product);
        alert(`${product.name} added to cart!`);
      }}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetailPage;
