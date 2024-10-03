import React from "react";

const CarouselCard = () => {
  return (
    <div className="flex  items-center gap-7 w-full absolute  left-1/2 top-1/2 justify-center -translate-x-1/2 -translate-y-1/2">
      <div
        className="h-[250px] md:h-[400px] w-1/3 bg-gradient-to-r from-[#ffffff]/60
        to-[#999999]/40 rounded-[20px] p-5 flex flex-col justify-between items-start"
      >
        <p className="text-base md:text-2xl text-left">
          Fluid has Internet access, so you can get up-to-date information from
          it.
        </p>
        <h3 className="text-xl md:text-[36px] text-left">Time for work</h3>
      </div>
    </div>
  );
};

export default CarouselCard;
