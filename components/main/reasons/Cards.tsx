import React from "react";
import Card from "./Card";
import { whyBYUIdaho } from "../../../constants/CONST";

const Cards = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 xl:grid-cols-3">
      {whyBYUIdaho.map((reason, i) => (
          <Card i={i} key={reason.id} reason={reason} />
      ))}
    </div>
  );
};

export default Cards;
