import React from "react";
import { threePoints } from "../../../../constants/CONST";
import Point from "./PointCard";
import BtmMessage from "./BtmMessage";

const PointCards = () => {
  return (
    <div className="px-12 my-8 flex flex-col justify-center items-center gap-8 sm:flex-row">
      {threePoints.map((point, i) => (
        <Point key={i} point={point} i = {i}/>
      ))}
    </div>
  );
};

export default PointCards;
