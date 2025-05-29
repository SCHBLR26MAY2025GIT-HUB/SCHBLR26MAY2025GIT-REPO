# Pages vs Components — What’s the difference? 🗂️🧩

## Pages

**Definition:**  
Pages are top-level React components that represent entire views or screens in your app.

**Purpose:**  
They correspond to routes in your app (URLs like `/products`, `/cart`, `/login`)

**Responsibilities:**
- 🏗️ Compose and arrange multiple components to build a full page.
- 🔄 Handle page-specific logic like fetching data, managing state related to the page.
- 🔐 Often connect to routing, authentication guards, or layout wrappers.

**Examples:**
- `ProductsPage.tsx` — displays the product list view.
- `CartPage.tsx` — shows the shopping cart.
- `LoginPage.tsx` — login screen.
- `ProductDetailPage.tsx` — detailed view of a single product.

---

## Components

**Definition:**  
Components are reusable UI pieces that can be used inside pages or other components.

**Purpose:**  
They encapsulate a piece of UI or functionality that can be reused throughout your app.

**Responsibilities:**
- 🖼️ Present data or UI elements (buttons, product cards, navigation bars, forms).
- ⚡ Handle local UI state or interaction but generally don’t manage page-level routing or data fetching.

**Examples:**
- `ProductCard.tsx` — displays one product’s info in card format.
- `NavBar.tsx` — the site navigation bar used on multiple pages.
- `CartItem.tsx` — single item in the shopping cart.
- `ProductGrid.tsx` — grid view component used in `ProductsGridPage`.

---

## Why separate them? 🤔

### Clarity
- **Pages** represent “where” you are in the app (the route/view).
- **Components** represent “what” you see on the page.

### Reusability
- Components can be used in multiple pages or other components (e.g., a `ProductCard` might appear on home, search, or related products sections).
- Pages typically are unique views and rarely reused.

### Single Responsibility
- Pages manage layout, routing, and page-level logic.
- Components focus on UI and small chunks of functionality.

### Easier maintenance and testing
- Components can be developed and tested independently.
- Pages can focus on integration and orchestrating components.

---

## Example

```tsx
// ProductsPage.tsx (Page)
const ProductsPage = () => {
  // Fetch products, manage state, etc.
  return (
    <div>
      <h1>Our Products</h1>
      <ProductGrid products={products} />
    </div>
  );
};

// ProductGrid.tsx (Component)
const ProductGrid = ({ products }) => {
  return (
    <div className="grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
```

- **ProductsPage** is responsible for loading data and rendering the whole page.
- **ProductGrid** just displays products, reusable anywhere else.