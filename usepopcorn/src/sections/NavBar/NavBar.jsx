import PropTypes from "prop-types";
import Logo from "./Logo";

const NavBar = ({ children }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
};

NavBar.propTypes = {
  children: PropTypes.node,
};

export default NavBar;
