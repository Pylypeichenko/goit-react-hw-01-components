import PropTypes from 'prop-types';
import { TaskSection } from '../TaskSection.styled';
import {
  ProfileContainer,
  Description,
  Avatar,
  AvatarInfo,
  StatsList,
  StatsItem,
  Quantity,
} from './Profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <TaskSection>
      <h2>Tast 1</h2>

      <ProfileContainer>
        <Description>
          <Avatar src={avatar} alt="User avatar" />
          <AvatarInfo>{username}</AvatarInfo>
          <AvatarInfo>@{tag}</AvatarInfo>
          <AvatarInfo>{location}</AvatarInfo>
        </Description>

        <StatsList>
          <StatsItem>
            <span className="label">Followers </span>
            <Quantity>{stats.followers}</Quantity>
          </StatsItem>
          <StatsItem>
            <span className="label">Views </span>
            <Quantity>{stats.views}</Quantity>
          </StatsItem>
          <StatsItem>
            <span className="label">Likes </span>
            <Quantity>{stats.likes}</Quantity>
          </StatsItem>
        </StatsList>
      </ProfileContainer>
    </TaskSection>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
