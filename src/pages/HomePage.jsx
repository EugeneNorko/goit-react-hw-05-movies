import { fetchTrendsMovie } from 'Api/FetchApi';
import { MovieList } from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  // const location = useLocation();

  useEffect(() => {
    fetchTrendsMovie()
      .then(res => {
        setMovies(res.data.results);
        // console.log(res.data.results);
      })
      .catch(error => console.log(error));
  }, []);

  return <MovieList arrayOfFilms={movies} />;
};
