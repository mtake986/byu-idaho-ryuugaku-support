import React from "react";
import Card from "./Card";
import { supportPlans } from "../../../../constants/CONST";


interface Props {
  contents: {
    id: number;
    title: string;
    description: string;
    note?: string[];
    optionPrice?: number;
  }[];
}

const Cards = ({contents}: Props) => {
  return (
    <div className="grid gap-3 sm:gap-8 sm:grid-cols-1 md:grid-cols-2">
      {contents.map((plan, i) => (
        <Card key={plan.id} plan={plan} i={i} />
      ))}
    </div>
  );
};

export default Cards;
