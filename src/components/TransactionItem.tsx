import React from "react";
import { Transaction } from "../ApiClient";

type Props = {
  transaction: Transaction;
};

const TransactionItem = ({ transaction }: Props): React.ReactElement => {
  return (
    <li className="transaction-item">
      <p>{transaction.description}</p>
      <p>{transaction.amount}</p>
    </li>
  );
};

export default TransactionItem;
