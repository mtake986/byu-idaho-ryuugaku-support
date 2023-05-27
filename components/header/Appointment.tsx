import Image from "next/image";
import React from "react";
import googleMeetIcon from "../../public/assets/images/googleMeetIcon.png";
import Link from "next/link";

const Appointment = () => {
  return (
    <Link
      href="https://timerex.net/s/tosa9629_975a/8b6857a8"
      className="flex cursor-pointer gap-3 rounded-lg border border-blue-700 px-3  py-2 duration-200 hover:opacity-70"
      target="_blank"
    >
      <Image alt="Google Meet Icon" src={googleMeetIcon} className="w-3 sm:w-6" />
      <div>無料面談</div>
    </Link>
  );
};

export default Appointment;
