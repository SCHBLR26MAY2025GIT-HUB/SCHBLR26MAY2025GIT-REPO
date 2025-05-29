// import React from "react";
// import { NavLink } from "react-router-dom";
// const NavBar: React.FC = () => (
//     <nav>
//         <NavLink to="/products">Products</NavLink>
//         <NavLink to="/cart">Cart</NavLink>
//         <NavLink to="login">Login</NavLink>
//     </nav>);
    

// // const NavBar: React.FC = () =>  {
// //     return (
// //         <nav>
// //             <NavLink to="/products">Products</NavLink>
// //             <NavLink to="/cart">Cart</NavLink>
// //             <NavLink to="login">Login</NavLink>
// //         </nav>
// //     )
// // };


// export default NavBar;

// React is imported to use JSX and React features such as components and hooks.
import React from 'react';
//  The NavLink component is used to create links that navigate to different routes in the application.
import { NavLink } from 'react-router-dom';

const NavBar: React.FC = () => (
  <nav>
    <NavLink to="/products" >
      Products
    </NavLink>
    <NavLink to="/cart" >
      Cart
    </NavLink>
    <NavLink to="/login">Login</NavLink>
  </nav>
);

export default NavBar;