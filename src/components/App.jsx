import { lazy } from 'react';
import { Layout } from './Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';

const MoviePage = lazy(() => import('../pages/MoviePage'));
const FilmDetails = lazy(() => import('../pages/FilmDetails'));
const FilmCast = lazy(() => import('./FilmDetails/FilmCast'));
const FilmReviews = lazy(() => import('./FilmDetails/FilmReviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviePage />} />
        <Route path="movies/:moviesId" element={<FilmDetails />}>
          <Route path="cast" element={<FilmCast />} />
          <Route path="reviews" element={<FilmReviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
