import PropTypes from "prop-types";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NumResult from "./NumResult";

const NavBar = ({ movies }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <SearchBar />
      <NumResult movies={movies} />
    </nav>
  );
};

NavBar.propTypes = {
  movies: PropTypes.array,
};

export default NavBar;
