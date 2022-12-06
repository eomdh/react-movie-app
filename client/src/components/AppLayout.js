import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import MovieCard from './MovieCard';
import { useMoviesInfoState, useMoviesInfoDispatch, getMoviesInfo } from '../contexts/MoviesContext'

function AppLayout(props) {
  const state = useMoviesInfoState();
  const dispatch = useMoviesInfoDispatch();
  const movieList = props.movieList;
  const movies = state.moviesInfo;
  const movie = [];

  useEffect(() => {
    getMoviesInfo(dispatch, movieList);
  }, [dispatch, movieList]);

  movies.map((item) => {
    return (
      movie.push(item)
    )
  });

  console.log(movie);

  return (
    <>
      <Grid container spacing={1}>
        {movie && movie.map((movie) => {
          return (
            <Grid item xs={6} md={3} key={movie.movieSeq}>
              <MovieCard
                movieInfo={movie}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default AppLayout;
