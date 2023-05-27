"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import GoogleMeetBtn from "./Appointment";

const categories = [
  { slug: "why", title: "なぜBYUアイダホを勧めるのか" },
  { slug: "support-plan", title: "サポート内容・料金" },
  { slug: "sns", title: "SNS" },
  { slug: "questions", title: "よくある質問" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="sticky top-0 z-50 mx-auto w-full bg-blue-700 py-3 px-5 sm:p-5 drop-shadow-md">
      <div className="container mx-auto flex max-w-5xl items-center justify-between">
        <Link href="/">
          <span className="text-xl cursor-pointer font-accent text-white sm:text-3xl ">
            BYUアイダホ留学サポート
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
