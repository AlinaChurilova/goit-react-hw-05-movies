import React from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Home from 'components/Home';
import Movies from 'components/Movies';
import MovieDetails from 'components/MovieDetails';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';
import './index.css';

const App = () => (
  <>
    <ul className='ListApp'>
      <li className='ListItemApp'>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/movies">Movies</NavLink>
      </li>
    </ul>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:movieId" element={<MovieDetails />}>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route path="/movies" element={<Movies />} />
      <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
    </Routes>
  </>
);

export default App;