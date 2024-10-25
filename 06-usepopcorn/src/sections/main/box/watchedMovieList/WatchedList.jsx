import PropTypes from "prop-types";

import WatchedMovie from "./WatchedMovie";

const WatchedMovieList = ({ watched, onDeleteWatched }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          key={movie.imdbID}
          movie={movie}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
};

WatchedMovieList.propTypes = {
  watched: PropTypes.array,
  onDeleteWatched: PropTypes.func,
};

export default WatchedMovieList;
