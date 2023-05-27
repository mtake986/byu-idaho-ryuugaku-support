import { Variants, motion } from "framer-motion";
import React from "react";

interface IPoint {
  point: {
    id: number;
    tMsg: string;
    mainMsg: (string | number)[];
    bMsg: string;
  };
  i: number;
}

const PointCard = ({ point, i }: IPoint) => {
  const cardVariants: Variants = {
    offscreen: {
      y: 300,
      rotate: 150,
      opacity: 0,
      scale: 0,
    },
    onscreen: {
      y: 0,
      rotate: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: .5 * i,
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
    >
      <motion.div variants={cardVariants}>
        <div className="flex w-full flex-col items-center rounded-3xl bg-blue-700 bg-gradient-to-bl from-cyan-400 p-5 italic text-white ring ring-cyan-400 ring-offset-2 sm:w-36">
          <span className="font-semibold">{point.tMsg}</span>
          <div className="mb-1 text-xl">
            <span className="ml-2 mr-1 text-4xl font-semibold">
              {point.mainMsg[0]}
            </span>
            <span>{point.mainMsg[1]}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PointCard;
