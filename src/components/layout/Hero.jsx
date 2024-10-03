import React, { useEffect, useState } from "react";
import Logo from "../../Image/logo.svg";
import Scroll from "../../Image/scroll.svg";
import Insurance from "../common/cards/Insurance";
import RestaurantCard from "../common/cards/RestaurantCard";
import ReservationCard from "../common/cards/Reservation";
import FlightCard from "../common/cards/FlightCard";
import { motion } from "framer-motion";
import UpcomingCard from "../common/cards/UpcomingCard";
const Hero = () => {
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
  const [shrunk, setShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !shrunk) {
        setShrunk(true);
      } else if (window.scrollY === 0 && shrunk) {
        setShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [shrunk]);
  return (
    <div className="flex overflow-hidden  transition-all duration-300 flex-col pt-40 md:pt-20 justify-between items-center gap-[150px]">
      <div
        className={`z-50 transition-all duration-1000 ${
          shrunk ? "scale-[.5] md:scale-[.3]" : "transition-all duration-300"
        }`}
      >
        <img
          src={Logo}
          alt=""
          className="scale-100 w-[240px] h-[51px] lg:w-[705px] lg:h-[150px] "
        />
      </div>
      <div
        className={`hidden transition-all duration-1000 md:flex flex-col items-center gap-1 ${
          shrunk ? "scale-0 opacity-0" : "transition-all duration-300"
        }`}
      >
        <img src={Scroll} alt="" className="" />
        <p className="">Scroll Down</p>
      </div>

      <div
        className={`absolute top-1/2 gradient w-full h-[1100px] transition-all duration-500  ${
          shrunk ? "z-40 -translate-y-[200px]" : "transition-all duration-300"
        }`}
        alt="back"
      />
      <div
        className={`w-screen h-screen transition-all duration-1000  flex flex-col items-center gap-1 ${
          shrunk
            ? "z-50 -translate-y-[150px] md:-translate-y-[380px] opacity-100"
            : "z-30 -translate-y-[150px] transition-all duration-300 opacity-0"
        }`}
      >
        <div className="z-[100] flex flex-col gap-6 justify-center items-center">
          <h1 className="text-[56px] lg:text-[80px] w-3/4 tracking-[2px] leading-[110%] text-center">
            Unlock Seamless Efficiency
          </h1>
          <button className="cursor-pointer shadow-lg shadow-white/45 bg-white text-primary-black-100 flex justify-center items-center px-10 md:px-20 py-3 md:py-6 font-semibold rounded-full">
            Join Waitlist
          </button>
        </div>
        <motion.div
          transition={{ staggerChildren: 0.05 }}
          initial={"offScreen"}
          whileInView={"onScreen"}
          viewport={{ once: false, amount: 0.2 }}
        >
          <FlightCard />

          <motion.div
            variants={rightCardAnimate}
            className="fixed -top-[50px] -right-[50px] md:right-[20px]"
          >
            <UpcomingCard />
          </motion.div>
          <motion.div
            variants={leftCardAnimate}
            className=" fixed top-[100px] -left-[70px]"
          >
            <UpcomingCard />
          </motion.div>
          <motion.div
            variants={rightCardAnimate}
            className=" fixed -top-[190px] -right-[70px] md:right-[150px]"
          >
            <Insurance />
          </motion.div>
          <motion.div
            variants={leftCardAnimate}
            className="fixed -top-[20px] -left-[200px]"
          >
            <Insurance />
          </motion.div>
          <motion.div
            variants={rightCardAnimate}
            className="bg-gradient-to-b  fixed top-[150px] right-[10px] from-[#262626]/30 to-[#8C8C8C]/30 text-base md:text-xl flex justify-center items-center px-4 py-2 rounded-full"
          >
            Book a flight
          </motion.div>
          <motion.div
            variants={rightCardAnimate}
            className="bg-gradient-to-b  fixed top-[210px] right-[50px] from-[#262626]/30 to-[#8C8C8C]/30 text-base md:text-xlflex justify-center items-center px-4 py-2  rounded-full"
          >
            Trip Ideas
          </motion.div>
          <motion.div
            variants={leftCardAnimate}
            className="bg-gradient-to-b  fixed top-[300px] left-[200px] from-[#262626]/30 to-[#8C8C8C]/30 text-base md:text-xlflex justify-center items-center px-4 py-2 rounded-full"
          >
            Cafe Nearby
          </motion.div>
          <RestaurantCard />
          <ReservationCard />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
