import React, { ReactElement } from "react";
import { Card } from "../ApiClient/index";
import CardItem from "./CardItem";

type Props = {
  cards: Card[];
  clickHandler: (idx: number, style: Object, id: string) => void;
  styles: Object;
};

const Cards = ({ cards, clickHandler, styles }: Props): React.ReactElement => {
  return (
    <div className="card-wrapper">
      {cards.map((card, idx) => {

        // Adding dynamically card styles according to card description
        let key: keyof typeof styles;
        let style = {};
        for (key in styles) {
          if (card.description.toLowerCase().includes(key)) {
            style = styles[key];
          }
        }

        return (
          <CardItem
            key={card.id}
            card={card}
            idx={idx}
            clickHandler={clickHandler}
            style={style}
          />
        );
      })}
    </div>
  );
};

export default Cards;
