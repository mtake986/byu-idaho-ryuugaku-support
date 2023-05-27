import React from "react";
import SectionTitle from "../../utils/SectionTitle";
import Cards from "./Cards";
import ConfirmMessage from "./ConfirmMessage";

const Reasons = () => {
  return (
    <div className="container mx-auto my-16 sm:my-32">
      <SectionTitle text="WHY BYU-Idaho?" />
      <Cards />
      {/* <ConfirmMessage /> */}
    </div>
  );
};

export default Reasons;
