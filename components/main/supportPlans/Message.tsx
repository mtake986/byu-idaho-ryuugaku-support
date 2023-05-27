import { Variants, motion } from "framer-motion";
import React from "react";

const Message = () => {

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
        delay: 0.2,
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };


  return (
    <div className="flex flex-col items-center justify-center pb-8 font-accent text-neutral-900">
      <h4 className=" mb-2 text-center text-2xl font-semibold sm:text-3xl">
        入学手続きだけで終わらせない！
      </h4>
      <div className="my-3 text-center text-xl sm:my-5 sm:text-2xl">
        <p>あなたの夢に近づく留学を</p>
        <div className="my-2 font-accent text-2xl font-bold italic text-blue-700 sm:text-4xl">
          <span>合格前</span>
          <span>・</span>
          <span>合格後</span>
          <span>・</span>
          <span>留学中</span>
        </div>
        <p>に細分化し</p>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.p
            variants={cardVariants}
            className="mt-3 font-accent text-4xl font-bold text-red-500 sm:text-5xl"
          >
            徹底サポート
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Message;
