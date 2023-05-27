import React from "react";
import Cards from "./Cards";

interface Props {
  contents: {
    id: number;
    title: string;
    description: string;
    note?: string[];
    optionPrice?: number;
  }[];
}
const Contents = ({contents}: Props) => {
  return (
    <div className="px-4 py-6 sm:px-12 sm:py-8 text-center flex flex-col justify-center items-center">
      <div
        className="
          mb-3 sm:mb-5
          w-fit relative 
          before:absolute before:right-12 before:top-[50%] before:w-12 before:h-[1px] before:bg-blue-700
          after:absolute after:left-12 after:top-[50%] after:w-12 after:h-[1px] after:bg-blue-700
          "
      >
        <span className="text-lg font-normal text-blue-700">内容</span>
      </div>
      <Cards contents={contents} />
    </div>
  );
};

export default Contents;
