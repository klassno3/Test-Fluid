import React from "react";
import Accordion from "./Accordion";
import { motion } from "framer-motion";
const FAQ = () => {
  const items = [
    {
      id: "1wecn",
      label: "What apps does Fluid AI integrate with?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ea asperiores quo quasi nesciunt provident accusantium reiciendis excepturi numquam molestias necessitatibus temporibus dolores, et eveniet sequi impedit assumenda ex maiores.",
    },
    {
      id: "2elkv",
      label: "How does Fluid AI take action for me?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ea asperiores quo quasi nesciunt provident accusantium reiciendis excepturi numquam molestias necessitatibus temporibus dolores, et eveniet sequi impedit assumenda ex maiores.",
    },

    {
      id: "3dkvm",
      label: "Is my data secure?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ea asperiores quo quasi nesciunt provident accusantium reiciendis excepturi numquam molestias necessitatibus temporibus dolores, et eveniet sequi impedit assumenda ex maiores.",
    },
    {
      id: "4dfmv",
      label: "Can Fluid AI plan events and trips?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ea asperiores quo quasi nesciunt provident accusantium reiciendis excepturi numquam molestias necessitatibus temporibus dolores, et eveniet sequi impedit assumenda ex maiores.",
    },
    {
      id: "5dvvr",
      label: "How personalized are the suggestions from Fluid AI?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ea asperiores quo quasi nesciunt provident accusantium reiciendis excepturi numquam molestias necessitatibus temporibus dolores, et eveniet sequi impedit assumenda ex maiores.",
    },
    {
      id: "6dvfv",
      label: "How does Fluid AI handle group plans?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ea asperiores quo quasi nesciunt provident accusantium reiciendis excepturi numquam molestias necessitatibus temporibus dolores, et eveniet sequi impedit assumenda ex maiores.",
    },
    {
      id: "7evrt",
      label: "How do I join the waitlist for Fluid AI?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ea asperiores quo quasi nesciunt provident accusantium reiciendis excepturi numquam molestias necessitatibus temporibus dolores, et eveniet sequi impedit assumenda ex maiores.",
    },
  ];

  return (
    <motion.div
      transition={{ staggerChildren: 0.1 }}
      initial={"offScreen"}
      whileInView={"onScreen"}
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col lg:flex-row md:gap-12 gap-6 lg:gap-[100px] px-5   py-20 md:px-[60px]"
    >
      <div className="lg:w-[40%] items-start flex flex-col  gap-4 md:gap-4">
        <h3 className="text-[32px]  md:text-[56px] leading-[110%] md:-tracking-[2px]">
          What can curiosity, wonder, and awe do for you?
        </h3>
        <p className="text-base md:text-[18px] leading-[130%]   text-white/60">
          Research shows that experiencing curiosity and awe can immensely
          benefit our mental, physical, and professional health. Here’s a brief
          overview of what curiosity and awe can do for you.{" "}
        </p>
      </div>
      <Accordion items={items} />
    </motion.div>
  );
};

export default FAQ;
