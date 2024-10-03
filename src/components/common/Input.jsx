import React, { useState } from "react";

const Input = ({ title, type }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (inputValue === "") {
      setIsFocused(false);
    } else {
      setIsFocused(true);
    }
  };
  const handleInput = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="relative flex flex-col w-full">
      <label
        htmlFor={title}
        className={`${
          isFocused ? "-translate-y-6" : "-translate-y-1"
        } absolute transition-all duration-500 text-white/60 text-[14px] capitalize `}
      >
        {title}
      </label>
      <input
        type={type}
        id={title}
        value={inputValue}
        required
        className="bg-transparent focus:outline-none w-full"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleInput}
      />
      <div className="rounded-3xl p-px mt-1 bg-gradient-to-r from-white/30 to-transport"></div>
    </div>
  );
};

export default Input;
