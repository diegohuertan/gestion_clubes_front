import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ButtonBase from '@mui/material/ButtonBase';

const serverUrl = 'http://localhost:3000/imagenes/jugadores/';


export default function RecipeReviewCard({jugador}) {

const handleCardClick = () => {
    // Aquí puedes manejar el evento de clic en la tarjeta
    console.log(`/jugadores/${jugador.rut_deportista}`);
};

const { name, image, designation, experience, ratings } = jugador;

  return (
    <Link to={`/jugadores/${jugador.rut_deportista}`}>
      
    <div className="card card-compact max-w-md shadow-xl border-2 border-darkbody rounded-s">
        <figure>
          <img
            className="w-96 h-96 object-cover hover:grayscale transition-all duration-300"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body text-gray-800 dark:text-white p-4 border-black">
          <h2 className="card-title font-poppins">{name}</h2>
          <p className="-mt-2 font-open-sans">{designation}</p>
          <p className="-mt-2 text-base font-open-sans">
            <span className="font-semibold">Experience:</span> {experience}{" "}
            years
          </p>
          <p className="-mt-2 text-base flex gap-2 items-center font-open-sans">
            <span className="font-semibold">Ratings:</span>{" "}
            
            {ratings}
          </p>
        </div>
      </div>
    </Link>
  );
}