import PropTypes from "prop-types";

import Movie from "./Movie";

const MoviesList = ({ movies, onSelectMovie }) => {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
  onSelectMovie: PropTypes.func,
};

export default MoviesList;
