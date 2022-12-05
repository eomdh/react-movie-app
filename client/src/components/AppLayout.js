import React, { useCallback, useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import MovieCard from './MovieCard';
import { useMoviesInfoState, useMoviesInfoDispatch, getMoviesInfo } from '../contexts/MoviesContext'

function AppLayout(movieList) {
  const state = useMoviesInfoState();
  const dispatch = useMoviesInfoDispatch();

  console.log(movieList.movieList);

  useEffect(() => {
    getMoviesInfo(dispatch, movieList.movieList);
  }, [movieList]);

  return (
    <>
      <Grid container spacing={1}>
        {/* {.map((item) => {
          return (
            <Grid item xs={6} md={3}>
              <MovieCard />
            </Grid>
          );
        })} */}
      </Grid>
    </>
  );
};

export default AppLayout;
