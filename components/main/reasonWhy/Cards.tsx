import React from "react";
import Card from "./Card";
import { reasonWhy } from "../../../constants/CONST";

const Cards = () => {
  return (
    <div className="container mx-auto mt-5 mb-20 grid grid-cols-1 gap-4">
      {reasonWhy.map((reason) => (
        <Card key={reason.id} reason={reason} />
      ))}
    </div>
  );
};

export default Cards;
