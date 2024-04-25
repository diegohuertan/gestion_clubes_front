import React, { useState, useEffect } from 'react';
import RecipeReviewCard from '../../components/CardJugador';
import axios from 'axios';
import '../../Styles/socios.css';
import PageContainer from '../../components/container/PageContainer';
import CardSocio from '../../components/CardSocio';

function Socios() {
  const [socios, setSocios] = useState([]);
  const backendUrl = 'http://localhost:3000';


  useEffect(() => {
    // Realiza la solicitud GET a la API
    axios.get(`${backendUrl}/api/socios`)
      .then((response) => {
        // Actualiza el estado con los datos de la respuesta
        setSocios(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <PageContainer>
    <div className='socios-container'>
  
        {socios.map((socio) => (
          <CardSocio key={socio.rut_socio} socio={socio} />
        ))}
      
      </div>
    </PageContainer>
  );
}

export default Socios;