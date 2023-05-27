import React from "react";
import coupleSolved from "../../../public/assets/images/coupleSolved.svg";
import Image from "next/image";

const Img = () => {
  return (
    <Image
      src={coupleSolved}
      className="w-24 h-24 sm:w-48 sm:h-48 absolute bottom-20 left-[65%]"
      alt="Man worrying about studying abroad"
    />
  );
};

export default Img;
