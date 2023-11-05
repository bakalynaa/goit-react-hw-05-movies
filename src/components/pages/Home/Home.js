import React, { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../api';
import MoviesList from '../../MoviesList/MoviesList';


function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies()
      .then((data) => setTrendingMovies(data.results))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Trending Movies</h2>
      <MoviesList movies={trendingMovies} />
    </div>
  );
}

export default Home;
