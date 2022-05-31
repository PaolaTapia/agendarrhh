import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const TarjetaPersona = () => {
    const theme = useTheme();

    return (
      <Card sx={{ display: 'flex', margin: 3 }}>
          <CardMedia
          component="img"
          sx={{ width: 151 }}
          image="https://res.cloudinary.com/dt9pw5bcd/image/upload/v1654023157/Jorge_ngg8zi.png"
          alt="Live from space album cover"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              Jorge Albornos
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              DNI: 33906367
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Tecnología: React
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Area: Desarrollo Font End
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Tel: 3834400061
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Dirección: Prado 135
            </Typography>
          </CardContent>
        </Box>
        
      </Card>
    );
}

export default TarjetaPersona