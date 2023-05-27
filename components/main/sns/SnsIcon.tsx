import { Variants, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  snsInfo: {
    name: string;
    icon: any;
    link: string;
    description: string;
  };
}

const SnsIcon = ({ snsInfo }: Props) => {
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
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={cardVariants} >

      <Link
        target="_blank"
        href={snsInfo.link}
        className="flex cursor-pointer items-center rounded-lg bg-slate-50 px-5 py-2 duration-300 hover:opacity-50"
      >
        <Image
          src={snsInfo.icon}
          alt={snsInfo.name}
          className="mr-2 w-5 sm:w-6"
          />
        <p className="text-sm sm:text-base">{snsInfo.description}</p>
      </Link>
          </motion.div>
    </motion.div>
  );
};

export default SnsIcon;
