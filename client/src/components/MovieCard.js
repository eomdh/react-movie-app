import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material/';

function MovieCard(props) {
  const movieInfo = props.movieInfo[0];
  console.log(movieInfo.title);
  
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
            {movieInfo.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {movieInfo.genre}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;