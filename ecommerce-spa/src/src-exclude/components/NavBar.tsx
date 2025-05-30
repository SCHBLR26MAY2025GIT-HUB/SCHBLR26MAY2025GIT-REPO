// Iteration 1: Basic Login Page
// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const NavBar: React.FC = () => (
//   <nav style={{ marginBottom: 20 }}>
//     <NavLink to="/products" style={{ marginRight: 15 }}>
//       Products
//     </NavLink>
//     <NavLink to="/cart" style={{ marginRight: 15 }}>
//       Cart
//     </NavLink>
//     <NavLink to="/login">Login</NavLink>
//   </nav>
// );

// export default NavBar;

// Iteration 2: Login Page with Authentication Context
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const NavBar: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate('/login');
  };

  return (
    <nav style={{ marginBottom: 20 }}>
      {auth.isLoggedIn ? (
        <>
          <NavLink to="/products" style={{ marginRight: 15 }}>
            Products
          </NavLink>
          <NavLink to="/cart" style={{ marginRight: 15 }}>
            Cart
          </NavLink>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
    </nav>
  );
};

export default NavBar;
