import React, { useState } from 'react';
import './Search.scss';

const Search = () => {
  const [movieName, setMovieName] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearchClicked = async () => {
    setIsLoading(true);
    const res = await fetch(`http://www.omdbapi.com/?apikey=93675976&s=${movieName}`);
    console.log(res, 'res');

    // Make sure base network request is working fine
    if (res.status === 200) {
      const json = await res.json();
      console.log(json, 'json');

      // Make sure there's actually movies with your search
      if (json.Response !== "False") {
        setSearchResults(json.Search);
      }
      else {
        setError(json.Error)
      }
    }

    setIsLoading(false);    
  };
  
  // console.log(movieName, 'movieName');
  // console.log(searchResults, 'searchResults');
  // console.log(isLoading, 'isLoading');
  // console.log(error, 'error');
  
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
