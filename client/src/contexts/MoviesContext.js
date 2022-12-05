import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  movies: [],
  loadMoviesLoading: false,
  loadMoviesDone: false,
  loadMoviesError: null,
};
