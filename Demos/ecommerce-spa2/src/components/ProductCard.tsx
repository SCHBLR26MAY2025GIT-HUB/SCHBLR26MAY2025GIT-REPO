import React from 'react';
import { Product } from '../models';

// The ProductCard component is a functional component that displays product information.
// It takes a product object and an onAddToCart function as props.

interface ProductCardProps {
    product: Product;
    onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
    return (
        <div style={styles.card}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
            {product.onSale && <span style={styles.saleBadge}>On Sale!</span>}
            {onAddToCart && (
                <button style={styles.button} onClick={() => onAddToCart(product)}>
                    Add to Cart
                </button>
            )}
        </div>
    );
};

// Records are a TypeScript feature that allows you to define an object type with specific keys and value types.
// In this case, styles is a Record where keys are strings and values are React.CSSProperties.
const styles: Record<string, React.CSSProperties> = {
  card: {
    border: '1px solid #ccc',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    width: 250,
  },
  saleBadge: {
    color: 'red',
    fontWeight: 'bold',
  },
  button: {
    marginTop: 8,
    padding: '8px 12px',
    borderRadius: 4,
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
  },
};

export default ProductCard;