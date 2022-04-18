import React from "react";
import { Transaction } from "../ApiClient";

type Props = {
  transaction: Transaction;
  style: Object
};

const TransactionItem = ({ transaction, style }: Props): React.ReactElement => {
  return (
    <li className="transaction-item" style={style}>
      <p>{transaction.description}</p>
      <p>{transaction.amount}</p>
    </li>
  );
};

export default TransactionItem;
