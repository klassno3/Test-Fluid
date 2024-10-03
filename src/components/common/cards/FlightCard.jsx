import React from "react";
import { motion } from "framer-motion";
import Plane from "../../../Image/plane.svg";
const FlightCard = () => {
  const leftCardAnimate = {
    offScreen: {
      x: -100,
      opacity: 0,
    },
    onScreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 2,
      },
    },
  };
  return (
    <motion.div
      variants={leftCardAnimate}
      className="hidden md:flex fixed top-[380px] left-[65px] p-5 md:p-[22px] border-[1px]
      border-white/10 rounded-3xl bg-gradient-to-b from-[#262626]/30
      to-[#8C8C8C]/30"
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col  gap-7">
            <div className="flex gap-3 justify-between text-white/70">
              <p className="text-sm">Dubai</p>
              <p className="text-sm">Emirates Airlines</p>
              <p className="text-sm">Paris</p>
            </div>
            <div className="flex gap-3 justify-between">
              <div className="flex flex-col items-start md:gap-1">
                <p className="md:text-3xl">DXB</p>
                <div className=" text-white/60">
                  <p className="text-xs">Oct 4</p>
                  <p className="text-xs">8:20</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img src={Plane} alt="Plane Icon" className="w-[195px]" />
                <p className="text-xs md:text-sm text-white/60">Non-Stop</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <p className="md:text-3xl">CDG</p>
                <div className=" text-white/70">
                  <p className="text-xs">4 Oct,</p>
                  <p className="text-xs">13:30</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl  p-px bg-gradient-to-r from-gray-200 to-transport"></div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-0.5">
            <p className="text-sm  text-white/70">Flight</p>
            <p className="text-xs md:text-sm">EK073</p>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-sm  text-white/70">Class</p>
            <p className="text-xs md:text-sm">Guest</p>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-sm text-white/70">Aircraft</p>
            <p className="text-xs md:text-sm">A380</p>
          </div>
          <p className="text-xs text-white/70">7 hours 10 mins</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FlightCard;
