import React, { useEffect, useState } from "react";
import { getCards, getTransactions } from "../ApiClient";
import Cards from "./Cards";
import Transactions from "./Transactions";
import Loading from "./Loading";
import { Card, Transaction } from "../ApiClient/index";
import TransactionsFilter from "./TransactionsFilter";

const App: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    async function fetchi() {
      const cards = await getCards();
      const transactions = await getTransactions(cards[0].id);

      setCards(cards);
      setTransactions(transactions);
      setIsLoading(false);
    }

    fetchi();
  }, []);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFilter(event?.target.value);
    getFilteredTransactions(filter);
  };

  const getFilteredTransactions = (filter: string): Transaction[] => {
    return filter
      ? transactions.filter((t) => t.amount.toString().includes(filter))
      : transactions;
  };

  const filteredTransactions = getFilteredTransactions(filter);

  return (
    <div className="container">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Cards cards={cards} transactions={transactions} />
          <TransactionsFilter changeHandler={changeHandler} />
          <Transactions cards={cards} transactions={filteredTransactions} />
        </>
      )}
    </div>
  );
};

export default App;
