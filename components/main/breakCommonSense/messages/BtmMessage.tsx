import React from "react";
import Img from "../Img";
import grad from "../../../../public/assets/images/grad.jpg";
import Image from "next/image";

const BtmMessage = () => {
  return (
    <div className=" mt-8 flex w-full flex-col gap-2 text-center sm:mt-12">
      <span className="font-accent text-2xl font-bold italic text-blue-700 sm:text-4xl">
        最安・最短・最高成績
        <span className="mx-2 my-2 text-lg font-semibold">で</span>
      </span>

      <h5 className="mt-3 font-accent text-4xl font-bold text-red-500 sm:text-5xl">
        アメリカ4年制大学
      </h5>
      {/* !卒業帽子画像を左上に */}
      <p className="my-3 font-accent text-6xl font-bold">卒業</p>
      <Image
        src={grad}
        alt="graduation"
        className="mt-10 w-screen max-w-3xl object-cover object-bottom h-[200px] sm:h-[350px]"
      />
    </div>
  );
};

export default BtmMessage;
