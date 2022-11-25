import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import NavBar from './components/NavBar';
import AppLayout from './components/AppLayout';

function App() {
  return (
    <div>
      <NavBar />
      <AppLayout>
      </AppLayout>
    </div>
  );
};

export default App;