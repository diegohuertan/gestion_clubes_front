import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageContainer from '../../components/container/PageContainer';


const serverUrl='http://localhost:3000';

function Usuario() {
    const [userData, setUserData] = useState([]);
  
    useEffect(() => {
     
      // Realiza la solicitud GET a la API
      var correoRecuperado=sessionStorage.getItem("correo");

      axios.get(`${serverUrl}/api/getbyCorreo?correo=${correoRecuperado}`)
        .then((response) => {
          // Actualiza el estado con los datos de la respuesta
          setUserData(response.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }, []);
  
    return (
      <PageContainer>
      <div className="card-container">
       
        
      </div>
      </PageContainer>
    );
  }
  
  export default Usuario;