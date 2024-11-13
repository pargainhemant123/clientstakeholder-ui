// src/components/LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { loginUser } from '../api/user';

const LoginForm = () => {
  const navigate = useNavigate();
  const { setToken, setUser } = useAuth(); // Use context to set token and user
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });

      console.log('Login Response :', response); // Check the response here

      // Check if we are getting the expected response (token & user)
      if (response.token && response.client) {
        console.log('m here ok')
        setToken(response.token);  // Save token in context
        setUser(response.client);    // Save user data in context
        navigate('/welcome');      // Redirect to Welcome page
      } else {
        setError('Invalid credentials or unexpected response format');
      }
    } catch (error) {
      console.error('Login failed:', error); // Log the error if API fails
      setError('Invalid credentials');
    }
  };

  return (
    <div>
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
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <button onClick={() => navigate('/register')}>Register</button></p>
    </div>
  );
};

export default LoginForm;
