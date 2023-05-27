import Image from "next/image";
import React from "react";
import byui from "../../../public/assets/images/byui.jpg";

const Recommend = () => {
  return (
    <div className="relative">
      <Image
        src={byui}
        alt="recommend"
        className="h-[350px] object-cover object-center "
      />
      <div className="absolute top-0 h-[350px] w-screen bg-gradient-to-tr from-blue-700 to-cyan-400 opacity-50"></div>
      <div className="absolute top-1/2 -translate-y-1/2 sm:mt-10 w-screen px-5 pt-3 sm:pt-10 text-center sm:px-20 ">
        <h2 className="mb-5 text-3xl font-bold text-white sm:text-4xl">
          そんなあなたに、BYUアイダホがおすすめ！
        </h2>
        <h4 className="text-xl font-bold text-white sm:text-3xl">
          BYUアイダホは、これまでのアメリカ留学の固定観念を破壊する非常識な留学先です
        </h4>
      </div>
    </div>
  );
};

export default Recommend;
