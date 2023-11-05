import React, { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from '../../api';
import styles from './MovieDetails.module.css';

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const defaultImg = 'https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png';

  useEffect(() => {
    if (!movieId) return;

    fetchMovieDetails(movieId)
      .then((data) => setMovieDetails(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.container}>
      <h2>{movieDetails.title}</h2>
      <p>{movieDetails.overview}</p>
      <p>Genre: {movieDetails.genres.map((genre) => genre.name).join(', ')}</p>
      <p>Rating: {movieDetails.vote_average}/10</p>

      <img
        src={
          movieDetails.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
            : defaultImg
        }
        alt="Movie Poster"
        width={250}
      />
      <Link className={styles.link} to={`/movies/${movieId}/cast`}>
        Cast
      </Link>
      <Link className={styles.link} to={`/movies/${movieId}/reviews`}>
        Reviews
      </Link>
      <Link className={styles.link} to="/">
        Back to Home
      </Link>


      <Outlet />
    </div>
  );
}

export default MovieDetails;
