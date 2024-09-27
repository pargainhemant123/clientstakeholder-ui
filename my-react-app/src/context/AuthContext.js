// src/context/AuthContext.js
import React, { createContext, useContext, useState } from 'react'; // Make sure useContext is imported

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easier access to Auth context
export const useAuth = () => {
  return useContext(AuthContext); // No error here, since useContext is now imported
};

