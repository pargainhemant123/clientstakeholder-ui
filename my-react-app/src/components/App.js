// src/components/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom'; 
import LoginForm from './LoginForm';
import UserForm from './UserForm';

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<UserForm />} />
      </Routes>
    </div>
  );
};

export default App;
