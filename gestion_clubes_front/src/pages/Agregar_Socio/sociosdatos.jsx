import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import styled from '@emotion/styled';
import axios from 'axios';

const StyledForm = styled('form')({
  maxWidth: '400px',
  margin: 'auto',
  marginTop: '20px',
});

const StyledTextField = styled(TextField)({
  marginBottom: '15px', // Espaciado entre campos
});

const StyledButton = styled(Button)({
  marginTop: '20px',
});

const socioEstadosCiviles = [
  'Soltero',
  'Casado',
  'Viudo',
  'Prefiero no decirlo',
];

const Sociosdatos = () => {
  const [formData, setFormData] = useState({
    email: '',
    rut: '',
    telefono: '',
    nombre: '',
    categoria: '',
    fechaNacimiento: '',
    direccion: '',
    clubOrigen: '',
    estadoCivil: '',
    profesion: '', // Agregué el campo profesion
  });

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      email,
      rut,
      estadoCivil,
      fechaNacimiento,
      profesion, // Agregué el campo profesion
      observaciones,
      telefono,
      direccion,
      clubOrigen,
      nombre,
    } = formData;

    console.log({
      rut_socio: rut,
      email,
      estado_civil_socio: estadoCivil,
      fecha_de_ingreso_socio: new Date().toISOString().split('T')[0],
      profesion_socio: profesion,
      observaciones_socio: observaciones,
      telefono,
      direccion_comuna: direccion.split(',')[0],
      direccion_numero: direccion.split(',')[2],
      direccion_calle: direccion.split(',')[1],
      club_origen: clubOrigen,
      socio_first_nombre: nombre.split(' ')[0],
      socio_second_nombre: nombre.split(' ')[1] || '',
      socio_first_apellido: nombre.split(' ')[2] || '',
      socio_second_apellido: nombre.split(' ')[3] || '',
      fecha_nacimiento: fechaNacimiento,
    });

    try {
      const response = await axios.post('http://localhost:3000/api/crearSocio', {
        rut_socio: rut,
        email,
        estado_civil_socio: estadoCivil,
        fecha_de_ingreso_socio: new Date().toISOString().split('T')[0],
        profesion_socio: profesion,
        observaciones_socio: observaciones,
        telefono,
        direccion_comuna: direccion.split(',')[0],
        direccion_numero: direccion.split(',')[2],
        direccion_calle: direccion.split(',')[1],
        club_origen: clubOrigen,
        socio_first_nombre: nombre.split(' ')[0],
        socio_second_nombre: nombre.split(' ')[1] || '',
        socio_first_apellido: nombre.split(' ')[2] || '',
        socio_second_apellido: nombre.split(' ')[3] || '',
        fecha_nacimiento: fechaNacimiento,
      });

      console.log(response.data);

      if (response.status === 201) {
        console.log('Socio agregado exitosamente');
        // Puedes hacer algo aquí después de que la solicitud sea exitosa
      } else {
        console.error('Error en el servidor');
        // Puedes manejar errores aquí
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <TextField
            name="nombre"
            label="Nombre"
            required
            fullWidth
            value={formData.nombre}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <StyledTextField
            label="Email"
            required
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!isEmailValid(formData.email)}
            helperText={!isEmailValid(formData.email) ? 'Ingrese un correo electrónico válido' : ''}
          />
        </Grid>
        <Grid item>
          <StyledTextField
            label="Rut"
            required
            fullWidth
            name="rut"
            value={formData.rut}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <StyledTextField
            label="Estado Civil"
            name="estadoCivil"
            select
            required
            fullWidth
            value={formData.estadoCivil}
            onChange={handleChange}
          >
            {socioEstadosCiviles.map((estado) => (
              <MenuItem key={estado} value={estado}>
                {estado}
              </MenuItem>
            ))}
          </StyledTextField>
        </Grid>
        <Grid item>
          <StyledTextField label="Profesión" fullWidth name="profesion" value={formData.profesion} onChange={handleChange} />
        </Grid>
        <Grid item>
          <StyledTextField label="Teléfono" required fullWidth name="telefono" value={formData.telefono} onChange={handleChange} />
        </Grid>
        <Grid item>
          <StyledTextField
            label="Fecha de Nacimiento"
            type="date"
            InputLabelProps={{ shrink: true }}
            required
            fullWidth
            name="fechaNacimiento"
            value={formData.fechaNacimiento}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <StyledTextField
            label="Dirección"
            required
            fullWidth
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <StyledTextField
            label="Club de Origen"
            required
            fullWidth
            name="clubOrigen"
            value={formData.clubOrigen}
            onChange={handleChange}
          />
        </Grid>
      </Grid>

      <StyledButton type="submit" variant="contained" color="primary" fullWidth>
        Guardar
      </StyledButton>
    </StyledForm>
  );
};

export default Sociosdatos;
