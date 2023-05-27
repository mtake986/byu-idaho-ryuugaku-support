import Image from "next/image";
import React from "react";
import SnsIcon from "./SnsIcon";
import { mySnsInfo } from "@/constants/CONST";

const SnsIcons = () => {
  return (
    <div className="flex flex-col gap-4">
      {mySnsInfo.map((snsInfo) => (
        <SnsIcon key={snsInfo.name} snsInfo={snsInfo} />
      ))}
    </div>
  );
};

export default SnsIcons;
