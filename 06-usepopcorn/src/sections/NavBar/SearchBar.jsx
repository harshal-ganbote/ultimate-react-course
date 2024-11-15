import { useRef } from "react";
import PropTypes from "prop-types";
import { useKey } from "../../hooks/useKey";

const SearchBar = ({ query, setQuery }) => {
  const inputElement = useRef(null);

  useKey("Enter", () => {
    if (document.activeElement === inputElement.current) {
      return;
    }

    inputElement.current.focus();
    setQuery("");
  });

  return (
    <input
      ref={inputElement}
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default SearchBar;
