import PropTypes from "prop-types";

function Item({ description, quantity, packed }) {
  return (
    <li>
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button>❌</button>
    </li>
  );
}

Item.propTypes = {
  description: PropTypes.string,
  quantity: PropTypes.number,
  packed: PropTypes.bool,
};

export default Item;
