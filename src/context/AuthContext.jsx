import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // Handle case where "user" in localStorage might not be valid JSON or might not exist
  const getStoredUser = () => {
    try {
      const storedUser = localStorage.getItem('user');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error('Error parsing stored user:', error);
      return null; // Return null if parsing fails
    }
  };

  const [currUser, setCurrUser] = useState(getStoredUser);

  const updateUser = (data) => {
    setCurrUser(data);
  };

  useEffect(() => {
    if (currUser) {
      localStorage.setItem('user', JSON.stringify(currUser)); // Store as JSON string
    } else {
      localStorage.removeItem('user'); // Clear storage if user is null
    }
  }, [currUser]);

  return (
    <AuthContext.Provider value={{ currUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
