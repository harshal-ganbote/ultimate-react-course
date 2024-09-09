import PropTypes from "prop-types";
import Friend from "./Friend";

function FriendList({ friends, selectedFriend, onSelection }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
  selectedFriend: PropTypes.object,
  onSelection: PropTypes.func,
};

export default FriendList;
