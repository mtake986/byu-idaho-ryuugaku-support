import React from "react";
import {
  SectionTitle,
  Message,
  Plan,
} from "./index";
import { supportPlans } from "@/constants/CONST";

const SupportPlans = () => {
  return (
    <div className="container mx-auto my-16 sm:my-32">
      {/* <Image
        src={students}
        className="block h-96 w-full object-cover object-center"
        alt="Picture of the author"
      /> */}
      <SectionTitle text="Support Plans" />
      <Message />
      <div className="grid grid-flow-row gap-5 lg:gap-10">
        {/* <BeforeAdmission />
        <AfterAdmission />
        <AfterArrival /> */}
        <Plan plan={supportPlans.beforeAdmission} />
        <Plan plan={supportPlans.afterAdmission} />
        <Plan plan={supportPlans.afterArrival} />
      </div>
    </div>
  );
};

export default SupportPlans;
