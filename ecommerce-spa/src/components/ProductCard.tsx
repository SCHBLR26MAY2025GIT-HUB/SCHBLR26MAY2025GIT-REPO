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
// import React from 'react';
// import { Product } from '../models';
// import { useCart } from '../contexts/CartContext';
// import { Link } from 'react-router-dom';

// interface ProductCardProps {
//   product: Product;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
//   const { addToCart } = useCart();

//   return (
//     <div style={styles.card}>
//       <Link to={`/products/${product.id}`} style={styles.link}>
//         <h3>{product.name}</h3>
//       </Link>
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
//   link: {
//     color: 'inherit',
//     textDecoration: 'none',
//   },
// };

// export default ProductCard;
// Iteration 3: Complete Product Card with CSS Modules
// import React from 'react';
// import { Product } from '../models';
// import { useCart } from '../contexts/CartContext';
// import styles from './ProductCard.module.css';

// interface ProductCardProps {
//   product: Product;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
//   const { addToCart } = useCart();

//   return (
//     <div className={styles.card}>
//       <h3>{product.name}</h3>
//       <p>Price: ${product.price.toFixed(2)}</p>
//       {product.onSale && <span className={styles.saleBadge}>On Sale!</span>}
//       <button className={styles.button} onClick={() => addToCart(product)}>
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default ProductCard;

// Iteration 4: Final Product Card with Inline Styles
// import React from 'react';
// import { Product } from '../models/product';
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
//     display: 'inline-block',
//     marginTop: 8,
//   },
//   button: {
//     marginTop: 12,
//     padding: '8px 12px',
//     borderRadius: 4,
//     border: 'none',
//     backgroundColor: '#007bff',
//     color: 'white',
//     cursor: 'pointer',
//     fontWeight: '600',
//   },
// };

// export default ProductCard;


import React from 'react';
import { Product } from '../models/product';
import { useCart } from '../contexts/CartContext';
import { Button } from '@progress/kendo-react-buttons';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();  // <-- Get addToCart from context

  return (
    <div style={styles.card}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price.toFixed(2)}</p>
      {product.onSale && <span style={styles.saleBadge}>On Sale!</span>}
      <Button themeColor="primary" onClick={() => addToCart(product)}>
        Add to Cart
      </Button>
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
};

export default ProductCard;