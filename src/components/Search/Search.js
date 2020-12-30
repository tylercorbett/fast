import React, { useState } from 'react';
import './Search.scss';

const Search = () => {
  const [movieName, setMovieName] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchClicked = async () => {
    setIsLoading(true);
    const res = await fetch('http://www.omdbapi.com/?apikey=93675976&s=citizen%20kane');
    console.log(res, 'res');

    if (res.status === 200) {
      const json = await res.json();
      setSearchResults(json.Search);
      console.log(json, 'json');
    }

    setIsLoading(false);    
  };
   
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
