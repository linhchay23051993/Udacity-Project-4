import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function MovieList({ onMovieClick }) {
  const [listMovie, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_MOVIE_API_URL}/movies`).then((response) => {
      console.log(`${process.env.REACT_APP_MOVIE_API_URL}/movies`);
      console.log(response);
      console.log(response.data);
      console.log(response.data.movies);
      setMovies(response.data.movies);
    });
  }, []);

  return (
    <ul>
      {listMovie?.map((movie) => (
        <li className="movieItem" key={movie.id} onClick={() => onMovieClick(movie)}>
          {movie.title}
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  onMovieClick: PropTypes.func.isRequired,
};

export default MovieList;
