import { fetchGetReviews } from 'Api/FetchApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FilmReviews = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchGetReviews(moviesId)
      .then(res => {
        setReviews(res.data.results);
      })
      .catch(erorr => console.log(erorr));
  }, [moviesId]);

  if (!reviews) {
    return;
  }

  return (
    <section>
      <div>
        <ul>
          {reviews.length > 1 ? (
            reviews.map(({ id, author, content }) => {
              return (
                <li key={id}>
                  <b>{author}</b>
                  <p>{content}</p>
                </li>
              );
            })
          ) : (
            <p>We don't have any reviews for this movie</p>
          )}
        </ul>
      </div>
    </section>
  );
};

export default FilmReviews;
