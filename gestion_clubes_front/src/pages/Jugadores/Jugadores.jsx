import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../Styles/Jugadores.css';
import PageContainer from '../../components/container/PageContainer';
import RecipeReviewCard from '../../components/CardJugador';

function Jugadores() {
  const [jugadores, setJugadores] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [campo, setCampo] = useState('Nombre');
  const backendUrl = 'http://localhost:3000';



  useEffect(() => {
    // Realiza la solicitud GET a la API
    axios.get(`${backendUrl}/api/deportistas`)
      .then((response) => {
        // Actualiza el estado con los datos de la respuesta
        setJugadores(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <PageContainer>
    
  
  <div className='jugadores-container'>
        {jugadores.map((jugador) => (
          <RecipeReviewCard key={jugador.deportista_id} jugador={jugador} />
        ))}
  </div>    
    
    </PageContainer>
  );
}

export default Jugadores;
