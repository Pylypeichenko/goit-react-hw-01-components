import Transaction from './Transaction';
import { TaskSection } from '../TaskSection.styled';
import { TableHead, TableHeadCell, TableRow } from './Transaction.styled';

const TransactionHistory = ({ items }) => {
  return (
    <TaskSection>
      <h2>Task 4</h2>
      <table className="transaction-history">
        <TableHead>
          <tr>
            <TableHeadCell>Type</TableHeadCell>
            <TableHeadCell>Amount</TableHeadCell>
            <TableHeadCell>Currency</TableHeadCell>
          </tr>
        </TableHead>

        <tbody>
          {items.map(item => {
            return (
              <TableRow key={item.id}>
                <Transaction
                  type={item.type}
                  amount={item.amount}
                  currency={item.currency}
                />
              </TableRow>
            );
          })}
        </tbody>
      </table>
    </TaskSection>
  );
};

export default TransactionHistory;
