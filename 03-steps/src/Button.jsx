import PropTypes from "prop-types";

const Button = ({ textColor, bgColor, onClick, children }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
