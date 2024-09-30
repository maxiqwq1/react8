import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext'; 

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useUser(); 

  useEffect(() => {
    document.title = "Login - Pizzería Mamma Mia"; 


  const onSubmitHandler = (event) => {
    event.preventDefault();

    // Validaciones básicas del formulario
    if (!email || !password) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    
    setError('');
    login(email); 
    alert('¡FELICIDADES! 😁 Inicio de sesión exitoso.');
    navigate('/'); 
  };

  return (
    <div className='login-container'>
      <Form onSubmit={onSubmitHandler}>
        <h1>Login</h1>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <Form.Group className="mb-3 formulario" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese su Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Group>
        <Form.Group className="mb-3 formulario" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingrese su contraseña"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Ingresar
        </Button>
      </Form>
    </div>
  );
}

export default LoginPage;
