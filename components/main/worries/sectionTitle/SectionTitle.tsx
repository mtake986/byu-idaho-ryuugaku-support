import Image from "next/image";
import React from "react";
import bgSky from "../../../../public/assets/images/bgSky.jpg";
import InnerText from "./InnerText";

const SectionTitle = () => {
  return (
    <div className="relative">
      <Image
        alt="background sky"
        src={bgSky}
        className="w-screen object-cover object-bottom h-48 "
      />
      <InnerText />
    </div>
  );
};

export default SectionTitle;
