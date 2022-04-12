import React, { ReactElement } from "react";
import { Card, Transaction } from "../ApiClient/index";
import CardItem from "./CardItem";






type Props = {
  cards: Card[];
  transactions: Transaction[];
};

const Cards: React.FC<Props> = ({ cards, transactions }) => {
  return (
    <div className="card-wrapper">
      {cards.map((card) => {
        return <CardItem key={card.id} card={card} />;
      })}
    </div>
  );
};

export default Cards;
