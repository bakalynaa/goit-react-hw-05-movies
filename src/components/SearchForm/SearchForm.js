import React, { useState } from 'react';
// eslint-disable-next-line
import styles from './SearchForm.module.css';


const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuery = e.currentTarget.search.value;

    if (newQuery.trim() === '') return;

    onSubmit(newQuery);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a movie..."
        name='search'
        value={query}
        onChange={(e)=> setQuery(e.target.value) }
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
