import PropTypes from 'prop-types';
import { TableCell } from './Transaction.styled';

const Transaction = ({ type, amount, currency }) => {
  return (
    <>
      <TableCell>{type}</TableCell>
      <TableCell>{amount}</TableCell>
      <TableCell>{currency}</TableCell>
    </>
  );
};

Transaction.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default Transaction;
