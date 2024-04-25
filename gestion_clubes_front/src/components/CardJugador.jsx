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


  return (
    <Link to={`/jugadores/${jugador.rut_deportista}`}>
    <ButtonBase onClick={handleCardClick}>
    <Card sx={{ maxWidth: 400 }}>
      <CardHeader
        
        title={`${jugador.deportista_first_nombre} ${jugador.deportista_second_nombre} ${jugador.deportista_first_apellido} ${jugador.deportista_second_apellido}`}
      />
      <CardMedia
        component="img"
        height="194"
        image={`${serverUrl}${jugador.img}`}    
        alt={jugador.rut_deportista}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
           {jugador.deportista_first_apellido}
        </Typography>
      </CardContent>
    
    
       
      
     
    </Card>
    </ButtonBase>
    </Link>
  );
}