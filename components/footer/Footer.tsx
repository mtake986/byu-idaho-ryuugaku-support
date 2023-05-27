"use client";
import React, { useState } from "react";
import Attributes from "../Attributes/Attributes";

const Footer = () => {
  const [thisYear, setThisYear] = useState(new Date().getFullYear());

  return (
    <footer className="p-2 mt-12 sm:mt-40 bg-slate-100 text-center">
      <span className="text-xs sm:text-base">
        &copy; Copyright {thisYear} Masahiro Takechi
      </span>
      <Attributes />
    </footer>
  );
};

export default Footer;
