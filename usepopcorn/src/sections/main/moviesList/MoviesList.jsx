import { useState } from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";
import Button from "../../../components/Button";

const MoviesList = ({ movies }) => {
  const [isOpen1, setIsOpen1] = useState(true);

  const handleIsOpen = () => {
    setIsOpen1((open) => !open);
  };

  return (
    <div className="box">
      <Button onIsOpen={handleIsOpen}>{isOpen1 ? "–" : "+"}</Button>
      {isOpen1 && (
        <ul className="list">
          {movies?.map((movie) => (
            <Movie key={movie.imdbID} movie={movie} />
          ))}
        </ul>
      )}
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
};

export default MoviesList;
