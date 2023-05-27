import Image from "next/image";
import React from "react";
import ThreePoints from "./PointCards";
import BtmMessage from "./BtmMessage";

const Messages = () => {
  return (
    <div className="relative flex w-screen flex-col items-center justify-center pb-16 pt-32 sm:px-20 sm:py-32 ">
      <h2 className="mb-10 px-8 py-5 text-center font-accent text-3xl font-bold text-black sm:text-5xl sm:pt-20">
        <span className="">アメリカ留学の</span>
        <span className="mr-2 whitespace-nowrap text-5xl italic text-red-600 drop-shadow-2xl sm:text-7xl">
          常識
        </span>
        を覆す
      </h2>
      <div className="relative flex flex-col justify-center">
        <div className="text-center">
          <p className="text-5xl font-bold text-blue-500 sm:text-6xl">
            BYU - Idaho
          </p>
          <p className="mt-2 text-xl font-semibold sm:text-2xl">では</p>
        </div>
        <ThreePoints />
        <p className="mt-2 text-center text-xl font-semibold sm:text-2xl">
          が達成可能
        </p>
        <BtmMessage />
      </div>
      {/* <Img /> */}
    </div>
    // <div className="relative w-screen">
    //   <Image
    //     src={bgWhite}
    //     className="opacity-50 h-[700px] object-cover object-center"
    //     alt="paper background"
    //   />
    //   <OutdatedThoughts />
    //   <Carousel />
    // </div>
  );
};

export default Messages;
