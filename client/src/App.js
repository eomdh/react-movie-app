import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
// import { BoxOffice, Movies, SearchMovies } from './pages';
import BoxOffice from './pages/Boxoffice';
import Movies from './pages/Movies';
import SearchMovies from './pages/SearchMovies';
import { BoxofficeProvider } from './contexts/BoxofficeContext';

function App() {
  return (
    <div>
      <BoxofficeProvider>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BoxOffice />}></Route>
            <Route path="/boxoffice" element={<BoxOffice />}></Route>
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="/search" element={<SearchMovies />}></Route>
          </Routes>
        </BrowserRouter>
      </BoxofficeProvider>
    </div>
  );
};

export default App;