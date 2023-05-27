import React from "react";
import Title from "./sectionTitle/SectionTitle";
import Inner from "./Inner";

const Worries = () => {
  return (
    <div className="flex flex-col py-10 md:py-20">
      <Title />
      <Inner />
    </div>
  );
};

export default Worries;
