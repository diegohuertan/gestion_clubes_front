import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import "../../Styles/home.css"
import PageContainer from '../../components/container/PageContainer';

function Home() {
  return (
    <PageContainer title="Home" description="Página de inicio">
      <Container>
        <Box className="welcome-card">
          <Typography variant="h5">Kellun Hockey Patin Con Con</Typography>
          <Typography variant="body1">¡Bienvenido!</Typography>
        </Box>

        <Box className="vision-card">
          <Typography variant="h5">Visión</Typography>
          <Typography variant="body1">
            La visión y misión de un club de hockey patín como el Club Kellun Hockey Patín Concon se centra en el desarrollo deportivo de los jugadores, la promoción del deporte en la comunidad y la formación integral de sus miembros, tanto en el ámbito deportivo como en el personal y social.
          </Typography>
        </Box>

        <Box className="info-card">
          <Typography variant="h5">Datos de la organización</Typography>
          <Typography variant="body1">Dirección: 1404-1998,, Magallanes, Concón, Valparaíso</Typography>
          <Typography variant="body1">Teléfono: 983586070</Typography>
          <Typography variant="body1">Correo electrónico: directoriokellunhp@gmail.com</Typography>
        </Box>
      </Container>
    </PageContainer>
  );
}

export default Home;