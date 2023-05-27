import React from "react";
import Accordion from "./Accordion";
import { faqs } from "../../../constants/CONST";



const Accordions = () => {
  return (
    <div className="max-w-3xl container mx-auto py-5 px-2 sm:p-10 rounded-3xl bg-white divide-y divide-solid">
      {faqs.map((faq, index) => (
        <Accordion faq={faq} key={index} />
      ))}
    </div>
  );
};

export default Accordions;
