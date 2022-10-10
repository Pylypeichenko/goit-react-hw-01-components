import Box from 'BoxComponent';
import PropTypes from 'prop-types';
import { StatusIndicator, Photo } from './Friends.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Box
      boxShadow="0 0 4px"
      width="200px"
      paddingLeft="15px"
      paddingRight="15px"
      display="flex"
      alignItems="center"
      pt="5px"
      pb="5px"
    >
      <StatusIndicator isOnline={isOnline}></StatusIndicator>
      <Photo className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </Box>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
