import React, { useState } from 'react';
import './login.css';

const Login = ({ setShowLogin, setUsername }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/login', { // Ensure this is the correct port for your backend
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

    if (!response.ok) {
      setError(data.message || 'Failed to login');
      return;
    }

    localStorage.setItem('token', data.token);

    alert('Login successful!');
    setUsername(data.username); // Update username after successful login
    setShowLogin(false);        // Close the login popup
  } catch (error) {
    console.error('Login error:', error);
    setError('An error occurred. Please try again.');
  }
  };

  return (
    <div className="login-popup">
      <div className="login-content">
        <span className="close" onClick={() => setShowLogin(false)}>&times;</span>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
