// src/components/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import LoginForm from './LoginForm';
import UserForm from './UserForm';
import WelcomePage from './WelcomePage'; // Import the Welcome Page

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<UserForm />} />
        <Route path="/welcome" element={<WelcomePage />} /> {/* Add Welcome page route */}
      </Routes>
    </div>
  );
};

export default App;
