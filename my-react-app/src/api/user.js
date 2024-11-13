// src/api/user.js
const API_URL = 'http://localhost:4000/api/auth'; // Adjust as necessary

export const loginUser = async (credentials) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  console.log('Response from login API:', response); // Log the response

  if (!response.ok) {
    throw new Error('Failed to login');
  }
  
  const data = await response.json();
  console.log('Response Data:', data); // Log the actual data returned
  return data;
};

export const registerUser = async (userData) => {
  const response = await fetch(`${API_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    throw new Error('Failed to register');
  }
  return response.json();
};
