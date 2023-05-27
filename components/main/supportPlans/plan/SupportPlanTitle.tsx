import { supportPlans } from "@/constants/CONST";
import { type } from "os";
import React from "react";

interface Props {
  title: string;
  subtitle: string;
}
const SupportPlanTitle = ({ title, subtitle }: Props) => {
  return (
    <div>
      <h4 className="mb-2 text-center text-3xl font-bold">{title}</h4>
      <h5 className="font-semibold">{subtitle}</h5>
    </div>
  )
};

export default SupportPlanTitle;
