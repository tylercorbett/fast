import React from 'react';
import './Review.scss';

const Review = ({ selectedMovies, setIsReviewVisible }) => {
  return (
    <section className='Review'>
      <div className='modal-overlay' onClick={() => setIsReviewVisible(false)}/>
      <section className='modal-body'>
        <h2>Confirm order</h2>
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
