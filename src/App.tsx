import React, { useEffect, useState } from "react";
import { getCards, getTransactions } from "./ApiClient";
import Cards from "./components/Cards";
import Transactions from "./components/Transactions";
import Loading from "./components/Loading";
import { Card, Transaction } from "./ApiClient/index";
import TransactionsFilter from "./components/TransactionsFilter";

const backGroundStyles: Object = {
  privat: {
    backgroundColor: "#0093e9",
    backgroundImage: "linear-gradient(15deg, #0093e9 0%, #80d0c7 100%)",
  },
  business: {
    backgroundColor: "#D9AFD9",
    backgroundImage: "linear-gradient(40deg, #D9AFD9 0%, #97D9E1 100%)",
  },
};

const App = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [background, setBackground] = useState<Object>({
    backgroundColor: "#0093e9",
    backgroundImage: "linear-gradient(15deg, #0093e9 0%, #80d0c7 100%)",
  });

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

  // Click on card triggers receiving card transactions and
  // setting background color for transactions the same as
  // background color of card
  const setCardTransaction = (idx: number, style: Object, id: string): void => {
    console.log(id);

    async function fetchi() {
      const transactions = await getTransactions(cards[idx].id);

      setTransactions(transactions);
      setBackground(style);
    }

    fetchi();
    const mapedCards = cards.map((card) => {
      if (card.id === id) {
        card.isActive = true;
      } else {
        card.isActive = false;
      }
      return card;
    });
    setCards(mapedCards);
  };

  // Handling changes in input, getting filter to set corresponding to this filter transactions
  const setFilteredTransactions = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
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
          <Cards
            cards={cards}
            clickHandler={setCardTransaction}
            styles={backGroundStyles}
          />
          <TransactionsFilter changeHandler={setFilteredTransactions} />
          <Transactions
            transactions={filteredTransactions}
            style={background}
          />
        </>
      )}
    </div>
  );
};

export default App;
