import React, { createContext, useReducer, useContext } from 'react';
import axios from 'axios';

const KMDB_KEY = process.env.REACT_APP_KMDB_KEY;

const initialState = {
  moviesInfo: [],
  loadMoviesInfoLoading: false,
  loadMoviesInfoDone: false,
  loadMoviesInfoError: null,
};

function moviesInfoReducer(state, action) {
  switch (action.type) {
    case 'GET_MOVIES_INFO_LOADING':
      return {
        ...state,
        loadMoviesInfoLoading: true,
        loadMoviesInfoDone: false,
        loadMoviesInfoError: null,
      }
    case 'GET_MOVIES_INFO_SUCCESS':
      return {
        ...state,
        loadMoviesInfoLoading: false,
        loadMoviesInfoDone: true,
        loadMoviesInfoError: null,
        moviesInfo: action.data
      }
    case 'GET_MOVIES_INFO_FAILURE':
      return {
        ...state,
        loadMoviesInfoLoading: false,
        loadMoviesInfoDone: false,
        loadMoviesInfoError: action.error,
      }
    default:
      throw new Error(`Unhandle action type: ${action.type}`);
  };
};

const MoviesInfoStateContext = createContext(null);
const MoviesInfoDispatchContext = createContext(null);

export function MoviesInfoProvider({ children }) {
  const [state, dispatch] = useReducer(moviesInfoReducer, initialState);
  return (
    <MoviesInfoStateContext.Provider value={state}>
      <MoviesInfoDispatchContext.Provider value={dispatch}>
        {children}
      </MoviesInfoDispatchContext.Provider>
    </MoviesInfoStateContext.Provider>
  );
};

export function useMoviesInfoState() {
  const state = useContext(MoviesInfoStateContext);
  if (!state) {
    throw new Error('Cannot find MoivesInfoProvider');
  }
  return state;
};

export function useMoviesInfoDispatch() {
  const dispatch = useContext(MoviesInfoDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find MoivesInfoProvider');
  }
  return dispatch;
};

export async function getMoviesInfo(dispatch, data) {
  dispatch({ type: 'GET_MOVIES_INFO_LOADING' });
  const movieList = data;
  let moviesInfo = [];

  try {
    movieList.forEach(async movieCode => {
      const response = await axios.get(
        `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${KMDB_KEY}&detail=Y&codeNo=${movieCode}`
      );
      moviesInfo.push(response.data.Data[0].Result);
    });

    await dispatch({ type: 'GET_MOVIES_INFO_SUCCESS', data: moviesInfo });
  } catch (e) {
    dispatch({ type: 'GET_MOVIES_INFO_FAILURE', error: e});
  };
};
