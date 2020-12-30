import React, { useState } from 'react';
import './reset.css';
import './App.scss';
import Search from './components/Search/Search';
import { FiSearch as SearchIcon } from 'react-icons/fi';
import { GrCart as CartIcon } from 'react-icons/gr';

const App = () => {
  const [selectedMovies, setSelectedMovies] = useState([]);

  const updateSelectedMovies = newMovie => {
    let newMovies = [...selectedMovies];
    
    if (newMovies.includes(newMovie)) {
      newMovies = newMovies.filter(movie => movie !== newMovie);
    }
    else {
      newMovies.push(newMovie);
    }

    setSelectedMovies(newMovies);
  };
  return (
    <div className="App">
      <header>
        <h1>
          Fast Movie Search
        </h1>
      </header>
      <Navigation />
      <Search 
        updateSelectedMovies={updateSelectedMovies}
        selectedMovies={selectedMovies}
      />
    </div>
  );
}


export default App;

const Navigation = () => {
  return (
    <nav className='Navigation'>
      <ul>
        <li>
          <SearchIcon />
        </li>
        <li>
          <CartIcon />
        </li>
      </ul>
    </nav>
  );
}
