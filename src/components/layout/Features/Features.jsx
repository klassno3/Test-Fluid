import React from "react";
import phoneOne from "../../../Image/phone 1.png";
import phoneTwo from "../../../Image/phone 2.png";
import phoneThree from "../../../Image/phone 3.png";
import phoneFour from "../../../Image/phone 4.png";
import "./features.css";

const Features = () => {
  return (
    <div
      id="features"
      className="h-full flex flex-col gap-10 md:gap-[130px] md:py-10 py-32"
    >
      <div className="px-8 flex flex-col gap-4 md:gap-7 justify-center items-center text-center ">
        <p className="text-white/60 leading-[130%] text-base md:text-[18px]">
          Our Features
        </p>
        <h2 className="text-[32px] md:text-5xl lg:text-[80px] tracking-[-1px] md:w-3/4 leading-[100%]">
          Fluid AI was born out of a desire to simplify and streamline modern
          life
        </h2>
      </div>
      <div className="flex flex-col gap-20 md:gap-0 ">
        <div className="bgimg-1 px-8 md:pl-[50px] lg:pl-[80px] flex flex-col gap-10 md:gap-0  items-center md:items-start ">
          <div className="w-1/2 mx-auto md:hidden">
            <img src={phoneOne} alt="" className="" />
          </div>
          <div className="md:w-1/3">
            <div className="flex flex-col items-center md:items-start gap-5 md:gap-[280px]">
              <div className="flex flex-col items-center md:items-start gap-2">
                <h4 className="text-2xl md:text-[32px] tracking-[-1px]">
                  Connected
                </h4>
                <p className="text-white/60 leading-[130%] text-base md:text-[18px] text-center md:text-left">
                  Integrates with your messaging apps, calendars, and many other
                  services to seamlessly organize your life.
                </p>
              </div>
              <p className="text-white/60 leading-[130%] text-[18px]">1/4</p>
            </div>
          </div>
        </div>
        <div className="bgimg-2 px-8 md:pr-[50px] lg:pr-[80px] flex flex-col gap-10 md:gap-0  items-center md:items-end ">
          <div className="w-1/2 mx-auto md:hidden">
            <img src={phoneTwo} alt="" className="" />
          </div>
          <div className="md:w-1/3">
            <div className="flex flex-col items-center md:items-start gap-5 md:gap-[280px]">
              <div className="flex flex-col items-center md:items-start gap-2">
                <h4 className="text-2xl md:text-[32px] tracking-[-1px]">
                  Multiplayer
                </h4>
                <p className="text-white/60 leading-[130%] text-base md:text-[18px] text-center md:text-left">
                  Designed for collaboration, allowing you and your friends to
                  plan together in real-time, directly and without leaving your
                  chats.
                </p>
              </div>
              <p className="text-white/60 leading-[130%] text-[18px]">2/4</p>
            </div>
          </div>
        </div>
        <div className="bgimg-3 px-8 md:pl-[50px] lg:pl-[80px] flex flex-col gap-10 md:gap-0  items-center md:items-start ">
          <div className="w-1/2 mx-auto md:hidden">
            <img src={phoneThree} alt="" className="" />
          </div>
          <div className="md:w-1/3">
            <div className="flex flex-col items-center md:items-start gap-5 md:gap-[280px]">
              <div className="flex flex-col items-center md:items-start gap-2">
                <h4 className="text-2xl md:text-[32px] tracking-[-1px]">
                  Action AI:
                </h4>
                <p className="text-white/60 leading-[130%] text-base md:text-[18px] text-center md:text-left">
                  Not only organizes— Fluid makes bookings, reservations & much
                  more, handling the details so you don’t have to.
                </p>
              </div>
              <p className="text-white/60 leading-[130%] text-[18px]">3/4</p>
            </div>
          </div>
        </div>
        <div className="bgimg-4 px-8 md:pr-[50px] lg:pr-[80px] flex flex-col gap-10 md:gap-0  items-center md:items-end ">
          <div className="w-1/2 mx-auto md:hidden">
            <img src={phoneFour} alt="" className="" />
          </div>
          <div className="md:w-1/3">
            <div className="flex flex-col items-center md:items-start gap-5 md:gap-[280px]">
              <div className="flex flex-col items-center md:items-start gap-2">
                <h4 className="text-2xl md:text-[32px] tracking-[-1px]">
                  Proactive:
                </h4>
                <p className="text-white/60 leading-[130%] text-base md:text-[18px] text-center md:text-left">
                  Understands your intent and preferences, and takes care of
                  what you need, often before you even ask.
                </p>
              </div>
              <p className="text-white/60 leading-[130%] text-[18px]">4/4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
