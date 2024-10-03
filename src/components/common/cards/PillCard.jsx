import React from "react";

const PillCard = ({ children }) => {
  return (
    <div className="bg-gradient-to-b from-[#262626]/30 to-[#8C8C8C]/30 text-xl flex justify-center items-center px-4 py-2 w-[158px] rounded-full">
      {children}
    </div>
  );
};

export default PillCard;
