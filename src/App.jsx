import React, { lazy, Suspense }from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from 'components/Navigation';
import './index.css';

const Home = lazy(() => import("components/Home"));
const Movies = lazy(() => import("components/Movies"));
const MovieDetails = lazy(() => import("components/MovieDetails"));
const Cast = lazy(() => import("components/Cast"));
const Reviews = lazy(() => import("components/Reviews"));


const App = () => (
  <>
    <Navigation/>
    <Suspense fallback={<div>Loading...</div>}>
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
   </Suspense>
  </>
);

export default App;