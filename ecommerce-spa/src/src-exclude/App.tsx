// ORIGINAL CODE
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//ITERATION 1: Basic Product List
// import React from 'react';
// import { Product } from './models';

// const products: Product[] = [
//   { id: 1, name: "Sneakers", price: 89.99, onSale: true, tags: ["footwear", "sports"] },
//   { id: 2, name: "Hat", price: 19.99, onSale: false }
// ];

// const App: React.FC = () => {
//   return (
//     <div>
//       <h1>Products</h1>
//       <ul>
//         {products.map(p => (
//           <li key={p.id}>
//             {p.name} - ${p.price.toFixed(2)} {p.onSale && <span>(On Sale!)</span>}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;


// ITERATION 2: Product Card Component
// import React from 'react';
// import { Product } from './models';
// import ProductCard from './components/ProductCard';

// const products: Product[] = [
//   { id: 1, name: 'Sneakers', price: 89.99, onSale: true, tags: ['footwear', 'sports'] },
//   { id: 2, name: 'Hat', price: 19.99, onSale: false },
// ];

// const App: React.FC = () => {
//   const handleAddToCart = (product: Product) => {
//     alert(`Added ${product.name} to cart!`);
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>Products</h1>
//       <div style={{ display: 'flex', gap: 20 }}>
//         {products.map(product => (
//           <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

// ITERATION 3: Routing and Pages
// import React from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import NavBar from './components/NavBar';
// import ProductsPage from './pages/ProductsPage';
// import CartPage from './pages/CartPage';
// import LoginPage from './pages/LoginPage';

// const App: React.FC = () => {
//   return (
//     <BrowserRouter>
//       <NavBar />
//       <Routes>
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/products" element={<ProductsPage />} />
//         <Route path="/cart" element={<CartPage />} />
//         <Route path="/" element={<Navigate to="/login" replace />} />
//         <Route path="*" element={<div>404: Page Not Found</div>} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

// ITERATION 4: Authentication Context and Protected Routes
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <ProductsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<div>404: Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
