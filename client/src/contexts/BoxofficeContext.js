import React, { createContext, useReducer, useContext } from 'react';
import axios from 'axios';

const KOBIS_KEY = process.env.REACT_APP_KOBIS_KEY;

const initialState = {
  boxoffice: {
    loading: false,
    data: null,
    error: null,
  }
};

const loading = {
  loading: true,
  data: null,
  error: null,
};

const success = data => ({
  loading: false, 
  data,
  error: null,
});

const failure = error => ({
  loading: true,
  data: null,
  error: error,
});

function boxofficeReducer(state, action) {
  switch (action.type) {
    case 'GET_BOXOFFICE_LOADING':
      return {
        ...state,
        boxoffice: loading
      };
    case 'GET_BOXOFFICE_SUCCESS':
      return {
        ...state,
        boxoffice: success(action.data)
      };
    case 'GET_BOXOFFICE_FAILURE':
      return {
        ...state,
        boxoffice: failure(action.error)
      };
    default:
      throw new Error(`Unhandle action type: ${action.type}`);
  };
};

const BoxofficeStateContext = createContext(null);
const BoxofficeDispatchContext = createContext(null);

export function BoxofficeProvider({ children }) {
  const [state, dispatch] = useReducer(boxofficeReducer, initialState);
  return (
    <BoxofficeStateContext.Provider value={state}>
      <BoxofficeDispatchContext.Provider value={dispatch}>
        {children}
      </BoxofficeDispatchContext.Provider>
    </BoxofficeStateContext.Provider>
  );
};

export function useBoxofficeState() {
  const state = useContext(BoxofficeStateContext);
  if (!state) {
    throw new Error(`Cannot find BoxofficeProvider`);
  }
  return state;
};

export function useBoxofficeDispatch() {
  const dispatch = useContext(BoxofficeDispatchContext);
  if (!dispatch) {
    throw new Error(`Cannot find BoxofficeProvider`);
  }
  return dispatch;
};

export async function getBoxoffice(dispatch, data) {
  dispatch({ type: 'GET_BOXOFFICE_LOADING' });

  const period = data ? "Daily" : "Weekly";
  
  let loadDt = new Date();
  let setDt;

  if (data) {           // Daily
    setDt = new Date(loadDt.setDate(loadDt.getDate() - 1));
  } else if (!data) {   // Weekly
    const day = loadDt.getDay();
    const temp = day + 6;
    setDt = new Date(loadDt.setDate(loadDt.getDate() - temp));
  }

  const year = setDt.getFullYear();
  const month = ('0' + (setDt.getMonth() + 1)).slice(-2);
  const day = ('0' + setDt.getDate()).slice(-2);                
  const date = year + month + day;
  
  try {
    const response = await axios.get(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/search${period}BoxOfficeList.json?key=${KOBIS_KEY}&targetDt=${date}`
    );
    dispatch({ type: 'GET_BOXOFFICE_SUCCESS', data: response.data })
  } catch(e) {
    dispatch({ type: 'GET_BOXOFFICE_FAILURE', error: e });
  };
};