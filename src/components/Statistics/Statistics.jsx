import PropTypes from 'prop-types';
import { TaskSection } from '../TaskSection.styled';
import Box from 'BoxComponent';
import { getRandomHexColor } from 'getRandomHexColor';
import { StatisticsList } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <TaskSection>
      <h2>Task 2</h2>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mt="10px"
        pt="50px"
        height="175px"
        border="1px solid pink"
      >
        {title && <h3 className="title">{title.toUpperCase()}</h3>}

        <StatisticsList>
          {stats.map(item => {
            return (
              <li key={item.id} className="item">
                <Box
                  bg={getRandomHexColor()}
                  width="100px"
                  height="100px"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <span className="label">{item.label} </span>
                  <span className="percentage">{item.percentage}</span>
                </Box>
              </li>
            );
          })}
        </StatisticsList>
      </Box>
    </TaskSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
