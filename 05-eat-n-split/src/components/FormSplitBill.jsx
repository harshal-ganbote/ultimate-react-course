import { useState } from "react";
import PropTypes from "prop-types";

import Button from "./Button";

function FormSplitBill({ friend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("you");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!bill || !paidByUser) {
      return;
    }

    onSplitBill(whoIsPaying === "you" ? paidByFriend : -paidByUser);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {friend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={({ target }) => setBill(Number(target.value))}
      />

      <label>🧍 Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={({ target }) =>
          setPaidByUser(
            Number(target.value) > bill ? paidByUser : Number(target.value)
          )
        }
      />

      <label>👫 {`${friend.name}'s expense`} </label>
      <input type="text" disabled value={paidByFriend} />

      <label>🤑 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={({ target }) => setWhoIsPaying(target.value)}
      >
        <option value="you">You</option>
        <option value="friend">{friend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

FormSplitBill.propTypes = {
  friend: PropTypes.object,
  onSplitBill: PropTypes.func,
};

export default FormSplitBill;
