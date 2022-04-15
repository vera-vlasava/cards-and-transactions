import React from "react";
import { Card } from "../ApiClient/index";


type Props = {
  card: Card;
  idx: number;
  clickHandler: (idx: number, style: Object) => void;
  style: Object

};

const CardItem = ({
  card,
  idx,
  clickHandler,
  style
}: Props): React.ReactElement => {
  return (
    <div className="card-item" onClick={() => clickHandler(idx, style)} style={style}>
      <div className="card-text">{card.description}</div>
      <div className="card-text">{card.id}</div>
    </div>
  );
};

export default CardItem;
