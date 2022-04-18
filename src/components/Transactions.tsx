import React from "react";
import TransactionItem from "./TransactionItem";
import { Card, Transaction } from "../ApiClient/index";

type Props = {
  transactions: Transaction[];
  style: Object;
};

const Transactions = ({ transactions, style }: Props): React.ReactElement => {
  return (
    <ul className="transactions-wrapper">
      {transactions.map((transaction) => {
        return (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            style={style}
          />
        );
      })}
    </ul>
  );
};

export default Transactions;
