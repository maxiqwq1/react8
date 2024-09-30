import React, { createContext, useContext, useState, useEffect } from 'react';

// Este es el contexto para manejar la autenticación de usuario
const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  // Se guarda el token de autenticación y el email del usuario
  const [token, setToken] = useState(() => {
    const savedToken = localStorage.getItem('token');
    return savedToken ? JSON.parse(savedToken) : true; // Dejar true para que por defecto sea logueado
  });

  const [email, setEmail] = useState(() => {
    const savedEmail = localStorage.getItem('email');
    return savedEmail ? JSON.parse(savedEmail) : ''; // Dejar vacío si no hay un email guardado
  });

  useEffect(() => {
    // Guarda los valores en localStorage cada vez que cambian
    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('email', JSON.stringify(email));
  }, [token, email]);

  // Función de login
  const login = (userEmail) => {
    setToken(true);
    setEmail(userEmail); // Guarda el email del usuario
  };

  // Función de logout
  const logout = () => {
    setToken(false);
    setEmail(''); // Limpia el email cuando se cierra sesión
    localStorage.removeItem('token'); 
    localStorage.removeItem('email');
  };

  const value = {
    token,
    email,
    login,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
