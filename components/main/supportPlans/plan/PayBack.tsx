import { supportPlans } from "@/constants/CONST";
import React from "react";

interface Props {
  payBack: {
    title: string;
    description: string;
  };
}
const PayBack = ({ payBack }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 px-6 pb-12 pt-6 text-center sm:gap-5 sm:px-12">
      <div
        className="
          relative w-fit before:absolute 
          before:right-32 before:top-[50%] before:h-[1px] before:w-10 before:bg-blue-700 after:absolute after:left-32
          after:top-[50%] after:h-[1px] after:w-10 after:bg-blue-700 sm:before:right-40 sm:after:left-40
          "
      >
        <span className="font-normal text-blue-700 sm:text-lg">
          {payBack.title}
        </span>
      </div>
      <p className="text-xs sm:text-sm">{payBack.description}</p>
    </div>
  );
};

export default PayBack;
