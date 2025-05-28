import React from "react";
import { Product } from "./models";
// diff between let, var and const
// let and var are used to declare variables, but let has block scope while var has function scope.
// const is used to declare constants, which cannot be reassigned.

const products: Product[] = [
  { id: 1, name: "Sneakers", price: 89.99, onSale: true, tags: ["footwear", "sports"] },
  { id: 2, name: "Hat", price: 19.99, onSale: false }
];


// Products
// Sneakers - $89.99 (On Sale!)
// Hat - $19.99
  const App: React.FC = () => {
    return (
      <div>
        <h1>Products</h1>
        <ul>
          {products.map(p => (
            <li key={p.id}>
              {p.name} - ${p.price.toFixed(2)} {p.onSale && <span>(On Sale!)</span>}
            </li>
          ))}
        </ul>
      </div>
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