import PropTypes from 'prop-types';

import FriendListItem from './FriendListItem';
import { TaskSection } from '../TaskSection.styled';
import { Item } from './Friends.styled';

const FriendList = ({ friends }) => {
  return (
    <TaskSection>
      <h2>Task 3</h2>
      <ul>
        {friends.map(friend => (
          <Item key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
              id={friend.id}
            />
          </Item>
        ))}
      </ul>
    </TaskSection>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number,
};

export default FriendList;
