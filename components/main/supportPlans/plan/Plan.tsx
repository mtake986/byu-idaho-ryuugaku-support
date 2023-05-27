import React from "react";
import Image from "next/image";
import SupportContents from "./Contents";
import SupportPlanTitle from "./SupportPlanTitle";
import Price from "./Price";
import PayBack from "./PayBack";

interface Props {
  plan: {
    price: number;
    title: string;
    subtitle: string;
    payBack: {
      title: string;
      description: string;
    };
    contents: {
        id: number;
        title: string;
        description: string;
        note?: string[];
        optionPrice?: number;
    }[];
  };
}

const Plan = ({plan}: Props) => {
  return (
    <div className="rounded-lg border border-blue-700">
      <div className="relative rounded-t-lg bg-gradient-to-tr from-blue-700 to-cyan-400 py-5 px-3 text-center text-white">
        <SupportPlanTitle title = {plan.title} subtitle= {plan.subtitle} />
        <Price price={plan.price} />
      </div>
      <SupportContents contents={plan.contents} />
      <PayBack payBack={plan.payBack} />
    </div>
  );
};

export default Plan;
