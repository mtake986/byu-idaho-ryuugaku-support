"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import googleMeetIcon from "../../public/assets/images/googleMeetIcon.png";
import Link from "next/link";
import { motion } from "framer-motion";

const Appointment = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScrollButtonVisiblity = () => {
      window.pageYOffset > 100 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", handleScrollButtonVisiblity);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisiblity);
    };
  }, []);

  const bounceTransition = {
    y: {
      duration: 0.4,
      yoyo: Infinity,
      ease: "easeOut",
    },
    backgroundColor: {
      duration: 0,
      yoyo: Infinity,
      ease: "easeOut",
      repeatDelay: 0.8,
    },
  };

  return (
    <>
      {showButton && (
        <Link
          href="https://timerex.net/s/tosa9629_975a/8b6857a8"
          className="fixed bottom-8 left-5 z-50 flex cursor-pointer gap-1 rounded-lg border border-blue-700 bg-white px-3 py-2 duration-200 hover:opacity-70 "
          target="_blank"
        >
          <Image
            alt="Google Meet Icon"
            src={googleMeetIcon}
            className="w-3 sm:w-6"
          />
          <div className="text-xs sm:text-lg">無料面談</div>
        </Link>
      )}
    </>
  );
};

export default Appointment;
