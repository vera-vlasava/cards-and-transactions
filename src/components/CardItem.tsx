import React from "react";
import { Card } from "../ApiClient/index";

type Props = {
  card: Card;
  idx: number;
  clickHandler: (idx: number, style: Object, id: string) => void;
  style: Object;
};

const CardItem = ({
  card,
  idx,
  clickHandler,
  style,
}: Props): React.ReactElement => {
  return (
    <div
      className={card.isActive ? "card-item active" : "card-item"}
      onClick={() => clickHandler(idx, style, card.id)}
      style={style}
    >
      <div className="card-text">{card.description}</div>
      <div className="logo-wrapper">
        <div className="chip"></div>
        <div className="dkb-logo"></div>
      </div>
      <div className="visa-wrapper">
        <div className="visa"></div>
      </div>
    </div>
  );
};

export default CardItem;
