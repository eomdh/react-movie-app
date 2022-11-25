import React, { createContext, useReducer, useContext } from 'react';

const initialState = {
  movies: {
    loading: false,
    data: null,
    error: null,
  }
}