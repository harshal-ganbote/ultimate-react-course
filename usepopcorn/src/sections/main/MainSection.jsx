import PropTypes from "prop-types";

import MoviesList from "./moviesList/MoviesList";
import WatchedBox from "./watchedBox/WatchedBox";

const MainSection = ({ movies }) => {
  return (
    <main className="main">
      <MoviesList movies={movies} />
      <WatchedBox />
    </main>
  );
};

MainSection.propTypes = {
  movies: PropTypes.array,
};

export default MainSection;
