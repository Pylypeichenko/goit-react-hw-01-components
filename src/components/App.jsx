import user from '../user.json';
import data from '../data.json';

import Profile from './Profile';
import Statistics from './Statistics';

export const App = () => {
  return (
    <>
      <h1>goit-react-hw-01-components</h1>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </>
  );
};
