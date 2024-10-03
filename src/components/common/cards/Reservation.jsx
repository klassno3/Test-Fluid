import React from "react";
import { motion } from "framer-motion";
import Timer from "../../../Image/timer.svg";
const ReservationCard = () => {
  const rightCardAnimate = {
    offScreen: {
      x: 100,
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
      variants={rightCardAnimate}
      className="bgReservation fixed  p-1  top-[270px] -right-10 md:right-[150px] flex flex-col justify-end h-52 md:h-[289px] md:p-[10px] border-[1px] border-white/10  rounded-3xl"
    >
      <div className="flex flex-col gap-.5">
        <p className="text-[9pxp md:text-[18px] text-white/60">Reservations</p>
        <p className="text-[9px] md:text-2xl">Restaurant Le Bous</p>
        <div className="flex gap-1 text-[18px] items-center text-white/60">
          <img src={Timer} alt="" className="" />
          <p className="text-[7px] md:text-base">4 Oct 20:00</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ReservationCard;
