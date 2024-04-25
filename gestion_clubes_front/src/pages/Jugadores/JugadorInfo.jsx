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



const serverUrl = 'http://localhost:3000';

function RecetaInfo() {
  const [deportistaInfo, setJugadorInfo] = useState([]);
  const { id } = useParams();

useEffect(() => {
  const body = {rut_deportista: id}
  axios.post(`${serverUrl}/api/filtrardeportistaRut`, body)
  
  .then((response) => {
    // Actualiza el estado con los datos de la respuesta
    setJugadorInfo(response.data);
    console.log(response.data);
    
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}, []);  

  return (
    
    <PageContainer title="Vista Recetas" description="aaaaaaaaaaaaaaaaa" >

      <div className='receta-container'>
      <Link to={`/jugadores`}>
      <Button variant="contained" color="primary"  sx={{backgroundColor: 'grey'}}>
        <ArrowBackIosNewIcon/> Volver
      </Button>
      </Link>
      <Grid  container spacing={2} >  
      <Grid item xs={12} md={6} >
      <div className='recetaInfo'>
        {deportistaInfo.map((jugador) => (
          <Box sx={{ width: '100%', maxWidth: 700 , marginLeft: 10}}>
            
            
            <img src={jugador.img} alt={jugador.rut_deportista} width="520" height="520" style={{border: '2px solid black', borderRadius: '5%'}} />
            
            
          
          
                
          </Box>


        ))}
      </div>
      </Grid>

      <Grid item xs={12} md={6} >
      <div className='InstruccionesInfo'>

      

          {deportistaInfo.map((socio) => (
  <Box>
    <Paper sx={{margin:1, padding:1}}>
      <Typography variant="h3" gutterBottom>
        {`${socio.deportista_first_nombre} ${socio.deportista_second_nombre} ${socio.deportista_first_apellido} ${socio.deportista_second_apellido}`}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Rut Deportista : {socio.rut_deportista}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Email : {socio.email}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Teléfono : {socio.telefono}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Dirección :  {`${socio.direccion_comuna} , ${socio.direccion_calle} , ${socio.direccion_numero}`}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Club De Origen :  {socio.club_origen}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Categoría : {socio.categoria}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Fecha de nacimiento : {new Date(socio.fecha_nacimiento).toLocaleDateString()}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Rut Socio : {socio.rut_socio}
      </Typography>
    </Paper>
  </Box>
))}

       
      

      </div>
      </Grid>
     
      </Grid>
      </div>
    </PageContainer>
  );
}

export default RecetaInfo;