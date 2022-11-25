import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
// import { BoxOffice, Movies, SearchMovies } from './pages';
import BoxOffice from './pages/BoxOffice';
import Movies from './pages/Movies';
import SearchMovies from './pages/SearchMovies';

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BoxOffice />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/search" element={<SearchMovies />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;