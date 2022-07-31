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
        // console.log(res.data.results);
        setMovies(res.data.results);
      })
      .catch(error => console.log(error));
  }, [query]);

  // const onChangeQuery = value => {
  //   setSearchValue(value);
  // };
  const onSubmitForm = e => {
    e.preventDefault();
    // console.log(e.currentTarget.searchValue.value);
    const searchValue = e.currentTarget.searchValue.value;
    setSearchParams(searchValue !== '' ? { query: searchValue } : {});
  };

  return (
    <main>
      <FormSearch
        value={query}
        onSubmit={onSubmitForm}
        // onChange={onChangeQuery}
      />
      <MovieList arrayOfFilms={movies} />
    </main>
  );
};

export default MoviePage;
