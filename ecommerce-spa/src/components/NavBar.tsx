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
// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';

// const NavBar: React.FC = () => {
//   const auth = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     auth.logout();
//     navigate('/login');
//   };

//   return (
//     <nav style={{ marginBottom: 20 }}>
//       {auth.isLoggedIn ? (
//         <>
//           <NavLink to="/products" style={{ marginRight: 15 }}>
//             Products
//           </NavLink>
//           <NavLink to="/cart" style={{ marginRight: 15 }}>
//             Cart
//           </NavLink>
//           <button onClick={handleLogout}>Logout</button>
//         </>
//       ) : (
//         <NavLink to="/login">Login</NavLink>
//       )}
//     </nav>
//   );
// };

// export default NavBar;
// Iteration 3: Styled NavBar with CSS Modules
// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import styles from './NavBar.module.css';

// const NavBar: React.FC = () => {
//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.logo}>MyStore</div>
//       <div className={styles.navLinks}>
//         <NavLink
//           to="/products"
//           className={({ isActive }) =>
//             isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
//           }
//         >
//           Products
//         </NavLink>
//         <NavLink
//           to="/cart"
//           className={({ isActive }) =>
//             isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
//           }
//         >
//           Cart
//         </NavLink>
//         <NavLink
//           to="/login"
//           className={({ isActive }) =>
//             isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
//           }
//         >
//           Login
//         </NavLink>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

// // Iteration 4: Complete NavBar with Logout Functionality
// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';
// import styles from './NavBar.module.css';

// const NavBar: React.FC = () => {
//   const auth = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     auth.logout();
//     navigate('/login');
//   };

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.logo}>MyStore</div>
//       <div className={styles.navLinks}>
//         <NavLink to="/products" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink}>
//           Products
//         </NavLink>
//         <NavLink to="/cart" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink}>
//           Cart
//         </NavLink>
//         {auth.isLoggedIn ? (
//           <button className={styles.logoutButton} onClick={handleLogout}>
//             Logout
//           </button>
//         ) : (
//           <NavLink to="/login" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink}>
//             Login
//           </NavLink>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default NavBar;


// Iteration 5: Final NavBar with Icons
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import styles from './NavBar.module.css';

import { FaBoxes, FaShoppingCart, FaSignOutAlt, FaSignInAlt } from 'react-icons/fa';

const NavBar: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate('/login');
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MyStore</div>
      <div className={styles.navLinks}>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
          }
        >
          <FaBoxes style={{ marginRight: 6 }} />
          Products
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
          }
        >
          <FaShoppingCart style={{ marginRight: 6 }} />
          Cart
        </NavLink>
        {auth.isLoggedIn ? (
          <button className={styles.logoutButton} onClick={handleLogout}>
            <FaSignOutAlt style={{ marginRight: 6 }} />
            Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
            }
          >
            <FaSignInAlt style={{ marginRight: 6 }} />
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default NavBar;


