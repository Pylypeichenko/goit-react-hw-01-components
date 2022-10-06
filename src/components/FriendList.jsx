import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <>
      <h2>Task 3</h2>
      <ul className="friend-list">
        {friends.map(friend => (
          <li className="item" key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
              id={friend.id}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default FriendList;
