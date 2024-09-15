import PropTypes from "prop-types";

const MainSection = ({ children }) => {
  return <main className="main">{children}</main>;
};

MainSection.propTypes = {
  children: PropTypes.node,
};

export default MainSection;
