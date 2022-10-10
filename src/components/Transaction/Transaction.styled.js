import styled from 'styled-components';

export const Table = styled.table`
  margin-top: 15px;
`;

export const TableHead = styled.thead`
  background-color: skyblue;
`;

export const TableHeadCell = styled.th`
  height: 40px;
`;

export const TableRow = styled.tr`
  &:nth-child(2n + 2) {
    background-color: #ececec;
  }
`;

export const TableCell = styled.td`
  width: 200px;
  height: 40px;
  text-align: center;
`;
