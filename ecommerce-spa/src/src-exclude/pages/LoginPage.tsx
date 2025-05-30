// Iteration 1: Basic Login Page
// import React from 'react';

// const LoginPage: React.FC = () => {
//   return <h2>Login Page (Work in Progress)</h2>;
// };

// export default LoginPage;



// Iteration 2: Login Page with Authentication Context
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('user');
  const [password, setPassword] = useState('pass');
  const [error, setError] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (auth.login(username, password)) {
      navigate('/products');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username: <br />
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
              autoFocus
            />
          </label>
        </div>
        <div>
          <label>
            Password: <br />
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" style={{ marginTop: 10 }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
