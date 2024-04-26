import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import "../../Styles/home.css"
import PageContainer from '../../components/container/PageContainer';
import { Link } from 'react-router-dom';


 const Portales =[
  {
      img:"https://conconaldia.cl/wp-content/uploads/2024/01/image_6483441-2-750x415.jpg",
      role:"/LoginSocio",
      name:"Portal Socios"
  },
  {
      img:"https://conconaldia.cl/wp-content/uploads/2024/01/image_6483441-2-750x415.jpg",
      role:"/LoginAdmin",
      name:"Portal Administradores"
  },
 
]

function Home() {
  
  return (
    
    <PageContainer title="Home" description="Página de inicio">
          <section id='home' className='bg-cover bg-fixed bg-left max-sm:bg-center max-lg:bg-center bg-[url("https://www.pixel4k.com/wp-content/uploads/2018/03/FC%20Barcelona%20Football%20club%20Team9628514215.jpg.webp")]'>
                      <div className='max-w-7xl mx-auto'>
              <div className='min-h-screen font-semibold flex justify-center items-start flex-col padding-x overflow-x-hidden'>
                <p className='text-[#f04e3c] relative before:absolute before:w-20 before:h-1 before:bg-[#f04e3c] before:top-[50%] before:left-0 pl-24 text-2xl before:translate-y-[-50%] max-sm:text-xl max-sm:before:w-14 max-sm:pl-20'>Con-Con</p>
                <div className='my-12 text-8xl max-lg:text-7xl text-white max-w-[60%] max-xl:max-w-[70%] max-lg:max-w-[80%] max-md:max-w-[100%] max-sm:text-3xl'>
                  <h1>CLUB DEPORTIVO KELLUN HOCKEY PATIN CON CON.</h1>
                </div>

                <button className='py-4 px-7 text-xl group relative text-white bg-[orangered] rounded-full'>
                  <div className='buttonDiv'></div>
                  <span className='buttonSpan '>INGRESAR</span>
                </button>
              </div>
              
            </div>
            
          </section>

          <section id='about' className=' w-screen '>
      <div className=' max-container flex justify-center items-center gap-24 padding-hero-y padding-x h-full max-xl:gap-7 max-lg:flex-col bg-darkbody p-4'>
        <div className='flex-1 w-full'>
          <div className='bg-[orangered] flex justify-end pt-10 pl-10 max-sm:pt-5 max-sm:pl-5'>
            <img src="https://www.pixel4k.com/wp-content/uploads/2018/03/FC%20Barcelona%20Football%20club%20Team9628514215.jpg.webp" alt="aboutImg" className='object-cover object-center max-lg:w-full ml-auto'/>
          </div>
        </div>

        <div className=' flex-1'>
          <p className='text-white text-[#f04e3c] relative before:absolute before:w-20 before:h-1 before:bg-[#f04e3c] before:top-[50%] before:left-0 pl-24 text-2xl before:translate-y-[-50%]'>Vision y Mision</p>
        
          <div className='text-white my-7 text-5xl leading-[60px] font-semibold text-black max-xl:text-4xl max-xl:my-4 max-lg:my-7 max-lg:text-5xl max-lg:leading-[60px] max-sm:text-3xl'>
            <h1 className='text-white'>Visión y Misión del Club Kellun Hockey Patín Concon</h1>
          </div>

          <p className='text-black font text-lg text-slate-800'>
            La visión y misión de un club de hockey patín como el Club Kellun Hockey Patín Concon se centra en el desarrollo deportivo de los jugadores, la promoción del deporte en la comunidad y la formación integral de sus miembros, tanto en el ámbito deportivo como en el personal y social.
          </p>

          <p className='text-white font text-lg text-slate-500 mt-5 mb-14  max-xl:mb-8'>
            La visión y misión de un club de hockey patín como el Club Kellun Hockey Patín Concon se centra en el desarrollo deportivo de los jugadores, la promoción del deporte en la comunidad y la formación integral de sus miembros, tanto en el ámbito deportivo como en el personal y social.
          </p>

          <button className=' py-4 px-9 text-xl group relative text-white bg-[orangered] rounded-sm'>
            <div className=' buttonDiv'></div>
            <span className='buttonSpan'>Unirse</span>
          </button>

        </div>
      </div>
    </section>
    <section className='w-full bg-gray-800'>
      <div className='rounded-full'>
        <div className='grid grid-cols-2  max-sm:grid-cols-1'>
          {Portales.map((val)=>(
            <div key={val.name} className='group relative overflow-hidden '>
              <img src={val.img} alt="Portales" className='object-cover w-full p-8 rounded-xl'/>
              <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300'>
                <Link to={val.role}>
                <button className='py-8 px-10 bg-darkbody text-2xl text-white rounded mx-auto'>{val.name}</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
         

      
    </PageContainer>
  );
}

export default Home;