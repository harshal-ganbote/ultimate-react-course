import PropTypes from "prop-types";

const NumResult = ({ movies }) => {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
};

NumResult.propTypes = {
  movies: PropTypes.array,
};

export default NumResult;
