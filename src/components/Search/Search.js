import React, { useState } from 'react';
import './Search.scss';

const Search = () => {
  const [movieName, setMovieName] = useState('');

  const handleSearchClicked = () => {
    console.log(movieName)
  }
   
  return (
    <section className='Search'>
      <h2>Search by movie or series title</h2>
      <input 
        type='text'
        placeholder='Harry Potter'
        onChange={e => setMovieName(e.target.value)}
        maxLength={40}
      />
      <button
        onClick={handleSearchClicked}
      >
        Search
      </button>
    </section>
  );
};

export default Search;
