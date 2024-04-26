import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageContainer from '../../components/container/PageContainer';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Grid, TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';



const serverUrl = 'http://localhost:3000';

function Deuda() {
  const { id } = useParams();
  const [idDeuda, setIdDeuda] = useState('');
  const [Estado, setEstado] = useState(0);
  const [Fecha_pago, setFecha_pago] = useState('');
  const [Costo_mensualidad, setCosto_mensualidad] = useState(0);
  const [rut_socio, setRut_socio] = useState('');
  const [Fecha_vencimiento, setFecha_vencimiento] = useState('');
  let navigate = useNavigate();

  const resetForm = () => {
    setIdDeuda('');
    setEstado(0);
    setFecha_pago('');
    setCosto_mensualidad(0);
    setRut_socio('');
    setFecha_vencimiento('');

    navigate('/deudas');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nuevaDeuda = {
      idDeuda,
      Estado,
      Fecha_pago,
      Costo_mensualidad,
      rut_socio,
      Fecha_vencimiento
    };

    console.log(nuevaDeuda);
    axios.post(`${serverUrl}/crearDeuda`, nuevaDeuda)
      .then((response) => {
        console.log('Deuda creada:', response.data);
        alert('Deuda creada con exito');
        resetForm();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

return (
    <PageContainer title="Vista Recetas" description="aaaaaaaaaaaaaaaaa" >
        <div className='receta-container'>
            <Grid container justifyContent="center">
                <Grid item xs={12} md={6}>
                    <Paper sx={{padding:2, marginBottom:2, marginTop:2, border: '1px solid black'}}>
                        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                            <TextField id="idDeuda" label="ID Deuda" type="number" variant="outlined" fullWidth margin="normal" value={idDeuda} onChange={(e) => setIdDeuda(e.target.value)} />
                            <TextField id="Estado" label="Estado" type="number" variant="outlined" fullWidth margin="normal" value={Estado} onChange={(e) => setEstado(e.target.value)} />
                            <TextField id="Fecha_pago" label="Fecha de Pago" type="date" variant="outlined" fullWidth margin="normal" InputLabelProps={{ shrink: true }} value={Fecha_pago} onChange={(e) => setFecha_pago(e.target.value)} />
                            <TextField id="Costo_mensualidad" label="Costo Mensualidad" type="number" variant="outlined" fullWidth margin="normal" value={Costo_mensualidad} onChange={(e) => setCosto_mensualidad(e.target.value)} />
                            <TextField id="rut_socio" label="RUT Socio" variant="outlined" fullWidth margin="normal" value={rut_socio} onChange={(e) => setRut_socio(e.target.value)} />
                            <TextField id="Fecha_vencimiento" label="Fecha de Vencimiento" type="date" variant="outlined" fullWidth margin="normal" InputLabelProps={{ shrink: true }} value={Fecha_vencimiento} onChange={(e) => setFecha_vencimiento(e.target.value)} />
                            <Button variant="contained" color="primary" type="submit">
                                Submit
                            </Button>
                        </form>
                    </Paper>
                </Grid>
            </Grid> 
        </div>
    </PageContainer>
);
}

export default Deuda;