# 🧩 Props vs. `useState`: What’s the difference and how do they connect?

**Props** are inputs to a component. They come from a parent component and are **read-only** inside the child component.  
In your `ProductCard`, `product` and `onAddToCart` are props — the component does not manage or change them directly; it just uses them to display data or trigger actions.

**`useState`** is a React hook that allows a component to manage its own state, meaning it can hold and update data internally.  
For example, if `ProductCard` needed to track whether the product was “liked” or “added,” it could use `useState` to keep track of that inside itself.

---

## 💡 Example: How `useState` might be added to your component

Imagine you want the button to toggle between “Add to Cart” and “Added” once clicked.  
You could add a `useState` hook like this:

```tsx
// ProductCard.tsx
const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [added, setAdded] = React.useState(false);

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
      setAdded(true);  // Update internal state when product is added
    }
  };

  return (
    <div style={styles.card}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price.toFixed(2)}</p>
      {product.onSale && <span style={styles.saleBadge}>On Sale!</span>}
      {onAddToCart && (
        <button style={styles.button} onClick={handleAddToCart}>
          {added ? "Added" : "Add to Cart"}
        </button>
      )}
    </div>
  );
};
```

---

### 📝 Here’s what’s happening:

- **Props** (`product` and `onAddToCart`) are still used to display product info and handle the external “add to cart” action.
- **State** (`added`) is internal to the component, used to manage the button label.

---

## 🏁 Summary

- **Props** are data passed in from parents — the component *reads* them.
- **State** (with `useState`) is data managed inside the component — the component can *read and update* it.

Your original component uses props to render info and conditionally show a button, but doesn’t hold any internal state.  
Adding `useState` lets the component track and respond to changes internally without relying on props al
