import { supportPlans } from "@/constants/CONST";
import React from "react";

interface Props {
  price: number;
}
const Price = ({price} : Props) => {
  return (
    <div className="absolute right-0 top-0 m-1 rounded-md border bg-white px-1.5 py-0.5 text-blue-700 sm:m-3 sm:px-3 sm:py-1">
      {/* <span className="text-xs">税抜</span> */}
      <span className="mx-0.5 text-sm font-semibold sm:text-base">
        {price}
      </span>
      <span className="text-[10px] font-semibold sm:text-xs">円</span>
    </div>
  );
};

export default Price;
