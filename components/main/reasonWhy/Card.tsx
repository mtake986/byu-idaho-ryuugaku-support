"use client";

import trustedSupport from "../../../public/assets/images/trustedSupport.jpg";
import priceSetting from "../../../public/assets/images/priceSetting.jpg";
import plentySupport from "../../../public/assets/images/plentySupport.jpg";
import byuiOnly from "../../../public/assets/images/byuiOnly.jpg";
import Image from "next/image";

type Props = {
  reason: {
    id: number;
    title: string;
    description: string;
  };
};
const Card = ({ reason }: Props) => {

  return (
    <div className=" cursor-pointer rounded-xl bg-white p-5 shadow-md duration-300 hover:drop-shadow-lg sm:p-8">
      <div className="mb-1 flex items-center justify-center ">
        <h3 className="mb-2 sm:mb-3 text-center text-2xl font-bold text-blue-700 sm:text-3xl">
          {reason.title}
        </h3>
      </div>
      <div className="flex flex-col items-center gap-4 sm:flex sm:flex-row sm:items-center">
        <Image
          src={
            reason.title === "サポートの充実さ"
              ? plentySupport
              : reason.title === "適切な値段設定"
              ? priceSetting
              : reason.title === "BYUアイダホ特化型" 
              ? byuiOnly
              : trustedSupport
          }
          alt="trusted support"
          className="sm:w-[40%] sm:max-w-xs"
        />
        <p className="text-base sm:text-lg">{reason.description}</p>
      </div>
    </div>
  );
};

export default Card;
