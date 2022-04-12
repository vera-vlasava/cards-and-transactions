import React from "react";
import { Card, Transaction } from "../ApiClient/index";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

type Props = {
  card: Card;
};

const CardItem = ({ card }: Props): React.ReactElement => {
  return (
    <div className="card-item">
      <div className="card-text">{card.description}</div>
      <div className="card-text">{card.id}</div>
    </div>
  );
};

export default CardItem;
