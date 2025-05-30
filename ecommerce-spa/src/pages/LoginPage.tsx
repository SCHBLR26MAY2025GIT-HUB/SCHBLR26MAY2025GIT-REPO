// Iteration 1: Basic Login Page
// import React from 'react';

// const LoginPage: React.FC = () => {
//   return <h2>Login Page (Work in Progress)</h2>;
// };

// export default LoginPage;



// Iteration 2: Login Page with Authentication Context
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';

// const LoginPage: React.FC = () => {
//   const [username, setUsername] = useState('user');
//   const [password, setPassword] = useState('pass');
//   const [error, setError] = useState('');
//   const auth = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (auth.login(username, password)) {
//       navigate('/products');
//     } else {
//       setError('Invalid credentials');
//     }
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>
//             Username: <br />
//             <input
//               type="text"
//               value={username}
//               onChange={e => setUsername(e.target.value)}
//               required
//               autoFocus
//             />
//           </label>
//         </div>
//         <div>
//           <label>
//             Password: <br />
//             <input
//               type="password"
//               value={password}
//               onChange={e => setPassword(e.target.value)}
//               required
//             />
//           </label>
//         </div>
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         <button type="submit" style={{ marginTop: 10 }}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;

// Iteration 3: Styled Login Page with CSS Modules
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';  // Make sure this import exists
import styles from './LoginPage.module.css';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('user');
  const [password, setPassword] = useState('pass');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (auth.login(username, password)) {
      navigate('/products');
    } else {
      setErrorMessage('Invalid credentials');
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Login</h2>
      {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
      <form onSubmit={handleLogin}>
        <div className={styles.inputGroup}>
          <label htmlFor="username" className={styles.label}>
            Username
          </label>
          <input
            id="username"
            className={styles.input}
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            autoFocus
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            id="password"
            className={styles.input}
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className={styles.submitButton}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;


