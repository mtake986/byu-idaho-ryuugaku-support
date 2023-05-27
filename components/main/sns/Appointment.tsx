import Image from "next/image";
import React from "react";
import googleMeetIcon from "../../../public/assets/images/googleMeetIcon.png";
import Link from "next/link";

const Appointment = () => {
  return (
    <Link
      href="https://timerex.net/s/tosa9629_975a/8b6857a8"
      className="flex cursor-pointer justify-center gap-3 rounded-lg border border-blue-700 px-3  py-2 duration-200 hover:opacity-70 mx-auto"
      target="_blank"
    >
      <Image alt="Google Meet Icon" src={googleMeetIcon} className="w-6" />
      <div className="text-md sm:text-xl font-semibold">1時間無料面談に申し込む</div>
    </Link>
  );
};

export default Appointment;
