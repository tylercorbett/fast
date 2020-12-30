import React, { isValidElement, useState } from 'react';
import './reset.css';
import './App.scss';
import Search from './components/Search/Search';
import Review from './components/Review/Review';
import { FiSearch as SearchIcon } from 'react-icons/fi';
import { GrCart as CartIcon } from 'react-icons/gr';

const App = () => {
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [isReviewVisible, setIsReviewVisible] = useState(false);

  const toggleIsReviewVisible = () => {
    setIsReviewVisible(!isReviewVisible);
  };

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
      <Navigation 
        toggleIsReviewVisible={toggleIsReviewVisible}
      />
      <Search 
        updateSelectedMovies={updateSelectedMovies}
        selectedMovies={selectedMovies}
      />
    </div>
  );
}


export default App;

const Navigation = ({ toggleIsReviewVisible }) => {
  return (
    <nav className='Navigation'>
      <ul>
        <li>
          <button>
            <SearchIcon />
          </button>
        </li>
        <li>
          <button onClick={toggleIsReviewVisible}>
            <CartIcon />
          </button>
        </li>
      </ul>
    </nav>
  );
}
