import { fetchSearchFilms } from 'Api/FetchApi';
import { FormSearch } from 'components/FormSearch/FormSearch';
import { MovieList } from 'components/MovieList/MovieList';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }
    fetchSearchFilms(query)
      .then(res => {
        setMovies(res.data.results);
      })
      .catch(error => console.log(error));
  }, [query]);

  const onSubmitForm = e => {
    e.preventDefault();
    const searchValue = e.currentTarget.searchValue.value;
    setSearchParams(searchValue !== '' ? { query: searchValue } : {});
  };

  return (
    <main>
      <FormSearch value={query} onSubmit={onSubmitForm} />
      <MovieList arrayOfFilms={movies} />
    </main>
  );
};

export default MoviePage;
