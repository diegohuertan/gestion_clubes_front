import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../Styles/Jugadores.css';
import PageContainer from '../../components/container/PageContainer';
import RecipeReviewCard from '../../components/CardJugador';

function Jugadores() {
  const jugadores = [
    {
      rut_deportista: '12345678',
      name: 'Jugador 1',
      image: 'https://images.unsplash.com/photo-1579038773867-044c48829161?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      designation: 'Delantero',
      experience: 5,
      ratings: 4.5
    },
    {
      rut_deportista: '87654321',
      name: 'Jugador 2',
      image: 'https://images.unsplash.com/photo-1579038773867-044c48829161?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      designation: 'Mediocampista',
      experience: 3,
      ratings: 4.0
    },
    {
      rut_deportista: '23456789',
      name: 'Jugador 3',
      image: 'https://images.unsplash.com/photo-1579038773867-044c48829161?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      designation: 'Defensor',
      experience: 2,
      ratings: 3.5
    },
    {
      rut_deportista: '98765432',
      name: 'Jugador 4',
      image: 'https://images.unsplash.com/photo-1579038773867-044c48829161?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      designation: 'Portero',
      experience: 6,
      ratings: 4.8
    }
  ];
  const [busqueda, setBusqueda] = useState('');
  const [campo, setCampo] = useState('Nombre');
  const backendUrl = 'http://localhost:3000';
  



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
