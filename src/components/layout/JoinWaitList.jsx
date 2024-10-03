import React, { useState } from "react";
import Input from "../common/Input";
import Dropdown from "../common/Dropdown";
import usa from "../../Image/usa.jpg";
import uae from "../../Image/uae.png";
import france from "../../Image/france.jpg";
import poland from "../../Image/poland.jpg";
import HandPhone from "../../Image/hand phone.png";

const JoinWaitList = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, [3000]);
  };
  return (
    <div id="waitlist" className="lg:px-[85px] py-6 px-5 md:y-12 md:px-12 lg:py-[140px] contactGradient flex flex-col lg:flex-row justify-between">
      <div className="lg:w-1/2 flex flex-col gap-5 lg:gap-10">
        <h3 className="text-[32px]  md:text-[80px] leading-[110%] md:-tracking-[2px]">
          Join the Fluid AI Waitlist Today!
        </h3>
        <div className="">
          {submitted && (
            <div
              className="bg-gradient-to-b from-[#262626]/30
          to-[#8C8C8C]/30 rounded-xl md:rounded-2xl p-2.5 md:p-4 text-sm md:text-[18px]"
            >
              Thank you! Your submission has been received!
            </div>
          )}
        </div>
        <form
          onSubmit={handleSubmit}
          className="text-base flex flex-col items-start gap-8 md:gap-10"
        >
          <Input type="text" title="Name" />
          <Input type="email" title="email" />
          <Dropdown
            data={[
              { name: "united arab emirates", img: uae },
              { name: "USA", img: usa },
              { name: "poland", img: poland },
              { name: "france", img: france },
            ]}
          />
          <button
            type="submit"
            className="cursor-pointer shadow-lg shadow-white/45 bg-white text-primary-black-100 flex justify-center items-center px-20 py-4 font-semibold rounded-full"
          >
            Join Waitlist
          </button>
        </form>
      </div>
      <div className="lg:w-1/2">
        <img src={HandPhone} alt="" className="mask1 " />
      </div>
    </div>
  );
};

export default JoinWaitList;
