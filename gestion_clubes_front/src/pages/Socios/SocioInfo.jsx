import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageContainer from '../../components/container/PageContainer';
import { useParams } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import RecipeReviewCard from '../../components/CardJugador';



const serverUrl = 'http://localhost:3000';

function RecetaInfo() {
  const [SocioInfo, setSocioInfo] = useState([]);
  const { id } = useParams();
  const [DeudaInfo, setDeudaInfo] = useState([]);
  const [Deportista, setDeportista] = useState([]);


useEffect(() => {
  const body = {rut_socio: id}
  axios.post(`${serverUrl}/api/filtrarSocioRut`, body)
  
  .then((response) => {
    // Actualiza el estado con los datos de la respuesta
    setSocioInfo(response.data);
    
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}, []);  

useEffect(() => {
  const body = {rut_socio: id}
  axios.post(`${serverUrl}/api/filtrardeportistaRutSocio`, body)
  
  .then((response) => {
    // Actualiza el estado con los datos de la respuesta
    setDeportista(response.data);
    
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}, []);  

useEffect(() => {
  const body = {rut_socio: id}
  axios.post(`${serverUrl}/api/filtrarDeudaRut`, body)
  
  .then((response) => {
    // Actualiza el estado con los datos de la respuesta
    setDeudaInfo(response.data);
    console.log(response.data);
    
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}, []);  




  return (
    
    <PageContainer title="Vista Recetas" description="aaaaaaaaaaaaaaaaa" >

      <div className='receta-container'>
      <Link to={`/socios`}>
      <Button variant="contained" color="primary"  sx={{backgroundColor: 'grey'}}>
        <ArrowBackIosNewIcon/> Volver
      </Button>
      </Link>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          {SocioInfo.map((socio) => (
            <Box>
   <Paper sx={{margin:1, padding:1}}>
   <Typography variant="h3" gutterBottom>
            
            {`${socio.socio_first_nombre} ${socio.socio_second_nombre} ${socio.socio_first_apellido} ${socio.socio_second_apellido}`}
 
               
             </Typography>
 
             <Typography variant="h6" gutterBottom>
                Rut Socio : {socio.rut_socio}
             </Typography>
             <Typography variant="h6" gutterBottom>
                 Direccion :  {`${socio.direccion_comuna} , ${socio.direccion_calle} , ${socio.direccion_numero}`}
             </Typography>
 
             <Typography variant="h6" gutterBottom>
                 Club De Origen :  {socio.club_origen}
             </Typography>
             <Typography variant="h6" gutterBottom>
                 Email : {socio.email}
             </Typography>
             <Typography variant="h6" gutterBottom>
                 Fecha de nacimiento : {socio.fecha_nacimiento}
             </Typography>
 
             <Typography variant="h6" gutterBottom>
                 Fecha de Ingreso : {socio.fecha_de_ingreso_socio}
             </Typography>
             
             <Typography variant="h6" gutterBottom>
                 Estado Civil : {socio.estado_civil_socio}
             </Typography>
 
             <Typography variant="h6" gutterBottom>
                 Observaciones : {socio.observaciones_socio}
             </Typography>
             </Paper>
                         </Box>
          ))}
        </Grid>
        <Grid item xs={12} md={5.7} sx={{margin:1}}>
          <Paper sx={{margin:1, padding:1}}>
          <Typography variant="h3" gutterBottom>
            Deudas
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Deuda ID</TableCell>
                  <TableCell align="right">Monto</TableCell>
                  <TableCell align="right">Fecha</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {DeudaInfo.map((deuda) => (
                  <TableRow key={deuda.idDeuda}>
                    <TableCell component="th" scope="row">
                      {deuda.idDeuda}
                    </TableCell>
                    <TableCell align="right">{deuda.Costo_mensualidad}</TableCell>
                    <TableCell align="right">{deuda.Fecha_vencimiento}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </Paper>
          <Paper sx={{margin:1, padding:1}}>
          <Typography variant="h3" gutterBottom >
            Deportista
            <div className='jugadores-container' >
        {Deportista.map((jugador) => (
          <RecipeReviewCard key={Deportista.deportista_id} jugador={jugador} />
        ))}
  </div>    
          </Typography>
          </Paper>
        </Grid>
      </Grid>
      </div>
    </PageContainer>
  );
}

export default RecetaInfo;