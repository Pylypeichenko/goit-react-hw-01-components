import styled from 'styled-components';

export const StatusIndicator = styled.span`
  width: 10px;
  height: 10px;
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
  border-radius: 5px;
  margin-right: 15px;
`;

export const Photo = styled.img`
  margin-right: 15px;
`;

// ------

export const Item = styled.li`
  margin-top: 5px;
`;
