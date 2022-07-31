import { fetchSearchId } from 'Api/FetchApi';
import { useState, useEffect } from 'react';
import {
  useParams,
  Outlet,
  NavLink,
  Link,
  useLocation,
} from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.section`
  padding: 30px;
  border-bottom: 3px solid grey;
`;

const MainBox = styled.div`
  display: flex;
`;

const Image = styled.img`
  display: block;
  max-width: 250px;
  margin-right: 50px;
`;
const FilmDetails = () => {
  const { moviesId } = useParams();
  const [filmInfo, setFilmInfo] = useState(null);
  const location = useLocation();
  // console.log(location);

  useEffect(() => {
    fetchSearchId(moviesId)
      .then(res => {
        // console.log(res.data);
        setFilmInfo(res.data);
      })
      .catch(error => console.log(error));
  }, [moviesId]);

  if (!filmInfo) {
    return;
  }

  const {
    poster_path,
    original_title,
    release_date,
    overview,
    genres,
    vote_average,
  } = filmInfo;

  const releaseDate = release_date.slice(0, 4);
  const genre = genres.map(({ name }) => name).join(', ');
  const score = String(vote_average)
    .split('', 3)
    .filter(el => el !== '.')
    .join('');

  return (
    <main>
      <Link to={location.state.from}>Turn back</Link>
      <Section>
        <MainBox>
          <div>
            <Image
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt="Poster of movie"
            />
          </div>
          <div>
            <h1>{`${original_title} (${releaseDate})`}</h1>
            <h2>User Score: {score}%</h2>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <p>{genre}</p>
          </div>
        </MainBox>
      </Section>
      <Section>
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </Section>
      <Outlet />
    </main>
  );
};

export default FilmDetails;
