import { Variants, motion } from "framer-motion";
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

interface Props {
  worry: {
    id: number;
    worry: string;
  };
}

const Worry = ({ worry }: Props) => {
  const cardVariants: Variants = {
    offscreen: {
      x: window.innerWidth <= 1023 ? 0 : 100,
      y: window.innerWidth <= 1023 ? 20 : 0,
      rotate: 0,
      opacity: 0,
      scale: 1,
    },
    onscreen: {
      x: 0,
      y: 0,
      rotate: 0,
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 1,
        delay: 0.5,
        type: "tween",
        bounce: 0.4,
        duration: .3,
      },
    },
  };

  return (
    <motion.li
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div className="mb-3 flex items-center gap-3 rounded-xl border border-cyan-400 px-6 py-2 sm:py-3" variants={cardVariants}>
        <AiOutlineCheck className="font-xl text-blue-700" />
        <p className="text-sm sm:text-lg">{worry.worry}</p>
      </motion.div>
    </motion.li>
  );
};

export default Worry;
