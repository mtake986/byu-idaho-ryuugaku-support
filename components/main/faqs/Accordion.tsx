"use client";

import { Variants, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type Props = {
  faq: {
    id: number;
    question: string;
    answer: string;
    open: boolean;
    reference?: {
      title: string;
      link: string;
    }[];
  };
};

const Accordion = ({ faq }: Props) => {
  const [show, setShow] = useState(faq.open);

  const cardVariants: Variants = {
    offscreen: {
      y: 50,
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
        // staggerChildren: 1,
        delay: 0.5,
        type: "spring",
        bounce: 0.5,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={`cursor-pointer px-2 py-4 text-sm duration-300 sm:p-5 sm:text-xl ${
        !show && "hover:opacity-50"
      }`}
      onClick={() => setShow(!show)}
    >
      <motion.div
        variants={cardVariants}
        className="flex items-center justify-between gap-3"
      >
        <div className="flex items-center justify-between gap-3">
          <span className="font-bold text-blue-700">Q.</span>
          <p className="font-bold">{faq.question}</p>
        </div>
        {show ? (
          <span>
            <IoIosArrowUp />
          </span>
        ) : (
          <span className="">
            <IoIosArrowDown />
          </span>
        )}{" "}
      </motion.div>
      <div
        className={`mx-auto mt-2 flex items-start justify-start gap-3 sm:mt-5  ${
          show ? "block" : "hidden"
        }`}
      >
        <span className="font-bold text-blue-700">A.</span>
        <div>
          <p>{faq.answer}</p>
          {faq?.reference?.map((ref, i) => (
            <Link key={i} href={ref.link} target="_blank">
              <span
                className={`cursor-pointer text-xs text-sky-500 underline after:content-['_↗'] hover:opacity-80 sm:text-sm ${
                  i !== 0 ? "mt-1" : ""
                }`}
              >
                {ref.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Accordion;
