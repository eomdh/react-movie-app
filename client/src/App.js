import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
// import { BoxOffice, Movies, SearchMovies } from './pages';
import Boxoffice from './pages/Boxoffice';
import Movies from './pages/Movies';
import SearchMovies from './pages/SearchMovies';
import { BoxofficeProvider } from './contexts/BoxofficeContext';
import { MoviesInfoProvider } from './contexts/MoviesContext';

function App() {
  return (
    <div>
      <MoviesInfoProvider><BoxofficeProvider>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Boxoffice />}></Route>
            <Route path="/boxoffice" element={<Boxoffice />}></Route>
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="/search" element={<SearchMovies />}></Route>
          </Routes>
        </BrowserRouter>
        </BoxofficeProvider></MoviesInfoProvider>
    </div>
  );
};

export default App;