import React from "react";
import byui from "../../../public/assets/images/byui.jpg";
import Image from "next/image";
const Carousel = () => {
  return (
    <div className="">
      <Image
        src={byui}
        className="z-10 w-1/2 max-w-96 sm:w-96 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 object-cover object-center rounded-3xl"
        alt="Man worrying about studying abroad"
      />
    </div>
  );
};

export default Carousel;
