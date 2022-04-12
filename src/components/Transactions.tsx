import React from "react";
import TransactionItem from "./TransactionItem";
import { Card, Transaction } from "../ApiClient/index";

type Props = {
  cards: Card[];
  transactions: Transaction[];
};

const Transactions: React.FC<Props> = ({ cards, transactions }) => {
  return (
    <ul className="transactions-wrapper">
      {transactions.map((transaction) => {
        return (
          <TransactionItem key={transaction.id} transaction={transaction} />
        );
      })}
    </ul>
  );
};

export default Transactions;
