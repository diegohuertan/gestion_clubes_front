import React from 'react';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import PageContainer from '../../components/container/PageContainer';

const Users = () => {
    return (
        <PageContainer title="Portal de Usuarios" description="Seleccione el portal al que desea ingresar">
        <div>
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            flexDirection="column"
            gap={2}
        >
            <Button variant="contained" color="primary" component={Link} to="/LoginSocio">
                Portal Socios
            </Button>
            <Button variant="contained" color="primary" component={Link} to="/LoginAdmin">
                Portal Administrador
            </Button>
        </Box>
        </div>
        </PageContainer>

    );
};

export default Users;