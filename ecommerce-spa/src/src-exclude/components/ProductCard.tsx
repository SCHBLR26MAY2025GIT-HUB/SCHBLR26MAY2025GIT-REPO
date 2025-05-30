// Iteration 1: Basic Product Card Component
// import React from 'react';
// import { Product } from '../models';

// interface ProductCardProps {
//   product: Product;
//   onAddToCart?: (product: Product) => void;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
//   return (
//     <div style={styles.card}>
//       <h3>{product.name}</h3>
//       <p>Price: ${product.price.toFixed(2)}</p>
//       {product.onSale && <span style={styles.saleBadge}>On Sale!</span>}
//       {onAddToCart && (
//         <button style={styles.button} onClick={() => onAddToCart(product)}>
//           Add to Cart
//         </button>
//       )}
//     </div>
//   );
// };

// const styles: Record<string, React.CSSProperties> = {
//   card: {
//     border: '1px solid #ccc',
//     borderRadius: 8,
//     padding: 16,
//     marginBottom: 16,
//     width: 250,
//   },
//   saleBadge: {
//     color: 'red',
//     fontWeight: 'bold',
//   },
//   button: {
//     marginTop: 8,
//     padding: '8px 12px',
//     borderRadius: 4,
//     border: 'none',
//     backgroundColor: '#007bff',
//     color: 'white',
//     cursor: 'pointer',
//   },
// };

// export default ProductCard;

// Iteration 2: Product Card with Context for Cart Management
// import React from 'react';
// import { Product } from '../models';
// import { useCart } from '../contexts/CartContext';

// interface ProductCardProps {
//   product: Product;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
//   const { addToCart } = useCart();

//   return (
//     <div style={styles.card}>
//       <h3>{product.name}</h3>
//       <p>Price: ${product.price.toFixed(2)}</p>
//       {product.onSale && <span style={styles.saleBadge}>On Sale!</span>}
//       <button style={styles.button} onClick={() => addToCart(product)}>
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// const styles: Record<string, React.CSSProperties> = {
//   card: {
//     border: '1px solid #ccc',
//     borderRadius: 8,
//     padding: 16,
//     marginBottom: 16,
//     width: 250,
//   },
//   saleBadge: {
//     color: 'red',
//     fontWeight: 'bold',
//   },
//   button: {
//     marginTop: 8,
//     padding: '8px 12px',
//     borderRadius: 4,
//     border: 'none',
//     backgroundColor: '#007bff',
//     color: 'white',
//     cursor: 'pointer',
//   },
// };

// export default ProductCard;

// Iteration 3: Complete Product Card with Routing and Context
import React from 'react';
import { Product } from '../models';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div style={styles.card}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price.toFixed(2)}</p>
      {product.onSale && <span style={styles.saleBadge}>On Sale!</span>}
      <button style={styles.button} onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

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
    display: 'inline-block',
    marginTop: 8,
  },
  button: {
    marginTop: 12,
    padding: '8px 12px',
    borderRadius: 4,
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    fontWeight: '600',
  },
};

export default ProductCard;

