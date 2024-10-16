import PropTypes from "prop-types";

const Button = ({ onIsOpen, children }) => {
  return (
    <button className="btn-toggle" onClick={onIsOpen}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onIsOpen: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
