import React, { useState } from 'react';
import { fetchSearchMovies } from '../../api';
import SearchForm from '../../SearchForm/SearchForm';
import MoviesList from '../../MoviesList/MoviesList';
import styles from './Movies.module.css'
function Movies() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    fetchSearchMovies(query)
      .then((data) => {
        setSearchResults(data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <SearchForm onSubmit={handleSearch} />
      <MoviesList movies={searchResults} />
    </div>
  );
}

export default Movies;
