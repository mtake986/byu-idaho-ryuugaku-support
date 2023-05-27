"use client";
import * as React from "react";
import SectionTitle from "../../utils/SectionTitle";
import Accordions from "./Accordions";

const Faqs = () => {
  return (
    <div className="mx-auto my-10 bg-cyan-50 px-3 py-10 sm:my-20 sm:px-5 sm:pb-20 sm:pt-10">
      <SectionTitle text="FAQs" />
      <Accordions />
    </div>
  );
};

export default Faqs;
