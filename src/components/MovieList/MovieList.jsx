import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MovieList = ({ arrayOfFilms }) => {
  const location = useLocation();
  return (
    <ul>
      {arrayOfFilms.map(({ id, title, name }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }} key={id}>
              {title ? title : name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

MovieList.propTypes = {
  arrayOfFilms: PropTypes.arrayOf(PropTypes.object),
};
