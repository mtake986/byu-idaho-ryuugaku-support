import React from "react";

type Props = {
  text: string;
};

const SectionTitle = ({ text }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center py-3 text-neutral-900 sm:py-6">
      <h4 className="text-center font-title text-5xl sm:text-7xl">{text}</h4>
    </div>
  );
};

export default SectionTitle;
