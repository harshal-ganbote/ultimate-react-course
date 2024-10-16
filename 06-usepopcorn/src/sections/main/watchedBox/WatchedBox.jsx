import { useState } from "react";
import PropTypes from "prop-types";

import Button from "../../../components/Button";
import MovieSummary from "./MovieSummary";
import WatchedList from "./WatchedList";

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const WatchedBox = () => {
  // eslint-disable-next-line no-unused-vars
  const [watched, setWatched] = useState(tempWatchedData);
  const [isOpen2, setIsOpen2] = useState(true);

  const handleIsOpen = () => {
    setIsOpen2((open) => !open);
  };

  return (
    <div className="box">
      <Button onIsOpen={handleIsOpen}>{isOpen2 ? "–" : "+"}</Button>
      {isOpen2 && (
        <>
          <MovieSummary watched={watched} />
          <WatchedList watched={watched} />
        </>
      )}
    </div>
  );
};

WatchedBox.propTypes = {
  watched: PropTypes.array,
};

export default WatchedBox;
