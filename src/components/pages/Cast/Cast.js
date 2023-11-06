import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../api';
import noImage from '../../../image/No-Image.png'
// eslint-disable-next-line
import styles from './Cast.module.css';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    fetchMovieCredits(movieId)
      .then((data) => setCast(data.cast))
      .catch((error) => console.error('Error fetching data:', error));
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <p>{actor.name}</p>
              <img
                src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                  : noImage}
                alt={`${actor.name}'s profile`}
                width={250}
              />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cast;
