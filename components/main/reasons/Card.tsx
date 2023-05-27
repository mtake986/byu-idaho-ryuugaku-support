"use client";
import Link from "next/link";
import React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Variants, motion } from "framer-motion";

type Props = {
  reason: {
    id: number;
    title: string;
    description: string;
    reference?: {
      title: string;
      link: string;
    }[];
  };
  i: number;
};
const Card = ({ reason, i }: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const cardVariants: Variants = {
    offscreen: {
      y: 300,
      opacity: 0,
      scale: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.1 * i,
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div variants={cardVariants}>
          <button
            className="w-full cursor-pointer rounded-xl bg-white p-4 text-xl italic text-blue-700 shadow-md duration-300 hover:bg-white sm:p-8 sm:text-2xl"
            onClick={handleClick}
          >
            {reason.title}
          </button>
        </motion.div>
      </motion.div>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className="max-w-md cursor-pointer bg-white p-4 duration-300 hover:drop-shadow-lg sm:p-8">
          <div className="mb-4 flex items-center justify-center">
            <h3 className="text-xl font-bold sm:text-2xl">{reason.title}</h3>
          </div>
          <p className="text-sm sm:text-lg">{reason.description}</p>
          <div className="mt-2 flex flex-col">
            {reason.reference?.map((ref, i) => (
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
      </Popover>
    </>
  );
};

export default Card;
