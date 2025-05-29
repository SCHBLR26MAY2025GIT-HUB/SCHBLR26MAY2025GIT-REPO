import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<div>404: Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// Default export is used to export a single value from a module, which can be imported without using curly braces.
// Named exports are used to export multiple values from a module, which must be imported using curly braces.
// In this case, we are exporting the App component as the default export of this module.
// This allows other modules to import it without needing to know its name, making it easier to use in larger applications.
// The App component is a functional component that returns a simple JSX element.
// It is a common practice to use default exports for the main component of a module, as it simplifies the import process.
// The App component can be used in other parts of the application by importing it.
// The App component is the main component of the application.
// It is a functional component that returns a simple JSX element.

// Add a component with for named export
export const Thankyou: React.FC = () => {
  return (
    <div>
      <h1>Thank you!</h1>
    </div>
  );
};

// export { Thankyou };


