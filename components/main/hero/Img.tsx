import React from 'react'
import coupleQuestioned from "../../../public/assets/images/coupleQuestioned.svg";
import Image from 'next/image';

const Img = () => {
  return (
      <Image
        src={coupleQuestioned}
        className="w-20 h-20 sm:w-40 sm:h-40 absolute sm:-bottom-24 left-10 sm:-left-5"
        alt="Man worrying about studying abroad"
      />
  );
}

export default Img;