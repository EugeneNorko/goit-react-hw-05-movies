import { Layout } from './Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { MoviePage } from 'pages/MoviePage';
import { FilmDetails } from '../pages/FilmDetails';
import { FilmCast } from './FilmDetails/FilmCast';
import { FilmReviews } from './FilmDetails/FilmReviews';
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
