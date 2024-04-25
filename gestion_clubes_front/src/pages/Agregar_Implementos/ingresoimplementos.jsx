import React, { useState } from 'react';
import PageContainer from '../../components/container/PageContainer';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Container } from '@mui/material';
import styled from '@emotion/styled';
function IngresoImplementos() {

  const StyledContainer = styled(Container)({
    textAlign: 'center',
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  });
  
  const StyledFormControl = styled(FormControl)({
    margin: '8px',
    width: '50%', // Establecer el ancho al 100%
  });

  const [formData, setFormData] = useState({
    tipo: '',
    fechaCompra: '',
    estado: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    // Aquí puedes agregar lógica para enviar los datos a través de una solicitud HTTP
    // Recoge los valores de los campos
    const { tipo, fechaCompra, estado } = formData;

    // Aquí puedes realizar la lógica adicional, como la validación de datos

    // Ejemplo de cómo imprimir los datos en la consola
    console.log('Tipo:', tipo);
    console.log('Fecha de compra:', fechaCompra);
    console.log('Estado:', estado);
  };

  return (
    <PageContainer title="Ingreso de implementos" description="Página de ingreso de implementos"> 
      <StyledContainer>
        <h2>Ingreso de Implementos</h2>

        <StyledFormControl>
          <InputLabel>Tipo</InputLabel>
          <Select
            value={formData.tipo}
            onChange={handleChange}
            name="tipo"
          >
            <MenuItem value="casco">Casco</MenuItem>
            <MenuItem value="pechera">Pechera</MenuItem>
            <MenuItem value="Guante">Guante</MenuItem>
            <MenuItem value="Codera">Codera</MenuItem>
            <MenuItem value="Pantalon">Pantalon</MenuItem>
            <MenuItem value="Rodillera">Rodillera</MenuItem>
            <MenuItem value="Collarin">Conllarin</MenuItem>
            <MenuItem value="Espinillera">Espinillera</MenuItem>
            <MenuItem value="palo">Stick</MenuItem>
            <MenuItem value="patines">Patines</MenuItem>
          </Select>
        </StyledFormControl>

        <StyledFormControl>
          <TextField
            id="fechaCompra"
            label="Fecha de compra"
            type="date"
            value={formData.fechaCompra}
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </StyledFormControl>

        <StyledFormControl>
          <InputLabel>Estado</InputLabel>
          <Select
            value={formData.estado}
            onChange={handleChange}
            name="estado"
          >
            <MenuItem value="nuevo">Nuevo</MenuItem>
            <MenuItem value="usado">Usado</MenuItem>
          </Select>
        </StyledFormControl>

        <StyledFormControl>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Enviar
          </Button>
        </StyledFormControl>
      </StyledContainer>
    </PageContainer>
  );
}

export default IngresoImplementos;