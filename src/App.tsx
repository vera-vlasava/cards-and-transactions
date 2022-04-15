import React, { useEffect, useState } from "react";
import { getCards, getTransactions } from "./ApiClient";
import Cards from "./components/Cards";
import Transactions from "./components/Transactions";
import Loading from "./components/Loading";
import { Card, Transaction } from "./ApiClient/index";
import TransactionsFilter from "./components/TransactionsFilter";

const backGroundStyles: Object = {
  privat: { backgroundColor: "red" },
  business: { backgroundColor: "green" },
};

const App = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [background, setBackground] = useState<Object>({ backgroundColor: "red" }) 

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

  const clickHandler = (idx: number, style: Object): void => {
    async function fetchi() {
      const transactions = await getTransactions(cards[idx].id);

      setTransactions(transactions);
      setBackground(style)
    }

    fetchi();
  };

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
          <Cards cards={cards} clickHandler={clickHandler} styles={backGroundStyles}/>
          <TransactionsFilter changeHandler={changeHandler} />
          <Transactions transactions={filteredTransactions} style={background}/>
        </>
      )}
    </div>
  );
};

export default App;
