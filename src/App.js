import React, { useState } from 'react';
import './reset.css';
import './App.scss';
import Search from './components/Search/Search';
import Review from './components/Review/Review';
import { FiSearch as SearchIcon } from 'react-icons/fi';
import { GrCart as CartIcon } from 'react-icons/gr';

const App = () => {
  const [selectedMovies, setSelectedMovies] = useState([]);
  const [isReviewVisible, setIsReviewVisible] = useState(false);

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
          Fast Movie Search NEW NEW
        </h1>
      </header>
      <Navigation 
        setIsReviewVisible={setIsReviewVisible}
        isReviewVisible={isReviewVisible}
      />
      <Search 
        updateSelectedMovies={updateSelectedMovies}
        selectedMovies={selectedMovies}
      />
     {isReviewVisible && 
     <Review 
        selectedMovies={selectedMovies}
        setIsReviewVisible={setIsReviewVisible}
        setSelectedMovies={setSelectedMovies}
      />}
    </div>
  );
}


export default App;

const Navigation = ({ setIsReviewVisible, isReviewVisible }) => {
  return (
    <nav className='Navigation'>
      <ul>
        <li>
          <button onClick={() => setIsReviewVisible(false)} className={isReviewVisible ? '' : 'active'}>
            <SearchIcon />
          </button>
        </li>
        <li>
          <button onClick={() => setIsReviewVisible(true)} className={isReviewVisible ? 'active' : ''}>
            <CartIcon />
          </button>
        </li>
      </ul>
    </nav>
  );
}
