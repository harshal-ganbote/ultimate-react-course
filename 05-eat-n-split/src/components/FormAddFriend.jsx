import { useState } from "react";
import PropTypes from "prop-types";

import Button from "./Button";

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !image) {
      return;
    }

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👫 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />

      <label>🌃 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={({ target }) => setImage(target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}

FormAddFriend.propTypes = {
  onAddFriend: PropTypes.func,
};

export default FormAddFriend;
