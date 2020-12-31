import React, { useState } from 'react';
import './Search.scss';
import { getApiKey } from '../../utils/helpers';
import { AiOutlineLoading3Quarters as LoadingSpinner } from 'react-icons/ai';

const Search = ({ updateSelectedMovies, selectedMovies }) => {
  const [movieName, setMovieName] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleResultClick = result => {
    const { Title } = result;

    updateSelectedMovies(Title);
  };


  // TODO: Move this into it's own file
  const handleSearchClicked = async e => {
    e.preventDefault();

    setIsLoading(true);
    const res = await fetch(`http://www.omdbapi.com/?apikey=${getApiKey()}&s=${movieName}`);

    // Make sure base network request is working fine
    if (res.status === 200) {
      const json = await res.json();

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
        handleResultClick={handleResultClick}
        selectedMovies={selectedMovies}
      />
    </section>
  );
};

export default Search;

// TODO: Move ResultsDisplay and Result into their own file
const ResultsDisplay = ({ searchResults, isLoading, error, handleResultClick, selectedMovies }) => {

  if (isLoading) return <LoadingSpinner className='spinner rotating'/>;

  if (error) return <p className='error'>{error}</p>;

  return (
    <div className='ResultsDisplay'>
      <ul>
        {searchResults.map(result => <Result isActive={selectedMovies.includes(result.Title)} handleResultClick={handleResultClick} key={result.imdbID} result={result}/>)}
      </ul>
    </div>
  );
};

const Result = ({ result, handleResultClick, isActive }) => {
  return (
    <li className={`Result${isActive ? ' active' : ''}`} onClick={() => handleResultClick(result)}>
      <img src={result.Poster} alt={`${result.Title} poster`}/>
      <h3>{result.Title}</h3>
    </li>
  );
};
