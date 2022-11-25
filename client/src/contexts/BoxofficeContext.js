import React, { createContext, useReducer, useContext } from 'react';

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
        boxoffice: loadingState
      };
    case 'GET_BOXOFFICE_SUCCESS':
      return {
        ...state,
        boxoffice: loadingState
      };
    case 'GET_BOXOFFICE_FAILURE':
      return {
        ...state,
        boxoffice: loadingState
      };
    default:
      throw new Error(`Unhandle action type: ${action.type}`);
  };
};

const BoxofficeStateContext = createContext(null);
const BoxofficeDispatchContext = createContext(null);

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(useReducer, initialState);
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
  const state = useContext(BoxofficeDispatchContext);
  if (!state) {
    throw new Error(`Cannot find BoxofficeProvider`);
  }
  return state;
};