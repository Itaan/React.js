import Friend from "./Friend";

export default function FriendsList({ list, selectedFriend, onSelection }) {
  return (
    <ul>
      {list.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}
