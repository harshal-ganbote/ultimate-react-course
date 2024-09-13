import PropTypes from "prop-types";
import MoviesList from "./moviesList/MoviesList";
import WatchedBox from "./watchedBox/WatchedBox";

const Main = ({ movies }) => {
  return (
    <main className="main">
      <MoviesList movies={movies} />
      <WatchedBox />
    </main>
  );
};

Main.propTypes = {
  movies: PropTypes.array,
};

export default Main;
