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
  marginBottom: '15px',
});

const categorias = [
  'Sub 10',
  'Sub 13',
  'Sub 15',
  'Sub 17',
  'Sub 18',
  'Sub 19',
  'Sub 20',
  'Sub 21',
  'Sub 22',
  'Sub 23',
  'Adulto',
];

const JugadoresDatos = () => {
  const [formData, setFormData] = useState({
    email: '',
    rut: '',
    telefono: '',
    nombre: '',
    categoria: '',
    fechaNacimiento: '',
    direccion: '',
    clubOrigen: '',
    foto: null,
    rut_socio: '',
  });

  const handleChange = (event) => {
    console.log(event.target.value);
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, foto: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crea un objeto FormData y agrega cada campo y archivo
    const formDataToSend = new FormData();

    
    // Agrega campos de texto
    formDataToSend.append('email', formData.email);
    formDataToSend.append('rut_deportista', formData.rut);
    formDataToSend.append('telefono', formData.telefono);
    formDataToSend.append('direccion_comuna', formData.direccion.split(',')[0]);
    formDataToSend.append('direccion_numero', formData.direccion.split(',')[2]);
    formDataToSend.append('direccion_calle', formData.direccion.split(',')[1]);
    formDataToSend.append('club_origen', formData.clubOrigen);
    formDataToSend.append('deportista_first_nombre', formData.nombre.split(',')[0]);
    formDataToSend.append('deportista_second_nombre', formData.nombre.split(' ')[1] || '');
    formDataToSend.append('deportista_first_apellido', formData.nombre.split(' ')[2] || '');
    formDataToSend.append('deportista_second_apellido', formData.nombre.split(' ')[3] || '');
    formDataToSend.append('img', ''); // Puedes ajustar esto según tus necesidades
    formDataToSend.append('categoria', formData.categoria);
    formDataToSend.append('fecha_nacimiento', formData.fechaNacimiento);
    formDataToSend.append('rut_socio',formData.rut_socio );

    // Agrega el archivo de imagen
    formDataToSend.append('foto', formData.foto);

    console.log()

    try {
      const response = await axios.post('http://localhost:3000/api/crearDeportista', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data', // Importante para el manejo de archivos en el servidor
        },
      });

      console.log(formDataToSend)
      if (response.status === 201) {
        console.log('Deportista agregado exitosamente');
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
            name="email"
            label="Email"
            required
            fullWidth
            value={formData.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <TextField
            name="rut"
            label="Rut"
            required
            fullWidth
            value={formData.rut}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <TextField
            name="telefono"
            label="Teléfono"
            required
            fullWidth
            value={formData.telefono}
            onChange={handleChange}
          />
        </Grid>
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
            name="categoria"
            label="Categoría"
            select
            required
            fullWidth
            value={formData.categoria}
            onChange={handleChange}
          >
            {categorias.map((estado) => (
              <MenuItem key={estado} value={estado}>
                {estado}
              </MenuItem>
            ))}
          </StyledTextField>
        </Grid>
        <Grid item>
          <TextField
            name="fechaNacimiento"
            label="Fecha de Nacimiento"
            type="date"
            InputLabelProps={{ shrink: true }}
            required
            fullWidth
            value={formData.fechaNacimiento}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <TextField
            name="direccion"
            label="Dirección"
            required
            fullWidth
            value={formData.direccion}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <TextField
            name="clubOrigen"
            label="Club de Origen"
            required
            fullWidth
            value={formData.clubOrigen}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <TextField
            name="rut_socio"
            label="Rut Socio a Cargo"
            required
            fullWidth
            value={formData.rut_socio}
            onChange={handleChange}
          />
        </Grid>
        <Grid item>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </Grid>
      </Grid>

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Guardar
      </Button>
    </StyledForm>
  );
};

export default JugadoresDatos;
