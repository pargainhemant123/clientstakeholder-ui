// src/components/WelcomePage.js
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const { user, token } = useAuth(); // Access the user data and token
  const navigate = useNavigate();

  // If no token or user data, redirect to login page
  if (!token) {
    navigate('/');
  }

  return (
    <div className="welcome-container">
      <h2>Welcome, {user?.firstName} {user?.lastName}!</h2>
      <div className="user-info">
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Salary:</strong> ${user?.salary}</p>
        <p><strong>Phone Number:</strong> {user?.phoneNumber}</p>
      </div>
      <button onClick={() => navigate('/')} className="logout-button">Logout</button>
    </div>
  );
};

export default WelcomePage;
