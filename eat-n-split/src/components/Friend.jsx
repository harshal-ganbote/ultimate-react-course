import PropTypes from "prop-types";
import Button from "./Button";

function Friend({ friend, selectedFriend, onSelection }) {
  let balanceMessageParagraph = null;
  const { id, name, image, balance } = friend;
  const isSelected = selectedFriend && selectedFriend.id === id;

  if (balance < 0) {
    balanceMessageParagraph = (
      <p className="red">
        You owe {name} {Math.abs(balance)}$
      </p>
    );
  } else if (balance > 0) {
    balanceMessageParagraph = (
      <p className="green">
        {name} owes you {balance}$
      </p>
    );
  } else {
    balanceMessageParagraph = <p>You and {name} are even</p>;
  }

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={image} alt={name} />
      <h3>{name}</h3>

      {balanceMessageParagraph}

      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

Friend.propTypes = {
  friend: PropTypes.object,
  selectedFriend: PropTypes.object,
  onSelection: PropTypes.func,
};

export default Friend;
