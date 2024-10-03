import { useState } from "react";
import Plus from "../../Image/plus.png";
import Minus from "../../Image/minus.svg";
import { motion } from "framer-motion";
function Accordion({ items }) {
  //scroll animation

  const BottomCardAnimate = {
    offScreen: {
      y: 100,
      opacity: 0,
    },
    onScreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 2,
      },
    },
  };
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span className="text-2xl">
        {isExpanded ? (
          <img src={Minus} alt="plus-icon" />
        ) : (
          <img src={Plus} alt="plus-icon" />
        )}
      </span>
    );

    return (
      <div key={item.id}>
        <motion.div
          viewport={{ once: false, amount: 0.2 }}
          variants={BottomCardAnimate}
          transition={{ delay: 5 }}
          className={`text-[18px] ${
            isExpanded
              ? "bg-accentPurple-dark text-white shadow-md shadow-accentPurple-light"
              : " bg-primaryBlack-medium  text-white"
          } flex flex-col gap-3   cursor-pointer`}
          onClick={() => handleClick(index)}
        >
          <div className="flex justify-between items-center ">
            {item.label}
            {icon}
          </div>
          <div className=" border-white/40 border-b"></div>
        </motion.div>
        {isExpanded && (
          <div className="py-5 font-light text-sm md:text-base text-white/90">
            {item.content}
          </div>
        )}
      </div>
    );
  });

  return (
    <motion.div className="lg:w-[60%] flex flex-col gap-8">
      {renderedItems}
    </motion.div>
  );
}

export default Accordion;
