import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Redux
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);