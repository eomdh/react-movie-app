import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material/';

function MovieCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image="http://file.koreafilm.or.kr/thm/02/00/05/18/tn_DPK014596.jpg"
          alt="title"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Title
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Subtitle
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;