import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext'; 

// Página de perfil del usuario
const Profile = () => {
  const navigate = useNavigate();
  const { email, logout } = useUser(); // Obtiene el email y logout desde el contexto

  // Función para cerrar sesión
  const handleLogout = () => {
    logout();
    navigate('/'); // Redirige al home después de cerrar sesión
  };

  useEffect(() => {
    document.title = "Profile - Pizzería Mamma Mia";
  }, []);

  return (
    <div className='profile-container'>
      <h2>Perfil del Usuario</h2>
      <p>Email: {email}</p> {/* Muestra el email del usuario autenticado */}
      <button className='btn btn-danger' onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};

export default Profile;