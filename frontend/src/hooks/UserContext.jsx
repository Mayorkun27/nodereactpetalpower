import { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const UserContext = createContext();
const UserUpdateContext = createContext(); // Separate context for the update function

// Custom provider component
export const UserProvider = ({ children }) => {
  const [sessionData, setSessionData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setSessionData(parsedUser);
      } catch (err) {
        console.error("Error parsing user data from local storage", err);
      }
    }
    setLoading(false)
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <UserContext.Provider value={sessionData}>
      <UserUpdateContext.Provider value={setSessionData}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
};

// Custom hook to use the context
export const useUser = () => {
  return useContext(UserContext);
};

// Export useUserUpdate hooks
export const useUserUpdate = () => {
  return useContext(UserUpdateContext)
};