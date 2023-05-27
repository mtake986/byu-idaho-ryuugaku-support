import { Variants, motion } from "framer-motion";
import React from "react";

type Props = {
  plan: {
    id: number;
    title: string;
    description: string;
    note?: String[];
    optionPrice?: number;
  };
  i: number;
};
const Card = ({ plan, i }: Props) => {
  // console.log({ plan });
  const cardVariants: Variants = {
    offscreen: {
      y: 0,
      opacity: 0,
      scale: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.1,
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className="relative cursor-pointer rounded-xl bg-white p-5 shadow-md duration-300 hover:drop-shadow-lg sm:p-8"
    >
      <motion.div variants={cardVariants} className="relative">
        <div className="mb-1 flex items-center justify-center">
          <h3 className="mb-2 text-xl font-bold text-blue-700">{plan.title}</h3>
        </div>
        <p className="text-left text-sm">{plan.description}</p>
        <div className="mt-3 flex flex-col text-left">
          {plan.note?.map((ref, i) => (
            <span key={i} className={`text-[10px] text-neutral-500 sm:text-xs`}>
              ※ {ref}
            </span>
          ))}
        </div>
      </motion.div>
      {plan?.optionPrice && (
        <motion.div
          variants={cardVariants}
          className="absolute -right-2 top-0 origin-center rotate-12 rounded border border-slate-300 px-1 py-0 sm:-right-3 sm:-top-2 sm:px-2 sm:py-0.5"
        >
          {/* <span className="text-[10px]">個別</span> */}
          <span className="mx-0.5 text-xs font-bold sm:text-sm">
            {plan.optionPrice}
          </span>
          <span className="text-[8px]">円</span>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Card;
