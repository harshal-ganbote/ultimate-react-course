import PropTypes from "prop-types";

function Item({
  id,
  description,
  quantity,
  packed,
  onDeleteItem,
  onToggleItem,
}) {
  return (
    <li>
      <input type="checkbox" value={packed} onChange={() => onToggleItem(id)} />
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
}

Item.propTypes = {
  id: PropTypes.number,
  description: PropTypes.string,
  quantity: PropTypes.number,
  packed: PropTypes.bool,
  onDeleteItem: PropTypes.func,
  onToggleItem: PropTypes.func,
};

export default Item;
