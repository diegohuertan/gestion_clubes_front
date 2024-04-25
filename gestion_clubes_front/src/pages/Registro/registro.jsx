import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../Styles/login.css';
import PageContainer from '../../components/container/PageContainer';

function Registro({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [correo, setEmail] = useState('');
  const [contraseña, setPassword] = useState('');
  const [perfil, setProfile] = useState('');
  const isValidRegistration = correo !== '' && contraseña !== '' && perfil !== '';

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isValidRegistration) {
      try {
        // Send a POST request to the backend to register the credentials
        const response = await axios.post('/api/registro', {
          correo: correo,
          contraseña: contraseña,
          perfil: perfil,
        });

        // If the request is successful and the credentials are registered, set the isLoggedIn state to true
        if (response.data.success) {
          setIsLoggedIn(true);
        } else {
          console.log('Error registering credentials');
        }
      } catch (error) {
        console.error('Error making request:', error);
      }
    } else {
      console.log('Invalid registration credentials');
    }
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <PageContainer>
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Form className="custom-form p-4 rounded" onSubmit={handleSubmit}>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={4}>
            Email
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="email"
              placeholder="Email"
              value={correo}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={4}>
            Password
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="password"
              placeholder="Password"
              value={contraseña}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Col>
        </Form.Group>

        <fieldset>
          <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={4}>
              Perfil
            </Form.Label>
            <Col sm={8}>
              <Form.Check
                type="radio"
                label="Administrador"
                name="perfil"
                id="perfil1"
                value="administrador"
                onChange={(e) => setProfile(e.target.value)}
              />
              <Form.Check
                type="radio"
                label="Jugador"
                name="perfil"
                id="perfil2"
                value="jugador"
                onChange={(e) => setProfile(e.target.value)}
              />
              <Form.Check
                type="radio"
                label="Socio"
                name="perfil"
                id="perfil3"
                value="socio"
                onChange={(e) => setProfile(e.target.value)}
              />
            </Col>
          </Form.Group>
        </fieldset>

        <Form.Group as={Row} controlId="formHorizontalCheck">
          <Col sm={4} offset={4}>
            <Form.Check label="Remember me" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={4} offset={4}>
            <Button type="submit">Registrarse</Button>
          </Col>
          <Col sm={4}>
            <Button variant="secondary" onClick={handleLogin}>
              Iniciar sesión
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
    </PageContainer>
  );
}

export default Registro;