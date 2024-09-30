import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'; 

// Página de Registro
function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Register - Pizzería Mamma Mia"; // Cambia el título de la página
  }, []);

  // Maneja el submit del formulario
  function onSubmitHandler(event) {
    event.preventDefault();

    // Validaciones de campos
    if (!email || !password || !confirmPassword) {
      setError('Todos los campos son obligatorios.');
      setSuccess('');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      setSuccess('');
      return;
    }

    if (password !== confirmPassword) {
      setError('La contraseña y la confirmación deben ser iguales.');
      setSuccess('');
      return;
    }

    // Si pasa las validaciones, limpia el formulario y redirige al login
    setError('');
    setSuccess('Registro exitoso.');
    setEmail('');
    setPassword('');
    setConfirmPassword('');

    alert('Registro exitoso.');
    alert('Ahora, ingrese sus datos en Login para iniciar sesión.');

    setTimeout(() => {
      navigate('/login');
    }, 1000); 
  }

  return (
    <div className='register-container'>
      <Form onSubmit={onSubmitHandler}>
        <h1>Register</h1>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {success && <div style={{ color: 'green' }}>{success}</div>}
        <Form.Group className="mb-3 formulario" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Registre un Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Group>
        <Form.Group className="mb-3 formulario" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Registre su nueva contraseña"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>
        <Form.Group className="mb-3 formulario" controlId="formBasicConfirmPassword">
          <Form.Label>Confirmar contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Repita su nueva contraseña"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Registrar
        </Button>
      </Form>
    </div>
  );
}

export default RegisterPage;