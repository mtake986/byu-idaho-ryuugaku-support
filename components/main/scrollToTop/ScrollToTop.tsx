"use client";
import React, { useEffect, useState } from "react";
import { IoArrowUp } from "react-icons/io5";

const ScrollToTop = () => {
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

  return (
    <>
      {showButton && (
        <div className="fixed bottom-8 right-5 z-50 duration-300 hover:opacity-50 sm:right-8">
          {/* <button>Top</button> */}
          <IoArrowUp
            className="h-6 w-6 cursor-pointer rounded-full bg-blue-700 p-1 font-bold text-white drop-shadow-2xl duration-300 hover:bg-blue-700 sm:h-10 sm:w-10 sm:p-2"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
