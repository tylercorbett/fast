import React, { useState } from 'react';
import './Search.scss';
import { getApiKey } from '../../utils/helpers';
import { AiOutlineLoading3Quarters as LoadingSpinner } from 'react-icons/ai';

const Search = () => {
  const [movieName, setMovieName] = useState('Harry Potter');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // TODO: Move this into it's own file
  const handleSearchClicked = async e => {
    e.preventDefault();

    setIsLoading(true);
    const res = await fetch(`http://www.omdbapi.com/?apikey=${getApiKey()}&s=${movieName}`);
    console.log(res, 'res');

    // Make sure base network request is working fine
    if (res.status === 200) {
      const json = await res.json();
      console.log(json, 'json');

      // Make sure there's actually movies with your search
      if (json.Response !== "False") {
        setSearchResults(json.Search);
        setError(null);
      }
      else {
        setError(json.Error);
      }
    }

    setIsLoading(false);    
  };
  
  return (
    <section className='Search'>
      <form>
        <h2>Search by movie or series title</h2>
        <input 
          type='text'
          placeholder='Harry Potter'
          onChange={e => setMovieName(e.target.value)}
          maxLength={40}
        />
        <button
          onClick={e => handleSearchClicked(e)}
          type='submit'
        >
          Search
        </button>
      </form>
      <ResultsDisplay 
        searchResults={searchResults}
        isLoading={isLoading}
        error={error}
      />
    </section>
  );
};

export default Search;

// TODO: Move ResultsDisplay and Result into their own file
const ResultsDisplay = ({ searchResults, isLoading, error }) => {

  if (isLoading) return <LoadingSpinner className='spinner rotating'/>;

  if (error) return <p className='error'>{error}</p>;

  return (
    <div className='ResultsDisplay'>
      <ul>
        {searchResults.map(result => <Result key={result.imdbID} result={result}/>)}
      </ul>
    </div>
  );
};

const Result = ({ result }) => {
  return (
    <li className='Result'>
      <img src={result.Poster} />
      <h3>{result.Title}</h3>
    </li>
  );
};
