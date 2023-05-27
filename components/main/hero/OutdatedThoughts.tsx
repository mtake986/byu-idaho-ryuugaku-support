import React from "react";
import Img from "./Img";
import { Variants, motion } from "framer-motion";

const OutdatedThoughts = () => {
  const cardVariants: Variants = {
    offscreen: {
      y: 20,
      rotate: 0,
      opacity: 0,
      scale: 1,
    },
    onscreen: {
      y: 0,
      rotate: 0,
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.5,
        type: "tween",
        duration: 0.8,
      },
    },
  };
  const cardVariantsDelay: Variants = {
    offscreen: {
      y: 20,
      rotate: 0,
      opacity: 0,
      scale: 1,
    },
    onscreen: {
      y: 0,
      rotate: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.5,
        type: "tween",
        duration: 0.8,
      },
    },
  };

  return (
    //     <div className="border bg-red-300 p-20">
    //   <motion.ol variants={container} initial="hidden" animate="show">
    //     <motion.li variants={item}>こんてんつ</motion.li>
    //     <motion.li variants={item}>こんてんつ</motion.li>
    //   </motion.ol>
    // </div>

    <div className="absolute -top-20 flex h-[500px] w-screen items-center justify-center sm:-top-40 sm:h-[900px] sm:p-5 lg:-top-8">
      <div className="relative">
        <p className="p-3 text-center font-accent text-lg font-semibold sm:text-2xl lg:text-4xl">
          もしかして、あなたは未だに
        </p>
        <div className="my-4 flex flex-col sm:my-8">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.h5
              variants={cardVariants}
              className="mb-1 text-center font-accentMaru text-xl font-bold sm:text-4xl lg:text-6xl"
            >
              「アメリカ留学は
              <span className="underline decoration-amber-500 decoration-double">
                費用が莫大
              </span>
              …」
            </motion.h5>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.h5
              variants={cardVariantsDelay}
              className="mt-2 text-center font-accentMaru text-xl font-bold sm:mt-3 sm:text-4xl md:mt-4 lg:text-6xl"
            >
              「入学前から
              <span className="underline decoration-cyan-500 decoration-double">
                高い英語力
              </span>
              が必要…」
            </motion.h5>
          </motion.div>
        </div>
        <p className="p-3 text-center font-accent text-lg font-semibold sm:text-2xl lg:text-4xl">
          と思っていませんか？
        </p>
        <Img />
      </div>
    </div>
  );
};

export default OutdatedThoughts;
