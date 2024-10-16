import { useState } from "react";
import PropTypes from "prop-types";

import Button from "../../../components/Button";

const Box = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleIsOpen = () => {
    setIsOpen((open) => !open);
  };

  return (
    <div className="box">
      <Button onIsOpen={handleIsOpen}>{isOpen ? "–" : "+"}</Button>
      {isOpen && children}
    </div>
  );
};

Box.propTypes = {
  children: PropTypes.node,
};

export default Box;
