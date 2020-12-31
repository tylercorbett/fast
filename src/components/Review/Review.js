import React from 'react';
import './Review.scss';

const Review = ({ selectedMovies, setIsReviewVisible, setSelectedMovies }) => {
  const confirmOrder = () => {
    alert(`Confirmed Order with for these movies: ${selectedMovies}`);
    setSelectedMovies([]);
    setIsReviewVisible(false);
  }
  return (
    <section className='Review'>
      <div className='modal-overlay' onClick={() => setIsReviewVisible(false)}/>
      <section className='modal-body'>
        <h2>Confirm Order</h2>
        <button onClick={confirmOrder}>Click to confirm</button>
        <ol>
          {selectedMovies.map((movie, i) => {
            return (
              <li key={i}>
                {movie}
              </li>
            );
          })}
        </ol>
      </section>
    </section>
  );
};

export default Review;
