import React from "react";
import PersonOne from "../../../Image/person 1.jpg";
import PersonTwo from "../../../Image/person 2.jpg";
import PersonThree from "../../../Image/person 3.webp";
import Timer from "../../../Image/timer.svg";

const UpcomingCard = () => {
  return (
    <div className=" p-5 md:p-[18px] border-[1px] border-white/10 rounded-3xl bg-gradient-to-b from-[#262626]/30 to-[#8C8C8C]/30">
      <div className="flex flex-col gap-4">
        <div className="flex items-end justify-end ">
          <img
            src={PersonOne}
            alt="profile"
            className="w-7 h-7 md:w-10 md:h-10  rounded-full object-cover -mr-3"
          />
          <img
            src={PersonTwo}
            alt="profile"
            className="w-7 h-7 md:w-10 md:h-10 rounded-full object-cover -mr-3"
          />
          <img
            src={PersonThree}
            alt="profile"
            className="w-7 h-7 md:w-10 md:h-10  rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-sm md:text-lg text-secondary-white-100/60">
            Upcoming event
          </p>
          <p className="text-base md:ext-2xl">Kite Beach</p>
          <div className="flex gap-1.5 text-sm md:text-base text-secondary-white-100/60">
            <img src={Timer} alt="" className="" />
            <span>10:00 - 14:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingCard;
