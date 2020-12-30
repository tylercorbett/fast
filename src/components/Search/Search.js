import React, { useState } from 'react';
import './Search.scss';

const Search = () => {
  const [movieName, setMovieName] = useState('');
  
  return (
    <section className='Search'>
      <h2>Search by movie or series title</h2>
      <input 
        type='text'
        placeholder='Harry Potter'
        onChange={e => setMovieName(e.target.value)}
        maxLength={40}
      />

    </section>
  );
};

export default Search;
