import React, { useState, useEffect } from 'react';
import UserInfo from '../../locales/VistaSocio/UserInfo';

function VistaDeSocios() {  // Cambiado a mayúscula inicial
    const [user, setUser] = useState(null);
    const [equipment, setEquipment] = useState(null);
    const [error, setError] = useState(null);  // Nuevo estado para manejar errores
  
    useEffect(() => {
      // Cargar datos de usuario
      fetch('/user.json')
        .then(response => {
          if (!response.ok) { throw new Error('Error al cargar los datos de usuario'); }
          return response.json();
        })
        .then(data => {
          // Aquí puedes agregar validaciones adicionales si es necesario
          setUser(data);
        })
        .catch(error => {
          console.error(error);
          setError(error.toString());  // Establecer error en el estado
        });
  
      // Cargar datos de equipamiento
      fetch('/equipment.json')
        .then(response => {
          if (!response.ok) { throw new Error('Error al cargar los datos de equipamiento'); }
          return response.json();
        })
        .then(data => {
          // Aquí puedes agregar validaciones adicionales si es necesario
          setEquipment(data);
        })
        .catch(error => {
          console.error(error);
          setError(error.toString());  // Establecer error en el estado
        });
    }, []);
  
    return ( 
        <>
            {error && <p>{error}</p>}  {/* Mostrar error en la UI si existe */}
            {user && equipment ? <UserInfo user={user} equipment={equipment} /> : <p>Cargando...</p>}
        </>
    );
}

export default VistaDeSocios;
