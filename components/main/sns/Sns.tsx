import React from "react";
import SectionTitle from "../../utils/SectionTitle";
import Subtitle from "./Subtitle";
import YoutubeEmbed from "./YouTube";
import SnsIcons from "./SnsIcons";
import Appointment from "./Appointment";

const Sns = () => {
  return (
    <div className="container mx-auto my-10 px-3 sm:my-14 sm:max-w-2xl sm:p-5">
      <SectionTitle text="SNS" />
      <Subtitle />
      <div className="mb-6 flex flex-col items-center justify-between gap-8 sm:mb-10 sm:flex-row">
        <YoutubeEmbed />
        <SnsIcons />
      </div>
      <Appointment />
    </div>
  );
};

export default Sns;
