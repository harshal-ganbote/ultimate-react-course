import { useState } from "react";
import PropTypes from "prop-types";

import Button from "../../../components/Button";

const ListBox = ({ children }) => {
  const [isOpen1, setIsOpen1] = useState(true);

  const handleIsOpen = () => {
    setIsOpen1((open) => !open);
  };

  return (
    <div className="box">
      <Button onIsOpen={handleIsOpen}>{isOpen1 ? "–" : "+"}</Button>
      {isOpen1 && children}
    </div>
  );
};

ListBox.propTypes = {
  children: PropTypes.node,
};

export default ListBox;
