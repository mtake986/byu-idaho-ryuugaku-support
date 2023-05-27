import React from "react";
import SectionTitle from "../../utils/SectionTitle";
import CopyWritingText from "./CopyWritingText";
import Cards from "./Cards";

const ReasonWhy = () => {
  return (
    <div className="container mx-auto my-10 max-w-5xl px-3 sm:my-32 sm:px-5">
      <SectionTitle text="REASON WHY" />
      <CopyWritingText />
      <Cards />
    </div>
  );
};

export default ReasonWhy;
