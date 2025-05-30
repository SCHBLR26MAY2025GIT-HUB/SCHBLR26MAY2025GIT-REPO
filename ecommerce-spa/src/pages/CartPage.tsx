// Iteration 1: Basic Product Card Component
// import React from 'react';

// const CartPage: React.FC = () => {
//   return <h2>Your Cart is Empty (Work in Progress)</h2>;
// };

// export default CartPage;

// Iteration 2: Product Card with Context for Cart Management
// import React from 'react';
// import { useCart } from '../contexts/CartContext';

// const CartPage: React.FC = () => {
//   const { cart, removeFromCart, clearCart } = useCart();

//   const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

//   if (cart.length === 0) return <p>Your cart is empty.</p>;

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Your Shopping Cart</h2>
//       <ul>
//         {cart.map(item => (
//           <li key={item.id} style={{ marginBottom: 10 }}>
//             {item.name} — ${item.price.toFixed(2)} × {item.quantity}
//             <button
//               style={{ marginLeft: 10 }}
//               onClick={() => removeFromCart(item.id)}
//             >
//               Remove
//             </button>
//           </li>
//         ))}
//       </ul>
//       <p>
//         <strong>Total: ${totalPrice.toFixed(2)}</strong>
//       </p>
//       <button onClick={clearCart}>Clear Cart</button>
//     </div>
//   );
// };

// export default CartPage;

// Iteration 3: Complete Cart Page with Quantity Management
// import React from 'react';
// import { useCart } from '../contexts/CartContext';

// const CartPage: React.FC = () => {
//   // const { cart, addToCart, removeFromCart, clearCart } = useCart();
//   const { cart, addToCart, removeFromCart, clearCart, removeOneFromCart } = useCart();


//   const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

//   if (cart.length === 0) {
//     return <p>Your cart is empty.</p>;
//   }

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Your Shopping Cart</h2>
//       <ul style={{ listStyle: 'none', padding: 0 }}>
//         {cart.map(item => (
//           <li key={item.id} style={{ marginBottom: 20, borderBottom: '1px solid #ccc', paddingBottom: 10 }}>
//             <div>
//               <strong>{item.name}</strong> — ${item.price.toFixed(2)} × {item.quantity}
//             </div>
//             <div>
//               <button
//                 onClick={() => addToCart(item)}
//                 style={{ marginRight: 10 }}
//                 aria-label={`Increase quantity of ${item.name}`}
//               >
//                 +
//               </button>
//               <button
//                 onClick={() =>
//                   item.quantity > 1
//                     ? removeOneFromCart(item.id)
//                     : removeFromCart(item.id)
//                 }
//                 aria-label={`Decrease quantity of ${item.name}`}
//               >
//                 –
//               </button>
//               <button
//                 onClick={() => removeFromCart(item.id)}
//                 style={{ marginLeft: 10, color: 'red' }}
//                 aria-label={`Remove ${item.name} from cart`}
//               >
//                 Remove
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//       <p>
//         <strong>Total: ${totalPrice.toFixed(2)}</strong>
//       </p>
//       <button onClick={clearCart}>Clear Cart</button>
//     </div>
//   );
// };

// export default CartPage;
// Iteration 4: Complete Cart Page with Styling
import React from 'react';
import { useCart } from '../contexts/CartContext';
import styles from './CartPage.module.css';

const CartPage: React.FC = () => {
  const { cart, addToCart, removeFromCart, removeOneFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return <p className={styles.emptyMessage}>Your cart is empty.</p>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your Shopping Cart</h2>
      <ul className={styles.cartList}>
        {cart.map(item => (
          <li key={item.id} className={styles.cartItem}>
            <div className={styles.itemInfo}>
              {item.name} — ${item.price.toFixed(2)} × {item.quantity}
            </div>
            <div className={styles.quantityControls}>
              <button
                className={styles.quantityButton}
                onClick={() => addToCart(item)}
                aria-label={`Increase quantity of ${item.name}`}
              >
                +
              </button>
              <button
                className={styles.quantityButton}
                onClick={() =>
                  item.quantity > 1
                    ? removeOneFromCart(item.id)
                    : removeFromCart(item.id)
                }
                aria-label={`Decrease quantity of ${item.name}`}
              >
                –
              </button>
              <button
                className={styles.removeButton}
                onClick={() => removeFromCart(item.id)}
                aria-label={`Remove ${item.name} from cart`}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <p className={styles.total}>Total: ${totalPrice.toFixed(2)}</p>
      <button className={styles.clearButton} onClick={clearCart}>
        Clear Cart
      </button>
    </div>
  );
};

export default CartPage;

