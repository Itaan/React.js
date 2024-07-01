import Friend from "./Friend";

export default function FriendsList({ list }) {
  return (
    <ul>
      {list.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}
