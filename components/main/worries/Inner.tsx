import React from "react";
import WorryList from "./WorryList";
import Image from "next/image";
import worringMan from "../../../public/assets/images/worringMan.jpg";
import { Variants, motion } from "framer-motion";

const Inner = () => {
  console.log(innerWidth)
  const cardVariants: Variants = {
    offscreen: {
      x: innerWidth <= 1024 ? 0 : -100,
      y: 0,
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
        type: "tween",
        bounce: 0.4,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="2xl:max-w-6xl mx-auto my-10 flex flex-col-reverse items-center justify-around gap-4 px-3 md:my-20 lg:flex-row lg:gap-14 ">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div variants={cardVariants}>
          <Image src={worringMan} alt="worring man" height={350} />
        </motion.div>
      </motion.div>
      <WorryList />
    </div>
  );
};

export default Inner;
