import React from "react";
import Dots from "../../../Image/dots.svg";
import { motion } from "framer-motion";

const RestaurantCard = () => {
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
      className="bgRestaurant fixed  -top-[300px] -left-10 md:left-[100px] flex flex-col justify-between md:h-[278px] h-40 p-[10px] border-[1px] border-white/10  rounded-3xl"
    >
      <div className="flex justify-between items-center">
        <div className="px-3 py-1 bg-white/10 flex items-center justify-center rounded-full">
          Restaurant
        </div>
        <img src={Dots} alt="" className="w-[26px] h-[26px]" />
      </div>
      <div className="flex flex-col gap-.5">
        <p className="ext-[9px] md:text-[21px]">Clap Dubai</p>
        <div className="flex gap-1 text-[7px] md:text-sm items-center text-white/60">
          <p className="">4.4</p>
          <span className="w-[2px] h-[2px] bg-white/60 rounded-full" />
          <p className="">$$$$</p>
          <span className="w-[2px] h-[2px] bg-white/60 rounded-full" />
          <p className="">Japanese</p>
        </div>
      </div>
    </motion.div>
  );
};

export default RestaurantCard;
