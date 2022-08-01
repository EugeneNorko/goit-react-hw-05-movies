import { fetchGetActors } from 'Api/FetchApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Image = styled.img`
  display: block;
  max-width: 150px;
`;
const FilmCast = () => {
  const { moviesId } = useParams();
  const [actors, setActors] = useState(null);

  useEffect(() => {
    fetchGetActors(moviesId)
      .then(res => {
        setActors(res.data);
      })
      .catch(error => console.log(error));
  }, [moviesId]);

  if (!actors) {
    return;
  }

  const { cast } = actors;
  const reducedActors = cast.slice(0, 10);

  return (
    <section>
      <ul>
        {reducedActors.map(actor => {
          const { id, name, character, profile_path } = actor;
          return (
            <li key={id}>
              <Image
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={name}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FilmCast;
