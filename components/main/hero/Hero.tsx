
import React from "react";
import Image from "next/image";
import bgWhite from "../../../public/assets/images/bgWhite.jpg";
import OutdatedThoughts from "./OutdatedThoughts";
import Carousel from "../carousel/Carousel";

const Hero = () => {
  return (
    <div className="relative w-screen">
      <Image
        src={bgWhite}
        className="h-[500px] object-cover object-center opacity-50 sm:h-[900px]"
        alt="paper background"
      />
      <OutdatedThoughts />
      <Carousel />
    </div>
  );
};

export default Hero;
