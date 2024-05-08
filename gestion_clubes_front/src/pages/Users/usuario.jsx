import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageContainer from '../../components/container/PageContainer';
import Userinfo from './userinfo';

const serverUrl='http://localhost:3000';

// Define el objeto de usuario como una constante
const user = {
  "nombre": "John",
  "apellido": "Doe",
  "correo": "johndoe@example.com",
  "telefono": "(123) 456-7890",
  "direccion": "123 Main St, Anytown, USA 12345"
};

function Usuario() {
    const [userData, setUserData] = useState(user);
  
    useEffect(() => {
      var correoRecuperado=sessionStorage.getItem("correo");

      axios.get(`${serverUrl}/api/getbyCorreo?correo=${correoRecuperado}`)
        .then((response) => {
          setUserData(response.data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }, []);
  
    return (
      <PageContainer>
        <div className="page-header grid grid-cols-2 gap-4">
          <div className="flex flex-col justify-end">
            <div className="flex min-h-screen items-start justify-end">
              <div className="w-64 rounded-lg border-2 bg-transparent p-4 text-center shadow-lg dark:bg-white">
                <figure className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-black">
                  <img className="h-12 w-12 rounded-full" src="https://xsgames.co/randomusers/assets/avatars/male/46.jpg" alt="John Doe" />
                  <figcaption className="sr-only">John Doe, Web Developer</figcaption>
                </figure>
                <h2 className="mt-4 text-xl font-bold text-black dark:text-black">John Doe</h2>
                <p className="mb-4 text-black dark:text-black">Web Developer</p>
                <div className="flex items-center justify-center">
                  <a href="#" className="rounded-full bg-indigo-600 px-4 py-2 text-black hover:bg-indigo-700 dark:bg-indigo-400 dark:hover:text-black">Contact</a>
                  <a href="#" className="ml-4 rounded-full bg-gray-300 px-4 py-2 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600">Portfolio</a>
                </div>
              </div>
              
            </div>
            
          </div>
          <div className="card-container">
            <Userinfo user={userData} />
          </div>
        </div>
      </PageContainer>
    );
}
  
export default Usuario;